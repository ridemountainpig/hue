"use client";
import { cn } from "@/lib/utils";
import React, { ReactNode, useEffect } from "react";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
    children: ReactNode;
    showRadialGradient?: boolean;
}

export const AuroraBackground = ({
    className,
    children,
    showRadialGradient = true,
    ...props
}: AuroraBackgroundProps) => {
    useEffect(() => {
        const root = document.documentElement;
        root.style.setProperty("--aurora-bg-1", "#0081a7");
        root.style.setProperty("--aurora-bg-2", "#00afb9");
        root.style.setProperty("--aurora-bg-3", "#fdfcdc");
        root.style.setProperty("--aurora-bg-4", "#fed9b7");
        root.style.setProperty("--aurora-bg-5", "#f07167");
    }, []);

    return (
        <div
            className={cn(
                "transition-bg relative flex h-full w-full flex-col items-center justify-center bg-white",
                className,
            )}
            {...props}
        >
            <div className="absolute inset-0 rotate-180 overflow-hidden">
                <div
                    className={cn(
                        `pointer-events-none absolute -inset-[10px] opacity-50 blur-[10px] invert filter will-change-transform [--aurora:repeating-linear-gradient(100deg,var(--aurora-bg-1)_10%,var(--aurora-bg-2)_15%,var(--aurora-bg-3)_20%,var(--aurora-bg-4)_25%,var(--aurora-bg-5)_30%)] [--dark-gradient:repeating-linear-gradient(100deg,var(--black)_0%,var(--black)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--black)_16%)] [--white-gradient:repeating-linear-gradient(100deg,var(--white)_0%,var(--white)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--white)_16%)] [background-image:var(--white-gradient),var(--aurora)] [background-position:50%_50%,50%_50%] [background-size:300%,_200%] after:absolute after:inset-0 after:animate-aurora after:mix-blend-difference after:content-[""] after:[background-attachment:fixed] after:[background-image:var(--white-gradient),var(--aurora)] after:[background-size:200%,_100%] dark:invert-0 dark:[background-image:var(--dark-gradient),var(--aurora)] after:dark:[background-image:var(--dark-gradient),var(--aurora)]`,

                        showRadialGradient &&
                            `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)]`,
                    )}
                ></div>
            </div>
            {children}
        </div>
    );
};
