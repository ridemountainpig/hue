"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "@/components/ui/aurora-background";

import Image from "next/image";

export default function Footer() {
    return (
        <footer className="mt-10 flex h-80 w-full items-center justify-center">
            <AuroraBackground>
                <motion.div
                    initial={{ opacity: 0.0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.1,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="relative flex w-full flex-col items-center justify-center gap-4 px-4"
                >
                    <div>
                        <div className="flex w-full justify-center">
                            <Image
                                src={"/hue-icon.png"}
                                priority={true}
                                alt="Hue icon"
                                width={130}
                                height={130}
                                className="hidden duration-300 hover:rotate-[27deg] lg:block"
                            />
                            <Image
                                src={"/hue-icon.png"}
                                priority={true}
                                alt="Hue icon"
                                width={100}
                                height={100}
                                className="lg:hidden"
                            />
                        </div>
                        <div className="mt-4 flex w-full justify-center text-center">
                            <span className="text-md font-pacifico font-extrabold tracking-wider text-slate-600 lg:text-lg">
                                Designed in Taiwan. Built for Creatives.
                            </span>
                        </div>
                    </div>
                </motion.div>
            </AuroraBackground>
        </footer>
    );
}
