import React, { useContext, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { HiDotsVertical } from "react-icons/hi";
import { RiEqualizerFill } from "react-icons/ri";
import Context from "../../components/Context";
import "./configuration.scss"
import { useState } from "react";

const CreateCompany = (props) => {
    const { pageNumber, setPageNumber } = props;
    const [introData, setIntroData] = useState({
        logo: '',
        principal: '',
        qutras: '',
        companyName: '',
        category: 'Category Principle1',
        description: ''
    });
    const [tmpCat, setTmpCat] = useState("Category Principle1");

    const goToContact = () => {
        setPageNumber(2);
    }
    const onCompName = (name) => {
        setIntroData({ ...introData, companyName: name });
    }
    const selectCategory = (cat) => {
        setTmpCat(cat);
    }
    const setCategory = () => {
        setIntroData({...introData, category: tmpCat})
    }
    const onDescription = (desc) => {
        setIntroData({ ...introData, description: desc });
    }


    return (
        <>
            <h4 className="p-2 text-black">Sobre sua empresa</h4>
            <p className="text-center description">Preencha o formulário com as informações do seu negócio e faça parte da nossa rede de parceiros. Vamos juntos alavancar seu crescimento!</p>
            <div className="width text-center">
                <div className="d-flex justify-content-between images">
                    <div className="text-start">
                        <div className="fs-6">Logotipo</div>
                        <div className="p-4 border border-1 border-dark rounded-circle size-80 flex-ct">
                            <i class='bi bi-image'></i>
                        </div>
                    </div>
                    <div className="d-flex">
                        <div className="ms-2 text-start">
                            <div className="fs-6">Principal</div>
                            <div className="p-3 border border-1 border-dark rounded-3 size-80 flex-ct">
                                <i class='bi bi-image'></i>
                            </div>
                        </div>
                        <div className="ms-2 text-start">
                            <div className="fs-6">Qutras</div>
                            <div className="p-3 border border-1 border-dark rounded-3 size-80 flex-ct">
                                <i class='bi bi-image'></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-3">
                    <input
                        type="text"
                        class="form-control border-dark rounded-2"
                        placeholder="Nome da Empresa"
                        onChange={(e) => onCompName(e.target.value)}
                    />
                </div>
                <div className="d-flex mt-3">
                    <select class="form-select border-dark rounded-2" onChange={(e) => selectCategory(e.target.value)}>
                        <option>Category Principle1</option>
                        <option>Category Principle2</option>
                        <option>Category Principle3</option>
                        <option>Category Principle4</option>
                    </select>
                    <button type="button" class="btn btn-outline-dark ms-2" onClick={() => setCategory()}>OK</button>
                </div>
                <div className="w-full">
                    <textarea
                        className="w-full rounded-2 border-dark mt-3 p-2"
                        rows={3}
                        onChange={(e) => onDescription(e.target.value)}
                    >
                        Description
                    </textarea>
                </div>
                <div className="w-full">
                    <button
                        type="button"
                        className="btn btn-primary w-full my-5"
                        onClick={() => goToContact()}
                    >
                        SLAVAR
                    </button>
                </div>
            </div>
        </>
    );
};

export default CreateCompany;
