import Image from "next/image";
import Link from "next/link";
import { House } from "lucide-react";

export default function HueError() {
    return (
        <div className="h-[50vh] py-20">
            <div className="flex w-full justify-center">
                <h2 className="font-pacifico mt-16 w-[95%] text-center text-3xl font-bold tracking-widest text-slate-600 select-none md:text-4xl">
                    Couldn&apos;t find the hue you&apos;re looking for
                </h2>
            </div>
            <div className="mt-12 flex w-full justify-center gap-x-2">
                <Link href="/">
                    <button className="flex cursor-pointer items-center gap-x-2 rounded-lg border bg-white p-2 px-4 py-2 transition-colors duration-300 hover:bg-slate-100">
                        <House strokeWidth={1.5} size={24} />
                        <span className="font-mono text-sm font-semibold lg:text-base">
                            Go Homepage
                        </span>
                    </button>
                </Link>
                <Link href="/hue-generator">
                    <button className="flex cursor-pointer items-center gap-x-2 rounded-lg border bg-white p-2 px-4 py-2 transition-colors duration-300 hover:bg-slate-100">
                        <Image
                            src={"/favicon.ico"}
                            alt="Hue icon"
                            width={24}
                            height={24}
                        ></Image>
                        <span className="font-mono text-sm font-semibold lg:text-base">
                            Generate Hue
                        </span>
                    </button>
                </Link>
            </div>
        </div>
    );
}
