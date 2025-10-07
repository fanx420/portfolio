import ChatBot from "react-chatbotify";
import Avatar from "../assets/avatar.png"

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
        }, general: {
            showFooter: false
        },
        chatHistory: {
            disabled: true,
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

    }
    const styles = {
        headerStyle: {
            background: "#06022ff2",
        }
    }
    const flow = {
        "start": {
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
        "About Me": {
            message: "Full Stack Developer",
            options: ["Tech Stack", "Projects", "About Me"],
            path: (params) => params.userInput
        },
    };

    return (
        <ChatBot id={id} flow={flow} settings={settings} styles={styles} />
    )

}
