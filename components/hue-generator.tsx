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
import hueUtils from "@/utils/hue";

export default function HueGenerator() {
    const [colorPickerOne, setColorPickerOne] = useState(false);
    const [colorPickerTwo, setColorPickerTwo] = useState(false);
    const [colorOne, setColorOne] = useState("#ffffff");
    const [colorTwo, setColorTwo] = useState("#ffffff");

    const colorPickerBtnOneRef = useRef<HTMLDivElement>(null);
    const colorPickerBtnTwoRef = useRef<HTMLDivElement>(null);
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
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleColorOnePicker = () => {
        setColorPickerOne(!colorPickerOne);
        setColorPickerTwo(false);
    };

    const handleColorTwoPicker = () => {
        setColorPickerTwo(!colorPickerTwo);
        setColorPickerOne(false);
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
            "The hue name's maximum length is 15 characters, and it can only contain letters, numbers, and spaces.",
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
                            },
                        },
                    );
                    return;
                }
            }
            window.location.href = `/hue/${hueName}/${colorOne.replace("#", "").toLocaleLowerCase()}-${colorTwo.replace("#", "").toLocaleLowerCase()}`;
        } else {
            toast("Please enter a hue name!", {
                icon: "❌",
                style: {
                    borderRadius: "10px",
                    fontSize: "14px",
                    fontWeight: "600",
                    background: "#fff",
                    color: "#000",
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
        <div className="mt-40 h-fit w-full py-10">
            <div className="flex h-fit w-full justify-center gap-x-2 gap-y-4">
                <div className="relative">
                    <div
                        ref={colorPickerBtnOneRef}
                        className="h-[4.5rem] w-[4.5rem] cursor-pointer rounded-lg border shadow-xl"
                        style={{ backgroundColor: colorOne }}
                        onClick={handleColorOnePicker}
                    ></div>
                    {colorPickerOne && (
                        <div
                            className="absolute -left-52 -top-16"
                            ref={colorPickerOneRef}
                        >
                            <HexColorPicker
                                color={colorOne}
                                onChange={setColorOne}
                            />
                        </div>
                    )}
                </div>
                <div className="h-fit">
                    <div className="relative flex h-full items-center">
                        <input
                            type="text"
                            className="h-[4.5rem] w-[28rem] rounded-lg border text-center font-mono text-xl font-semibold text-black shadow-xl placeholder:text-black"
                            value={hueName}
                            maxLength={14}
                            placeholder="Hue Name"
                            onChange={(e) => setHueName(e.target.value)}
                        />
                        <button
                            className="absolute right-4 rounded-lg border bg-white p-2 duration-300 hover:bg-slate-100"
                            onClick={handleRandomName}
                        >
                            <Pencil strokeWidth={2.5} size={20} />
                        </button>
                    </div>
                    <div className="mt-6 flex h-fit w-full items-center justify-center gap-x-2 text-center">
                        <SquareArrowUpLeft strokeWidth={2} size={20} />
                        <span className="font-mono text-sm font-semibold">
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
                <div className="relative">
                    <div
                        ref={colorPickerBtnTwoRef}
                        className="h-[4.5rem] w-[4.5rem] cursor-pointer rounded-lg border shadow-xl"
                        style={{ backgroundColor: colorTwo }}
                        onClick={handleColorTwoPicker}
                    ></div>
                    {colorPickerTwo && (
                        <div
                            className="absolute -right-52 -top-16"
                            ref={colorPickerTwoRef}
                        >
                            <HexColorPicker
                                color={colorTwo}
                                onChange={setColorTwo}
                            />
                        </div>
                    )}
                </div>
            </div>
            <div className="mt-5 flex w-full justify-center gap-x-2">
                <button
                    className="flex items-center gap-x-2 rounded-lg border bg-white p-2 px-4 py-2 transition-colors duration-300 hover:bg-slate-100"
                    onClick={handleGenerateButton}
                >
                    <PaintBucket strokeWidth={2.5} size={20} />
                    <span className="font-mono text-base font-semibold tracking-wider">
                        Generate Hue
                    </span>
                </button>
                <button
                    className="flex items-center gap-x-2 rounded-lg border bg-white p-2 px-4 py-2 transition-colors duration-300 hover:bg-slate-100"
                    onClick={handleRandomButton}
                >
                    <Dices strokeWidth={2.5} size={20} />
                    <span className="font-mono text-base font-semibold tracking-wider">
                        Random Hue
                    </span>
                </button>
            </div>
        </div>
    );
}
