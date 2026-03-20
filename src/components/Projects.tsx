// Projects section
import ProjectCard, { type Project } from "./ProjectCard"

const projects: Project[] = [
    {
        IMG: "/image.png",
        title: "Club Check-in WebApp",
        description: "Lead a design team that created a multi-tenant attendance and check-in platform built for UF's ACM chapter, serving multiple student organizations. Features org-specific branding, membership logic, and a real-time check-in system built with Next.js, TypeScript, and Supabase.",
        TechUsed: ["Typescript","React","Next.js","Supabase"],
        link: "https://github.com/uf-acm-design-team/ACM-checkin",
        status: "In progress"
    },

    {
        IMG: "/Linux_file_system-1024x464.png",
        title: "Linux File System Daemon",
        description: "This project implements a custom file system in C++ that parses and modifies WAD files by rebuilding their structure into an in-memory directory tree. It supports operations like navigating directories, reading file contents, and creating files and folders by directly manipulating binary data. A FUSE-based daemon allows the WAD file to be mounted and used like a standard file system.",
        TechUsed: ["C++, FUSE, POSIX"],
        link: "https://github.com/Warnocke/LinuxWADFileSystem",
        status: "Completed Dec 2025"
    },

    {
        IMG: "/mars_project.jpg",
        title: "Martian Pathfinder Executable",
        description: "Developed an interactive Mars terrain pathfinding application that processes millions of data points to compute optimal routes while avoiding steep terrain using algorithms like Dijkstra’s and A*. Users can input custom coordinates, visualize paths on a 2D map, and render the results on an interactive 3D model of the planet, showcasing large-scale data processing and real-time visualization.",
        TechUsed: ["Python, Numpy, SKLearn, OpenGL"],
        link: "https://github.com/Aydenalv6282/Martian-Pathfinders",
        status: "Completed Aug 2025"
    },
    // Combine homeworks 4 & 6 from linear into a TSNE CNNs and CIFAR10 project, and homework 5 as SVD exploration, and prolly minesweeper
    // {
    //     IMG: "",
    //     title: "",
    //     description: "",
    //     TechUsed: [""],
    //     link: "",
    //     status: ""
    // },
]


export default function Projects() {
    return(
        <div className="pt-32 bg-[#252525] overflow-hidden">
            <div className="justify-items-center">
                <h1 className="text-white text-5xl font-bold mb-6 underline decoration-thickness-8 underline-offset-8">Projects</h1>
            </div>
            <div className="grid grid-cols-3 gap-10 px-24 py-10">
                {projects.map((project) => (
                    <ProjectCard key={project.title} {...project} />
                ))}
            </div>
        </div>
    )
}