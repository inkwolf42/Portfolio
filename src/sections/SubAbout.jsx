import { useEffect, useState } from "react";
import Section from "./Section";
import projects from "../assets/Projects.json"


const words = [
    "C/C++",
    "Java",
    "Python"
]

let index = 0;

function getNextWord(){
    index = (index+1)%words.length
    return words[index]
}

export default function SubAbout() {
    const [currentWord,setCurrentWord] = useState(getNextWord())
    const [isVisible, setIsVisible] = useState(true);

    useEffect(()=>{
        const insterval = setInterval(()=>{
            setIsVisible(false);
            setTimeout(() => {
                setCurrentWord(getNextWord());
                setIsVisible(true);
            }, 300);
        },4000)
        return ()=>clearInterval(insterval)
    })


    return (
        <Section>
            <div className="flex md:flex-row flex-col md:gap-0 gap-20 md:mb-0 mb-30 w-full scale-125 justify-between ">
                <div className="flex flex-col flex-1 items-center gap-5 text-indigo-400">
                    <p className="lg:text-xl md:text-sm text-center text-wrap h-10 w-3/4 text-xl font-extrabold uppercase opacity-50">Number of Projects</p>
                    <h3 className="text-6xl font-extrabold ">{projects.length}</h3>
                </div>
                <div className="flex flex-col flex-1 items-center gap-5 text-indigo-400">
                    <p className="lg:text-xl md:text-sm text-center text-wrap h-10 w-3/4 text-xl font-extrabold uppercase opacity-50">I have experiance in</p>
                    <h3 className={`text-5xl font-extrabold word-fade-in ${isVisible?'is-word-visible':''}`}>{currentWord}</h3>
                </div>
                <div className="flex flex-col flex-1 items-center gap-5 text-indigo-400">
                    <p className="lg:text-xl md:text-sm text-center text-wrap h-10 w-3/4 text-xl font-extrabold uppercase opacity-50">My Age Is</p>
                    <h3 className="text-6xl font-extrabold ">20</h3>
                </div>
                
            </div>
        </Section>
    );
}