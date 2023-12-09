import React, { useContext, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { HiDotsVertical } from "react-icons/hi";
import { RiEqualizerFill } from "react-icons/ri";
import Context from "../../components/Context";
import "./configuration.scss"
import { useState } from "react";
import { createObject } from "./utils";
import { useNavigate } from "react-router-dom";

const TimeZone = (props) => {
    const { pageNumber, setPageNumber } = props;
    const [showOpening, setShowOpening] = useState(true);
    const [openingDay, setOpeningDay] = useState({
        domingo: true,
        monday: true,
        tuesday: true,
        wednesday: true,
        thursday: {
            status: false,
            tree: '',
            fetch: '',
        },
        friday: {
            status: false,
            tree: '',
            fetch: '',
        },
        saturday: {
            status: false,
            tree: '',
            fetch: '',
        },
    })

    const navigate = useNavigate();

    const goToBack = () => {
        const redirectUrl = "/configuracoes-box";
        navigate(redirectUrl);
    }


    return (
        <>
            <div className="width text-center">
                <h4 className="p-2 text-black">Horário de Atendimento</h4>
                <div className="my-2">
                    <div class="form-check py-1 d-flex align-items-center">
                        <input type="radio" class="form-check-input" id="show" name="show" checked={showOpening} onClick={() => setShowOpening(true)} />
                        <label class="form-check-label text-start ms-2" for="radio1">
                            <h6 className="m-0 text-black">Aberto sem horário normal</h6>
                            <div>Mostrar quando sua empresa está aberta</div>
                        </label>
                    </div>
                    <div class="form-check py-1 d-flex align-items-center">
                        <input type="radio" class="form-check-input" id="hidden" name="hidden" checked={!showOpening} onClick={() => setShowOpening(false)} />
                        <label class="form-check-label text-start ms-2" for="radio1">
                            <h6 className="m-0 text-black">Aberto sem horário normal</h6>
                            <div>Não mostrar horário de funcionamento</div>
                        </label>
                    </div>
                </div>
                <div className="my-2">
                    <div className="d-flex justify-content-between my-1">
                        <h6 className="text-black">Domingo</h6>
                        <div class="form-check">
                            <input
                                type="checkbox"
                                class="form-check-input border-dark"
                                id="domingo"
                                name="domingo"
                                checked={openingDay.domingo}
                                onClick={(e) => setOpeningDay({ ...openingDay, domingo: e.target.checked })}
                            />
                            <label class="form-check-label" for="check1">Fechado</label>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between my-1">
                        <h6 className="text-black">Segunda-feira</h6>
                        <div class="form-check">
                            <input
                                type="checkbox"
                                class="form-check-input border-dark"
                                id="monday"
                                name="monday"
                                checked={openingDay.monday}
                                onClick={(e) => setOpeningDay({ ...openingDay, monday: e.target.checked })}
                            />
                            <label class="form-check-label" for="check1">Fechado</label>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between my-1">
                        <h6 className="text-black">Terça-feira</h6>
                        <div class="form-check">
                            <input
                                type="checkbox"
                                class="form-check-input border-dark"
                                id="tuesday"
                                name="tuesday"
                                checked={openingDay.tuesday}
                                onClick={(e) => setOpeningDay({ ...openingDay, tuesday: e.target.checked })}
                            />
                            <label class="form-check-label" for="check1">Fechado</label>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between my-1">
                        <h6 className="text-black">Quarta-feira</h6>
                        <div class="form-check">
                            <input
                                type="checkbox"
                                class="form-check-input border-dark"
                                id="wednesday"
                                name="wednesday"
                                checked={openingDay.wednesday}
                                onClick={(e) => setOpeningDay({ ...openingDay, wednesday: e.target.checked })}
                            />
                            <label class="form-check-label" for="check1">Fechado</label>
                        </div>
                    </div>
                </div>
                <div className="my-3">
                    <div className="d-flex justify-content-between">
                        <h6 className="text-black">Quinta-feira</h6>
                        <div class="form-check">
                            <input
                                type="checkbox"
                                class="form-check-input border-dark"
                                id="thursday"
                                name="thursday"
                                checked={openingDay.thursday.status}
                                onClick={(e) => setOpeningDay({ ...openingDay, thursday: { ...openingDay.thursday, status: e.target.checked } })}
                            />
                            <label class="form-check-label text-black" for="check1">Fechado</label>
                        </div>
                    </div>
                    <div className="mt-1">
                        <input
                            type="text"
                            class="form-control border-dark rounded-2"
                            placeholder="Abre à(s)"
                            onChange={(e) => setOpeningDay({ ...openingDay, thursday: { ...openingDay.thursday, tree: e.target.value } })}
                        />
                    </div>
                    <div className="d-flex my-3">
                        <input
                            type="text"
                            class="form-control border-dark rounded-2"
                            placeholder="Fecha à(s)"
                            onChange={(e) => setOpeningDay({ ...openingDay, thursday: { ...openingDay.thursday, fetch: e.target.value } })}
                        />
                        <button type="button" class="btn btn-outline-dark ms-2">OK</button>
                    </div>
                </div>
                <div className="my-3">
                    <div className="d-flex justify-content-between">
                        <h6 className="text-black">Sexta-feira</h6>
                        <div class="form-check">
                            <input
                                type="checkbox"
                                class="form-check-input border-dark"
                                id="friday"
                                name="friday"
                                checked={openingDay.friday.status}
                                onClick={(e) => setOpeningDay({ ...openingDay, friday: { ...openingDay.friday, status: e.target.checked } })}
                            />
                            <label class="form-check-label text-black" for="check1">Fechado</label>
                        </div>
                    </div>
                    <div className="mt-1">
                        <input
                            type="text"
                            class="form-control border-dark rounded-2"
                            placeholder="Abre à(s)"
                            onChange={(e) => setOpeningDay({ ...openingDay, friday: { ...openingDay.friday, tree: e.target.value } })}
                        />
                    </div>
                    <div className="d-flex my-3">
                        <input
                            type="text"
                            class="form-control border-dark rounded-2"
                            placeholder="Fecha à(s)"
                            onChange={(e) => setOpeningDay({ ...openingDay, friday: { ...openingDay.friday, fetch: e.target.value } })}
                        />
                        <button type="button" class="btn btn-outline-dark ms-2">OK</button>
                    </div>
                </div>
                <div className="my-2">
                    <div className="d-flex justify-content-between">
                        <h6 className="text-black">Sábado</h6>
                        <div class="form-check">
                            <input
                                type="checkbox"
                                class="form-check-input border-dark"
                                id="saturday"
                                name="saturday"
                                checked={openingDay.saturday.status}
                                onClick={(e) => setOpeningDay({ ...openingDay, saturday: { ...openingDay.saturday, status: e.target.checked } })}
                            />
                            <label class="form-check-label text-black" for="check1">Fechado</label>
                        </div>
                    </div>
                    <div className="mt-1">
                        <input
                            type="text"
                            class="form-control border-dark rounded-2"
                            placeholder="Abre à(s)"
                            onChange={(e) => setOpeningDay({ ...openingDay, saturday: { ...openingDay.saturday, tree: e.target.value } })}
                        />
                    </div>
                    <div className="d-flex my-3">
                        <input
                            type="text"
                            class="form-control border-dark rounded-2"
                            placeholder="Fecha à(s)"
                            onChange={(e) => setOpeningDay({ ...openingDay, saturday: { ...openingDay.saturday, fetch: e.target.value } })}
                        />
                        <button type="button" class="btn btn-outline-dark ms-2">OK</button>
                    </div>
                </div>
                <div className="w-full">
                    <button
                        type="button"
                        className="btn btn-primary w-full my-5"
                        onClick={() => goToBack()}
                    >
                        SLAVAR
                    </button>
                </div>
            </div>
        </>
    );
};

export default TimeZone;
