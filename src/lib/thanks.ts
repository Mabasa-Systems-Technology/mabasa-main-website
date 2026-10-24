// Hands the submitter's first name to the thank-you page without putting it in the address bar.
const KEY = "blackroid-thanks";

export function rememberSubmitter(fullName: string) {
  try {
    sessionStorage.setItem(KEY, fullName.trim().split(/\s+/)[0] ?? "");
  } catch {
    // Storage blocked: the thank-you page simply stays generic.
  }
}

export function readSubmitter() {
  try {
    return sessionStorage.getItem(KEY) ?? "";
  } catch {
    return "";
  }
}
