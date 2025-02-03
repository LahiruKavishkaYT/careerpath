import { twMerge } from "tailwind-merge";

export default function FeatureCard(props: { 
    title: string;
    description: string;
    children?: React.ReactNode;
    className?: string;
}) {
    const { title, description, children, className } = props;
    return (
        <div 
            className={twMerge(
                "bg-neutral-900 border border-white/10 p-4 md:p-6 rounded-2xl md:rounded-3xl",
                className
            )}
        >
            <div className="aspect-square md:aspect-video flex items-center justify-center">
                {children}
            </div>
            <div>
                <h3 className="text-xl md:text-3xl font-medium mt-4 md:mt-6">{title}</h3>
                <p className="text-white/50 mt-2 text-sm md:text-base">{description}</p>
            </div>
        </div>
    );
}
