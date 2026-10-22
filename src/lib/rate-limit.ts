/**
 * Basic fixed-window, in-memory rate limiter.
 *
 * On serverless platforms each instance keeps its own window, so this is a
 * best-effort guard against bursts rather than a global quota. For stricter
 * limits, back it with a shared store such as Vercel KV / Upstash Redis.
 */
type Window = { count: number; resetAt: number };

const buckets = new Map<string, Window>();
const MAX_KEYS = 5_000;

export function rateLimit(key: string, limit: number, windowMs: number) {
  const now = Date.now();
  const current = buckets.get(key);

  if (!current || current.resetAt <= now) {
    if (buckets.size >= MAX_KEYS) {
      for (const [k, w] of buckets) if (w.resetAt <= now) buckets.delete(k);
      if (buckets.size >= MAX_KEYS) buckets.clear();
    }
    buckets.set(key, { count: 1, resetAt: now + windowMs });
    return { ok: true, retryAfter: 0 };
  }

  current.count += 1;
  if (current.count > limit) {
    return { ok: false, retryAfter: Math.ceil((current.resetAt - now) / 1000) };
  }
  return { ok: true, retryAfter: 0 };
}
