import React, { useContext, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { HiDotsVertical } from "react-icons/hi";
import { RiEqualizerFill } from "react-icons/ri";
import Context from "../../components/Context";
import AnúnciosData from "./Anúncios.json";
import Infomation from "./information";
import Public from "./public";
import Available from "./available";
import Responder from "./responder";
import "./anuncios.scss"
import { useState } from "react";

const Details = (props) => {
    const { user } = props;
    const [context, setContext] = useContext(Context)
    const [userData, setUserData] = useState({
        name: 'Análise Pendente',
    })

    useEffect(() => {
        setContext(prevState => ({
            ...prevState,
            pageTitle: "Anúncios"
        }))
    }, [])

    return (
        <div className="card mt-3 mx-auto">
            <div class="card-body p-4">
                <div className="d-flex justify-content-between tabPart">
                    <ul class="nav nav-tabs border border-0" role="tablist">
                        <li class="nav-item tabTitle">
                            <a class="nav-link active p-2 rounded-2 ms-2 border border-0 shadow" data-bs-toggle="tab" href="#home">Informações</a>
                        </li>
                        <li class="nav-item tabTitle">
                            <a class="nav-link p-2 rounded-2 ms-2 border border-0 shadow" data-bs-toggle="tab" href="#menu1">Público</a>
                        </li>
                        <li class="nav-item tabTitle">
                            <a class="nav-link p-2 rounded-2 ms-2 border border-0 shadow" data-bs-toggle="tab" href="#menu2">Serviços</a>
                        </li>
                        <li class="nav-item tabTitle">
                            <a class="nav-link p-2 rounded-2 ms-2 border border-0 shadow" data-bs-toggle="tab" href="#menu3">Responder</a>
                        </li>
                    </ul>
                    <div className="d-flex namePart">
                        <div className="tabName ms-5">{userData.name}</div>
                        <div className="d-flex">
                            <div className="p-2 rounded-2 bg-dark text-white ms-2 text-center">Anúncios pendentes</div>
                            <div className="p-2 rounded-2 bg-dark text-white ms-2 text-center">Anúncios pendentes</div>
                        </div>
                    </div>
                </div>


                <div class="tab-content ms-2" >
                    <div id="home" class="container tab-pane active p-0">
                        <Infomation user={user} />
                    </div>
                    <div id="menu1" class="container tab-pane fade p-0">
                        <Public />
                    </div>
                    <div id="menu2" class="container tab-pane fade p-0">
                        <Available />
                    </div>
                    <div id="menu3" class="container tab-pane fade p-0">
                        <Responder />
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Details;
