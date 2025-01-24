import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { iconGitHub } from "@/components/icons";

export default function Header() {
    return (
        <header className="flex w-full justify-center">
            <div className="flex w-full items-center justify-between px-2 py-8 lg:w-3/4 lg:py-14">
                <Link href="/">
                    <span className="flex cursor-pointer items-center select-none">
                        <Image
                            width={75}
                            height={75}
                            className="hidden lg:block"
                            alt="LOGO"
                            src="/hue-icon.png"
                        />
                        <Image
                            width={55}
                            height={55}
                            className="hidden md:block lg:hidden"
                            alt="LOGO"
                            src="/hue-icon.png"
                        />
                        <Image
                            width={45}
                            height={45}
                            className="md:hidden"
                            alt="LOGO"
                            src="/hue-icon.png"
                        />
                        <span
                            className="font-pacifico ml-3 hidden text-4xl font-extrabold tracking-widest text-slate-600 md:inline xl:text-5xl"
                            translate="no"
                        >
                            Hue
                        </span>
                    </span>
                </Link>

                <div className="font-pacifico flex h-fit items-center gap-x-1 text-xs font-semibold text-slate-600 sm:text-lg lg:gap-x-2 lg:text-xl">
                    <Link
                        passHref
                        className="group mr-2 rounded-lg p-1"
                        href="/"
                        rel="noreferrer"
                    >
                        <div className="flex items-center gap-x-2 transition-colors">
                            <span>Hues</span>
                            <ArrowUpRight
                                size={18}
                                strokeWidth={4}
                                className="hidden sm:block"
                            />
                            <ArrowUpRight
                                size={12}
                                strokeWidth={4}
                                className="sm:hidden"
                            />
                        </div>
                    </Link>
                    <Link
                        passHref
                        className="group mr-2 rounded-lg p-1"
                        href="/hue-generator"
                        rel="noreferrer"
                    >
                        <div className="flex items-center gap-x-2 transition-colors">
                            <span>Hue Generator</span>
                            <ArrowUpRight
                                size={18}
                                strokeWidth={4}
                                className="hidden sm:block"
                            />
                            <ArrowUpRight
                                size={12}
                                strokeWidth={4}
                                className="sm:hidden"
                            />
                        </div>
                    </Link>
                    <Link
                        passHref
                        href="https://www.raycast.com/ridemountainpig/hue-palette"
                        rel="noreferrer"
                        target="_blank"
                        className="p-1"
                    >
                        <div
                            className="flex h-8 w-8 items-center transition-colors duration-300 md:h-10 md:w-10 lg:h-fit lg:w-fit"
                            title="Hue Palette Raycast Extension"
                        >
                            <Image
                                src="/raycast.svg"
                                alt="Raycast"
                                width={30}
                                height={30}
                                className="lg:hidden"
                            ></Image>
                            <Image
                                src="/raycast.svg"
                                alt="Raycast"
                                width={38}
                                height={38}
                                className="hidden lg:block"
                            ></Image>
                        </div>
                    </Link>
                    <Link
                        passHref
                        href="https://github.com/ridemountainpig/hue"
                        rel="noreferrer"
                        target="_blank"
                    >
                        <div
                            className="flex h-8 w-8 items-center transition-colors duration-300 md:h-10 md:w-10 lg:h-fit lg:w-fit"
                            title="Hue Palette Github"
                        >
                            {iconGitHub}
                        </div>
                    </Link>
                </div>
            </div>
        </header>
    );
}
