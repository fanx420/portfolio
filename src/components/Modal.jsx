import { use, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"

export default function Modal({ isOpen, setIsOpen, children }) {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
        });
    }, [])

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[9998] flex items-center justify-center bg-black/70 bg-backdrop-blur-xl"
            onClick={() => setIsOpen(false)}>
            <div className="relative bg-gradient-to-b from-[rgb(20,20,57)] to-[#181717] rounded-2xl w-auto text-center p-5 overflow-y-auto h-[85vh] shadow-lg"
                onClick={(e) => e.stopPropagation()}
                data-aos={isOpen ? "fade-up" : "fade-down"}>
                <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-2 right-2 text-4xl px-3"
                >
                    &times;
                </button>
                {children}
            </div>
        </div>
    )
}