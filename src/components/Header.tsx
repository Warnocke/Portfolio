// Header UI component

export default function Header(){
    const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    return(
        <nav className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-sm px-24 py-6 flex justify-between items-center">
            <span> <button className="text-white hover:text-gray-300 text-4xl px-14" onClick={() => scrollTo("greeting")}>Evan Warnock</button> </span>
                <div className="flex gap-12 pr-12">
                    {["about", "Projects", "contact"].map((section) => (
                    <button
                    key={section}
                    onClick={() => scrollTo(section)}
                    className="text-white hover:text-gray-300 text-3xl capitalize transition-colors">
                        {section}
                    </button>))}
                </div>
        </nav>
    )
}