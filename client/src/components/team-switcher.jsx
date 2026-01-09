"use client"

import * as React from "react"
import { ChevronsUpDown, Plus } from "lucide-react"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarTrigger,
    useSidebar,
} from "@/components/ui/sidebar"

export function TeamSwitcher({
    teams
}) {
    const { isMobile, state } = useSidebar()
    const [activeTeam, setActiveTeam] = React.useState(teams[0])

    if (!activeTeam) {
        return null
    }

    return (
        <SidebarMenu>
            <SidebarMenuItem>
                {state === "expanded" ? (
                    <SidebarMenuButton
                        size="lg"
                        asChild
                        className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground">
                        <div>
                            <div
                                className="text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                                <img src="/logo-dark-bnw.png" alt="" />
                            </div>
                            <div className="grid flex-1 text-left text-sm leading-tight">
                                <span className="truncate font-medium">{activeTeam.name}</span>
                                <span className="truncate text-xs">{activeTeam.plan}</span>
                            </div>
                            <SidebarTrigger />
                        </div>
                    </SidebarMenuButton>
                ) : (
                    <SidebarTrigger />
                )}
            </SidebarMenuItem>
        </SidebarMenu>
    );
}
