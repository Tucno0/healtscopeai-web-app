import { Metadata } from "next";
import { cookies } from "next/headers";

import { SiteHeader } from "@/components/dashboard/navbar/site-header";
import { AppSidebar } from "@/components/dashboard/sidenav/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { ActiveThemeProvider } from "@/components/theme/active-theme";

export const metadata: Metadata = {
  title: {
    default: "Dashboard",
    template: "%s | Dashboard",
  },
  description: "Dashboard de SIGAEST",
};

interface Props {
  children: React.ReactNode;
}

const DashboardLayout = async ({ children }: Props) => {
  // Persisting the sidebar state in the cookie.
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get("sidebar_state")?.value === "true";

  return (
    <ActiveThemeProvider>
      <SidebarProvider
        defaultOpen={defaultOpen}
        style={
          {
            "--sidebar-width": "calc(var(--spacing) * 72)",
            "--header-height": "calc(var(--spacing) * 12)",
          } as React.CSSProperties
        }
      >
        <AppSidebar variant="inset" />

        <SidebarInset>
          <SiteHeader />
          <div className="flex flex-1 flex-col">{children}</div>
        </SidebarInset>
      </SidebarProvider>
    </ActiveThemeProvider>
  );
};

export default DashboardLayout;
