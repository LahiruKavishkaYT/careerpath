"use client";

import { type IntegrationsType } from "@/sections/Integrations"
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import { Fragment } from "react";
import { reverse } from "dns";

export default function IntegrationColumn(props: { 
    integrations: IntegrationsType; 
    className?: string; 
    reverse?: boolean;
}) {
    const { integrations, className, reverse } = props;
    return (
        <motion.div 
            initial={{
                y: reverse ? "-50%" : 0,
            }}
            animate={{
                y: reverse ? 0 : "-50%",
            }}
            transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear",
            }}
            className={twMerge("flex flex-col gap-4 pb-4", className)}>
            {Array.from({ length: 2}).map((_, i) => (
                <Fragment key={i}>
                    {integrations.map(integrations => (
                    <div 
                        key={integrations.name} 
                        className="bg-neutral-900 border-white/10 rounded-3xl p-6"
                    >
                            <div className="flex justify-center">
                                <Image src={integrations.icon} alt={`${integrations.name} icon`} className="size-24" />
                            </div>
                            <h3 className="text-3xl text-center mt-6">{integrations.name}</h3>
                            <p className="text-center text-white/50 mt-2">{integrations.description}</p>
                    </div>
                ))}
                </Fragment>
            ))}
            
        </motion.div>
    )
}
    