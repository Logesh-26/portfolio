import { Button } from "@/components/Button";
import { ArrowRight, ChevronDown, Download, Github,Linkedin, Mail } from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";

const skills = [
    "HTML5",
    "CSS3",
    "TailwindCSS",
    "Bootstrap",
    "JavaScript",
    "React",
    "Redux",
    "Node.js",
    "Express.js",
    "Postman",
    "Axios",
    "REST API",
    "MongoDB",
    "Github",
];

export const Hero = () => {
    const handleDownloadCV = () => {
        console.log("Download CV button clicked");
        try {
            const link = document.createElement("a");
            link.href = "/resume.pdf";
            link.download = "";
            link.style.display = "none";
            console.log("Link created with href:", link.href);
            document.body.appendChild(link);
            console.log("Link appended to body");
            link.click();
            console.log("Link clicked - download should start");
            document.body.removeChild(link);
            console.log("Link removed from body");
        } catch (error) {
            console.error("Error downloading CV:", error);
        }
    };

    const handleContactClick = () => {
        const contactSection = document.getElementById("contact");
        contactSection?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">
            {/* bg */ }
            <div className="absolute inset-0">
                <img src="/hero-bg.png" alt="Hero-image" className="w-full h-full object-cover opacity-40" />
                <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background"/>
            </div>
            {/* Green Dots */ }
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                { [...Array(50)].map((_, i) => (
                    <div key={ i} className="absolute w-1.5 h-1.5 rounded-full opacity-60"
                        style={ {
                            backgroundColor: "#2d706b",
                            left: `${Math.random() * 100}%`,
                            top: `${ Math.random() * 100 }%`,
                            animation: `slow-drift ${ 15 + Math.random() * 20 }s ease-in-out infinite`,
                            animationDelay:`${Math.random()*5}s`,
                    }}/>
                ))}
            </div>
            {/* content */ }
            <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left column - Text Content */ }
                    <div className="space-y-8">
                        <div className="animate-fade-in">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                            <span className="w-2 h-2 bg-primary rounded-full animate-pulse"/>Full Stack Developer
                        </span>
                        </div>
                        {/* Headline */ }
                        <div className="space-y-4">
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                                Transforming <span className="text-primary glow-text">Ideas</span>
                                <br />
                                Into Powerful
                                <br />
                                <span className="font-serif italic font-normal text-white">Web Applications.</span>
                            </h1>
                            <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                                Hi, I'm Logesh T, a passionate Full Stack Developer specializing in the
                                MERN stack. I create scalable, high-performance web applications and enjoy turning
                                ideas into interactive digital experiences that users love.
                            </p>
                        </div>
                        {/* CTAs */ }
                        <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
                            <Button 
                               size="lg"
                               onClick={handleContactClick}
                            >
                               Contact Me <ArrowRight className="w-5 h-5" />
                            </Button>
                            
                            <AnimatedBorderButton onClick={handleDownloadCV}>
                                <Download className="w-5 h-5" />
                                Download CV
                            </AnimatedBorderButton>
                            
                        </div>
                        {/* Social Links */ }
                        <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
                            <span className="text-sm text-muted-foreground">Follow me:</span>
                            { [{ icon: Github, href: "https://github.com/Logesh-26" },
                                { icon: Linkedin, href: "https://www.linkedin.com/in/logesh2612" },
                                {icon:Mail, href:"https://www.vkhari040@gmail.com"}
                            ].map((social, idx) => (
                                <a key={ idx } href={ social.href }
                                    className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300">
                                    { <social.icon className="w-5 h-5" /> }</a>
                            ))}
                        </div>
                    </div>
                    {/* Right Column - Profile Image */ }
                    <div className="relative animate-fade-in animation-delay-300">
                        {/* Profile image */ }
                        <div className="relative max-w-md mx-auto">
                            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br
                            from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse"/>
                            <div className="relative glass rounded-3xl p-2 glow-border">
                                <img src="/profile-pic1.png" alt="Logesh" className="w-full object-cover rounded-2xl"/>
                                {/* Floating Badge */}
                                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                                    <div className="flex items-center gap-3">
                                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"/>
                                        <span className="text-sm font-medium">Open to Opportunities</span>
                                    </div>
                                </div>
                                
                                
                            </div>
                        </div>
                    </div>
                </div>
                {/* Skills Section */ }
                <div className="mt-20 animates-fade-in animation-delay-600">
                    <p className="text-sm text-muted-foreground mb-6 text-center">
                        Technologies I work with</p>
                    <div className="relative overflow-hidden">
                        <div className="flex animate-marquee">
                            { [...skills, ...skills].map((skill, idx) => (
                                <div key={ idx }
                                    className="flex-shrink-0 px-8 py-4"
                                >
                                    <span
                                        className="text-sm font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors"
                                    >
                                        { skill }
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800">
                <a
                    href="#about"
                    className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
                >
                    <span className="text-sm uppercase tracking-wider">Scroll</span>
                    <ChevronDown className="w-6 h-6 animate-bounce"/>
                </a>
            </div>
        </section>
    )
}