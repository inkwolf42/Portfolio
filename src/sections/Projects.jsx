import Section from "./Section";

import projects from "../assets/Projects.json"
import ProjectListItem from "../components/ProjectListItem";

export default function Projects() {
    return (
        <Section>
            <div  className="flex flex-col">
                <h1 id="projects">Projects</h1>
                <div className="flex flex-col gap-15 items-stretch py-3">
                    {
                        projects.map((v,index)=>(<ProjectListItem
                            key={index}
                            index={index}
                            desc={v.desc}
                            name={v.name}
                            tags={v.tags}
                        />))
                    }

                </div>
            </div>
        </Section>
    );
}