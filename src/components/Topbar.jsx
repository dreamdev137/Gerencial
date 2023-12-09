import { useContext } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Context from "./Context";
import { useEffect } from "react";
import { useState } from "react";

const Topbar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [context, setContext] = useContext(Context);
    const [topChange, setTopChange] = useState(false);

    const logOut = (e) => {
        e.preventDefault()
        localStorage.removeItem('dashboard-token')
        setContext('')
        navigate('/')
    }

    const openSidebar = (e) => {
        e.preventDefault();
        let bodyToggle = document.body;
        bodyToggle.classList.toggle('sb-sidenav-toggled')
    }

    useEffect(() => {
        if (location.pathname === '/anuncios-details') setTopChange(true);
        else setTopChange(false)
    }, [location.pathname])

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom px-3">
                <div className="container-fluid" style={{maxWidth:"1531px"}}>
                    {topChange === false ? <>
                        {/* <button className="btn text-dark" id="sidebarToggle" onClick={(e) => openSidebar(e)}>
                            <i className="bi bi-list fs-3 fw-bold"></i>
                        </button> */}
                        <h1>
                            {context?.pageTitle}
                        </h1>
                    </> :
                        <div className="d-flex align-items-center p-2" onClick={() => navigate('/anuncios')}>
                            <i class='bi bi-chevron-left p-3'></i>
                            <div>
                                <h4>Voo de Balão pelos Cânions de SC e RS. Diariamente. Decolagem às 6:00 am</h4>
                                <div>Por Empresa ABC</div>
                            </div>
                        </div>
                    }

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                            <li className="nav-item dropdown me-2">
                                <Link className="nav-link dropdown-toggle text-dark" id="navbarDropdown" to="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="bi bi-bell fs-5"></i>
                                    <span className="position-absolute badge rounded-circle bg-success p-1 top-0 start-50">2</span>
                                </Link>
                                <div className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="#!">Action</a>
                                    <a className="dropdown-item" href="#!">Another action</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#!">Something else here</a>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle border border-1 border-dark p-1 rounded-circle" id="navbarDropdown" to="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <img src="/images/avatar.jpg" alt="Profile Image" height="30" className="rounded-circle" />
                                </Link>
                                <div className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="#!">Action</a>
                                    <a className="dropdown-item" href="#!">Another action</a>
                                    <div className="dropdown-divider"></div>
                                    <Link className="dropdown-item" to="#" onClick={logOut}>
                                        Logout
                                    </Link>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Topbar;