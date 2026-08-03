export default function ContactButton({
    Icon,
    label,
    link
}) {
    return (
        <a href={link} target="_blank" className="flex overflow-clip flex-col w-1/5 items-stretch opacity-70 brightness-70 hover:brightness-100 hover:opacity-100 transition-all ">
            <Icon className="w-full h-full aspect-square m-0 xl:px-10 lg:px-8 md:px-5 px-3 xl:py-5"/>
            <h2 className="sm:text-xs md:text-sm lg:text-base lg:h-12 xl:text-lg xl:h-15 text-[0.6rem] font-bold h-10 text-center ">{label}</h2>
        </a>
    );
}