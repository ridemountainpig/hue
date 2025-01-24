"use client";
import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

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
                        `after:animate-aurora pointer-events-none absolute -inset-[10px] [background-image:repeating-linear-gradient(100deg,#ffffff_0%,#ffffff_7%,transparent_10%,transparent_12%,#ffffff_16%),repeating-linear-gradient(100deg,#0081a7_10%,#00afb9_15%,#fdfcdc_20%,#fed9b7_25%,#f07167_30%)] [background-size:300%,_200%] [background-position:50%_50%,50%_50%] opacity-50 blur-[10px] invert filter will-change-transform after:absolute after:inset-0 after:[background-image:repeating-linear-gradient(100deg,#ffffff_0%,#ffffff_7%,transparent_10%,transparent_12%,#ffffff_16%),repeating-linear-gradient(100deg,#0081a7_10%,#00afb9_15%,#fdfcdc_20%,#fed9b7_25%,#f07167_30%)] after:[background-size:200%,_100%] after:[background-attachment:fixed] after:mix-blend-difference after:content-[""]`,

                        showRadialGradient &&
                            `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,transparent_70%)]`,
                    )}
                ></div>
            </div>
            {children}
        </div>
    );
};
