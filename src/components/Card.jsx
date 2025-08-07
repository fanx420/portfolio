export default function Card({ title, descriptiion, className ="", pills = [], children }) {
    return (
        <div className="card rounded-2xl xl:w-[60%] lg:w-[60%] md:w-[90%] sm:w-full p-6 bg-gradient-to-b from-[rgb(20,20,57)] to-[#181717] text-white my-2">
            <div className="mb-4 mt-4 text-start ">
                <h1 className="text-6xl lg:text-7xl md:text-5xl font-bold">{title}</h1>
            </div>
            <div className="mt-5">
                <p className="text-lg">{descriptiion}</p>
            </div>
            <div className="flex flex-row flex-wrap gap-4 mt-4">
                    {pills.map((pill, index) => (
                        <span
                            key={index}
                            className=" border text-white px-3 py-1 rounded-full text-sm font-medium hover:bg-white hover:text-black transition-colors duration-300 cursor-pointer"
                        >
                            {pill}
                        </span>
                    ))}
            </div>
             <div className={`${className}`}>{children}</div>

           
        </div>
    )
}