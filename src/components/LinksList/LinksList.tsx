import "./LinkList.css";
import {
    FaGlobe,
    FaLinkedin,
    FaGithub,
    FaDev,
} from "react-icons/fa";
import { motion } from "framer-motion";

type link = {
    name: string;
    url: string;
    icon: JSX.Element;
    description?: string;
}

const Links: link[] = [
    {
        name: "Personal Website",
        url: "https://siddhesh-agarwal.github.io/",
        icon: <FaGlobe />,
        description: "My portfolio website",
    },
    // {
    //     name: "LinkedIn",
    //     url: "https://www.linkedin.com/in/siddhesh-agarwal/",
    //     icon: <FaLinkedin />,
    //     description: "Let's connect!",
    // },
    {
        name: "GitHub",
        url: "https://github.com/Siddhesh-Agarwal",
        icon: <FaGithub />,
        description: "My open source contributions",
    },
    {
        name: "Blogs",
        url: "https://dev.to/siddhesh_agarwal",
        icon: <FaDev />,
        description: "My technical blogs",
    }
]

export default function LinksList() {
    return (
        <motion.div className="links">
            {Links.map((link) => (
                <motion.a
                    href={link.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="link"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    key={link.name}
                >
                    <span className="icon">
                        {link.icon}
                    </span>
                    <strong>{link.name}</strong>
                    <p className="desc">: {link.description}</p>
                </motion.a>
            ))}
        </motion.div>
    )
}
