import { FaSearch } from "react-icons/fa";
import { RiEqualizerFill } from "react-icons/ri";
import UserData from "./Users.json"

const Main = (props) => {
    const {setPageNumber} =props;
    const tableHeaders = [
        "Nome",
        "Tipo",
        "CPF",
        "CNPJ",
        "Anunciante",
        "Email",
        ""
    ];

    return <>
        <div className="dataTables_wrapper dt-bootstrap5">
            <div className="card-header flex-column flex-md-row d-flex justify-content-between align-items-center">
                <div className="col-8 mt-4">
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
                <div className="col-4 mt-4 text-end">
                    <button type="button" class="btn btn-outline-dark ms-2" onClick={() => setPageNumber(1)}>Adicionar Adm</button>
                </div>
            </div>
            <div className="p-3 table-responsive border-0">
                <table id="data-table-basic" className="table table-hover">
                    <thead>
                        <tr>
                            {tableHeaders.map((header, index) => (
                                <th key={index} className="text-center bg-white">{header}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {UserData && UserData.length > 0 ? (
                            UserData.map((user, index) => {
                                return (
                                    <tr key={index} className="border border-1 border-dark">
                                        <td className="align-middle text-center text-black py-0 rounded-start">{user?.name}</td>
                                        <td className="align-middle text-center text-black py-0">{user?.type}</td>
                                        <td className="align-middle text-center text-black py-0">{user?.cpf}</td>
                                        <td className="align-middle text-center text-black py-0">{user?.cnpj}</td>
                                        <td className="align-middle text-center text-black py-0">{user?.anunciante}</td>
                                        <td className="align-middle text-center text-black py-0">{user?.email}</td>
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
        </div>
    </>
}

export default Main;