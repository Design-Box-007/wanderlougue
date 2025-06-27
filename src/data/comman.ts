import { FaFacebook, FaLinkedin, FaInstagram, FaMedium } from "react-icons/fa";
import { IconType } from "react-icons";
import { FaXTwitter } from "react-icons/fa6";

export interface NavLinksType {
    navTitle: string;
    navHref?: string;
    subLinks?: NavLinksType[]; // Allow nesting
}

export interface SocialMediaLinks {
    icon: IconType;
    link: string;
}

export const navLinks: NavLinksType[] = [
    { navTitle: "Home", navHref: "/" },
    { navTitle: "About Us", navHref: "/about-us" },
    { navTitle: "Blogs", navHref: "/blogs" },
    { navTitle: "Travel Guides", navHref: "/travel-guides" },
    { navTitle: "Resources", navHref: "/resources" },
    { navTitle: "Newsletter", navHref: "/newsletter" },
];



export const socialMedia: SocialMediaLinks[] = [
    { icon: FaFacebook, link: "https://facebook.com" },
    { icon: FaLinkedin, link: "https://x.com/Spacesculpt_uae " },
    { icon: FaInstagram, link: "https://instagram.com" },
    { icon: FaXTwitter, link: "https://x.com/Spacesculpt_uae" },
    { icon: FaMedium, link: "https://medium.com/@Spacesculp" },
];