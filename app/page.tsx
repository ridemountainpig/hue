import HueCard from "@/components/hue-card";

export default function Home() {
    return (
        <>
            <div className="flex justify-center">
                <h1 className="hidden">Hue</h1>
                <span className="select-none py-20 font-pacifico text-4xl font-bold tracking-widest opacity-80">
                    <span className="px-2 text-peach">Painting</span>
                    <span className="px-2 text-soft-gray">Your</span>
                    <span className="px-2 text-gray-blue">World</span>
                    <span className="px-2 text-pink">In</span>
                    <span className="px-2 text-gold">Vibrant</span>
                    <span className="px-2 text-aqua">Hues</span>
                </span>
            </div>
            <div className="flex justify-center px-10">
                <div className="my-12 grid w-full grid-cols-4 gap-4">
                    <HueCard
                        colors={[
                            "#eff6e0",
                            "#aec3b0",
                            "#598392",
                            "#124559",
                            "#01161e",
                        ]}
                    />
                    <HueCard
                        colors={[
                            "#eff6e0",
                            "#aec3b0",
                            "#598392",
                            "#124559",
                            "#01161e",
                        ]}
                    />
                    <HueCard
                        colors={[
                            "#eff6e0",
                            "#aec3b0",
                            "#598392",
                            "#124559",
                            "#01161e",
                        ]}
                    />
                    <HueCard
                        colors={[
                            "#eff6e0",
                            "#aec3b0",
                            "#598392",
                            "#124559",
                            "#01161e",
                        ]}
                    />
                    <HueCard
                        colors={[
                            "#eff6e0",
                            "#aec3b0",
                            "#598392",
                            "#124559",
                            "#01161e",
                        ]}
                    />
                    <HueCard
                        colors={[
                            "#eff6e0",
                            "#aec3b0",
                            "#598392",
                            "#124559",
                            "#01161e",
                        ]}
                    />
                    <HueCard
                        colors={[
                            "#eff6e0",
                            "#aec3b0",
                            "#598392",
                            "#124559",
                            "#01161e",
                        ]}
                    />
                    <HueCard
                        colors={[
                            "#eff6e0",
                            "#aec3b0",
                            "#598392",
                            "#124559",
                            "#01161e",
                        ]}
                    />
                </div>
            </div>
        </>
    );
}
