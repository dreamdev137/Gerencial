import React, { useContext, useEffect, useState } from "react";

const Sugestões = (props) => {
    const { setContext } = props;
    // useEffect(() => {
    //     console.log(123);
    //     setContext(prevState => ({
    //         ...prevState,
    //         pageTitle: "Sugestões para Criação de Empresas"
    //     }))
    // }, [])
    return (
        <>
            <h3>Editar seções</h3>
            <div class="dropdown dropend">
                <button type="button" class="btn btn-outline-dark dropdown-toggle mt-2 sectionBtn" data-bs-toggle="dropdown">
                    <span className="float-start">Sobre a sua empresa</span><i class='bi bi-caret-right-fill float-end'></i>
                </button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Sobre a sua empresa</a></li>
                    <li><a class="dropdown-item active" href="#">Sobre a sua empresa</a></li>
                    <li><a class="dropdown-item disabled" href="#">Sobre a sua empresa</a></li>
                </ul>
            </div>
            <div class="dropdown dropend">
                <button type="button" class="btn btn-outline-dark dropdown-toggle mt-2 sectionBtn" data-bs-toggle="dropdown">
                    <span className="float-start">Contato</span><i class='bi bi-caret-right-fill float-end'></i>
                </button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Contato</a></li>
                    <li><a class="dropdown-item active" href="#">Contato</a></li>
                    <li><a class="dropdown-item disabled" href="#">Contato</a></li>
                </ul>
            </div>
            <div class="dropdown dropend">
                <button type="button" class="btn btn-outline-dark dropdown-toggle mt-2 sectionBtn" data-bs-toggle="dropdown">
                    <span className="float-start">Local e área</span><i class='bi bi-caret-right-fill float-end'></i>
                </button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Local e área</a></li>
                    <li><a class="dropdown-item active" href="#">Local e área</a></li>
                    <li><a class="dropdown-item disabled" href="#">Local e área</a></li>
                </ul>
            </div>
            <div class="dropdown dropend">
                <button type="button" class="btn btn-outline-dark dropdown-toggle mt-2 sectionBtn" data-bs-toggle="dropdown">
                    <span className="float-start">Horário</span><i class='bi bi-caret-right-fill float-end'></i>
                </button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Horário</a></li>
                    <li><a class="dropdown-item active" href="#">Horário</a></li>
                    <li><a class="dropdown-item disabled" href="#">Horário</a></li>
                </ul>
            </div>
            <div class="dropdown dropend">
                <button type="button" class="btn btn-outline-dark dropdown-toggle mt-2 sectionBtn" data-bs-toggle="dropdown">
                    <span className="float-start">Membros</span><i class='bi bi-caret-right-fill float-end'></i>
                </button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Membros</a></li>
                    <li><a class="dropdown-item active" href="#">Membros</a></li>
                    <li><a class="dropdown-item disabled" href="#">Membros</a></li>
                </ul>
            </div>
            <div class="dropdown dropend">
                <button type="button" class="btn btn-outline-dark dropdown-toggle mt-2 sectionBtn" data-bs-toggle="dropdown">
                    <span className="float-start">Dados bancários</span><i class='bi bi-caret-right-fill float-end'></i>
                </button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Dados bancários</a></li>
                    <li><a class="dropdown-item active" href="#">Dados bancários</a></li>
                    <li><a class="dropdown-item disabled" href="#">Dados bancários</a></li>
                </ul>
            </div>
            <div class="dropdown dropend">
                <button type="button" class="btn btn-outline-dark dropdown-toggle mt-2 mb-5 sectionBtn" data-bs-toggle="dropdown">
                    <span className="float-start">Complemento</span><i class='bi bi-caret-right-fill float-end'></i>
                </button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Complemento</a></li>
                    <li><a class="dropdown-item active" href="#">Complemento</a></li>
                    <li><a class="dropdown-item disabled" href="#">Complemento</a></li>
                </ul>
            </div>
        </>
    );
};

export default Sugestões;