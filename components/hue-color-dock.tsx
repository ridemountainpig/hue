import DynamicDock from "dynamic-dock";
import HueColorSquare from "@/components/hue-color-square";

interface HueColorDockProps {
    colors: string[];
    hovered: boolean;
}

export default function HueColorDock({ colors, hovered }: HueColorDockProps) {
    return (
        <>
            {hovered ? (
                <DynamicDock gapX={20} imageWidth={44}>
                    <HueColorSquare color={colors[0]} />
                    <HueColorSquare color={colors[1]} />
                    <HueColorSquare color={colors[2]} />
                    <HueColorSquare color={colors[3]} />
                    <HueColorSquare color={colors[4]} />
                </DynamicDock>
            ) : (
                <>
                    <HueColorSquare color={colors[0]} />
                    <HueColorSquare color={colors[1]} />
                    <HueColorSquare color={colors[2]} />
                    <HueColorSquare color={colors[3]} />
                    <HueColorSquare color={colors[4]} />
                </>
            )}
        </>
    );
}
