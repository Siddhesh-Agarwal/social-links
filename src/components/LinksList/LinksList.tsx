import "./LinkList.css";
import {
    FaFlaskVial,
    FaGithub,
    FaGlobe,
    FaHashnode,
} from "react-icons/fa6";
import { motion } from "framer-motion";

type link = {
    name: string;
    url: string;
    icon: JSX.Element;
    description: string;
}

const Links: link[] = [
    {
        name: "Personal Website",
        url: "https://siddhesh-tech.vercel.app/",
        icon: <FaGlobe />,
        description: "My portfolio website",
    },
    {
        name: "GitHub",
        url: "https://github.com/Siddhesh-Agarwal/",
        icon: <FaGithub />,
        description: "My GitHub profile",
    },
    {
        name: "Blogs",
        url: "https://siddhesh2003.hashnode.dev/",
        icon: <FaHashnode />,
        description: "My technical blog and newsletter",
    },
    {
        name: "Projects",
        url: "https://siddhesh-tech.vercel.app/projects/",
        icon: <FaFlaskVial />,
        description: "A collection of my projects",
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
                    transition={{ duration: 0.2 }}
                    key={link.name}
                >
                    <span className="icon">
                        {link.icon}
                    </span>
                    <strong>{link.name}</strong>
                    <p className="desc">
                        : {link.description}
                    </p>
                </motion.a>
            ))}
        </motion.div>
    )
}
