import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { LoginForm } from "@/components/LoginForm";

export const metadata: Metadata = {
  title: "Client login",
  description: "Sign in to the Blackroid client portal.",
  alternates: { canonical: "/login" },
  robots: { index: false, follow: true },
};

export default function LoginPage() {
  return (
    <>
      <PageHero title="Client login." compact />
      <section className="bg-white py-16 lg:py-24">
        <div className="container-site">
          <p className="mb-10 text-center text-lg text-ink-soft">For Blackroid clients.</p>
          <LoginForm />
        </div>
      </section>
    </>
  );
}
