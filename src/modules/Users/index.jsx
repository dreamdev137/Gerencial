import { useState, useEffect, useContext } from "react";
import Main from "./main";
import Admin from "./Admin";
import Context from "../../components/Context";

const Users = () => {
    const [pageNumber, setPageNumber] = useState(0);
    const [context, setContext] = useContext(Context);
    const [pageTitle, setPageTitle] = useState("Usuários");

    useEffect(() => {
        if (pageNumber === 0) {
            setContext(prevState => ({
                ...prevState,
                pageTitle: "Usuários"
            }))
        }
        if (pageNumber === 1) {
            setContext(prevState => ({
                ...prevState,
                pageTitle: "Adicionar Administrador"
            }))
        }
    }, [pageNumber])

    return <div className="card mt-3">
        <div className="card-datatable">
            {pageNumber === 0 ?
                <Main setPageNumber={setPageNumber} />
                :
                <Admin setPageNumber={setPageNumber} />
            }
        </div>
    </div>
}
export default Users;