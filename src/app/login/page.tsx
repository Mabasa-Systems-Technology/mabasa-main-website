import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { LoginForm } from "@/components/LoginForm";
import loginHero from "../../../public/images/login-hero.webp";
import wordmark from "../../../public/brand/wordmark-light.png";

export const metadata: Metadata = {
  title: "Client login",
  description: "Sign in to the Blackroid client portal.",
  alternates: { canonical: "/login" },
  robots: { index: false, follow: true },
};

export default function LoginPage() {
  // When the portal is live, set NEXT_PUBLIC_CLIENT_PORTAL_URL (for example https://portal.blackroid.com)
  // and this page hands visitors straight over to it.
  const portal = process.env.NEXT_PUBLIC_CLIENT_PORTAL_URL;
  if (portal) redirect(portal);

  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="relative isolate min-h-[16rem] overflow-hidden bg-navy-950 lg:min-h-svh">
        <Image
          src={loginHero}
          alt=""
          fill
          priority
          sizes="(min-width: 1024px) 50vw, 100vw"
          placeholder="blur"
          className="object-cover object-[50%_28%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/45 to-navy-950/35" />
        <div className="absolute inset-x-0 top-0 p-6 lg:p-10">
          <Link href="/" aria-label="Blackroid home" className="inline-block">
            <Image src={wordmark} alt="Blackroid" priority className="h-6 w-auto lg:h-7" />
          </Link>
        </div>
        <p className="absolute inset-x-0 bottom-0 p-6 text-4xl font-light text-white lg:p-10 lg:text-6xl">
          Client login.
        </p>
      </div>

      <div className="flex flex-col justify-center bg-white px-6 py-14 sm:px-12 lg:px-20">
        <div className="mx-auto w-full max-w-md">
          <p className="mb-8 text-lg text-ink-soft">For Blackroid clients.</p>
          <LoginForm />
          <Link
            href="/"
            className="mt-12 inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-ink"
          >
            <ArrowLeft aria-hidden="true" strokeWidth={1.5} className="size-4" />
            Back to the website
          </Link>
        </div>
      </div>
    </div>
  );
}
