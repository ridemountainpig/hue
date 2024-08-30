interface HueTitleProps {
    h1Title: string;
    h2Title: string;
}

export default function HueTitle({ h1Title, h2Title }: HueTitleProps) {
    return (
        <div className="pt-10">
            <h1 className="hidden">{h1Title}</h1>
            {h2Title != "" && (
                <div className="flex w-full justify-center">
                    <h2 className="select-none font-pacifico text-3xl font-bold tracking-widest text-slate-600 sm:text-4xl xl:text-5xl">
                        {h2Title}
                    </h2>
                </div>
            )}
        </div>
    );
}
