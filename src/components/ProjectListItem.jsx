import { useTranslation } from "react-i18next";
import GitHubIcon       from "../assets/contactLogos/github.svg?react";


export default function ProjectListItem({
    index,project
}) {
    const name = project.name 
    const tags = project.tags 
    const desc = project.desc
    const git_link = project.github_link
    const flip = index%2==0
    const image_path = project.image_path ?? "favicon.svg"
    
    const { t } = useTranslation();
    

    return (
        <div className={`md:h-50 bg-white/5 rounded-xl z-20 backdrop-blur-3xl shadow-[0_0_5px_1px] shadow-gray-400/30 p-5 flex ${flip?"md:flex-row-reverse":"md:flex-row"} flex-col gap-5`}>
            <div className="bg-linear-to-b from-violet-900/50 to-violet-400/50 rounded  max-h-50 aspect-video">
                <img src={image_path} alt="Project Image" className="object-scale-down mx-auto h-full p-2 rounded" />
            </div>
            <div className="flex flex-col w-full">
                <h2 className="text-2xl font-bold font-mono">{name}</h2>
                <div className="flex md:flex-row  flex-col gap-3 mb-2 mt-1 items-start flex-wrap">
                    <span>{t("tags")}</span>
                    <div className="flex flex-row flex-wrap lg:gap-x-2 gap-y-1.5">
                        {
                            tags.map((v,i)=>(
                                <span key={i} className="bg-gray-700 p-1 py-0.5 rounded lg:px-3 font-bold font-mono mx-1 lg:text-xs lg:h-5 text-[0.5rem] uppercase">{v}</span>
                            ))
                        }
                    </div>
                </div>
                <p className="text-xs lg:text-base overflow-y-scroll ">
                    {desc}
                </p>
                <div className="flex-1 "/>
                <div className={`h-5 flex flex-row ${flip ? "justify-start" : "justify-end"}`}>
                    <a href={git_link} className={`flex w-fit ${flip ? "flex-row" : "flex-row-reverse"} items-center gap-2 opacity-50 hover:opacity-100 cursor-pointer`}>
                        <GitHubIcon className="w-4 h-4"/>
                        <p className="font-mono tracking-tighter text-sm">
                            {t("open_in_github")}
                        </p>
                    </a>
                </div>
            </div>
        </div>
    );
}