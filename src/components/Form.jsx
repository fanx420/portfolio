import { useRef } from "react";
import emailjs from "emailjs-com"
import { showSuccess, showError } from "./Toast";

export default function Form() {
    const apiKey = import.meta.env.VITE_PUBLIC_KEY;
    const serviceId = import.meta.env.VITE_SERVICE_ID;
    const templateId = import.meta.env.VITE_TEMPLATE_ID;
    const formRef = useRef();

    const date = new Date();
    const currentDate = date.toISOString().split('T')[0]; 

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(serviceId, templateId, formRef.current, apiKey)
            .then(() => [
                showSuccess("Message sent successfully!"),
                formRef.current.reset()
            ])
            .catch((error) => {
                console.error("Error sending email:", error);
                showError("Failed to send message. Please try again later.");
            });

    }
    return (
        <>
            <div className="border w-[60%] items-center m-auto rounded-2xl p-4">
                <form className="flex flex-col items-center justify-center" ref={formRef} onSubmit={sendEmail}>
                    <input type="text" name="name" placeholder="Your Name" required />
                    <input type="email" name="email" placeholder="Your Email" required />
                    <input type="hidden" name="time" value={currentDate} />
                    <textarea className="h-[200px] " name="message" placeholder="Your Message" required />
                    <button className="border p-2 w-[100px] rounded-full hover:bg-gray-700" type="submit">Send</button>
                </form>
            </div>

        </>



    );
}