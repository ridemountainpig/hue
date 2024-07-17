interface HueTitleProps {
    h1Title: string;
    h2Title: string;
}

export default function HueTitle({ h1Title, h2Title }: HueTitleProps) {
    return (
        <>
            <h1 className="hidden">{h1Title}</h1>
            {h2Title != "" && (
                <div className="flex w-full justify-center">
                    <h2 className="select-none font-pacifico text-5xl font-bold tracking-widest text-slate-600">
                        {h2Title}
                    </h2>
                </div>
            )}
        </>
    );
}
