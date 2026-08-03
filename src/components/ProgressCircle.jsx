export default function ProgressCircle({
    value
}) {

    return (
        <div className="relative lg:w-25 md:w-20 w-15 lg:h-20 md:h-25 h-15 z-30 opacity-50">
            <div className={`absolute top-0 left-0 lg:w-20 md:w-14 w-10 lg:h-20 md:h-14 h-10 bg-indigo-950 rounded-full`}/>
            <div className={`absolute top-0 left-0 lg:w-10 md:w-7 w-5 lg:h-20 md:h-14 h-10 rounded-l-full  bg-indigo-600 `} 
                style={{
                    transformOrigin:"right center",
                    rotate:`${value*360}deg`
                }}
            />
            <div className={`absolute top-0 left-0 lg:w-10 md:w-7 w-5 lg:h-20 md:h-14 h-10 z-35 ${value<0.5?"bg-indigo-950 rounded-l-full":"bg-indigo-600 rounded-r-full translate-x-full"}`}/>
            <div className="absolute top-1 left-1 bg-black rounded-full lg:w-18 md:w-12 w-8 lg:h-18 md:h-12 h-8 z-40 flex justify-center items-center">
                <h3 className="lg:text-xl md:text-sm text-[0.6rem] font-bold ">{(value*100).toFixed(0)}%</h3>
            </div>
        </div>
    );
}