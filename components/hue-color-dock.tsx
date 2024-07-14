import DynamicDock from "dynamic-dock";
import HueColorSquare from "@/components/hue-color-square";

interface HueColorDockProps {
    colors: string[];
    copy: boolean;
    hovered: boolean;
}

export default function HueColorDock({
    colors,
    copy,
    hovered,
}: HueColorDockProps) {
    return (
        <>
            {hovered ? (
                <DynamicDock gapX={20} imageWidth={44}>
                    {colors.map((color, index) => (
                        <HueColorSquare key={index} color={color} copy={copy} />
                    ))}
                </DynamicDock>
            ) : (
                <>
                    {colors.map((color, index) => (
                        <HueColorSquare key={index} color={color} copy={copy} />
                    ))}
                </>
            )}
        </>
    );
}
