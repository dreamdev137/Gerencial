import { NavLink } from "react-router-dom";
import "./index.scss";

const TopNavLink = () => {
    const navLinks = [
        {
            name: "Min. e Destinos",
            path: "/config-anuncios/min-des",
        },
        {
            name: "Gênero",
            path: "/config-anuncios/genero",
        },
        {
            name: "Destaque",
            path: "/config-anuncios/destaque",
        },
        {
            name: "Reservas",
            path: "/config-anuncios/reservas",
        },
        {
            name: "Compras",
            path: "/config-anuncios/compras",
        },
        {
            name: "Validação",
            path: "/config-anuncios/validacao",
        },
    ];

    return (
        <div
            className=" top-nav-bar btn-group top-nav-link bg-dark justify-content-between w-full "
            role="group"
            aria-label="Basic example"
        >
            {navLinks.map((link) => (
                <NavLink
                    key={link.name}
                    to={link.path}
                    className="top-nav-link-item border-0 rounded-2 text-center align-middle"
                    activeClassName="selected"
                    style={{
                        filter: "drop-shadow(0px 3px 3px rgba(0, 0, 0, 0.25))",
                    }}
                >
                    {link.name}
                </NavLink>
            ))}
            <div class="dropdown dropright">
                <button type="button" class="btn btn-outline-dark dropdown-toggle sectionBtn" data-bs-toggle="dropdown">
                    <span className="float-start text-white">Sobre a sua empresa</span><i class='bi bi-caret-right-fill float-end' style={{color:"white"}}></i>
                </button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Sobre a sua empresa</a></li>
                    <li><a class="dropdown-item active" href="#">Sobre a sua empresa</a></li>
                    <li><a class="dropdown-item disabled" href="#">Sobre a sua empresa</a></li>
                </ul>
            </div>

        </div>
    );
};

export default TopNavLink;
