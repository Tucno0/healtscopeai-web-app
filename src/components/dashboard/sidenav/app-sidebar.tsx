"use client";

import * as React from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  Calendar,
  Camera,
  Database,
  File,
  FileAudio2Icon,
  FileText,
  HelpCircle,
  LayoutDashboard,
  MessageSquare,
  Search,
  Settings,
  Syringe,
  UserCheck,
} from "lucide-react";
import { NavMain } from "./nav-main";
// import { NavDocuments } from "./nav-documents";
import { NavSecondary } from "./nav-secondary";
import { NavUser } from "./nav-user";
// import Image from "next/image";

const data = {
  navMain: [
    {
      title: "Panel",
      url: "#",
      icon: LayoutDashboard,
    },
    {
      title: "Pacientes",
      url: "#",
      icon: UserCheck,
    },
    {
      title: "Citas",
      url: "#",
      icon: Calendar,
    },
    {
      title: "Mensajes",
      url: "#",
      icon: MessageSquare,
    },
    {
      title: "Ajustes",
      url: "#",
      icon: Settings,
    },
  ],
  navClouds: [
    {
      title: "Captura",
      icon: Camera,
      isActive: true,
      url: "#",
      items: [
        {
          title: "Propuestas activas",
          url: "#",
        },
        {
          title: "Archivadas",
          url: "#",
        },
      ],
    },
    {
      title: "Propuesta",
      icon: File,
      url: "#",
      items: [
        {
          title: "Propuestas activas",
          url: "#",
        },
        {
          title: "Archivadas",
          url: "#",
        },
      ],
    },
    {
      title: "Indicaciones",
      icon: FileAudio2Icon,
      url: "#",
      items: [
        {
          title: "Propuestas activas",
          url: "#",
        },
        {
          title: "Archivadas",
          url: "#",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Configuración",
      url: "#",
      icon: Settings,
    },
    {
      title: "Obtener ayuda",
      url: "#",
      icon: HelpCircle,
    },
    {
      title: "Buscar",
      url: "#",
      icon: Search,
    },
  ],
  documents: [
    {
      name: "Biblioteca de datos",
      url: "#",
      icon: Database,
    },
    {
      name: "Informes",
      url: "#",
      icon: FileText,
    },
    {
      name: "Asistente de texto",
      url: "#",
      icon: FileText,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <div className="flex items-center">
                {/* <Image
                  src="/images/logo.png"
                  alt="Logo de Que Mariscal Cáceres"
                  className="size-5 animate-red-glow"
                  width={32}
                  height={32}
                /> */}
                <Syringe className="size-5 animate-red-glow" />

                <div className="flex flex-col">
                  <span className="text-2xl mariscal-text-gradient leading-tight font-poppins">
                    healthscopeai
                  </span>
                </div>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <NavMain items={data.navMain} />
        {/* <NavDocuments items={data.documents} /> */}
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>

      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  );
}
