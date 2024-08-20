import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { iconGitHub } from "@/components/icons";

export default function Header() {
    return (
        <header className="flex w-full justify-center">
            <div className="flex w-full items-center justify-between px-3 py-14 lg:w-3/4">
                <Link href="/">
                    <span className="flex cursor-pointer select-none items-center">
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
                            className="lg:hidden"
                            alt="LOGO"
                            src="/hue-icon.png"
                        />
                        <span
                            className="ml-3 hidden font-pacifico text-4xl font-extrabold tracking-widest text-slate-600 md:inline xl:text-5xl"
                            translate="no"
                        >
                            Hue
                        </span>
                    </span>
                </Link>

                <div className="text-md flex h-fit items-center gap-x-1 font-pacifico font-semibold text-slate-600 lg:gap-x-2 lg:text-xl">
                    <Link
                        passHref
                        className="group mr-2 rounded-lg p-1"
                        href="/"
                        rel="noreferrer"
                    >
                        <button className="flex items-center gap-x-2 transition-colors">
                            <span>Hues</span>
                            <ArrowUpRight size={18} strokeWidth={4} />
                        </button>
                    </Link>
                    <Link
                        passHref
                        className="group mr-2 rounded-lg p-1"
                        href="/hue-generator"
                        rel="noreferrer"
                    >
                        <button className="flex items-center gap-x-2 transition-colors">
                            <span>Hue Generator</span>
                            <ArrowUpRight size={18} strokeWidth={4} />
                        </button>
                    </Link>
                    <Link
                        passHref
                        href="https://github.com/ridemountainpig/"
                        rel="noreferrer"
                        target="_blank"
                    >
                        <button className="flex h-10 w-10 items-center transition-colors duration-300 lg:h-fit lg:w-fit">
                            {iconGitHub}
                        </button>
                    </Link>
                </div>
            </div>
        </header>
    );
}
