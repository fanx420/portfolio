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
        }
    };

    const flow = {
        start: {
            message: "Sup, I'm Fanx how can I help you",
            options: ["Tech Stack", "Projects", "About Me"],
            path: (params) => params.userInput
        },
        "Tech Stack": {
            message: "React.js, Laravel",
            options: ["Tech Stack", "Projects", "About Me"],
            path: (params) => params.userInput
        },
        "Projects": {
            message: "Website",
            options: ["Tech Stack", "Projects", "About Me"],
            path: (params) => params.userInput
        },
       " About Me": {
            message: "Full Stack Developer",
            options: ["Tech Stack", "Projects", "About Me"],
            path: (params) => params.userInput
        }
    };

    return (
        <Suspense fallback={<div style={{ color: "white" }}>Loading chatbot...</div>}>
            <ChatBot id={id} flow={flow} settings={settings} styles={styles} />
        </Suspense>
    );
}
