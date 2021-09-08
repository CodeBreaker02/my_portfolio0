import React from 'react';
import './Main.css'
import Header from "./Components/Header";
import {Col, Container, Row} from "reactstrap";
import MyMe from "./Assets/me.jpg";
import ResumeFr from "./Assets/Resume-fr.pdf";

const Main = () => {
    return (
        <main>
            <Header />
            <div className="sections">
                <section className="presentation">
                    <div>
                        <h5>Hi, my name is</h5>
                    </div>
                    <div>
                        <p className="display-3 fw-bold">Jordan Vitou.</p>
                    </div>
                    <div className="slate">
                        <p className="display-3 fw-bold">I build things for the web.</p>
                    </div>
                    <div className="description w-50">
                        <p>I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently,
                            I’m focused on building accessible, human-centered products at Upstatement.</p>
                    </div>
                    <div className="check-soc">
                        <button type="button" className="btn-lg btn-outline-primary mt-5"><a href="" className="link-primary">Check out my socials!</a></button>
                    </div>
                </section>
                <section className="about" id="about">
                    <h4 className="numbered-heading">
                        About Me
                    </h4>
                    <Row>
                        <Col>
                            <p>
                                As a kid, I loved spending time on computers and surfing the internet. I was always intrigued by how Google and Facebook worked. My curiosity continued to grow so I decided to take my first web courses on <span>openClassroom</span>  (I was hooked right away, when I managed to display my first web page on my browser). I wanted to learn more, so I enrolled in <span>Epitech Benin</span> where I learned how to learn. <br/>
                                <br/>
                                <br/> Today, I'm still learning and doing what I love. As a <span>web developer</span> , I know how to adapt but my creativity remains intact. My specialties include <span>my ability to learn new skills and languages</span>. <br/> <br/> <br/> Here are a few technologies I’ve been working with recently:
                            </p>
                        </Col>
                        <Col className="wrapper">
                            <div className="wrap container mb-4">
                                <img src={MyMe} alt="Logo" width="200" height="240"/>
                            </div>
                        </Col>
                    </Row>
                    <Row className="skills">
                        <Col className="col-4">
                            <ul>
                                <li>React Js</li>
                                <li>Materialize</li>
                                <li>Bootstrap</li>
                                <li>Node.js</li>
                            </ul>
                        </Col>
                        <Col className="col-2">
                            <ul>
                                <li>Wix</li>
                                <li>Figma</li>
                                <li>Wordpress</li>
                                <li>Javascript</li>
                            </ul>
                        </Col>
                    </Row>
                </section>
                <section className="experience container p-3" id="experience">
                    <Container>
                        <h4 className="numbered-heading">
                            Where I’ve Worked
                        </h4>
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title"><a href="https://app.dokunvi.com/">@Dokunvi</a></h5>
                                        <p className="card-text">
                                            Internship of 4 months at Dokunvi.
                                            I mainly work on features in React Js for their website.
                                            Also prototyping pages with Figma and pages creation with Wix.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title"><a href="http://pivotech.io/">@Pivotech</a></h5>
                                        <p className="card-text">
                                            During this internship I applied more my knowledge, and discover new technologies.

                                            I had to work on the realization of the website of konta with Wordpress . And contribute to the migration of an application, with PHP, Symfony, Nginx.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title"><a href="https://rightcom.com/fr/">@RightCom </a></h5>
                                        <p className="card-text">
                                            I spent most of my time with devops, where I discovered this new job, agile methods, Docker, Kubernetes, Jenkins, Ansible.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 pt-4">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title"><a href="https://epitech.bj/">@Epitech</a></h5>
                                        <p className="card-text">
                                            6 months internship, I had to work in the junior company of epitech Benin as a web developer.

                                            I mainly contributed to the development of the Carreer Center website, much more focused on the frontend. I had to adapt to the architecture of the project with the assimilation of technologies and tools such as Jira, Angular 9 (ngrx) and Bootstrap.
                                            <br/> <br/>
                                            I worked as AER (Assistant Epitech Regional) consisted in accompanying the 1st year students, so that they could assimilate the knowledge without giving them the answer directly, but rather directing them to find it by their own means.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Container>
                </section>
                <section className="projects container p-3" id="project">
                    <h4 className="numbered-heading">
                        Projects
                    </h4>
                    <div className="row row-cols-1 row-cols-md-2 p-5">
                        <div className="col mb-4">
                            <div className="card p-2">
                                <div className="top-card">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor"
                                         className="bi bi-folder" viewBox="0 0 16 16">
                                        <path
                                            d="M.54 3.87.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.826a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31zM2.19 4a1 1 0 0 0-.996 1.09l.637 7a1 1 0 0 0 .995.91h10.348a1 1 0 0 0 .995-.91l.637-7A1 1 0 0 0 13.81 4H2.19zm4.69-1.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707z"/>
                                    </svg>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title fw-bold"><a href="https://github.com/mcjordan2002/B-DEV-DASHBOARD-2020">Dashboard</a></h5>
                                    <p className="card-text description">
                                        The purpose of this project is to familiarize us with a software platform that we choose between Java, .NET, node.js through the creation of a dashboard

                                        So we need to implement a web app that work like Netvibes.
                                    </p>
                                    <p className="card-text"><small className="text-muted">Node.js Docker MongoDb Materialize API</small></p>

                                </div>
                            </div>
                        </div>
                        <div className="col mb-4">
                            <div className="card p-2">
                                <div className="top-card">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor"
                                         className="bi bi-folder" viewBox="0 0 16 16">
                                        <path
                                            d="M.54 3.87.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.826a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31zM2.19 4a1 1 0 0 0-.996 1.09l.637 7a1 1 0 0 0 .995.91h10.348a1 1 0 0 0 .995-.91l.637-7A1 1 0 0 0 13.81 4H2.19zm4.69-1.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707z"/>
                                    </svg>
                                    <a href="https://github.com/mcjordan2002/corona_autocontrol_app">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor"
                                             className="bi bi-github" viewBox="0 0 16 16">
                                            <path
                                                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                                        </svg>
                                    </a>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title fw-bold"><a href="https://epitech.bj/covid-auto/">Corona auto-control</a></h5>
                                    <p className="card-text description">
                                        A project allowing users to test themselves for covid symptoms with a quick test of 15 questions lasting on average 40s.
                                        And giving them at the end advice to take according to their condition
                                    </p>
                                    <p className="card-text"><small className="text-muted">Html Css Javascript Materialize</small></p>

                                </div>
                            </div>
                        </div>
                        <div className="col mb-4">
                            <div className="card p-2">
                                <div className="top-card">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor"
                                         className="bi bi-folder" viewBox="0 0 16 16">
                                        <path
                                            d="M.54 3.87.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.826a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31zM2.19 4a1 1 0 0 0-.996 1.09l.637 7a1 1 0 0 0 .995.91h10.348a1 1 0 0 0 .995-.91l.637-7A1 1 0 0 0 13.81 4H2.19zm4.69-1.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707z"/>
                                    </svg>
                                    <a href="https://github.com/mcjordan2002/corona_autocontrol_app">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor"
                                             className="bi bi-github" viewBox="0 0 16 16">
                                            <path
                                                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                                        </svg>
                                    </a>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title fw-bold"><a href="https://epitech.bj/covid-auto/">Corona auto-control</a></h5>
                                    <p className="card-text description">
                                        A project on the theme Past Present Future that was to be realized in a weekend in all Epitech Campus. <br/><br/><br/>
                                    </p>
                                    <p className="card-text"><small className="text-muted">Html Css Javascript</small></p>

                                </div>
                            </div>
                        </div>
                        <div className="col mb-4">
                            <div className="card p-2">
                                <div className="top-card">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor"
                                         className="bi bi-folder" viewBox="0 0 16 16">
                                        <path
                                            d="M.54 3.87.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.826a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31zM2.19 4a1 1 0 0 0-.996 1.09l.637 7a1 1 0 0 0 .995.91h10.348a1 1 0 0 0 .995-.91l.637-7A1 1 0 0 0 13.81 4H2.19zm4.69-1.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707z"/>
                                    </svg>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title fw-bold"><a href="">Area</a></h5>
                                    <p className="card-text description">
                                        A project where the software platform that you have chosen (Java, .NET,node.js) through the creation of a business application.To do this, you must implement a software suite that functions similar to that of IFTTT and/or Zapier.
                                    </p>
                                    <p className="card-text"><small className="text-muted">Node.js Docker MongoDb Materialize Flutter</small></p>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="contact container p-3" id="contact">
                    <Container className="center-align">
                        <h6>04. What’s Next?</h6>
                        <h1 className="fw-bold">Get in touch</h1>
                        <p className="h6"> I’m currently looking for any new opportunities, my inbox is always open.
                            Whether you have a question or just want to say hi, I’ll try my best to get back to you!</p>
                    </Container>
                    <button type="button" className="btn btn-outline-primary mt-5"><a href="mailto:jordan.vitou@epitech.eu">Say hello</a></button>
                </section>
            </div>

            <div className="left-social">
                <ul>
                    <li>
                        <a href="https://github.com/mcjordan2002">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                 className="bi bi-github" viewBox="0 0 16 16">
                                <path
                                    d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a href="https://linkedin.com/in/jordan-vitou">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                 className="bi bi-linkedin" viewBox="0 0 16 16">
                                <path
                                    d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com/jordan___vitou">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                 className="bi bi-twitter" viewBox="0 0 16 16">
                                <path
                                    d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                            </svg>
                        </a>
                    </li>
                </ul>
            </div>
        </main>
    );
};

export default Main;