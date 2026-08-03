import BgFog from "../components/BgFog";
import useInView from "../hooks/UseInView";

export default function Section({children}) {
    
    const [ref, isVisible] = useInView();   

    return (
        <section className="relative max-w-full overflow-x-clip">

            <div  ref={ref} className={` mt-30 fade-in ${isVisible?"is-visible":""} `}>
                {children}
            </div>
        </section>
    );
}