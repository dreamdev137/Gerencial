import React, { useContext, useEffect, useState } from "react";
import Texteditor from "../../components/Texteditor";
import "./configuration.scss"

const InstructionsCompany = (props) => {
    const [instruction, setInstruction] = useState({
        description: '',
        contact: '',
        location: '',
        time: '',
        member: '',
        bankData: '',
        complement: '',
    })
    return (
        <div className="instruction">
            <Texteditor placeholder="Sobre a sua empresa" />
            <select
                class="form-select border-dark rounded-2 w-70 mt-3"
                onChange={(e) => setInstruction({ ...instruction, contact: e.target.value })}
            >
                <option>Contato</option>
                <option>Contato</option>
                <option>Contato</option>
                <option>Contato</option>
            </select>
            <select
                class="form-select border-dark rounded-2 w-70 mt-3"
                onChange={(e) => setInstruction({ ...instruction, location: e.target.value })}
            >
                <option>Local e área</option>
                <option>Local e área</option>
                <option>Local e área</option>
                <option>Local e área</option>
            </select>
            <select
                class="form-select border-dark rounded-2 w-70 mt-3"
                onChange={(e) => setInstruction({ ...instruction, time: e.target.value })}
            >
                <option>Horário</option>
                <option>Horário</option>
                <option>Horário</option>
                <option>Horário</option>
            </select>
            <select
                class="form-select border-dark rounded-2 w-70 mt-3"
                onChange={(e) => setInstruction({ ...instruction, member: e.target.value })}
            >
                <option>Membros</option>
                <option>Membros</option>
                <option>Membros</option>
                <option>Membros</option>
            </select>
            <select
                class="form-select border-dark rounded-2 w-70 mt-3"
                onChange={(e) => setInstruction({ ...instruction, bankData: e.target.value })}
            >
                <option>Dados bancários</option>
                <option>Dados bancários</option>
                <option>Dados bancários</option>
                <option>Dados bancários</option>
            </select>
            <select
                class="form-select border-dark rounded-2 w-70 mt-3"
                onChange={(e) => setInstruction({ ...instruction, complement: e.target.value })}
            >
                <option>Complemento</option>
                <option>Complemento</option>
                <option>Complemento</option>
                <option>Complemento</option>
            </select>
            <div className="d-flex mt-5">
                <button
                    type="button"
                    className="btn btn-primary w-20"
                >
                    Salvar
                </button>
            </div>
        </div>
    );
};

export default InstructionsCompany;