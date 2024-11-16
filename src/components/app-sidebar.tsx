// "use client"

// import * as React from "react"
// import {
//   AudioWaveform,
//   BookOpen,
//   Bot,
//   Command,
//   Frame,
//   GalleryVerticalEnd,
//   Map,
//   PieChart,
//   Settings2,
//   SquareTerminal,
// } from "lucide-react"

// import { NavMain } from "@/components/nav-main"
// import { NavProjects } from "@/components/nav-projects"
// import { NavUser } from "@/components/nav-user"
// import { TeamSwitcher } from "@/components/team-switcher"
// import Link from "next/link"
// import {
//   Sidebar,
//   SidebarContent,
//   SidebarFooter,
//   SidebarHeader,
//   SidebarRail,
// } from "@/components/ui/sidebar"

// // This is sample data.
// const data = {
//   user: {
//     name: "Bushra Ali",
//     email: "muhammadali32078@gmail.com",
//     avatar: "/avatars/shadcn.jpg",
//   },
//   teams: [
//     {
//       name: "Bushra Ali",
//       logo: GalleryVerticalEnd,
//       plan: "The Web Developer",
//     },
//   ],
//   navMain: [
//     {
//       title: "HOME",
//       url: "/",
//       icon: SquareTerminal,
//       isActive: true,
//     },
//     {
//       title: "ABOUT",
//       url: "/about",
//       icon: Bot,
//     },
//     {
//       title: "HIRE ME!",
//       url: "/cv",
//       icon: BookOpen,
//     },
//     {
//       title: "CONTACT",
//       url: "/contact",
//       icon: Settings2,
//     },
//   ],
//   projects: [
//     {
//       name: "Project : 1",
//       url: "/project 1",
//       icon: Frame,
//     },
//     {
//       name: "Project : 2",
//       url: "/project 2",
//       icon: PieChart,
//     },
//     {
//       name: "Project : 3",
//       url: "/project 3",
//       icon: Map,
//     },
//   ],
// }

// export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
//   return (
//     <Sidebar collapsible="icon" {...props}>
//       <SidebarHeader>
//         <TeamSwitcher teams={data.teams} />
//       </SidebarHeader>
//       <SidebarContent
           
//              <Link key={item.url} href={item.url} className="flex items-center space-x-3 p-2 text-sm rounded-lg text-gray-800 hover:bg-gray-200 transition-colors duration-200">
//                <item.icon className="w-3 h-3 md:w-2 md:h-2 lg:w-3 lg:h-3" />
//                <span className="text-sm md:text-sidebar-foreground lg:text-sidebar-foreground">{item.title}</span>
//              </Link>
        
//         <NavMain items={data.navMain} />
//         <NavProjects projects={data.projects} />
//       </SidebarContent>
//       <SidebarFooter>
//         <NavUser user={data.user} />
//       </SidebarFooter>
//       <SidebarRail />
//     </Sidebar>
//   )
// }


'use client';

import * as React from "react";
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import Link from "next/link";  // Importing Next.js Link component
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

// This is sample data.
const data = {
  user: {
    name: "Bushra Ali",
    email: "muhammadali32078@gmail.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Bushra Ali",
      logo: GalleryVerticalEnd,
      plan: "The Web Developer",
    },
  ],
  navMain: [
    {
      title: "HOME",
      url: "/",
      icon: SquareTerminal,
      isActive: true,
    },
    {
      title: "ABOUT",
      url: "/about",
      icon: Bot,
    },
    {
      title: "CONTACT",
      url: "/contact",
      icon: Settings2,
    },
  ],
  projects: [
    {
      name: "Projects",
      url: "/project 1",
      icon: Frame,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent className="space-y-4 p-4 lg:p-6">
        {/* Main Navigation Links */}
        <div className="space-y-4">
          {data.navMain.map((item) => (
            <Link key={item.url} href={item.url} className="flex items-center space-x-3 p-2 text-sm rounded-lg text-gray-800 hover:bg-gray-200 transition-colors duration-200">
              <item.icon className="w-3 h-3 md:w-2 md:h-2 lg:w-3 lg:h-3" />
              <span className="text-wrap md:text-wrap lg:text-wrap">{item.title}</span>
            </Link>
          ))}
        </div>

        {/* Projects Links */}
        <div className="space-y-4 mt-6">
          {data.projects.map((project) => (
            <Link key={project.url} href={project.url} className="flex items-center space-x-3 p-2 text-sm rounded-lg text-gray-800 hover:bg-gray-200 transition-colors duration-200">
              <project.icon className="w-3 h-3 md:w-2 md:h-2 lg:w-3 lg:h-3" />
              <span className="text-sm md:text-sm lg:text-sm">{project.name}</span>
            </Link>
          ))}
        </div>
      </SidebarContent>
     

      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}



