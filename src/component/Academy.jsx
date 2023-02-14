import React, { useState } from "react";
import './Academy.css';
import AcademyGetStarted from "../component/AcademyGetStarted";
import AcademyAnnouncement from "../component/AcademyAnnouncement";
import AcademyCourses from "../component/AcademyCourses";
import AcademyVideos from "../component/AcademyVideos";
import AcademyBlogs from "../component/AcademyBlogs";
import AcademyDiscord from "../component/AcademyDiscord";

const Academy = () => {
    const [activeLink, setActiveLink] = useState('Get Started');
    const [content, setContent] = useState(<AcademyGetStarted />);

    const links = [
        { title: 'Get Started with Hackacdemy', component: <AcademyGetStarted /> },
        { title: 'Courses', component: <AcademyCourses /> },
        { title: 'Announcement', component: <AcademyAnnouncement /> },
        { title: 'Videos', component: <AcademyVideos /> },
        { title: 'Blogs', component: <AcademyBlogs /> },
        { title: 'Discord', component: <AcademyDiscord /> },
    ];

    const handleClick = (link) => {
        setActiveLink(link.title);
        setContent(link.component);
    };

    return (
        <>
            <div className="a1" style={{ backgroundColor: "#0b0b0b" }}>
                <nav className="academy-na">
                    <ul className="academy-nav-ul">
                        {links.map((link) => (
                            <li key={link.title} className="academy-nav-li">
                                <a
                                    href="#"
                                    style={{
                                        color: activeLink === link.title ? '#878787' : '#000000',
                                    }}
                                    onClick={() => handleClick(link)}

                                >
                                    {link.title}
                                </a>
                            </li>
                        ))}
                    </ul>

                </nav>
            </div>
            <div>{content}</div>

        </>
    );
}


export default Academy;