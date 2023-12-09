import React, { useState, useContext, useEffect } from "react";
import Context from "../../components/Context";
import { InputField, TextField } from "../../components/FormElements";
import TopNavLink from "../../components/ConfigAnuncios/TopNavLink";
import "./index.scss";
import "./configAnuncios.scss"
const MinDes = () => {
    const [context, setContext] = useContext(Context);
    const [buttonClick, setButtonClick] = useState(false);
    const tableHeaders = ["Data", "Valor min.", "Duracao min.", "Usuario"];

    const valoresData = [
        {
            id: 1,
            data: "2022/01/01",
            valor: 1000,
            duracao: 10,
            usuario: "admin@admin.com",
        },
        {
            id: 2,
            data: "2022/01/02",
            valor: 2000,
            duracao: 20,
            usuario: "admin@admin.com",
        },
        {
            id: 3,
            data: "2022/01/03",
            valor: 3000,
            duracao: 30,
            usuario: "admin@admin.com",
        },
        {
            id: 4,
            data: "2022/01/04",
            valor: 4000,
            duracao: 40,
            usuario: "admin@admin.com",
        },
        {
            id: 5,
            data: "2022/01/05",
            valor: 5000,
            duracao: 50,
            usuario: "admin@admin.com",
        },
    ];

    const descontosData = [
        {
            id: 1,
            data: "2022/01/01",
            valor: 1000,
            duracao: 10,
            usuario: "admin@admin.com",
        },
        {
            id: 2,
            data: "2022/01/02",
            valor: 2000,
            duracao: 20,
            usuario: "admin@admin.com",
        },
        {
            id: 3,
            data: "2022/01/03",
            valor: 3000,
            duracao: 30,
            usuario: "admin@admin.com",
        },
        {
            id: 4,
            data: "2022/01/04",
            valor: 4000,
            duracao: 40,
            usuario: "admin@admin.com",
        },
        {
            id: 5,
            data: "2022/01/05",
            valor: 5000,
            duracao: 50,
            usuario: "admin@admin.com",
        },
    ];

    useEffect(() => {
        setContext((prevState) => ({
            ...prevState,
            pageTitle: "Configurações de Custos de Anúncios",
        }));
    }, []);
    const clickStatus = () => {

        setButtonClick(!buttonClick);
    }
    return (
        <div className="card mt-3 mx-auto">
            <div class="card-body p-0">
                <div class="row gap-3">
                    <div class="col-lg">
                        <div class="d-flex justify-content-between align-items-center w-full">
                            <TopNavLink />
                        </div>
                        <div class="d-flex justify-content-between ms-5 mt-4 mb-4 gap-5 flex-column">
                            <div class="d-flex flex-column gap-3">
                                <div className="h6">
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
                                    <h4>Valores Minimos e Descontos</h4>
                                    <div className="row mt-4" >
                                        <div className="firstGrid col-lg-3" >
                                            <div style={{  }}>
                                                <div className="d-flex flex-column gap-1" sx={{ fontSize: "12px!important" }}>
                                                    <InputField
                                                        type="text"
                                                        name="name"

                                                        title="Valor minimo do anuncio"
                                                        size="col-12"
                                                        className="form-control form-check py-2 my-6 h6 "

                                                    />
                                                    <InputField
                                                        type="text"
                                                        name="name"
                                                        title="Valor minimo para ad. creditos"
                                                        size="col-12"
                                                        className="form-control form-check py-2 my-6 h6 "
                                                    />
                                                    <InputField
                                                        type="text"
                                                        name="name"
                                                        title="Duración minima do anuncio"
                                                        size="col-12"
                                                        className="form-control form-check py-2 my-6 h6 "
                                                    />
                                                </div>
                                                <div className="mt-2">
                                                    <h6 className="my-3 fw-bold fs-6">
                                                        Descontos por tempo:
                                                    </h6>
                                                    <InputField
                                                        type="text"
                                                        name="name"
                                                        title="Numero de dias"
                                                        size="col-12"
                                                        className="form-control form-check py-2 my-6 h6 "
                                                    />
                                                </div>
                                                <div className="mt-1">
                                                    <div className="row mt-3">
                                                        <div className="col-2 circleButton" >
                                                            {
                                                                buttonClick === false ? <>
                                                                    <button type="button" className="btn btn-secondary btn-circle btn-sm" onClick={() => clickStatus()}></button>
                                                                </> :
                                                                    <>
                                                                        <button type="button" className="btn btn-success btn-circle btn-sm " onClick={() => clickStatus()} ></button></>
                                                            }
                                                        </div>
                                                        <div className="col-10">
                                                            <InputField
                                                                type="text"
                                                                name="name"
                                                                title="Numero de dias"
                                                                size="col-12"
                                                                className="form-control form-check checkInput py-2 my-6 h6"
                                                            />
                                                        </div>

                                                    </div>
                                                    <div className="row">
                                                        <div className="col-2 circleButton">
                                                            {
                                                                buttonClick === false ? <>
                                                                    <button type="button" className="btn btn-secondary btn-circle btn-sm " onClick={() => clickStatus()}></button>
                                                                </> :
                                                                    <>
                                                                        <button type="button" className="btn btn-success btn-circle btn-sm " onClick={() => clickStatus()} ></button></>
                                                            }                                                    </div>
                                                        <div className="col-10">
                                                            <InputField
                                                                type="text"
                                                                name="name"
                                                                title="Numero de dias"
                                                                size="col-12"
                                                                className="form-control form-check checkInput py-2 my-6 h6"

                                                            />
                                                        </div>

                                                    </div>
                                                </div>
                                                <button
                                                    type="button"
                                                    className="btn btn-primary my-5"
                                                    style={{width:"228px"}}
                                                >
                                                    Salvar
                                                </button>
                                            </div>
                                        </div>
                                        <div className="col-lg-9 row">
                                            <div className="col-lg-6">
                                                <h6 className="">
                                                    Valores Minimos
                                                </h6>
                                                <div className="table-responsive">
                                                    <table
                                                        id="data-table-basic"
                                                        className="table"
                                                    >
                                                        <thead >
                                                            <tr >
                                                                {tableHeaders.map(
                                                                    (
                                                                        header,
                                                                        index
                                                                    ) => (
                                                                        <th 
                                                                            key={
                                                                                index
                                                                            }
                                                                            className="tableheader"
                                                                        >
                                                                            {
                                                                                header
                                                                            }
                                                                        </th>
                                                                    )
                                                                )}
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {valoresData &&
                                                                valoresData.length >
                                                                0 ? (
                                                                valoresData.map(
                                                                    (data) => (
                                                                        <tr
                                                                            key={
                                                                                data.id
                                                                            }
                                                                        >
                                                                            <td className="dataInfor" >
                                                                                {
                                                                                    data.data
                                                                                }
                                                                            </td >
                                                                            <td className="dataInfor">
                                                                                {
                                                                                    data.valor
                                                                                }
                                                                            </td>
                                                                            <td className="dataInfor">
                                                                                {
                                                                                    data.duracao
                                                                                }
                                                                            </td>
                                                                            <td className="dataInfor">
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
                                                                        colSpan={
                                                                            4
                                                                        }
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
                                            <div className="col-lg-6">
                                                <h6 className="">
                                                    Descontos por Tempo
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
                                                                            className="tableheader"
                                                                        >
                                                                            {
                                                                                header
                                                                            }
                                                                        </th>
                                                                    )
                                                                )}
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {descontosData &&
                                                                descontosData.length >
                                                                0 ? (
                                                                descontosData.map(
                                                                    (data) => (
                                                                        <tr
                                                                            key={
                                                                                data.id
                                                                            }
                                                                            className="fs-6"
                                                                        >
                                                                            <td className="dataInfor">
                                                                                {
                                                                                    data.data
                                                                                }
                                                                            </td>
                                                                            <td className="dataInfor">
                                                                                {
                                                                                    data.valor
                                                                                }
                                                                            </td>
                                                                            <td className="dataInfor">
                                                                                {
                                                                                    data.duracao
                                                                                }
                                                                            </td>
                                                                            <td className="dataInfor">
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
                                                                        colSpan={
                                                                            4
                                                                        }
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
        </div>
    );
};

export default MinDes;
