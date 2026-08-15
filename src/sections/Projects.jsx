import Section from "./Section";

import en_projects from "../assets/translations/EnProjects.json"
import ar_projects from "../assets/translations/ArProjects.json"
import ProjectListItem from "../components/ProjectListItem";
import { useTranslation } from "react-i18next";
import { useSearchParams } from "react-router-dom";

export default function Projects() {
    const { t } = useTranslation();
    
    const [searchParams] = useSearchParams()
    const lang = searchParams.get("lang") == "ar" ? "ar" : "en"
    
    return (
        <Section>
            <div  className="flex flex-col">
                <h1 id="projects">{t("projects")}</h1>
                <div className="flex flex-col gap-15 items-stretch py-3">
                    {
                        (lang=="ar"?ar_projects:en_projects).map((v,index)=>(<ProjectListItem
                            key={index}
                            index={index}
                            project={v}
                        />))
                    }

                </div>
            </div>
        </Section>
    );
}