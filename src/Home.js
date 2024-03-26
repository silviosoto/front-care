import logo from './logo.svg';
// import './App.css';
import './css/styles.css'
import miImagen from '../src/assets/img/8602650.png';
import miImagen2 from '../src/assets/img/8602515.png';

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
                                <div className="">
                                <img width="480" height="380" className=" device img-fluid rounded-circle" data-device="iPhoneX" data-orientation="portrait" src={miImagen} />
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
                                            <h3 className="font-alt">Citas viruales</h3>
                                            <p className="text-muted mb-0">Presta tus servicios desde donde estes.</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-5">
                                        <div className="text-center">
                                            <i className="bi-camera icon-feature text-gradient d-block mb-3"></i>
                                            <h3 className="font-alt">Ofrece diferentes servicios</h3>
                                            <p className="text-muted mb-0"> Ofrece servicios especializados.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 mb-5 mb-md-0">
                                        <div className="text-center">
                                            <i className="bi-gift icon-feature text-gradient d-block mb-3"></i>
                                            <h3 className="font-alt">Comunidad</h3>
                                            <p className="text-muted mb-0">Ofrece servicios a personas de todo el pais.</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="text-center">
                                            <i className="bi-patch-check icon-feature text-gradient d-block mb-3"></i>
                                            <h3 className="font-alt">Administración</h3>
                                            <p className="text-muted mb-0">Gestiona tu tiempo y citas con MindCare</p>
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
                                    <img  className=" device img-fluid rounded-circle" data-device="iPhoneX" data-orientation="portrait" src={miImagen} />
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
                            <h2 className="display-4 lh-1 mb-4">Psicologos profesionales </h2>
                            <p className="lead fw-normal text-muted mb-5 mb-lg-0">Haz partede de una red de profesionales de la salud mental, ofreciendo tus servicios proifesionales
                                a la comunidad desde la comodidad de tu hogar con orarios flexibles..</p>
                                <br/>
                                <button className="btn btn-primary rounded-pill px-3 mb-2 mb-lg-0" data-bs-toggle="modal">
                            <a className="nav-link me-lg-3" href="/register">
                                <span className="d-flex align-items-center">
                                    <i className="bi-chat-text-fill me-2"></i>
                                    <span className="small">Trabaja con nosotros</span>
                                </span>
                            </a>
                        </button>
                        </div>
                        
                        <div className="col-sm-8 col-md-6">
                            <div className="px-5 px-sm-0">
                            <img  className=" device img-fluid rounded-circle" data-device="iPhoneX" data-orientation="portrait" src={miImagen2} />
                                </div>
                        </div>
                        
                    </div>
                </div>
            </section> 
            <footer className="bg-black text-center py-5">
                <div className="container px-5">
                    <div className="text-white-50 small">
                        <div className="mb-2">&copy; Your MindCare 2024. All Rights Reserved.</div>
                    </div>
                </div>
            </footer> 
        </div>
    );
}

export default Home;
