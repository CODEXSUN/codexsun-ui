import type { ReactNode } from "react";

import { Building2, Crown, Headphones } from "lucide-react";

import { cn } from "../lib/utils";

type AuthLayoutProps = {
  afterCard?: ReactNode;
  children: ReactNode;
  description?: string;
  surface?: "admin" | "sa" | "tenant";
  title: string;
  brandName?: string;
  logoSrc?: string;
  logoDarkSrc?: string;
};

export function AuthLayout({
  afterCard,
  children,
  description,
  surface,
  title,
  brandName = "Application",
  logoSrc,
  logoDarkSrc
}: AuthLayoutProps) {
  const resolvedSurface = surface ?? surfaceFromTitle(title);
  const isTenant = resolvedSurface === "tenant";
  const nextDescription =
    description ??
    (isTenant
      ? "Access your workspace with your registered credentials."
      : "Use your admin email and password for this desk.");

  return (
    <main className="auth-page">
      <section className="auth-shell" aria-label={title}>
        <div className="auth-brand">
          <SurfaceMark
            surface={resolvedSurface}
            {...(logoSrc ? { logoSrc } : {})}
            {...(logoDarkSrc ? { logoDarkSrc } : {})}
          />
          <strong>{brandName}</strong>
        </div>
        <div className="auth-content">
          <div className={cn("auth-card-frame", `auth-card-frame-${resolvedSurface}`)}>
            <div className="auth-card">
              <header className="auth-card-header">
                <h1>Welcome</h1>
                <p>{nextDescription}</p>
              </header>
              {children}
            </div>
          </div>
          {afterCard}
        </div>
      </section>
    </main>
  );
}

function surfaceFromTitle(title: string): "admin" | "sa" | "tenant" {
  const normalized = title.toLowerCase();
  if (normalized.includes("super")) return "sa";
  if (normalized.includes("admin")) return "admin";
  return "tenant";
}

function SurfaceMark({
  surface,
  logoSrc,
  logoDarkSrc
}: {
  surface: "admin" | "sa" | "tenant";
  logoSrc?: string;
  logoDarkSrc?: string;
}) {
  const Icon = surface === "sa" ? Crown : surface === "admin" ? Headphones : Building2;
  return (
    <span className="auth-surface-mark" data-surface={surface}>
      {logoSrc ? (
        <img
          className={logoDarkSrc ? "auth-logo-image dark:hidden" : "auth-logo-image"}
          src={logoSrc}
          alt=""
          aria-hidden="true"
        />
      ) : null}
      {logoDarkSrc ? (
        <img
          className="auth-logo-image hidden dark:block"
          src={logoDarkSrc}
          alt=""
          aria-hidden="true"
        />
      ) : null}
      <span className="auth-surface-badge">
        <Icon size={13} strokeWidth={2.25} />
      </span>
    </span>
  );
}
