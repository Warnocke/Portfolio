// Project card component

export interface Project {
    IMG: string;
    title: string;
    description: string;
    TechUsed: string[];
    link: string;
    status: string;
}

export default function ProjectCard(project: Project) {
    return(
        <div className="flex flex-col rounded-2xl overflow-hidden bg-[#1a1a1a] shadow-lg hover:scale-105 transition-transform duration-300">
            {/* Img*/}
            <div className="h-40 overflow-hidden">
                <img src={project.IMG} className="w-full h-full object-cover" />
            </div>
            {/* Project */}
            <div className="flex flex-col gap-3 p-5">
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
                <p className="text-sm leading-relaxed text-gray-400">{project.description}</p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2">
                    {project.TechUsed.map((tech) => (
                        <span key={tech} className="text-xs px-2 py-1 rounded-full bg-[#2a2a2a] text-gray-300">
                            {tech}
                        </span>
                    ))}
                </div>
                <div className="flex justify-between items-center mt-2 text-sm">
                    <span className="text-gray-500">{project.status}</span>
                    <a href={project.link} target="_blank" className="text-blue-400 hover:underline">GitHub →</a>
                </div>
            </div>
        </div>
    )
}