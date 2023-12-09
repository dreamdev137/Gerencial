import React, { useContext, useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { HiDotsVertical } from "react-icons/hi";
import { RiEqualizerFill } from "react-icons/ri";
import Context from "../../components/Context";
// import AnúnciosData from "./Anúncios.json";
// import "../../snow.css";
import Termos from "./Termos";
import Sugestões from "./Sugestões";
import Politicas from "./Politcas";
import "./configuration.scss"
import "./snow.css"
import InstructionsAds from "./InstructionsAds";
import InstructionsCompany from "./InstructionsCompany";
import General from "./General";
import Category from "./Category";

const ConfigMain = (props) => {
    const { setPageNumber } = props;
    const [context, setContext] = useContext(Context)

    useEffect(() => {
        setContext(prevState => ({
            ...prevState,
            pageTitle: "Anúncios"
        }))
    }, [])
    const onChangeHead = (title) => {
        setContext(prevState => ({
            ...prevState,
            pageTitle: title
        }))
    }
    return (
        <div className="card  mx-auto">
            <div class="card-body p-4">
                <div className="d-flex justify-content-between tabPart">
                    <ul class="nav nav-tabs border border-0 justify-content-between w-100 " style={{ fontSize: "10px" }} role="tablist">
                        <li class="nav-item tabTitle">
                            <a
                                class="nav-link active p-2 rounded-2 ms-2 border border-0 shadow"
                                data-bs-toggle="tab"
                                href="#home"
                                onClick={() => onChangeHead("Geral")}
                            >
                                Geral
                            </a>
                        </li>
                        <li class="nav-item tabTitle">
                            <a
                                class="nav-link p-2 rounded-2 ms-2 border border-0 shadow"
                                data-bs-toggle="tab"
                                href="#menu1"
                                onClick={() => onChangeHead("Categorias")}
                            >
                                Categorias
                            </a>
                        </li>
                        <li class="nav-item tabTitle">
                            <a
                                class="nav-link p-2 rounded-2 ms-2 border border-0 shadow"
                                data-bs-toggle="tab"
                                href="#menu2"
                                onClick={() => onChangeHead("Instruções Empresas")}
                            >
                                Instruções Empresas
                            </a>
                        </li>
                        <li class="nav-item tabTitle">
                            <a
                                class="nav-link p-2 rounded-2 ms-2 border border-0 shadow"
                                data-bs-toggle="tab"
                                href="#menu3"
                                onClick={() => onChangeHead("Instruções Anúncios")}
                            >
                                Instruções Anúncios
                            </a>
                        </li>
                        <li class="nav-item tabTitle">
                            <a class="nav-link p-2 rounded-2 ms-2 border border-0 shadow" data-bs-toggle="tab" href="#menu4">Sugestões Empresas</a>
                        </li>
                        <li class="nav-item tabTitle">
                            <a
                                class="nav-link p-2 rounded-2 ms-2 border border-0 shadow"
                                data-bs-toggle="tab"
                                href="#menu5"
                                onClick={() => onChangeHead("Sugestões Anúncios")}
                            >
                                Sugestões Anúncios
                            </a>
                        </li>
                        <li class="nav-item tabTitle">
                            <a class="nav-link p-2 rounded-2 ms-2 border border-0 shadow" data-bs-toggle="tab" href="#menu6">Políticas Privacidade</a>
                        </li>
                        <li class="nav-item tabTitle">
                            <a class="nav-link p-2 rounded-2 ms-2 border border-0 shadow" data-bs-toggle="tab" href="#menu7">Termos de Uso</a>
                        </li>
                    </ul>
                </div>

                <div class="tab-content ms-2" >
                    <div id="home" class="container mt-5 tab-pane active p-0">
                        <General />
                    </div>
                    <div id="menu1" class="container mt-5 tab-pane fade p-0">
                        <Category />
                    </div>
                    <div id="menu2" class="container mt-5 tab-pane fade p-0">
                        <InstructionsCompany />
                    </div>
                    <div id="menu3" class="container mt-5 tab-pane fade p-0">
                        <InstructionsAds />
                    </div>
                    <div id="menu4" class="container mt-5 tab-pane fade p-0">
                        <Sugestões setContext={setContext} />
                    </div>
                    <div id="menu5" class="container tab-pane fade p-0">
                        {/* <Public /> */}
                    </div>
                    <div id="menu6" class="container mt-5 tab-pane fade p-0">
                        <Politicas placeholder="Politicas de Privacidade" setContext={setContext} />
                    </div>
                    <div id="menu7" class="container mt-5 tab-pane fade p-0">
                        <Termos placeholder="Termos de Uso" setPageNumber={setPageNumber} setContext={setContext} />
                    </div>
                </div>

            </div>
        </div >
    );
};

export default ConfigMain;
