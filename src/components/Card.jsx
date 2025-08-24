import { use, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"

export default function Card({ title, description, pills = [], children, image, imageStyle = "", contentStyle = "", childrenClassName = "", titleStyle = "", badge, cardStyle = "" }) {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
        });
    }, [])


    return (

        <div className={`card rounded-2xl xl:w-[65%] lg:w-[60%] md:w-[97%] h-auto sm:w-full lg:p-4 p-2 bg-gradient-to-b from-[rgb(20,20,57)] to-[#181717] text-white my-2 ${cardStyle}`}
            data-aos="fade-up">
            <img className={`picture ${imageStyle}`} src={image} alt="" />
            <div className={`${contentStyle}`}>
                <div className={` ${titleStyle} `} >

                    <h1>{title}</h1>

                </div>
                <div className="mt-4 text-center md:text-start">
                    <div className="badge mb-4">{badge}</div>
                    <p className="text-lg">{description}</p>
                </div>
                <div className="flex flex-row flex-wrap gap-2 mt-4">
                    {pills.map((pill, index) => (
                        <span
                            key={index}
                            className=" border text-white px-3 py-1 rounded-full text-sm  hover:bg-gray-700 transition-colors duration-300 cursor-pointer"
                        >
                            {pill}
                        </span>
                    ))}
                </div>

            </div>



            {children && <div className={`${childrenClassName}`}>{children}</div>}
        </div>
    )
}