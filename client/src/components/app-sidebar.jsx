"use client"

import {
    BookOpen,
    Bot,
    Frame,
    GalleryVerticalEnd,
    Map,
    PieChart,
    Settings2,
    SquareTerminal
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
    user: {
        name: "Krish Makadiya",
        email: "krishmakadiya2005@gmail.com",
        avatar: "/avatars/krishmakadiya2005.jpg",
    },
    teams: [
        {
            name: "SoHired",
            logo: GalleryVerticalEnd,
            plan: "Enterprise",
        }
    ],
    navMain: [
        {
            title: "Playground",
            url: "#",
            icon: SquareTerminal,
            isActive: true,
            items: [
                {
                    title: "History",
                    url: "#",
                },
                {
                    title: "Starred",
                    url: "#",
                },
                {
                    title: "Settings",
                    url: "#",
                },
            ],
        },
        {
            title: "Models",
            url: "#",
            icon: Bot,
            items: [
                {
                    title: "Genesis",
                    url: "#",
                },
                {
                    title: "Explorer",
                    url: "#",
                },
                {
                    title: "Quantum",
                    url: "#",
                },
            ],
        },
        {
            title: "Career",
            url: "#",
            icon: BookOpen,
            items: [
                {
                    title: "Saved Jobs",
                    url: "/dashboard/saved-jobs",
                },
                {
                    title: "Course Suggestions",
                    url: "/dashboard/course-suggestions",
                },
                {
                    title: "History",
                    url: "/dashboard/history",
                },
            ],
        },
        {
            title: "Settings",
            url: "#",
            icon: Settings2,
            items: [
                {
                    title: "My Account",
                    url: "/dashboard/my-account",
                },
                {
                    title: "My Profile",
                    url: "/dashboard/my-profile",
                },
                {
                    title: "Job Preferences",
                    url: "/dashboard/job-preferences",
                },
            ],
        },
    ],
    projects: [
        {
            name: "Design Engineering",
            url: "#",
            icon: Frame,
        },
        {
            name: "Sales & Marketing",
            url: "#",
            icon: PieChart,
        },
        {
            name: "Travel",
            url: "#",
            icon: Map,
        },
    ],
}

export function AppSidebar({
    ...props
}) {
    return (
        <Sidebar collapsible="icon" {...props}>
            <SidebarHeader>
                <TeamSwitcher teams={data.teams} />
            </SidebarHeader>
            <SidebarContent>
                <NavMain items={data.navMain} />
            </SidebarContent>
            <SidebarFooter>
                <NavUser user={data.user} />
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    );
}
