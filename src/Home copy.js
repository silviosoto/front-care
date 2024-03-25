import logo from './logo.svg';
// import './App.css';
import './css/styles.css'

function Home() {
    return (
        <div className="App">


            <nav className="navbar navbar-expand-lg navbar-light fixed-top shadow-sm" id="mainNav">
                <div className="container px-5">
                    <a className="navbar-brand fw-bold" href="/">MindCare</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        Menu
                        <i className="bi-list"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ms-auto me-4 my-3 my-lg-0">
                         
                        </ul>
                        <button className="btn btn-primary rounded-pill px-3 mb-2 mb-lg-0" data-bs-toggle="modal">
                            <a className="nav-link me-lg-3" href="/register">
                                <span className="d-flex align-items-center">
                                    <i className="bi-chat-text-fill me-2"></i>
                                    <span className="small">Trabaja con nosotros</span>
                                </span>
                            </a>
                        </button>
                    </div>
                </div>
            </nav>
            <header className="masthead">
                <div className="container px-5">
                    <div className="row gx-5 align-items-center">
                        <div className="col-lg-6">

                            <div className="mb-5 mb-lg-0 text-center text-lg-start">
                                <h1 className="display-1 lh-1 mb-3">Mereces ser feliz.</h1>
                                <p className="lead fw-normal text-muted mb-5">Encuentra ayuda profesional psicologica, haz match con un gran número de profecionales a tu disposición.</p>
                                <div className="d-flex flex-column flex-lg-row align-items-center">
                                    <a className="me-lg-3 mb-4 mb-lg-0" href="#!"><img className="app-badge" src="assets/img/google-play-badge.svg" alt="..." /></a>
                                    <a href="#!"><img className="app-badge" src="assets/img/app-store-badge.svg" alt="..." /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">

                            <div className="masthead-device-mockup">
                                <svg className="circle" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                                    <defs>
                                        <linearGradient id="circleGradient" gradientTransform="rotate(45)">
                                            <stop className="gradient-start-color" offset="0%"></stop>
                                            <stop className="gradient-end-color" offset="100%"></stop>
                                        </linearGradient>
                                    </defs>
                                    <circle cx="50" cy="50" r="50"></circle></svg
                                ><svg className="shape-1 d-none d-sm-block" viewBox="0 0 240.83 240.83" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="-32.54" y="78.39" width="305.92" height="84.05" rx="42.03" transform="translate(120.42 -49.88) rotate(45)"></rect>
                                    <rect x="-32.54" y="78.39" width="305.92" height="84.05" rx="42.03" transform="translate(-49.88 120.42) rotate(-45)"></rect></svg
                                ><svg className="shape-2 d-none d-sm-block" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50"></circle></svg>
                                <div className="device-wrapper">
                                    <div className="device" data-device="iPhoneX" data-orientation="portrait" data-color="black">
                                        <div className="screen bg-black">

                                            {/* <video muted="muted"   loop="" style={{maxwidth: "100%", height: "100%"}}><source  
                                        src='./img/demo-screen.mp4'   type="video/mp4" /></video> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <aside className="text-center bg-gradient-primary-to-secondary">
                <div className="container px-5">
                    <div className="row gx-5 justify-content-center">
                        <div className="col-xl-8">
                            <div className="h2 fs-1 text-white mb-4">¿Eres psicologo y te gustaria hacer parte de nuestra comunidad ?</div>
                            {/* <img src="assets/img/tnw-logo.svg" alt="..." style={{ height: "3rem" }} /> */}
                        </div>
                    </div>
                </div>
            </aside>

            <section id="features">
                <div className="container px-5">
                    <div className="row gx-5 align-items-center">
                        <div className="col-lg-8 order-lg-1 mb-5 mb-lg-0">
                            <div className="container-fluid px-5">
                                <div className="row gx-5">
                                    <div className="col-md-6 mb-5">

                                        <div className="text-center">
                                            <i className="bi-phone icon-feature text-gradient d-block mb-3"></i>
                                            <h3 className="font-alt">Individual</h3>
                                            <p className="text-muted mb-0">Apoyo emocional personalizado</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-5">

                                        <div className="text-center">
                                            <i className="bi-camera icon-feature text-gradient d-block mb-3"></i>
                                            <h3 className="font-alt">Parejas</h3>
                                            <p className="text-muted mb-0">Asesoramiento conjunto para relaciones saludables</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 mb-5 mb-md-0">

                                        <div className="text-center">
                                            <i className="bi-gift icon-feature text-gradient d-block mb-3"></i>
                                            <h3 className="font-alt">Jovenes</h3>
                                            <p className="text-muted mb-0">Apoyo emocional y orientación juvenil</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">

                                        <div className="text-center">
                                            <i className="bi-patch-check icon-feature text-gradient d-block mb-3"></i>
                                            <h3 className="font-alt">Duelos</h3>
                                            <p className="text-muted mb-0">Acompañamiento en procesos de duelo y pérdida</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 order-lg-0">

                            <div className="features-device-mockup">
                                <svg className="circle" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                                    <defs>
                                        <linearGradient id="circleGradient" gradientTransform="rotate(45)">
                                            <stop className="gradient-start-color" offset="0%"></stop>
                                            <stop className="gradient-end-color" offset="100%"></stop>
                                        </linearGradient>
                                    </defs>
                                    <circle cx="50" cy="50" r="50"></circle></svg
                                ><svg className="shape-1 d-none d-sm-block" viewBox="0 0 240.83 240.83" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="-32.54" y="78.39" width="305.92" height="84.05" rx="42.03" transform="translate(120.42 -49.88) rotate(45)"></rect>
                                    <rect x="-32.54" y="78.39" width="305.92" height="84.05" rx="42.03" transform="translate(-49.88 120.42) rotate(-45)"></rect></svg
                                ><svg className="shape-2 d-none d-sm-block" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50"></circle></svg>
                                <div className="device-wrapper">
                                    <div className="device" data-device="iPhoneX" data-orientation="portrait" data-color="black">
                                        <div className="screen bg-black">

                                            <video muted="muted" loop="" style={{ maxwidth: "100%", height: "100%" }}><source src="assets/img/demo-screen.mp4" type="video/mp4" /></video>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-light">
                <div className="container px-5">
                    <div className="row gx-5 align-items-center justify-content-center justify-content-lg-between">
                        <div className="col-12 col-lg-5">
                            <h2 className="display-4 lh-1 mb-4">Psicologos profesionales y certificados en quienes puede confiar.</h2>
                            <p className="lead fw-normal text-muted mb-5 mb-lg-0">Acceda a la red más grande del mundo de 
                            terapeutas experimentados y acreditados que pueden ayudarlo con una variedad de problemas que incluyen depresión, ansiedad, 
                            relaciones, trauma, duelo y más. Con nuestros terapeutas, obtendrá el mismo profesionalismo y calidad que esperaría de un terapeuta 
                            en el consultorio, pero con la capacidad de comunicarse cuando y como quiera.</p>
                        </div>
                        <div className="col-sm-8 col-md-6">
                            <div className="px-5 px-sm-0"><img className="img-fluid rounded-circle" src="https://source.unsplash.com/u8Jn2rzYIps/900x900" alt="..." /></div>
                        </div>
                    </div>
                </div>
            </section>
{/* 
            <section className="cta">
                <div className="cta-content">
                    <div className="container px-5">
                        <h2 className="text-white display-1 lh-1 mb-4">
                            Accede desde la comodidad de tu casa tu oficina.
                            <br />
                            o ven y visitanos.
                        </h2>
                        <a className="btn btn-outline-light py-3 px-4 rounded-pill" href="https://startbootstrap.com/theme/new-age" target="_blank">Download for free</a>
                    </div>
                </div>
            </section> */}
{/* 
            <section className="bg-gradient-primary-to-secondary" id="download">
                <div className="container px-5">
                    <h2 className="text-center text-white font-alt mb-4">¿Como funciona?</h2>
                    <div className="d-flex flex-column flex-lg-row align-items-center justify-content-center">
                        <a className="me-lg-3 mb-4 mb-lg-0" href="#!"><img className="app-badge" src="assets/img/google-play-badge.svg" alt="..." /></a> 
                          <a href="#!"><img className="app-badge" src={require('img/app-store-badge.svg')} alt="..." /></a>
                    </div>
                </div>
            </section>   */}

            <footer className="bg-black text-center py-5">
                <div className="container px-5">
                    <div className="text-white-50 small">
                        <div className="mb-2">&copy; Your MindCare 2024. All Rights Reserved.</div>
                        {/* <a href="#!">Privacy</a>
                        <span className="mx-1">&middot;</span>
                        <a href="#!">Terms</a>
                        <span className="mx-1">&middot;</span>
                        <a href="#!">FAQ</a> */}
                    </div>
                </div>
            </footer>
            {/* <div className="modal fade" id="feedbackModal" aria-labelledby="feedbackModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header bg-gradient-primary-to-secondary p-4">
                            <h5 className="modal-title font-alt text-white" id="feedbackModalLabel">Send feedback</h5>
                            <button className="btn-close btn-close-white" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body border-0 p-4">

                            <form id="contactForm" data-sb-form-api-token="API_TOKEN">

                                <div className="form-floating mb-3">
                                    <input className="form-control" id="name" type="text" placeholder="Enter your name..." data-sb-validations="required" />
                                    <label htmlFor="name">Full name</label>
                                    <div className="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                                </div>

                                <div className="form-floating mb-3">
                                    <input className="form-control" id="email" type="email" placeholder="name@example.com" data-sb-validations="required,email" />
                                    <label htmlFor="email">Email address</label>
                                    <div className="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
                                    <div className="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
                                </div>

                                <div className="form-floating mb-3">
                                    <input className="form-control" id="phone" type="tel" placeholder="(123) 456-7890" data-sb-validations="required" />
                                    <label htmlFor="phone">Phone number</label>
                                    <div className="invalid-feedback" data-sb-feedback="phone:required">A phone number is required.</div>
                                </div>

                                <div className="form-floating mb-3">
                                    <textarea className="form-control" id="message" type="text" placeholder="Enter your message here..." style={{ height: "10rem" }} data-sb-validations="required"></textarea>
                                    <label htmlFor="message">Message</label>
                                    <div className="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
                                </div>

                                <div className="d-none" id="submitSuccessMessage">
                                    <div className="text-center mb-3">
                                        <div className="fw-bolder">Form submission successful!</div>
                                        To activate this form, sign up at
                                        <br />
                                        <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                                    </div>
                                </div>


                                <div className="d-none" id="submitErrorMessage"><div className="text-center text-danger mb-3">Error sending message!</div></div>

                                <div className="d-grid"><button className="btn btn-primary rounded-pill btn-lg disabled" id="submitButton" type="submit">Submit</button></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div> */}




        </div>
    );
}

export default Home;
