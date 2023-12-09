import React, { useContext, useEffect, useState } from "react";
import "./configuration.scss"

const General = (props) => {
    const { placeholder, setPageNumber, setContext } = props;
    const [contactInfo, setContactInfo] = useState({
        telephone: '',
        whatsapp: '',
        email: '',
        status: false,
    })
    return (
        <div className="width">
            <div>
                <h4 className="text-black">Informações de Contato</h4>
                <div className="d-flex my-3">
                    <input
                        type="text"
                        class="form-control border-dark rounded-2"
                        placeholder="Telephone"
                        onChange={(e) => setContactInfo({ ...contactInfo, telephone: e.target.value })}
                    />
                    <button type="button" class="btn btn-outline-dark ms-2 px-3">+</button>
                </div>
                <div className="d-flex my-3">
                    <input
                        type="text"
                        class="form-control border-dark rounded-2"
                        placeholder="Whatsapp"
                        onChange={(e) => setContactInfo({ ...contactInfo, whatsapp: e.target.value })}
                    />
                    <button type="button" class="btn btn-outline-dark ms-2 px-3">+</button>
                </div>
                <div className="d-flex my-3">
                    <input
                        type="text"
                        class="form-control border-dark rounded-2"
                        placeholder="Email"
                        onChange={(e) => setContactInfo({ ...contactInfo, email: e.target.value })}
                    />
                    <button type="button" class="btn btn-outline-dark ms-2 px-3">+</button>
                </div>
            </div>
            <div className="mt-5">
                <h4 className="text-black">Envio de anúncios para análise</h4>
                <div className="d-flex mt-2">
                    <input
                        type="checkbox"
                        class="form-check-input border-dark"
                        id="domingo"
                        name="domingo"
                        checked={contactInfo.status}
                        onClick={(e) => setContactInfo({...contactInfo, status: e.target.checked})}
                    />
                    <label class="form-check-label ms-3" for="check1">Permitir envio de anúncios para análise, se créditos insuficientes.</label>
                </div>
            </div>
            <div className="w-full d-flex mt-5">
                <button
                    type="button"
                    className="btn btn-primary w-50"
                    onClick={() => setPageNumber(1)}
                >
                    Salvar
                </button>
            </div>
        </div>
    );
};

export default General;