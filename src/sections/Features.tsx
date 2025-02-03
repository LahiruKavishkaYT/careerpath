import Tag from "@/components/Tag";
import FeatureCard from "@/components/FeatureCard";
import avatar1 from '@/assets/images/avatar-student.png';
import avatar2 from '@/assets/images/avatar-professional.png';
import avatar3 from '@/assets/images/avatar-company.png';
import Image from "next/image";
import Avatar from "@/components/Avatar";
import Key from "@/components/Key";


const features = [
    "Mentorships",
    "Proect Feedback",
    "Jobs",
    "Roadmap",
    "Career Insights",
];

export default function Features() {
    return (
        <section className="py-24">
            <div className="container">
                <div className="flex justify-center">
                    <Tag>Features</Tag>
                </div>
                <h2 className="text-6xl font-medium text-center mt-6 max-w-2xl mx-auto">
                    Where power meets <span className="text-lime-400">simplicity</span>
                </h2>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-8">
                    
                    <FeatureCard title="Real-time Collaboration" description="Work together seamlessly with conflict free editing" className="md:col-span-2 lg:col-span-1">
                        <div className="aspect-video flex items-center justify-center">
                            <Avatar className="z-40">
                                <Image src={avatar1} alt="Avatar 1" className="rounded-full" />
                            </Avatar>
                            <Avatar className="-ml-6 border-indigo-500 z-30">
                                <Image src={avatar2} alt="Avatar 2" className="rounded-full" />
                            </Avatar>
                            <Avatar className="-ml-6 border-amber-500 z-20">
                                <Image src={avatar3} alt="Avatar 3" className="rounded-full" />
                            </Avatar>
                        </div>
                    </FeatureCard>

                    <FeatureCard 
                        title="Interactive visualizations" 
                        description="Engage with your interest with Roadmaps that aligns with your goal" className="md:col-span-2 lg:col-span-1 group">
                            <div className="aspect-video flex-items-center justify-center">
                                <p className="text-4xl font-extrabold text-white/20 group-hover:text-white/10 transition duration-500 text-center">To achieved{" "} 
                                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent relative">
                                    <span>incredible</span>
                                    <video src="/assets/gif-incredible.mp4" autoPlay loop muted playsInline className="absolute bottom-full left-1/2 -translate-x-1/2 rounded-2xl shadow-xl opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none" />
                                </span>{" "}
                                growth in your Career</p>
                            </div>
                    </FeatureCard>

                    <FeatureCard 
                        title="Career Insights" 
                        description="Global salry scale for each IT job role" 
                        className="md:col-span-2 lg:col-span-1 md:col-start-2 lg:col-start-auto group">
                            <div className="aspect-video flex items-center justify-center gap-4">
                                <Key className="w-28 outline outline-2 outline-offset-4 outline-transparent group-hover:outline-lime-400 transition-all duration-500 group-hover:translate-y-1">DevOps</Key>
                                <Key className="outline outline-2 outline-offset-4 outline-transparent group-hover:outline-lime-400 transition-all duration-500 group-hover:translate-y-1 delay-150">AI</Key>
                                <Key className="w-20 outline outline-2 outline-offset-4 outline-transparent group-hover:outline-lime-400 transition-all duration-500 group-hover:translate-y-1 delay-300">SRE</Key>
                            </div>
                    </FeatureCard>
                </div>
                <div className="mt-8 flex flex-wrap gap-3 justify-center">
                    {features.map(feature => (
                        <div 
                        key={feature} 
                        className="bg-neutral-900 border-white/10 inline-flex px-3 md:px-5 py-1.5 md:py-2 rounded-2xl gap-3 items-center hover:scale-105 transition duration-500 group"
                        >
                            <span className="bg-lime-400 text-neutral-950 size-5 rounded-full inline-flex items-center justify-center text-xl group-hover:rotate-45 transition duration-500">&#10038;</span>
                            <span className="font-medium md:text-lg">{feature}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
