import { Code2, Lightbulb, Rocket, Users } from "lucide-react"

const highlights = [
    {
        icon: Code2,
        title: "Coding Practice",
        description: "Practicing modern coding standards and building projects to strengthen my development skills."
      },
    
    {
        icon: Rocket,
        title: "Fast Learning",
        description: "Quickly adapting to new technologies and continuously improving my development skills."
    },
    {
        icon: Users,
        title: "Team Collaboration",
        description: "Working effectively with others to build projects and share ideas."
    },
    {
        icon: Lightbulb,
        title: "Problem Solving",
        description: "Passionate about solving real-world problems through clean and efficient code."
    }
]

export const About = () => {
    return (
        <section id="about" className="py-32 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Column */ }
                    <div className="space-y-8">
                        <div className="animate-fade-in">
                            <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                                About Me
                            </span>
                    </div>
                    <h2 className="text-4xl md:5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
                        Building the Future, 
                            <span className="font-serif italic font-normal text-white">{ " "}one component at a time.
                        </span>
                        </h2>
                        <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
                            <p className="text-justify">
                                I am a passionate Full Stack Web Developer with a strong interest in building modern and user-friendly web applications.
                                I enjoy turning ideas into functional digital solutions through clean and efficient code.
                                My goal is to create applications that are both scalable and easy to use.
                            </p>
                            <p className="text-justify">
                                I recently completed a MERN Stack Development course, where I gained hands-on experience with MongoDB, Express.js, React, and Node.js.
                                During my learning journey, I built few projects that helped me understand
                                full stack development, API integration, and responsive web design.
                            </p>
                            <p className="text-justify">
                                As a fresher, I am eager to apply my knowledge in real-world projects and continue improving my development skills.
                                I am always motivated to learn new technologies and collaborate with teams to build impactful web applications.
                            </p>
                        </div>

                        <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
                            <p className="text-justify text-lg font-medium italic text-foreground">
                                "My mission is to transform ideas into reliable web
                                applications by writing clean code, learning continuously,
                                and building solutions that deliver real value to users."
                            </p>
                        </div>
                    </div>
                    {/* Right Column - Highlights */ }
                    <div className="grid sm:grid-cols-2 gap-6">
                        { highlights.map((item, index) => (
                            <div key={ index } className="glass p-6 rounded-2xl group animate-fade-in"
                            style={{animationDelay:`${(index + 1) * 100}ms`}}
                            >
                                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                                    <item.icon className="w-6 h-6 text-primary"/>
                                </div>
                                <h3 className="text-lg font-semibold mb-2">{ item.title }</h3>
                                <p className="text-sm text-muted-foreground">{ item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
                
            </div>
        </section>
    )
}