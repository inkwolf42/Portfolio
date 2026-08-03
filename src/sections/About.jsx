import Section from "./Section";
import programming_computer from '../assets/programming_computer.json'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'

export default function About() {


    return (
        <Section>
            <h1 id="about">About</h1>
            <div className='flex md:flex-row flex-col-reverse gap-20 mt-10 lg:mb-75 mb-20'>
                <p className='flex flex-col flex-2 font-mono opacity-90'>
                Hi and welcome to me portfolio page, my name is Mahmoud Benyoucef and I am an engenier in software devolopement, I am currently a student in my 4 year in Farhat Abas but I have a experiance that it makes me confendint I can help you make the software you disaer at a reasonable price.  
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