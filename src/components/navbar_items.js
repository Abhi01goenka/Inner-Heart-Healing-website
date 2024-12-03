import {
    IconBrandGithub,
    IconBrandX,
    IconExchange,
    IconHome,
    IconNewSection,
    IconTerminal2,
    IconUser,
    IconCode,
    IconBrandLinkedin,
    IconBrandInstagram,
    IconStarFilled,
    IconMail,
    IconUsers,
    IconBriefcase,
    IconStars,
    IconFeather,
    IconCertificate,
    IconCalendarEvent,
    IconHeadphones,
    IconVirus 
} from "@tabler/icons-react";
import Image from "next/image";
const links = [
    {
        title: "Home",
        icon: (
            <IconHome className="h-full w-full" />
        ),
        href: "/",
        target: ""
    },

    {
        title: "About Us",
        icon: (
            <IconUsers className="h-full w-full" />
        ),
        href: "/aboutUs",
        target: ""
    },
    {
        title: "Services",
        icon: (
            <IconBriefcase className="h-full w-full" />
        ),
        href: "/services",
        target: ""
    },
    {
        title: "Testimonials",
        icon: (
            <IconStars className="h-full w-full" />
        ),
        href: "/testimonials"
    },
    {
        title: "Blog",
        icon: (
            <IconFeather className="h-full w-full" />
        ),
        href: "/blog",
        target: ""
    },
    {
        title: "Courses Offered",
        icon: (
            <IconCertificate className="h-full w-full" />
        ),
        href: "/coursesOffered",
        target: ""
    },
    {
        title: "Upcoming Events",
        icon: (
            <IconCalendarEvent className="h-full w-full" />
        ),
        href: "upcomingEvents",
        target: ""
    },

    {
        title: "Contact",
        icon: (
            <IconHeadphones className="h-full w-full" />
        ),
        href: "/contact",
        target: ""
    },
    {
        title: "Omicron",
        icon: (
            <IconVirus className="h-full w-full" />
        ),
        href: "/omicron",
        target: ""
    },
];

export default links;