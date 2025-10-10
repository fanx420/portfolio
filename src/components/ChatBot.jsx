import React, { lazy, Suspense } from "react";
import Avatar from "../assets/avatar.png";

// Lazy-load the ChatBot component
const ChatBot = lazy(() => import("react-chatbotify"));

export default function Bot() {
    const id = "chatbot";

    const settings = {
        header: {
            title: "Fanx",
            avatar: Avatar
        },
        botBubble: {
            avatar: Avatar,
            showAvatar: true
        },
        general: {
            showFooter: false
        },
        chatHistory: {
            disabled: true
        },
        chatButton: {
            icon: Avatar
        },
        notification: {
            disabled: true
        },
        tooltip: {
            text: "Ask Me"
        }
    };

    const styles = {
        headerStyle: {
            background: "#06022ff2"
        },
        chatWindowStyle: {
            background: "#8a92eeff"
        }
    };

    const flow = {
        start: {
            message: "Hey there! 👋 I'm Fanx — your friendly full-stack dev assistant. What would you like to know about me?",
            options: ["💻 Tech Stack", "🚀 Projects", "👨‍💻 About Me"],
            path: (params) => params.userInput
        },
        "💻 Tech Stack": {
            message: "I work with a modern web development stack! 💡\n\nFrontend: HTML, CSS, JavaScript, React.js, Tailwind CSS\nBackend: PHP, Laravel\nDatabase: MySQL\nTools: Git, VSCode.",
            options: ["🚀 Projects", "👨‍💻 About Me", "🏠 Start Over"],
            path: (params) => params.userInput
        },
        "🚀 Projects": {
            message: "I've worked on several exciting projects that showcase my skills and creativity! ⚙️\n\n1️⃣ **Portfolio Website** – A personal site built with React and Tailwind CSS, designed to highlight my work and experience in a clean, responsive layout.\n\n2️⃣ **CALC (Computational Assistance and Learning Companion)** – My capstone project developed using Python and the Gemini API. It’s an intelligent tool designed to assist with learning and complex problem-solving.\n\n3️⃣ **Certicode** – An internship project built with React.js and Laravel. It streamlines certificate generation and management through a seamless, user-friendly interface.",
            options: ["💻 Tech Stack", "👨‍💻 About Me", "🏠 Start Over"],
            path: (params) => params.userInput
        },
        "👨‍💻 About Me": {
            message: "I’m a passionate Full Stack Developer who loves creating clean, efficient, and user-friendly applications. 👨‍💻\n\nWhen I’m not coding, I enjoy learning new tech, experimenting with design, and contributing to open source.\n\nWould you like to check out my projects or explore my tech stack?",
            options: ["🚀 Projects", "💻 Tech Stack", "🏠 Start Over"],
            path: (params) => params.userInput
        },
        "🏠 Start Over": {
            message: "No problem! Let’s start again — what would you like to know?",
            options: ["💻 Tech Stack", "🚀 Projects", "👨‍💻 About Me"],
            path: (params) => params.userInput
        }
    };


    return (
        <Suspense fallback={<div style={{ color: "white" }}>Loading chatbot...</div>}>
            <ChatBot id={id} flow={flow} settings={settings} styles={styles} />
        </Suspense>
    );
}
