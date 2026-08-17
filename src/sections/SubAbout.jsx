import { useEffect, useState, useRef } from "react";
import Section from "./Section";
import projects from "../assets/translations/EnProjects.json";
import { useTranslation } from "react-i18next";

const en_words = [
    "Web development",
    "full-stack development",
    "mobile development",
    "frontend development",
    "backend development",
];

const ar_words = [
    "تطوير مواقع الويب",
    "صناعة تطبيقات الهاتف",
    "واجهات المستخدم",
    "الخوادم والأنظمة",
];

export default function SubAbout() {
    const { t, i18n } = useTranslation();
    const isAr = i18n.language === "ar";
    const words = isAr ? ar_words : en_words;

    const indexRef = useRef(0);
    const [currentWord, setCurrentWord] = useState(words[0]);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        indexRef.current = 0;
        setCurrentWord(words[0]);
        setIsVisible(true);
    }, [i18n.language]);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsVisible(false);
            setTimeout(() => {
                indexRef.current = (indexRef.current + 1) % words.length;
                setCurrentWord(words[indexRef.current]);
                setIsVisible(true);
            }, 300);
        }, 2000);
        return () => clearInterval(interval);
    }, [i18n.language]);

    return (
        <Section>
            <div className="flex md:flex-row flex-col md:gap-0 gap-20 md:mb-0 mb-30 w-full scale-125 justify-between">
                <div className="flex flex-col flex-1 items-center gap-5 text-indigo-400">
                    <p className="lg:text-xl md:text-sm text-center text-wrap h-10 w-3/4 text-xl font-extrabold uppercase opacity-50">
                        {t("number_of_projects")}
                    </p>
                    <h3 className="text-6xl font-extrabold">{projects.length}</h3>
                </div>
                <div className="flex flex-col flex-1 items-center gap-5 text-indigo-400">
                    <p className="lg:text-xl md:text-sm text-center text-wrap h-10 w-3/4 text-xl font-extrabold uppercase opacity-50">
                        {t("exp")}
                    </p>
                    <h3 className={`text-3xl font-extrabold word-fade-in max-w-2/3  text-center ${isVisible ? "is-word-visible" : ""}`}>
                        {currentWord}
                    </h3>
                </div>
                <div className="flex flex-col flex-1 items-center gap-5 text-indigo-400">
                    <p className="lg:text-xl md:text-sm text-center text-wrap h-10 w-3/4 text-xl font-extrabold uppercase opacity-50">
                        {t("age")}
                    </p>
                    <h3 className="text-6xl font-extrabold">20</h3>
                </div>
            </div>
        </Section>
    );
}