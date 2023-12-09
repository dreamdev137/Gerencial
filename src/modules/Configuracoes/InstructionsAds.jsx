import React, { useContext, useEffect, useState } from "react";
import Texteditor from "../../components/Texteditor";
import "./configuration.scss"

const InstructionsAds = (props) => {
    const [instruction, setInstruction] = useState({
        description: '',
        init: '',
        keyword: '',
        reservation: '',
        shopping: '',
        additional: '',
        finish: '',
    })
    return (
        <div className="instruction">
            <Texteditor placeholder="Informações principais" />
            <select
                class="form-select border-dark rounded-2 w-70 mt-3"
                onChange={(e) => setInstruction({ ...instruction, init: e.target.value })}
            >
                <option>Configurações iniciais</option>
                <option>Configurações iniciais</option>
                <option>Configurações iniciais</option>
                <option>Configurações iniciais</option>
            </select>
            <select
                class="form-select border-dark rounded-2 w-70 mt-3"
                onChange={(e) => setInstruction({ ...instruction, keyword: e.target.value })}
            >
                <option>Palavras-chave</option>
                <option>Palavras-chave</option>
                <option>Palavras-chave</option>
                <option>Palavras-chave</option>
            </select>
            <select
                class="form-select border-dark rounded-2 w-70 mt-3"
                onChange={(e) => setInstruction({ ...instruction, reservation: e.target.value })}
            >
                <option>Reservas</option>
                <option>Reservas</option>
                <option>Reservas</option>
                <option>Reservas</option>
            </select>
            <select
                class="form-select border-dark rounded-2 w-70 mt-3"
                onChange={(e) => setInstruction({ ...instruction, shopping: e.target.value })}
            >
                <option>Compras</option>
                <option>Compras</option>
                <option>Compras</option>
                <option>Compras</option>
            </select>
            <select
                class="form-select border-dark rounded-2 w-70 mt-3"
                onChange={(e) => setInstruction({ ...instruction, additional: e.target.value })}
            >
                <option>Adicionais</option>
                <option>Adicionais</option>
                <option>Adicionais</option>
                <option>Adicionais</option>
            </select>
            <select
                class="form-select border-dark rounded-2 w-70 mt-3"
                onChange={(e) => setInstruction({ ...instruction, finish: e.target.value })}
            >
                <option>Finalizar</option>
                <option>Finalizar</option>
                <option>Finalizar</option>
                <option>Finalizar</option>
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

export default InstructionsAds;