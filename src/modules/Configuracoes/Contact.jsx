import React, { useContext, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { HiDotsVertical } from "react-icons/hi";
import { RiEqualizerFill } from "react-icons/ri";
import Context from "../../components/Context";
import CreateCompany from "./CreateCompany";
import "./configuration.scss"
import { useState } from "react";

const Contact = (props) => {
    const { pageNumber, setPageNumber } = props;
    const [contactInfo, setContactInfo] = useState({
        mainCat: '',
        whatsapp: '',
        email: '',
        site: '',
        categoryPrinc: 'Category Principle1',
    });
    const [customer, setCustomer] = useState({
        telephone: '',
        custWhatsapp: '',
        custEmail: '',
        custSite: ''
    });

    const goToLocalArea = () => {
        setPageNumber(3);
    }

    return (
        <>
            <div className="width text-center">
                <div className="my-2">
                    <h4 className="p-2 my-3 text-black">Informações para contato</h4>
                    <div className="d-flex my-3">
                        <input type="text" class="form-control border-dark rounded-2" placeholder="Categoria Principal"></input>
                        <button type="button" class="btn btn-outline-dark ms-2 px-3">+</button>
                    </div>
                    <input
                        type="tel"
                        class="form-control border-dark rounded-2 my-3"
                        placeholder="Whatsapp"
                        onChange={(e) => setContactInfo({ ...contactInfo, whatsapp: e.target.value })}
                    />
                    <input
                        type="email"
                        class="form-control border-dark rounded-2 my-3"
                        placeholder="Email"
                        onChange={(e) => setContactInfo({ ...contactInfo, email: e.target.value })}
                    />
                    <input
                        type="url"
                        class="form-control border-dark rounded-2 my-3"
                        placeholder="Site"
                        onChange={(e) => setContactInfo({ ...contactInfo, site: e.target.value })}
                    />
                    <div className="d-flex my-3">
                        <select class="form-select border-dark rounded-2" onChange={(e) => setContactInfo({ ...contactInfo, categoryPrinc: e.target.value })}>
                            <option>Category Principle1</option>
                            <option>Category Principle2</option>
                            <option>Category Principle3</option>
                            <option>Category Principle4</option>
                        </select>
                        <button type="button" class="btn btn-outline-dark ms-2 px-3">+</button>
                    </div>
                </div>
                <div className="mt-5">
                    <h4 className="p-2 my-3 text-black">Suporte ao Cliente</h4>
                    <input
                        type="tel"
                        class="form-control border-dark rounded-2 my-3"
                        placeholder="Telefone"
                        onChange={(e) => setCustomer({ ...customer, telephone: e.target.value })}
                    />
                    <input
                        type="tel"
                        class="form-control border-dark rounded-2 my-3"
                        placeholder="Whatsapp"
                        onChange={(e) => setCustomer({ ...customer, custWhatsapp: e.target.value })}
                    />
                    <input
                        type="email"
                        class="form-control border-dark rounded-2 my-3"
                        placeholder="Email"
                        onChange={(e) => setCustomer({ ...customer, custEmail: e.target.value })}
                    />
                    <input
                        type="url"
                        class="form-control border-dark rounded-2 my-3"
                        placeholder="Site"
                        onChange={(e) => setCustomer({ ...customer, custSite: e.target.value })}
                    />
                </div>
                <div className="w-full">
                    <button
                        type="button"
                        className="btn btn-primary w-full my-5"
                        onClick={() => goToLocalArea()}
                    >
                        SLAVAR
                    </button>
                </div>
            </div>
        </>
    );
};

export default Contact;
