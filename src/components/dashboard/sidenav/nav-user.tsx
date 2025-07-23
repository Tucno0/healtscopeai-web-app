'use client';

// import { useSession } from "next-auth/react";

import { Bell, CreditCard, LogOut, MoreVertical, User } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
// import { logout } from "@/modules/auth/server/actions/logout";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '@/components/ui/sidebar';

export function NavUser() {
  const { isMobile } = useSidebar();
  // const { data: session } = useSession();
  // const user = session?.user;

  // Ensure user is always defined to prevent "user is not defined" error
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    image: 'https://via.placeholder.com/150',
  };

  // // Add safety check to ensure user is always defined
  // if (!user) {
  //   return null; // or return a loading state
  // }

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <Avatar className="h-8 w-8 rounded-lg grayscale">
                <AvatarImage src={user?.image || ''} alt={user?.name || ''} />
                <AvatarFallback className="rounded-lg">
                  {user?.name?.charAt(0) || 'U'}
                </AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">
                  {user?.name || 'Usuario'}
                </span>
                <span className="text-muted-foreground truncate text-xs">
                  {user?.email || 'usuario@example.com'}
                </span>
              </div>
              <MoreVertical className="ml-auto size-4" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
            side={isMobile ? 'bottom' : 'right'}
            align="end"
            sideOffset={4}
          >
            <DropdownMenuLabel className="p-0 font-normal">
              <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                <Avatar className="h-8 w-8 rounded-lg">
                  <AvatarImage src={user?.image || ''} alt={user?.name || ''} />
                  <AvatarFallback className="rounded-lg">
                    {user?.name?.charAt(0) || 'U'}
                  </AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">
                    {user?.name || 'Usuario'}
                  </span>
                  <span className="text-muted-foreground truncate text-xs">
                    {user?.email || 'usuario@example.com'}
                  </span>
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <User />
                Cuenta
              </DropdownMenuItem>
              <DropdownMenuItem>
                <CreditCard />
                Facturación
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Bell />
                Notificaciones
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => console.log('Logout')}>
              <LogOut />
              Cerrar sesión
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
