"use client";

import { useState, useRef, useEffect } from "react";
import { HexColorPicker } from "react-colorful";
import { generate } from "random-words";
import {
    Dices,
    Info,
    PaintBucket,
    Pencil,
    SquareArrowUpLeft,
    SquareArrowUpRight,
} from "lucide-react";
import toast from "react-hot-toast";
import HueColorPicker from "@/components/hue-color-picker";
import hueUtils from "@/utils/hue";

export default function HueGenerator() {
    const [colorPickerOne, setColorPickerOne] = useState(false);
    const [colorPickerTwo, setColorPickerTwo] = useState(false);
    const [showColorPickerModalOne, setShowColorPickerModalOne] =
        useState(false);
    const [showColorPickerModalTwo, setShowColorPickerModalTwo] =
        useState(false);
    const [colorOne, setColorOne] = useState("#ffffff");
    const [colorTwo, setColorTwo] = useState("#ffffff");
    const [colorOneBg, setColorOneBg] = useState("#ffffff");
    const [colorTwoBg, setColorTwoBg] = useState("#ffffff");
    const [invalidColorOne, setInvalidColorOne] = useState(false);
    const [invalidColorTwo, setInvalidColorTwo] = useState(false);

    const colorPickerBtnOneRef = useRef<HTMLDivElement>(null);
    const colorPickerBtnTwoRef = useRef<HTMLDivElement>(null);
    const colorPickerModalOneRef = useRef<HTMLDivElement>(null);
    const colorPickerModalTwoRef = useRef<HTMLDivElement>(null);
    const colorPickerOneRef = useRef<HTMLDivElement>(null);
    const colorPickerTwoRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                colorPickerOneRef.current &&
                !colorPickerOneRef.current.contains(event.target as Node) &&
                colorPickerBtnOneRef.current &&
                !colorPickerBtnOneRef.current.contains(event.target as Node)
            ) {
                setColorPickerOne(false);
            }
            if (
                colorPickerTwoRef.current &&
                !colorPickerTwoRef.current.contains(event.target as Node) &&
                colorPickerBtnTwoRef.current &&
                !colorPickerBtnTwoRef.current.contains(event.target as Node)
            ) {
                setColorPickerTwo(false);
            }
            if (
                colorPickerModalOneRef.current &&
                !colorPickerModalOneRef.current.contains(event.target as Node)
            ) {
                setShowColorPickerModalOne(false);
            }
            if (
                colorPickerModalTwoRef.current &&
                !colorPickerModalTwoRef.current.contains(event.target as Node)
            ) {
                setShowColorPickerModalTwo(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    useEffect(() => {
        if (isValidHexColor(colorOne.replace("#", ""))) {
            setInvalidColorOne(false);
            setColorOneBg(colorOne);
        } else {
            setInvalidColorOne(true);
            setColorOneBg("");
        }
    }, [colorOne]);

    useEffect(() => {
        if (isValidHexColor(colorTwo.replace("#", ""))) {
            setInvalidColorTwo(false);
            setColorTwoBg(colorTwo);
        } else {
            setInvalidColorTwo(true);
            setColorTwoBg("");
        }
    }, [colorTwo]);

    const isValidHexColor = (color: string) =>
        /^([0-9A-F]{3}|[0-9A-F]{6})$/i.test(color);

    const handleColorOnePicker = () => {
        if (window.innerWidth < 768) {
            setShowColorPickerModalOne(true);
        } else {
            setColorPickerOne(!colorPickerOne);
            setColorPickerTwo(false);
        }
    };

    const handleColorTwoPicker = () => {
        if (window.innerWidth < 768) {
            setShowColorPickerModalTwo(true);
        } else {
            setColorPickerTwo(!colorPickerTwo);
            setColorPickerOne(false);
        }
    };

    const [hueName, setHueName] = useState("");

    const handleRandomName = () => {
        const generatedName = generate({ minLength: 3 });
        if (typeof generatedName === "string") {
            setHueName(generatedName);
        } else if (Array.isArray(generatedName) && generatedName.length > 0) {
            setHueName(generatedName[0]);
        }
    };

    const handleHueNameInfo = () => {
        toast(
            "The hue name's maximum length is 14 characters, and it can only contain letters, numbers, and spaces.",
            {
                icon: "📝",
                style: {
                    borderRadius: "10px",
                    fontSize: "14px",
                    fontWeight: "600",
                    background: "#fff",
                    color: "#000",
                    textAlign: "center",
                },
            },
        );
    };

    const handleGenerateButton = () => {
        if (hueName.length > 0) {
            const pattern = new RegExp("[a-zA-Z0-9 ]");
            for (let i = 0; i < hueName.length; i++) {
                if (pattern.test(hueName[i])) {
                    continue;
                } else {
                    toast(
                        "Hue name can only contain letters, numbers and spaces!",
                        {
                            icon: "❌",
                            style: {
                                borderRadius: "10px",
                                fontSize: "14px",
                                fontWeight: "600",
                                background: "#fff",
                                color: "#000",
                                textAlign: "center",
                                fontFamily: "monospace",
                            },
                        },
                    );
                    return;
                }
            }

            if (invalidColorOne || invalidColorTwo) {
                toast("Please enter a valid hex color!", {
                    icon: "❌",
                    style: {
                        borderRadius: "10px",
                        fontSize: "14px",
                        fontWeight: "600",
                        background: "#fff",
                        color: "#000",
                        fontFamily: "monospace",
                    },
                });
                return;
            }

            const colorOneHex =
                colorOne.replace("#", "").toLocaleLowerCase().length === 3
                    ? colorOne.replace("#", "").toLocaleLowerCase().repeat(2)
                    : colorOne.replace("#", "").toLocaleLowerCase();
            const colorTwoHex =
                colorTwo.replace("#", "").toLocaleLowerCase().length === 3
                    ? colorTwo.replace("#", "").toLocaleLowerCase().repeat(2)
                    : colorTwo.replace("#", "").toLocaleLowerCase();

            window.location.href = `/hue/${hueName}/${colorOneHex}-${colorTwoHex}`;
        } else {
            toast("Please enter a hue name!", {
                icon: "❌",
                style: {
                    borderRadius: "10px",
                    fontSize: "14px",
                    fontWeight: "600",
                    background: "#fff",
                    color: "#000",
                    fontFamily: "monospace",
                },
            });
        }
    };

    const handleRandomButton = () => {
        const hueName = generate({ minLength: 3 });
        if (typeof hueName === "string") {
            setHueName(hueName);
        }
        setColorOne(hueUtils.generateRandomHexColor());
        setColorTwo(hueUtils.generateRandomHexColor());
    };

    return (
        <div className="mt-16 h-fit w-full lg:mt-40">
            <div className="flex h-fit w-full justify-center gap-x-2 gap-y-4">
                <div className="relative">
                    <div
                        ref={colorPickerBtnOneRef}
                        className="h-[3.5rem] w-[3.5rem] cursor-pointer rounded-lg border shadow-xl sm:h-[4.5rem] sm:w-[4.5rem]"
                        style={{ backgroundColor: colorOneBg }}
                        onClick={handleColorOnePicker}
                    ></div>
                    {colorPickerOne && (
                        <div
                            className="absolute -top-16 -left-52"
                            ref={colorPickerOneRef}
                        >
                            <HueColorPicker
                                color={colorOne}
                                setColor={setColorOne}
                                invalid={invalidColorOne}
                            ></HueColorPicker>
                        </div>
                    )}
                </div>

                {showColorPickerModalOne && (
                    <div className="fixed top-0 right-0 left-0 z-50 flex h-screen w-full items-center justify-center overflow-x-hidden overflow-y-auto bg-black/30">
                        <div
                            className="h-fit w-fit rounded-lg bg-white p-2"
                            ref={colorPickerModalOneRef}
                        >
                            <HueColorPicker
                                color={colorOne}
                                setColor={setColorOne}
                                invalid={invalidColorOne}
                            ></HueColorPicker>
                        </div>
                    </div>
                )}

                <div className="h-fit">
                    <div className="relative flex h-full items-center text-black">
                        <input
                            type="text"
                            className="h-[3.5rem] w-[14rem] rounded-lg border bg-white text-center font-mono font-semibold text-black shadow-xl placeholder:text-black sm:h-[4.5rem] sm:w-[20rem] lg:w-[28rem] lg:text-xl"
                            value={hueName}
                            maxLength={14}
                            placeholder="Hue Name"
                            onChange={(e) => setHueName(e.target.value)}
                        />
                        <button
                            className="absolute right-4 cursor-pointer rounded-lg border bg-white p-2 duration-300 hover:bg-slate-100"
                            onClick={handleRandomName}
                        >
                            <Pencil
                                strokeWidth={2.5}
                                size={20}
                                className="hidden md:block"
                            />
                            <Pencil
                                strokeWidth={2.5}
                                size={16}
                                className="hidden sm:block md:hidden"
                            />
                            <Pencil
                                strokeWidth={2.5}
                                size={12}
                                className="sm:hidden"
                            />
                        </button>
                    </div>
                </div>

                {showColorPickerModalTwo && (
                    <div className="fixed top-0 right-0 left-0 z-50 flex h-screen w-full items-center justify-center overflow-x-hidden overflow-y-auto bg-black/30">
                        <div
                            className="h-fit w-fit rounded-lg bg-white p-2"
                            ref={colorPickerModalTwoRef}
                        >
                            <HueColorPicker
                                color={colorTwo}
                                setColor={setColorTwo}
                                invalid={invalidColorTwo}
                            ></HueColorPicker>
                        </div>
                    </div>
                )}

                <div className="relative">
                    <div
                        ref={colorPickerBtnTwoRef}
                        className="h-[3.5rem] w-[3.5rem] cursor-pointer rounded-lg border shadow-xl sm:h-[4.5rem] sm:w-[4.5rem]"
                        style={{ backgroundColor: colorTwoBg }}
                        onClick={handleColorTwoPicker}
                    ></div>
                    {colorPickerTwo && (
                        <div
                            className="absolute -top-16 -right-52"
                            ref={colorPickerTwoRef}
                        >
                            <HueColorPicker
                                color={colorTwo}
                                setColor={setColorTwo}
                                invalid={invalidColorTwo}
                            ></HueColorPicker>
                        </div>
                    )}
                </div>
            </div>
            <div className="flex h-fit w-full justify-center">
                <div className="mt-6 flex h-fit w-full items-center justify-center gap-x-2 text-center text-black">
                    <SquareArrowUpLeft strokeWidth={2} size={20} />
                    <span className="font-mono text-xs font-semibold lg:text-sm">
                        select color and enter Hue name
                    </span>
                    <Info
                        strokeWidth={2}
                        size={16}
                        className="cursor-pointer"
                        onClick={handleHueNameInfo}
                    />
                    <SquareArrowUpRight strokeWidth={2} size={20} />
                </div>
            </div>
            <div className="mt-5 flex w-full justify-center gap-x-2 text-black">
                <button
                    className="flex cursor-pointer items-center gap-x-2 rounded-lg border bg-white p-2 px-4 py-2 transition-colors duration-300 hover:bg-slate-100"
                    onClick={handleGenerateButton}
                >
                    <PaintBucket strokeWidth={2.5} size={20} />
                    <span className="font-mono text-sm font-semibold tracking-wider lg:text-base">
                        Generate Hue
                    </span>
                </button>
                <button
                    className="flex cursor-pointer items-center gap-x-2 rounded-lg border bg-white p-2 px-4 py-2 transition-colors duration-300 hover:bg-slate-100"
                    onClick={handleRandomButton}
                >
                    <Dices strokeWidth={2.5} size={20} />
                    <span className="font-mono text-sm font-semibold tracking-wider lg:text-base">
                        Random Hue
                    </span>
                </button>
            </div>
        </div>
    );
}
