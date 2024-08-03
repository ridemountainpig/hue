import Image from "next/image";
import { House } from "lucide-react";

export default function HueError() {
    return (
        <>
            <div className="flex w-full justify-center">
                <h2 className="mt-16 select-none font-pacifico text-4xl font-bold tracking-widest text-slate-600">
                    Couldn&apos;t find the hue you&apos;re looking for
                </h2>
            </div>
            <div className="mt-12 flex w-full justify-center gap-x-4">
                <a href="/">
                    <button className="flex items-center gap-x-2 rounded-lg border bg-white p-2 px-4 py-2 transition-colors duration-300 hover:bg-slate-100">
                        <House strokeWidth={2.5} size={20} />
                        <span className="font-mono text-lg font-semibold">
                            Go To Homepage
                        </span>
                    </button>
                </a>
                <a href="/hue-generator">
                    <button className="flex items-center gap-x-2 rounded-lg border bg-white p-2 px-4 py-2 transition-colors duration-300 hover:bg-slate-100">
                        <Image
                            src={"/favicon.ico"}
                            alt="Hue icon"
                            width={27}
                            height={27}
                        ></Image>
                        <span className="font-mono text-lg font-semibold">
                            Generate New Hue
                        </span>
                    </button>
                </a>
            </div>
        </>
    );
}
