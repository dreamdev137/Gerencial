import React, { useContext, useEffect } from "react";
import Context from "../../components/Context";
import { InputField, TextField } from "../../components/FormElements";

const DestinosTuristicos = () => {
    const [context, setContext] = useContext(Context);

    const tableHeaders = [
        "name",
        "position",
        "office",
        "age",
        "date",
        "salary",
        "",
    ];

    useEffect(() => {
        setContext((prevState) => ({
            ...prevState,
            pageTitle: "Destinos Turisticos",
        }));
    }, []);

    return (
        <div className="card mt-3 mx-auto">
            <div class="card-body p-5">
                <div class="row gap-3">
                    <div class="col-lg">
                        <div class="d-flex justify-content-between align-items-center">
                            <h4>Novo Destino Turistico</h4>
                            <button
                                type="button"
                                class="btn btn-outline-secondary"
                            >
                                Configuración de Custos
                            </button>
                        </div>
                        <div class="d-flex justify-content-between mt-4 mb-4 gap-5 flex-column">
                            <div class="d-flex flex-column gap-3">
                                <InputField
                                    type="text"
                                    name="name"
                                    title="Nome"
                                    size="col-12"
                                    className="form-control py-2 my-6"
                                />
                                <TextField
                                    name="description"
                                    title="Descripción"
                                    rows={5}
                                    size="col-12"
                                    className="form-control py-2 my-6"
                                />
                            </div>
                            <div className="mt-auto w-auto">
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                >
                                    Salvar
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg">
                        <iframe
                            title="New York City Map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d843144.9276293323!2d-74.25888794611297!3d40.705831637967314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York!5e0!3m2!1sen!2s!4v1620851833368!5m2!1sen!2s"
                            style={{
                                width: "100%",
                                height: "100%",
                            }}
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DestinosTuristicos;
