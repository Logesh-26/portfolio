import { Award } from "lucide-react";

const certifications = [
    {
        title: "Master Certificate in Full Stack Development - MERN",
        issuer: "LIVEWIRE India",
        date: "Mar 2026",
        credentialId: "C0251024Z623761",
        credentialUrl: "https://drive.google.com/file/d/12UP25zbrEUxpwaCsvo-2sdyGf8Zd7P0H/view?usp=drive_link",
    },
    {
        title: "Node.js",
        issuer: "HCL GUVI",
        date: "June 2026",
        credentialId: "7278UY5760V5CB814y",
        credentialUrl: "https://www.guvi.in/share-certificate/7278UY5760V5CB814y",
    },
    {
        title: "HTML & CSS",
        issuer: "HCL GUVI",
        date: "May 2026",
        credentialId: "9sy8J1777A0ce74v3D",
        credentialUrl: "https://www.guvi.in/share-certificate/9sy8J1777A0ce74v3D",
    },
    {
        title: "REST APIs with Node.js",
        issuer: "HCL GUVI",
        date: "May 2026",
        credentialId: "81e7H891Alq63m2475",
        credentialUrl: "https://www.guvi.in/share-certificate/81e7H891Alq63m2475",
    },
    {
        title: "Cypress",
        issuer: "HCL GUVI",
        date: "June 2026",
        credentialId: "WJ5K6813z0f7R1c1t5",
        credentialUrl: "https://www.guvi.in/share-certificate/WJ5K6813z0f7R1c1t5",
    },
];

export const Certifications = () => {
    return (
        <section
            id="certifications"
            className="py-32 relative overflow-hidden"
        >
            <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />

            <div className="container mx-auto px-3 relative z-10">
                {/* Section Header */}
                <div className="max-w-3xl mb-16">
                    <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
                        Professional Credentials
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
                        Certifications &{" "}
                        <span className="font-serif italic font-normal text-white">
                            Achievements.
                        </span>
                    </h2>
                    <p className="text-muted-foreground animate-fade-in animation-delay-200">
                        Industry-recognized certifications and professional achievements that
                        validate my expertise and commitment to continuous learning.
                    </p>
                </div>

                {/* Certifications Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certifications.map((cert, idx) => (
                        <div
                            key={idx}
                            className="glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500 animate-fade-in hover:shadow-lg hover:shadow-primary/20"
                            style={{ animationDelay: `${(idx + 1) * 100}ms` }}
                        >
                            <div className="flex items-start justify-between mb-4">
                                <Award className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="text-lg font-semibold text-secondary-foreground mb-2">
                                {cert.title}
                            </h3>
                            <p className="text-sm text-primary font-medium mb-3">
                                {cert.issuer}
                            </p>
                            <p className="text-sm text-muted-foreground mb-3">
                                {cert.date}
                            </p>
                            {cert.credentialId && (
                                <p className="text-xs text-muted-foreground mb-4">
                                    ID: {cert.credentialId}
                                </p>
                            )}
                            {cert.credentialUrl && (
                                <a
                                    href={cert.credentialUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block text-primary text-sm font-medium hover:underline"
                                >
                                    View Credential →
                                </a>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
