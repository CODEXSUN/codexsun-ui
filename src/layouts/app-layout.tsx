import type { CSSProperties, ReactNode } from "react";

import {
  AppSidebar,
  type SidebarBrand,
  type SidebarUser,
  type SidebarUserMenuItem
} from "../blocks/menu/sidemenu/app-sidebar";
import { TopMenu, type TopMenuWorkspaceItem } from "../blocks/menu/sidemenu/top-menu";
import type { SidemenuItem } from "../blocks/menu/sidemenu/sub/sidemenu-section";
import { SidebarInset, SidebarProvider } from "../components/sidebar";

type AppLayoutProps = {
  brand?: SidebarBrand;
  children: ReactNode;
  headerTitle?: ReactNode;
  homeHref?: string;
  logoutHref?: string;
  menuItems?: SidemenuItem[];
  onLogout?: () => void | Promise<void>;
  subtitle?: ReactNode;
  title?: ReactNode;
  user?: SidebarUser;
  userMenuItems?: SidebarUserMenuItem[];
  versionLabel?: string;
  workspaceItems?: TopMenuWorkspaceItem[];
  showPageTitle?: boolean;
};

export const defaultWorkspaceItems: TopMenuWorkspaceItem[] = [];

export const defaultAppMenuItems: SidemenuItem[] = [];

export const defaultSidebarBrand: SidebarBrand = {
  href: "/",
  subtitle: "workspace",
  title: "Application"
};

export const defaultSidebarUser: SidebarUser = {
  email: "",
  fallback: "U",
  name: "User"
};

export const defaultUserMenuItems: SidebarUserMenuItem[] = [];

export function AppLayout({
  brand = defaultSidebarBrand,
  children,
  headerTitle = "Documents",
  homeHref = "/workspace",
  logoutHref = "/login",
  menuItems = defaultAppMenuItems,
  onLogout,
  subtitle,
  title,
  user = defaultSidebarUser,
  userMenuItems = defaultUserMenuItems,
  versionLabel = "v 1.0.1",
  workspaceItems = defaultWorkspaceItems,
  showPageTitle = true
}: AppLayoutProps) {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "19rem"
        } as CSSProperties
      }
    >
      <AppSidebar
        brand={brand}
        items={menuItems}
        user={user}
        userMenuItems={userMenuItems}
        variant="inset"
        versionLabel={versionLabel}
      />
      <SidebarInset>
        <TopMenu
          homeHref={homeHref}
          logoutHref={logoutHref}
          {...(onLogout ? { onLogout } : {})}
          pageTitle={String(headerTitle)}
          showPageTitle={showPageTitle}
          workspaceItems={workspaceItems}
        />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            {title || subtitle ? (
              <div className="border-b bg-background px-4 py-5 lg:px-6">
                {title ? (
                  <h2 className="m-0 text-2xl font-semibold leading-tight">{title}</h2>
                ) : null}
                {subtitle ? <p className="mt-1 text-muted-foreground">{subtitle}</p> : null}
              </div>
            ) : null}
            {children}
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
