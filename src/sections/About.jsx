import Section from "./Section";
import programming_computer from '../assets/programming_computer.json'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import { useTranslation } from "react-i18next";

export default function About() {

    const {t} = useTranslation()

    return (
        <Section>
            <h1 id="about">{t("about")}</h1>
            <div className='flex md:flex-row flex-col-reverse gap-20 mt-10 lg:mb-75 mb-20'>
                <p className='flex flex-col flex-2 font-mono opacity-90'>
                    {t("about_description")}
                </p>  
                <div className='flex-1 bg-indigo-800 lg:my-0 my-10 rounded-2xl flex justify-center items-center'>
                    <DotLottieReact
                        className='md:scale-250 scale-180 w-full h-fit  '
                        loop
                        autoplay
                        layout={{
                            fit: 'contain',
                            align: [0.5, 0.25],
                        }}
                        data={programming_computer}
                    />
                </div>
            </div>
        </Section>
    );
}