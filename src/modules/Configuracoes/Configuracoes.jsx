import React, { useContext, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { HiDotsVertical } from "react-icons/hi";
import { RiEqualizerFill } from "react-icons/ri";
import Context from "../../components/Context";
import ConfigMain from "./configMain";
import CreateCompany from "./CreateCompany";
import Contact from "./Contact";
import LocalArea from "./LocalArea";
import TimeZone from "./TimeZone";
import "./configuration.scss"
import { useState } from "react";

const Configuracoes = () => {
    const [pageTitle, setPageTitle] = useState("Criar Empresa");
    const [pageNumber, setPageNumber] = useState(0);
    useEffect(() => {
        Page();
    }, [])
    useEffect(() => {
        Page();
        if (pageNumber === 1) setPageTitle("Criar Empresa")
        if (pageNumber === 2) setPageTitle("Contato")
        if (pageNumber === 3) setPageTitle("Local e Área")
        if (pageNumber === 4) setPageTitle("Horário")
    }, [pageNumber])
    const Page = () => {
        if (pageNumber === 1) return <CreateCompany pageNumber={pageNumber} setPageNumber={setPageNumber} />
        if (pageNumber === 2) return <Contact pageNumber={pageNumber} setPageNumber={setPageNumber} />
        if (pageNumber === 3) return <LocalArea pageNumber={pageNumber} setPageNumber={setPageNumber} />
        if (pageNumber === 4) return <TimeZone pageNumber={pageNumber} setPageNumber={setPageNumber} />
    }
    const onBack = () => {
        setPageNumber(pageNumber - 1);
    }

    return (
        <div className="card mx-auto">
            {pageNumber === 0 ?
                <ConfigMain setPageNumber={setPageNumber}/>
                :
                <div class="card-body p-0 d-flex flex-column align-items-center">
                    <h2 className="p-2 w-100 border-2 border-bottom border-dark text-center text-black">
                        <i class='bi bi-chevron-left p-3 float-start' onClick={() => onBack()}></i>
                        <div className="p-3">{pageTitle}</div>
                    </h2>
                    {Page()}
                </div>
            }
        </div>
    );
};

export default Configuracoes;
