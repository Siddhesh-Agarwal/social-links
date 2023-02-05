import {motion} from "framer-motion";
import {
    FaTwitter,
    FaLinkedin,
    FaEnvelope,
} from "react-icons/fa";
import "./SocialLinks.css";


type link = {
    name: string;
    url: string;
    icon: JSX.Element;
}

const Links: link[] = [
    {
        name: "Twitter",
        url: "https://twitter.com/Siddhesh2503",
        icon: <FaTwitter />,
    },
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/siddhesh-agarwal/",
        icon: <FaLinkedin />,
    },
    {
        name: "Email",
        url: "mailto:siddhesh.agarwal@gmail.com",
        icon: <FaEnvelope />,
    },
]

export default function SocialLinks() {
    return (
        <motion.div className="social-links">
            {Links.map((link) => (
                <motion.a
                    className="social-link"
                    title={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.9}}
                    transition={{duration: 0.2}}
                >
                    {link.icon}
                </motion.a>
            ))}
        </motion.div>
    )
}
