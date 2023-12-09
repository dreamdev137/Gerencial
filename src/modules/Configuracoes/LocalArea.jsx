import React, { useContext, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { HiDotsVertical } from "react-icons/hi";
import { RiEqualizerFill } from "react-icons/ri";
import Context from "../../components/Context";
import "./configuration.scss"
import { useState } from "react";

const LocalArea = (props) => {
    const { pageNumber, setPageNumber } = props;
    const [areaInfo, setAreaInfo] = useState({
        location: '',
        city: '',
    })

    const goToTimeZone = () => {
        setPageNumber(4);
    }

    return (
        <>
            <div className="width text-center">
                <h4 className="p-2 mt-1 text-black">Local da Empresa</h4>
                <div className="d-flex mt-1">
                    <input
                        type="text"
                        class="form-control border-dark rounded-2"
                        placeholder="CEP"
                        onChange={(e) => setAreaInfo({ ...areaInfo, location: e.target.value })}
                    />
                    <button type="button" class="btn btn-outline-dark ms-2">OK</button>
                </div>
                <h4 className="p-2 mt-5 text-black">Área de Cobertura</h4>
                <div className="d-flex mt-1">
                    <input
                        type="text"
                        class="form-control border-dark rounded-2"
                        placeholder="Cidade"
                        onChange={(e) => setAreaInfo({ ...areaInfo, city: e.target.value })}
                    />
                    <button type="button" class="btn btn-outline-dark ms-2 px-3">+</button>
                </div>
                <div className="w-full">
                    <button
                        type="button"
                        className="btn btn-primary w-full my-5"
                        onClick={() => goToTimeZone()}
                    >
                        SLAVAR
                    </button>
                </div>
            </div>
        </>
    );
};

export default LocalArea;
