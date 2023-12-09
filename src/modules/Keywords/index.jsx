import { useState, useEffect, useContext } from "react";
import Context from "../../components/Context";
import KeyMain from "./KeyMain";
import Addkey from "./Addkey";
import Editkey from "./Editkey";
import StandValue from "./StandValue";

const Keywords = () => {
    const [pageNumber, setPageNumber] = useState(0);
    const [context, setContext] = useContext(Context);
    const [pageTitle, setPageTitle] = useState("Palavras-chave");

    useEffect(() => {
        setContext(prevState => ({
            ...prevState,
            pageTitle: "Palavras-chave"
        }))
    }, [])

    useEffect(() => {
        Page();
    }, [])
    useEffect(() => {
        Page();
        if (pageNumber === 0) {
            setContext(prevState => ({
                ...prevState,
                pageTitle: "Palavras-chave"
            }))
        }
        if (pageNumber === 1) {
            setContext(prevState => ({
                ...prevState,
                pageTitle: "Adicionar Palavras-chave"
            }))
        }
        if (pageNumber === 2) {
            setContext(prevState => ({
                ...prevState,
                pageTitle: "Editar Palavras-chave"
            }))
        }
        if (pageNumber === 3) {
            setContext(prevState => ({
                ...prevState,
                pageTitle: "Valor Padrão"
            }))
        }
    }, [pageNumber])
    const Page = () => {
        if (pageNumber === 1) return <Addkey pageNumber={pageNumber} setPageNumber={setPageNumber} />
        if (pageNumber === 2) return <Editkey pageNumber={pageNumber} setPageNumber={setPageNumber} />
        if (pageNumber === 3) return <StandValue Padrão pageNumber={pageNumber} setPageNumber={setPageNumber} />
    }

    return <div className="card mt-3">
        <div className="card-datatable">
            {
                pageNumber === 0 ?
                    <KeyMain pageNumber={pageNumber} setPageNumber={setPageNumber} />
                    :
                    Page()
            }
        </div>
    </div>
}
export default Keywords;