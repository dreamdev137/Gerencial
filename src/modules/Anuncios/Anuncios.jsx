import React, { useContext, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { HiDotsVertical } from "react-icons/hi";
import { RiEqualizerFill } from "react-icons/ri";
import Context from "../../components/Context";
import AnúnciosData from "./Anúncios.json";
import { useNavigate } from "react-router-dom";

const Anuncios = () => {
  const navigate = useNavigate();
  const [context, setContext] = useContext(Context)

  const tableHeaders = [
    "Name",
    "Date",
    "Status",
    "Local",
    "Categoria Principal",
    "Acessos",
    "CNPJ",
    ""
  ];
  // const imageView = [
  //   { Principal: '.public/images/ImageView.png' },
  //   { Principal: ['.public/images/ImageView.png', '.public/images/ImageView.png', '.public/images/ImageView.png', '.public/images/ImageView.png'] },
  // ];
  const onDetails = () => {
    const redirectUrl = "/anuncios-details";
    navigate(redirectUrl);
  }
  useEffect(() => {
    setContext(prevState => ({
      ...prevState,
      pageTitle: "Anúncios"
    }))
  }, [])

  return (
    <div className="card mt-3">
      <div className="card-datatable">
        <div className="dataTables_wrapper dt-bootstrap5 p-4" >
          <div className="card-header flex-column flex-md-row d-flex justify-content-between align-items-center p-0 ">
            <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8 ">
              <div className="input-group input-group-sm">
                <input
                  type="text"
                  className="form-control form-search"
                  aria-label="Search"
                  aria-describedby="basic-addon2"
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
            <div style={{ marginRight: "40px", fontSize:"14px" }}>
              Mostrando {AnúnciosData.length} anúncios
            </div>
          </div>
          <div className="table-responsive anucios-table mt-4">
            
            <div className="row anuncios-data ms-0 mt-2 " style={{ width: "98%" , BackgroundColor:"gray"}}>
              <div className="col-2 text-start ps-4 align-middle mt-2">Nome da empresa</div>
              <div className="col-1 text-center align-middle mt-2">Data de creacao</div>
              <div className="col-1 text-center align-middle mt-2">Status</div>
              <div className="col-2 text-center align-middle mt-2">Local</div>
              <div className="col-2 text-center align-middle mt-2">Categoria Principal</div>
              <div className="col-1 text-center align-middle mt-2">Acessos</div>
              <div className="col-2 text-center align-middle mt-2">CNPJ</div>
              <div className="col-1 text-end dropdown p-0">
                
              </div>
            </div>
            {AnúnciosData && AnúnciosData.length > 0 ? (
              AnúnciosData.map((user, index) => {
                return (
                  <div className="row border-dark anuncios-data ms-0 mt-2" style={{ width: "98%" }} key={index}>
                    <div className="col-2 text-start ps-4 align-middle mt-2">{user?.name}</div>
                    <div className="col-1 text-center align-middle mt-2">{user?.date}</div>
                    <div className="col-1 text-center align-middle mt-2">{user?.status}</div>
                    <div className="col-2 text-center align-middle mt-2">{user?.local}</div>
                    <div className="col-2 text-center align-middle mt-2">{user?.category}</div>
                    <div className="col-1 text-center align-middle mt-2">{user?.acessos}</div>
                    <div className="col-2 text-center align-middle mt-2">{user?.cnpj}</div>
                    <div className="col-1 text-end dropdown p-0">
                      <button className="btn dropdown-toggle p-0" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <i className="bi bi-three-dots-vertical fw-bold fs-5 fw-bold fs-5"></i>
                      </button>
                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="#">
                            <i className="bi bi-pencil"></i> Edit
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#" onClick={() => onDetails()}>
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
                  </div>
                );
              })
            ) : (
              <div>
                <div
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
                </div>
              </div>
            )}
            {/* </table> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Anuncios;
