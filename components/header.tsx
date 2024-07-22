import Image from "next/image";
import Link from "next/link";
import { iconGitHub } from "@/components/icons";

export default function Header() {
    return (
        <header className="flex w-full justify-center">
            <div className="flex w-3/4 items-center justify-between py-14">
                <Link href="/">
                    <span className="flex cursor-pointer select-none items-center">
                        <Image
                            width={75}
                            height={75}
                            alt="LOGO"
                            src="/hue-icon.png"
                        />
                        <span
                            className="ml-3 hidden font-pacifico text-5xl font-extrabold tracking-widest text-slate-600 md:inline"
                            translate="no"
                        >
                            Hue
                        </span>
                    </span>
                </Link>

                <div className="flex h-fit items-center gap-x-2">
                    <Link
                        passHref
                        className="group mr-2 rounded-lg p-2 duration-300 hover:bg-slate-100/60"
                        href="/"
                        rel="noreferrer"
                    >
                        <button className="flex items-center transition-colors">
                            <span className="font-pacifico text-xl font-semibold text-slate-600">
                                Hues
                            </span>
                        </button>
                    </Link>
                    <Link
                        passHref
                        className="group mr-2 rounded-lg p-2 duration-300 hover:bg-slate-100/60"
                        href="/hue-generator"
                        rel="noreferrer"
                    >
                        <button className="flex items-center transition-colors">
                            <span className="font-pacifico text-xl font-semibold text-slate-600">
                                Hue Generator
                            </span>
                        </button>
                    </Link>
                    <Link
                        passHref
                        href="https://github.com/ridemountainpig/"
                        rel="noreferrer"
                        target="_blank"
                    >
                        <button className="flex items-center transition-colors duration-300">
                            {iconGitHub}
                        </button>
                    </Link>
                </div>
            </div>
        </header>
    );
}
