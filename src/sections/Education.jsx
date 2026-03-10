

const educationDetails = [
    {
      level: "Course",
      degree: "MERN Stack Development",
      institution: "CADD Centre",
      duration: "Nov 2025 - Feb 2026",
      location: "Anna Nagar, Chennai",
    },
    {
      level: "Post Graduation",
      degree: "M.Sc Computer Science",
      institution: "AM Jain College",
      university: "University of Madras",
      percentage:"82%",
      year: "2023 - 2025",
      location: "Minambakkam, Chennai",
    },
    {
      level: "Under Graduation",
      degree: "B.Sc Computer Science",
      institution: "Sriram College of Arts and Science",
      university: "University of Madras",
      percentage:"83%",
      year: "2020 - 2023",
      location: "Veppambattu, Thiruvallur",
    },
    {
      level: "Higher Secondary (HSC)",
      school: "P.A.K Palanisamy Higher Secondary School",
      board: "State Board",
      year: "2018 - 2019",
      percentage:"71.5%",
      location: "Royapuram, Chennai",
      
    },
    {
      level: "Secondary School (SSLC)",
      school: "P.A.K Palanisamy Higher Secondary School",
      board: "State Board",
      year: "2016 - 2017",
      percentage:"91%",
      location: "Royapuram, Chennai",
    },
  ];

export const Education = () => {
    return (
        <section id="education"
        className="py-32 relative overflow-hidden"
        >
            <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5
            rounded-full blur-3xl -translate-y-1/2" />

            <div className="container mx-auto px-3 relative z-10">
                {/* Section Header */}
                <div className="max-w-3xl mb-16">
                    <span
                        className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in"
                    >
                        Academic Background</span>
                    <h2
                        className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground"
                    >Education that builds a
                        {" "}
                        <span className="font-serif italic font-normal text-white">Strong foundation.</span></h2>
                    <p className="text-muted-foreground animate-fade-in animation-delay-200">
                        A timeline of my academic journey, building knowledge in Computer Science and
                        developing practical MERN Stack skills.
                    </p>
                </div>
                {/* Timeline */ }
                <div className="relative">
                    <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]"/>
                
                    {/* Education Details */ }
                    <div className="space-y-12">
                        { educationDetails.map((edu, idx) => (
                            <div key={ idx } className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                            style={{animationDelay:`${(idx + 1) * 150}ms`}}
                            >
                                {/* Timeline Dot */ }
                                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10"></div>
                                {/* Content */}
                                <div className={`pl-8 md:pl-0 ${idx %2===0 ? "md:pr-16 md:text-right" : "md:col-start-2 md:pl-16"}`}>
                                    <div
                                        className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500 max-w-md`}
                                    ><span className="text-sm text-primary font-medium">{ edu.year || edu.duration }</span>
                                    <h3 className="text-xl font-semibold mt-2">{edu.degree || edu.level}</h3>
                                    <p className="text-muted-foreground">{edu.institution || edu.school}</p>
                                    <p className="text-muted-foreground">{ edu.university || edu.board }</p>
                                    <p className="mt-1">{ edu.percentage}</p>
                                    <p className="text-muted-foreground">{edu.location}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                
                </div>
            </div>
        </section>
    )
}