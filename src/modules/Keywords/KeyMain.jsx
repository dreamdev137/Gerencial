import { FaSearch } from "react-icons/fa";
import { RiEqualizerFill } from "react-icons/ri";
import KeyData from "./KeyData.json";

const KeyMain = (props) => {
    const { pageNumber, setPageNumber } = props;
    const tableHeaders = [
        "",
        "Palavra-chave",
        "Valor atual (diário)",
        "Últ. Edição",
        "Uso total",
        "Em uso",
        ""
    ];

    return <>
        <div className="dataTables_wrapper dt-bootstrap5">
            <div className="card-header flex-column flex-md-row d-flex justify-content-between align-items-center">
                <div className="row w-full">
                    <div className="col-xs-6 col-lg-6 mt-4">
                        <div className="input-group input-group-sm">
                            <input
                                type="text"
                                className="form-control"
                                aria-label="Search"
                                aria-describedby="basic-addon2"
                                placeholder="Pesquisar"
                            />
                            &nbsp;
                            <div className="input-group-append custom-input-group">
                                <span className="input-group-text custom-input-group" id="basic-addon2">
                                    <FaSearch />
                                </span>
                            </div>
                            &nbsp;
                            <div className="input-group-append custom-input-group">
                                <span className="input-group-text custom-input-group" id="basic-addon2">
                                    <RiEqualizerFill />
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-6 col-lg-6 mt-4 text-center">
                        <button type="button" class="btn btn-outline-dark ms-2" onClick={() => setPageNumber(3)}>Valor Padrão: R$ 1,00</button>
                        <button type="button" class="btn btn-outline-dark ms-2" onClick={() => setPageNumber(2)}>Editar Palavras</button>
                        <button type="button" class="btn btn-outline-dark ms-2" onClick={() => setPageNumber(1)}>Adicionar Palavras</button>
                    </div>
                </div>
            </div>
            <div className="row p-3">
                <div className="col-xs-9 col-lg-9 table-responsive border-0">
                    <table id="data-table-basic" className="table table-hover">
                        <thead>
                            <tr>
                                {tableHeaders.map((header, index) => (
                                    <th key={index} className="text-center bg-white">{header}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {KeyData && KeyData.length > 0 ? (
                                KeyData.map((data, index) => {
                                    return (
                                        <tr key={index} className="border border-1 ">
                                            <td className="align-middle py-0 rounded-start">
                                                <input
                                                    type="checkbox"
                                                    class="form-check-input border-dark"
                                                    id="domingo"
                                                    name="domingo"
                                                />
                                            </td>
                                            <td className="align-middle text-center text-black py-0">{data?.keyword}</td>
                                            <td className="align-middle text-center text-black py-0">{data?.current}</td>
                                            <td className="align-middle text-center text-black py-0">{data?.edition}</td>
                                            <td className="align-middle text-center text-black py-0">{data?.total}</td>
                                            <td className="align-middle text-center text-black py-0">{data?.using}</td>
                                            <td className="py-0 rounded-end">
                                                {/* <HiDotsVertical /> */}
                                                <div className="dropdown">
                                                    <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <i className="bi bi-three-dots-vertical fw-bold fs-5 fw-bold fs-5"></i>
                                                    </button>
                                                    <ul className="dropdown-menu">
                                                        <li>
                                                            <a className="dropdown-item" href="#">
                                                                <i className="bi bi-pencil"></i> Edit
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="dropdown-item" href="#">
                                                                <i className="bi bi-eye"></i> View
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="dropdown-item" href="#">
                                                                <i className="bi bi-trash"></i> Delete
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </td>
                                        </tr>
                                    );
                                })
                            ) : (
                                <tr>
                                    <td
                                        colSpan={6}
                                        style={{
                                            textAlign: "center",
                                            verticalAlign: "middle",
                                            fontSize: "larger",
                                        }}
                                    >
                                        <h4 className="pb-5" style={{ marginTop: "150px" }}>
                                            No record found!
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
                <div className="col-xs-3 col-lg-3 d-flex justify-content-center align-items-center">
                    <div className="border border-dark border-1 py-5 w-full text-center d-flex align-items-center justify-content-center" style={{height: '300px'}}>Insights</div>
                </div>
            </div>
        </div></>
}

export default KeyMain;