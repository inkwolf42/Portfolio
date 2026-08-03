export default function ProjectListItem({
    index,name,tags,desc
}) {
    return (
        <div className={`md:h-50 bg-white/5 rounded-xl z-20 backdrop-blur-3xl shadow-[0_0_5px_1px] shadow-gray-400/30 p-5 flex ${index%2==0?"md:flex-row-reverse":"md:flex-row"} flex-col gap-5`}>
            <div className="bg-violet-950/50 rounded aspect-video max-h-50">
            </div>
            <div className="flex flex-col">
                <h2 className="text-2xl font-bold font-mono">{name}</h2>
                <div className="flex md:flex-row flex-col gap-3 mb-2 mt-1 items-baseline flex-wrap">
                    <span>Tags : </span>
                    <div className="flex flex-row flex-wrap lg:gap-x-2 gap-y-1.5">
                        {
                            tags.map((v,i)=>(
                                <span key={i} className="bg-gray-700 p-1 py-0.5 rounded lg:px-3 font-bold font-mono mx-1 lg:text-xs lg:h-5 text-[0.5rem] uppercase">{v}</span>
                            ))
                        }
                    </div>
                </div>
                <p className="text-xs lg:text-base overflow-y-scroll">
                    {desc}
                </p>
            </div>
        </div>
    );
}