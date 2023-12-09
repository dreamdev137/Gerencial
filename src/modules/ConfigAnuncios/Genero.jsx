import React, { useContext, useEffect } from "react";
import Context from "../../components/Context";
import { InputField, TextField } from "../../components/FormElements";
import TopNavLink from "../../components/ConfigAnuncios/TopNavLink";
import "./index.scss";

const Genero = () => {
    const [context, setContext] = useContext(Context);

    const tableHeaders = ["DATA", "REGRA", "%", "R$", "USUARIO"];

    const segmentData = [
        {
            id: 1,
            data: "2022-01-01",
            regra: "aumento",
            porcentagem: 10,
            valor: 1000,
            usuario: "admin@admin.com",
        },
        {
            id: 2,
            data: "2022-01-02",
            regra: "aumento",
            porcentagem: 20,
            valor: 2000,
            usuario: "admin@admin.com",
        },
        {
            id: 3,
            data: "2022-01-03",
            regra: "aumento",
            porcentagem: 30,
            valor: 3000,
            usuario: "admin@admin.com",
        },
        {
            id: 4,
            data: "2022-01-04",
            regra: "aumento",
            porcentagem: 40,
            valor: 4000,
            usuario: "admin@admin.com",
        },
        {
            id: 5,
            data: "2022-01-05",
            regra: "aumento",
            porcentagem: 50,
            valor: 5000,
            usuario: "admin@admin.com",
        },
        {
            id: 6,
            data: "2022-01-06",
            regra: "aumento",
            porcentagem: 60,
            valor: 6000,
            usuario: "admin@admin.com",
        },
        {
            id: 7,
            data: "2022-01-07",
            regra: "aumento",
            porcentagem: 70,
            valor: 7000,
            usuario: "admin@admin.com",
        },
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
                            <TopNavLink />
                        </div>
                        <div class="d-flex justify-content-between mt-4 mb-4 gap-5 flex-column">
                            <div class="d-flex flex-column gap-3">
                                <div>
                                    Esta página le permite ajustar la
                                    configuración de costos de publicidad. Puede
                                    establecer porcentajes para aumentar o
                                    disminuir el costo total del anuncio o las
                                    ventas, o establecer una cantidad fija que
                                    se sumará o restará del valor total del
                                    anuncio, por día. Recuerda que puedes
                                    definir configuraciones generales o
                                    específicas para cada Destino Turístico,
                                    permitiendo un control más detallado sobre
                                    la monetización de la plataforma.
                                </div>
                                <div>
                                    <h4>Segmentación de género</h4>
                                    <div className="row">
                                        <div className="col-lg-3">
                                            <div className="d-flex flex-column gap-2">
                                                <InputField
                                                    type="text"
                                                    name="name"
                                                    title="Valor minimo do anuncio"
                                                    size="col-12"
                                                    className="form-control py-2 my-6"
                                                />
                                                <InputField
                                                    type="text"
                                                    name="name"
                                                    title="Valor minimo para ad. creditos"
                                                    size="col-12"
                                                    className="form-control py-2 my-6"
                                                />
                                                <InputField
                                                    type="text"
                                                    name="name"
                                                    title="Duración minima do anuncio"
                                                    size="col-12"
                                                    className="form-control py-2 my-6"
                                                />
                                            </div>
                                            <div className="mt-5">
                                                <h6 className="my-3">
                                                    Descontos por tempo:
                                                </h6>
                                                <InputField
                                                    type="text"
                                                    name="name"
                                                    title="Numero de dias"
                                                    size="col-12"
                                                    className="form-control py-2 my-6"
                                                />
                                            </div>
                                            <button
                                                type="button"
                                                className="btn btn-primary my-5"
                                            >
                                                Salvar
                                            </button>
                                        </div>
                                        <div
                                            className="col-lg-6"
                                            style={{ marginLeft: "auto" }}
                                        >
                                            <h6 className="my-3">
                                                Segmentación de géneros
                                            </h6>
                                            <div className="table-responsive">
                                                <table
                                                    id="data-table-basic"
                                                    className="table"
                                                >
                                                    <thead>
                                                        <tr>
                                                            {tableHeaders.map(
                                                                (
                                                                    header,
                                                                    index
                                                                ) => (
                                                                    <th
                                                                        key={
                                                                            index
                                                                        }
                                                                    >
                                                                        {header}
                                                                    </th>
                                                                )
                                                            )}
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {segmentData &&
                                                        segmentData.length >
                                                            0 ? (
                                                            segmentData.map(
                                                                (data) => (
                                                                    <tr
                                                                        key={
                                                                            data.id
                                                                        }
                                                                    >
                                                                        <td>
                                                                            {
                                                                                data.data
                                                                            }
                                                                        </td>
                                                                        <td>
                                                                            {
                                                                                data.regra
                                                                            }
                                                                        </td>
                                                                        <td>
                                                                            {
                                                                                data.porcentagem
                                                                            }
                                                                        </td>
                                                                        <td>
                                                                            {
                                                                                data.valor
                                                                            }
                                                                        </td>
                                                                        <td>
                                                                            {
                                                                                data.usuario
                                                                            }
                                                                        </td>
                                                                    </tr>
                                                                )
                                                            )
                                                        ) : (
                                                            <tr>
                                                                <td
                                                                    colSpan={5}
                                                                    style={{
                                                                        textAlign:
                                                                            "center",
                                                                        verticalAlign:
                                                                            "middle",
                                                                        fontSize:
                                                                            "larger",
                                                                    }}
                                                                >
                                                                    <h4
                                                                        className="pb-5"
                                                                        style={{
                                                                            marginTop:
                                                                                "150px",
                                                                        }}
                                                                    >
                                                                        No
                                                                        record
                                                                        found!
                                                                    </h4>
                                                                    <br />
                                                                    <br />
                                                                    <br />
                                                                </td>
                                                            </tr>
                                                        )}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Genero;
