import React, { useContext, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { HiDotsVertical } from "react-icons/hi";
import { RiEqualizerFill } from "react-icons/ri";
import Context from "../../components/Context";
import AnúnciosData from "./Anúncios.json";
import { useState } from "react";
import "./anuncios.scss"

const Responder = () => {
    const [context, setContext] = useContext(Context)
    const [feedback, setFeedback] = useState("");
    const [feedbackType, setFeedbackType] = useState("Reprovar");
    const [readMore, setReadMore] = useState(false);

    const historyData = [
        { date: '01/06/2023', title: 'Falta de informações completas: O perfil da empresa Empresa ABC apresenta uma falta significativa de informações essenciais. Não foram fornecidos detalhes sobre a história da em... sua missão, valores ou áreas de atuação. Essas informações são importantes para os usuários compreenderem a proposta da empresa e decidirem se desejam interagir com ela. É fundamental que o perfil contenha dados relevantes e completos.' },
        { date: '01/06/2023', title: 'Falta de informações completas: O perfil da empresa Empresa ABC apresenta uma falta significativa de informações essenciais. Não foram fornecidos detalhes sobre a história da em... sua missão, valores ou áreas de atuação. Essas informações são importantes para os usuários compreenderem a proposta da empresa e decidirem se desejam interagir com ela. É fundamental que o perfil contenha dados relevantes e completos.' },
        { date: '01/06/2023', title: 'Falta de informações completas: O perfil da empresa Empresa ABC apresenta uma falta significativa de informações essenciais. Não foram fornecidos detalhes sobre a história da em... sua missão, valores ou áreas de atuação. Essas informações são importantes para os usuários compreenderem a proposta da empresa e decidirem se desejam interagir com ela. É fundamental que o perfil contenha dados relevantes e completos.' },
    ];
    const [inputFile, setInputFile] = useState([
    ]);

    const handleChange = (file) => {
        let currentFile = { name: '', type: '' };
        currentFile.name = file[0].name;
        currentFile.type = file[0].type;
        setInputFile([...inputFile, file[0].name] )
    }
    useEffect(() => {
        setContext(prevState => ({
            ...prevState,
            pageTitle: "Anúncios"
        }))
    }, [])
    useEffect(() => {
        setContext(prevState => ({
            ...prevState,
            pageTitle: "Anúncios"
        }))
    }, [inputFile])
    return (
        <div className="card mt-5 mx-auto">
            <div class="card-body p-0">
                <div>
                    <div className="h6">Histórico de análises:</div>
                    <div>
                        {historyData.map((item, index) => {
                            return <div className="border border-1 rounded-1 p-2 mt-1 history" key={index}>
                                {item.date + " - " + item.title}
                            </div>
                        })}
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="h5 col-sm-2 dropdown">
                        <span className="dropdown-toggle" data-bs-toggle="dropdown">{feedbackType} <i class='bi bi-chevron-down'></i></span>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" onClick={() => setFeedbackType("Agree")}>Agree</a></li>
                            <li><a className="dropdown-item" onClick={() => setFeedbackType("Refuse")}>Refuse</a></li>
                        </ul>
                    </div>
                    <div className="col-sm-10">
                        <textarea
                            className="border border-1 border-primary rounded-1 p-2"
                            rows={3}
                            style={{ width: '100%', minHeight: '50px' }}
                            onChange={(e) => setFeedback(e.target.value)}
                        >
                            Feedback
                        </textarea>
                        <div className="mt-2">
                            <div style={{position:"absolute"}}>+ Adicionar arquivo</div>
                            <input className ="fileOpen" style={{width:"20px", height:"30px", opacity:"0", marginTop:"-40px"}} type="file" onChange={(e) => handleChange(e.target.files)} />
                        </div>
                        <div className="mt-3">
                            {inputFile.length !=0 && inputFile.map((item, index) => {
                                return <div className="mt-1">
                                    {item.type === "jpg" ? <i class='bi bi-file-earmark-image'></i> : <i class='bi bi-file-earmark-text'></i>}&nbsp;
                                    {item}
                                </div>
                            })}
                        </div>
                    </div>
                </div>
                <div className="mt-auto w-30 d-flex justify-content-end">
                    <button
                        type="button"
                        className="btn btn-primary"
                    >
                        Salvar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Responder;
