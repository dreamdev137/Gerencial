import { Link, NavLink } from "react-router-dom";

const Asidebar = () => {
    return (
        <>
            <div className="border-end" id="sidebar-wrapper">
                <div className="sidebar-heading d-flex justify-content-center">
                    <img
                        src="/images/logo.png"
                        alt="Sidebar Logo"
                        height="44"
                    />
                </div>
                <div className="list-group list-group-flush">
                    <NavLink
                        className="list-group-item list-group-item-action list-group-item-light p-3 d-flex justify-content-left align-items-center gap-3"
                        activeClassName="selected"
                        to="/dashboard"
                    >
                        <i className="bi bi-house-door me-2"></i> Pagina Inicial
                    </NavLink>
                    <NavLink
                        className="list-group-item list-group-item-action list-group-item-light p-3 d-flex justify-content-left align-items-center gap-3"
                        activeClassName="selected"
                        to="/empresas"
                    >
                        <i className="bi bi-shop-window me-2"></i> Empresas
                    </NavLink>
                    <NavLink
                        className="list-group-item list-group-item-action list-group-item-light p-3 d-flex justify-content-left align-items-center gap-3"
                        activeClassName="selected"
                        to="/anuncios"
                    >
                        <i className="bi bi-megaphone me-2"></i> Anuncios
                    </NavLink>
                    <NavLink
                        className="list-group-item list-group-item-action list-group-item-light p-3 d-flex justify-content-left align-items-center gap-3"
                        activeClassName="selected"
                        to="/destinos"
                    >
                        <i class="bi bi-suitcase-fill me-2"></i> Destinos
                        Turisticos
                    </NavLink>
                    <NavLink
                        className="list-group-item list-group-item-action list-group-item-light p-3 d-flex justify-content-left align-items-center gap-3"
                        activeClassName="selected"
                        to="/config-anuncios/min-des"
                    >
                        <i class="bi bi-gear me-2"></i> Config. Anuncios
                    </NavLink>
                    <NavLink
                        className="list-group-item list-group-item-action list-group-item-light p-3 d-flex justify-content-left align-items-center gap-3"
                        activeClassName="selected"
                        to="/keywords"
                    >
                        <i class="bi bi-gear me-2"></i> Palavras-chave
                    </NavLink>
                    <NavLink
                        className="list-group-item list-group-item-action list-group-item-light p-3 d-flex justify-content-left align-items-center gap-3"
                        activeClassName="selected"
                        to="/users"
                    >
                        <i class="bi bi-gear me-2"></i> Usauarios
                    </NavLink>
                    {/* <NavLink
                        className="list-group-item list-group-item-action list-group-item-light p-3 d-flex justify-content-left align-items-center gap-3"
                        activeClassName="selected"
                        to="/"
                    >
                        <i class="bi bi-gear me-2"></i> FAQ
                    </NavLink>
                    <NavLink
                        className="list-group-item list-group-item-action list-group-item-light p-3 d-flex justify-content-left align-items-center gap-3"
                        activeClassName="selected"
                        to="/"
                    >
                        <i class="bi bi-gear me-2"></i> SAC
                    </NavLink> */}
                    <NavLink
                        className="list-group-item list-group-item-action list-group-item-light p-3 d-flex justify-content-left align-items-center gap-3"
                        activeClassName="selected"
                        to="/configuracoes"
                    >
                        <i className="bi bi-gear me-2"></i> Configuracoes Gerais
                    </NavLink>
                </div>
            </div>
        </>
    );
};

export default Asidebar;
