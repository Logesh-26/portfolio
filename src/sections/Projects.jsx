import { ArrowUpRight, Github } from "lucide-react";
import { useState } from "react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const projects =  [
    {
        title: "BuzzHub Real-time Chat Application",
        description: "Built a real-time chat application with user authentication, instant messaging, Used MERN stack technologies with Socket.io for live communication and Zustand for efficient state management.",
        image: "/Project-images/BuzzHub-image.png",
        tags: ["React", "NodeJS", "ExpressJS", "MongoDB", "Zustand", "JWT"],
        link: "#",
        github: "https://github.com/Logesh-26/Buzzhub",
    },
    {
        title: "CRUD Application",
        description: "Developed a full-stack CRUD application using React and Node.js with secure authentication and a responsive UI. The project follows a client–server architecture to efficiently manage and persist user data.",
        image: "/Project-images/crud-image-1.png",
        tags: ["React", "NodeJS", "ExpressJS", "MongoDB", "REST API"],
        link: "#",
        github: "https://github.com/Logesh-26/crud-app",
    },
    {
        title: "Clima Check Weather Application",
        description: "Clima Check is a responsive weather app that fetches real-time data from a weather API. Users can search any city to view current temperature, humidity, wind speed, and weather conditions.",
        image: "/Project-images/Climacheck-image.png",
        tags: ["React", "TailwindCSS", "JavaScript", "WeatherAPI"],
        link: "https://clima-check-weather-app.vercel.app/",
        github: "https://github.com/Logesh-26/ClimaCheckWeatherApp",
    },
    {
        title: "Encore Music Application",
        description: "Encore is a music player web app for browsing albums and playing songs.It features real-time playback controls and a clean, responsive user interface. 🎵",
        image: "/Project-images/Encoremusic-image.png",
        tags: ["React", "TailwindCSS", "JavaScript", "ReactContextAPI"],
        link: "https://encore-music-app.vercel.app/",
        github: "https://github.com/Logesh-26/EncoreMusicApp",
    },
    {
        title: "ToDo-List App",
        description: "To-Do list application that allows users to add, complete, and delete tasks with real-time updates. It uses React Hooks for state management.",
        image: "/Project-images/todolist-image.png",
        tags: ["React", "CSS"],
        link: "https://to-do-list-one-alpha-25.vercel.app/",
        github:"https://github.com/Logesh-26/ToDoList",
    },
    {
        title: "Redux-App",
        description: "A React application that demonstrates centralized state management using Redux. The app allows users to add and remove users, with page navigation handled through React Router.",
        image: "/Project-images/redux-image.png",
        tags:["React","Redux","React-Router"],
        link: "https://redux-app-kohl.vercel.app/",
        github:"https://github.com/Logesh-26/redux-app",
    },
    {
        title: "Accordion",
        description: "A React accordion application that displays collapsible sections. Users can expand or collapse sections with icons, with only one accordion item open at a time.",
        image: "/Project-images/accordion-image.png",
        tags: ["React", "Lucide-react-icons", "CSS"],
        link: "https://accordion-ochre-three.vercel.app/",
        github:"https://github.com/Logesh-26/accordion",
    },
    {
        title: "Calculator",
        description: "A simple web calculator that performs basic arithmetic operations with a modern neumorphic UI. With support for decimals, clear, and delete functions.",
        image: "/Project-images/calc-image.png",
        tags: ["HTML", "CSS", "JavaScript"],
        link: "https://calculator-xi-peach-69.vercel.app/",
        github:"https://github.com/Logesh-26/calculator",
    },
    {
        title: "Merry Night Xmas Shop",
        description: "Merry Night is an Christmas themed landing page featuring festive animations, glowing lights, and falling snowflakes for a magical holiday feel.Users enjoy the Christmas ambience with a built-in music player. 🎄",
        image: "/Project-images/Christmaslanding-image.png",
        tags: ["Html", "CSS", "JavaScript"],
        link: "https://christmas-landing-page-indol.vercel.app/",
        github: "https://github.com/Logesh-26/Christmas-landing-page",
    },
];
export const Projects = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    // Determine how many projects to show based on screen size
    const getVisibleProjects = () => {
        if (isExpanded) return projects;
        // Will be handled by CSS classes for responsive behavior
        return projects;
    };

    const visibleProjects = getVisibleProjects();

    return (
        <section id="projects" className="py-32 relative overflow-hidden">
            {/* Bg glows */ }
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */ }
                <div className="text-center mx-auto max-w-3xl mb-16">
                    <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">Featured Work</span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
                        Projects that
                        <span className="font-serif italic font-normal text-white">{ " "}showcase my Skills.</span>
                    </h2>
                    <p className="text-muted-foreground animate-fade-in animation-delay-200">
                    A collection of my recent projects that demonstrate my skills in full-stack web development and modern web technologies.
                    </p>
                </div>
                {/* Projects Grid */ }
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    { visibleProjects.map((project, idx) => {
                        // Hide projects based on expansion state and screen size
                        // Mobile: show first 2, then all if expanded
                        // Medium+: show first 4, then all if expanded
                        const isMobileHidden = idx >= 2 && !isExpanded;
                        const isMediumHidden = idx >= 4 && !isExpanded;
                        
                        return (
                            <div key={ idx }
                                className={`group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1
                                    ${isMobileHidden ? "hidden" : "block"}
                                    ${isMediumHidden ? "md:hidden" : ""}
                                `}
                            style={{animationDelay:`${(idx + 1) * 100}ms`}}
                            >
                                {/* Image */}
                                <div className="relative overflow-hidden aspect-video">
                                    <img src={ project.image } alt={ project.title }
                                        className="w-full h-full transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />
                                    {/* Overlay Links */ }
                                    <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <a href={project.link} className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all">
                                            <ArrowUpRight className="w-5 h-5"/>
                                        </a>
                                        <a href={project.github} className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all">
                                            <Github className="w-5 h-5"/>
                                        </a>
                                    </div>
                                </div>
                                {/* Content */ }
                                <div className="p-6 space-y-4">
                                    <div className="flex items-start justify-between">
                                        <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">{ project.title }</h3>
                                        <ArrowUpRight className="w-5 h-5 text-muted-foreground  group-hover:text-primary group-hover:translate-x-1
                                        group-hover:-translate-y-1 transition-all"/>
                                    </div>
                                    <p className="text-muted-foreground text-sm">{ project.description }</p>
                                    <div className="flex flex-wrap gap-2">
                                        { project.tags.map((tag, tagIdx) => (
                                        <span key={tagIdx} className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300">{tag}</span>
                                    ))}</div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* View All CTA - Show button if there are more projects to show */}
                {projects.length > 4 && (
                    <div className="text-center mt-12 animate-fade-in animation-delay-500">
                        <button
                            onClick={() => setIsExpanded(!isExpanded)}
                            className="inline-flex items-center gap-2"
                        >
                            <AnimatedBorderButton>
                                { isExpanded ? "Show Less" : "View All Projects" }
                                <ArrowUpRight className="w-5 h-5"/>
                            </AnimatedBorderButton>
                        </button>
                    </div>
                )}
            </div>
        </section>
    )
}