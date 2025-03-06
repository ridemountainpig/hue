import { HexColorPicker } from "react-colorful";

interface HueColorPickerProps {
    color: string;
    setColor: (color: string) => void;
    invalid: boolean;
}

export default function HueColorPicker({
    color,
    setColor,
    invalid,
}: HueColorPickerProps) {
    return (
        <>
            <HexColorPicker color={color} onChange={setColor} />
            <input
                type="text"
                value={color}
                className="text-2xs mt-2 h-[1.8rem] w-[200px] rounded-md border bg-white text-center font-mono font-semibold text-black placeholder:text-black"
                placeholder="Enter or pick hue color"
                onChange={(e) => setColor(e.target.value)}
            />
            {invalid && (
                <div className="text-2xs mt-2 w-[200px] text-center font-mono font-semibold text-red-400">
                    invalid hex color
                </div>
            )}
        </>
    );
}
