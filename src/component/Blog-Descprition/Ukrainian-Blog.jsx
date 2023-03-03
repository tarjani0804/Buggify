import React, { useRef, useLayoutEffect } from "react";
import './Blog.css';
import { useNavigate } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';

const Report = () => {

    const scrollRef = useRef(null);
    useLayoutEffect(() => {
        if (scrollRef.current) {
            window.scrollTo(0, 0);
        }
    }, []);

    const navigate = useNavigate()
    const gotoBlogs = () => {
        navigate('/academyBlogs');
    }
    const gotoCiscoVulernability = () => {
        navigate('/AcademyBlogs-Blog2')
    }
    const gotoAtlassianBlog = () => {
        navigate('/AcademyBlogs-Blog3')
    }
    const gotoGamblingBlog = () => {
        navigate('/AcademyBlogs-Blog4')
    }

    return (
        <>
            <div className="blog-div" ref={scrollRef}>
                <div className="blog-heading">
                    <h2 className="blog-h mint">Ukraine Hit with New Golang-based 'SwiftSlicer' Wiper Malware in Latest Cyber Attack</h2>



                    <img></img>
                </div>

                <div className="back-to-home-link" onClick={gotoBlogs}>
                    <BsArrowLeft className="arrow" /> Back To Blogs
                </div>


                <div className="blog-p1">
                    <p className="blog-p1-p">Ukraine has come under a fresh cyber onslaught from Russia that involved the deployment of a previously undocumented Golang-based data wiper dubbed <span style={{ color: "#878787" }}>SwiftSlicer.</span>

                        <br /><br />  ESET attributed the attack to Sandworm, a nation-state group linked to Military Unit 74455 of the Main Intelligence Directorate of the General Staff of the Armed Forces of the Russian Federation (GRU).

                        <br /><br />  "Once executed it deletes shadow copies, recursively overwrites files located in %CSIDL_SYSTEM%\drivers, %CSIDL_SYSTEM_DRIVE%\Windows\NTDS and other non-system drives and then reboots computer," ESET disclosed in a series of tweets.

                        <br /><br />  The overwrites are achieved by using randomly generated byte sequences to fill 4,096 byte-length blocks. The intrusion was discovered on January 25, 2023, the Slovak cybersecurity company added.

                        <br /><br />  "Attackers deployed the SwiftSlicer wiper using Group Policy of Active Directory," Robert Lipovsky, senior malware researcher for ESET, told The Hacker News. "Once SwiftSlicer malware is executed, it corrupts users files and makes the computer unbootable."
                        <br /><br />  Sandworm, also tracked under the monikers BlackEnergy, Electrum, Iridium, Iron Viking, TeleBots, and Voodoo Bear, has a history of staging disruptive and <a href="https://thehackernews.com/2022/09/russian-sandworm-hackers-impersonate.html" target='_blank'> destructive cyber campaigns </a>targeting organizations worldwide since at least 2007.

                        <br /><br /> The sophistication of the threat actor is evidenced by its multiple distinct kill chains, which comprise a wide variety of custom tools such as <a href="https://www.welivesecurity.com/2022/03/21/sandworm-tale-disruption-told-anew/" target='_blank' >BlackEnergy, GreyEnergy, Industroyer, NotPetya, Olympic Destroyer, Exaramel,</a> and <a href="https://thehackernews.com/2022/04/fbi-shut-down-russia-linked-cyclops.html" target='_blank'> Cyclops Blink</a>

                        <br /><br /> In 2022 alone, coinciding with Russia's military invasion of Ukraine, Sandworm has unleashed <a href="https://thehackernews.com/2022/01/a-new-destructive-malware-targeting.html" target='_blank'> WhisperGate,</a> <a href="https://thehackernews.com/2022/02/new-wiper-malware-targeting-ukraine.html" target='_blank'> HermeticWiper,</a> <a href="https://thehackernews.com/2022/03/second-new-isaacwiper-data-wiper.html" target='_blank'> IsaacWiper,</a> <a href="https://thehackernews.com/2022/03/caddywiper-yet-another-data-wiping.html" target='_blank'> CaddyWiper,</a> <a href="https://thehackernews.com/2022/04/russian-hackers-tried-attacking.html" target='_blank'> Industroyer2,</a> <a href="https://thehackernews.com/2022/11/microsoft-blames-russian-hackers-for.html" target='_blank'> Prestige, </a>and <a href="https://thehackernews.com/2022/11/russia-based-ransomboggs-ransomware.html" target='_blank'> RansomBoggs </a> against critical infrastructure in Ukraine.

                        <br /> <br />"When you think about it, the growth in wiper malware during a conflict is hardly a surprise," Fortinet FortiGuard Labs researcher Geri Revay said in a report published this week, describing 2022 as the year of the wiper. "It can scarcely be monetized. The only viable use case is destruction, sabotage, and cyberwar."

                        <br /> <br /> The discovery of SwiftSlicer points to the consistent use of wiper malware variants by the Russian adversarial collective in attacks designed to wreak havoc in Ukraine.It's further illustrative of the <a href="https://decoded.avast.io/davidalvarez/go-malware-on-the-rise/" > growing adoption </a> of Golang by threat actors, given its native multi-platform support and relative ease of development.

                        <br /> <br /> The development also comes as the Computer Emergency Response Team of Ukraine(CERT - UA) linked Sandworm to a recent largely unsuccessful cyber attack on the national news agency Ukrinform.

                        <br /> <br /> The intrusion, which is suspected of having been carried out no later than December 7, 2022, entailed the use of five different pieces of data wiping programs, namely CaddyWiper, ZeroWipe, <a href="https://attack.mitre.org/software/S0195/" target='_blank'> SDelete, </a> <a href="https://thehackernews.com/2022/04/russian-hackers-tried-attacking.html" target='_blank'> AwfulShred, </a> and BidSwipe targeting Windows, Linux, and FreeBSD systems.

                        <br /> <br /> "It was established that the final stage of the cyber attack was initiated on January 17, 2023," CERT - UA said in an advisory. "However, it had only partial success, in particular, in relation to several data storage systems."

                        <br /> <br />  Sandworm is not the only group that has its <a href="https://www.trustwave.com/en-us/resources/blogs/spiderlabs-blog/overview-of-the-cyber-weapons-used-in-the-ukraine-russia-war/" target='_blank'> eyes on Ukraine. </a> Other Russian state - sponsored actors such as APT29, <a href="https://thehackernews.com/2023/01/british-cyber-agency-warns-of-russian.html" target='_blank'> COLDRIVER,</a> and <a href="https://thehackernews.com/2023/01/gamaredon-group-launches-cyberattacks.html" target='_blank'> Gamaredon </a>  have actively targeted a range of Ukrainian organizations since the onset of the war.
                    </p>
                </div>



                <div className="more-blogs-div">
                    <h1 className="more-blogs-h">More From Blogs </h1>
                    <section className="cards-wrapper">
                        <div className="card-grid-space">
                            <div className="num">01</div>
                            <a className="card box" onClick={gotoCiscoVulernability}>
                                <div>
                                    <h1>New High-Severity Vulnerabilities Discovered in Cisco IOx and F5 BIG-IP Products</h1>

                                    <div className="tags">
                                        <div className="tag" onClick={gotoCiscoVulernability}>Read More</div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="card-grid-space">
                            <div className="num">02</div>
                            <a className="card box" onClick={gotoAtlassianBlog}>
                                <div>
                                    <h1>Atlassian's Jira Service Management Found Vulnerable to Critical Vulnerability</h1>

                                    <div className="tags">
                                        <div className="tag" onClick={gotoAtlassianBlog}>
                                            Read More
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="card-grid-space">
                            <div className="num">03</div>
                            <a className=" card box" onClick={gotoAtlassianBlog}>
                                <div>
                                    <h1>Experts Warn of 'Ice Breaker' Cyberattacks Targeting Gaming and Gambling Industry</h1>

                                    <div className="tags">
                                        <div className="tag" onClick={gotoAtlassianBlog}>Read More</div>
                                    </div>
                                </div>
                            </a>
                        </div>

                    </section>


                </div>


            </div>
        </>
    )
}


export default Report;