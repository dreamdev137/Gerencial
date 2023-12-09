import { FaSearch } from "react-icons/fa";
import { RiEqualizerFill } from "react-icons/ri";
import UserData from "./Users.json"
import { useState } from "react";

const Admin = (props) => {
    const { setPageNumber } = props;
    const [email, setEmail] = useState("");

    return <div className="p-5 w-30">
        <h4 className="text-black">Adicionar</h4>
        <input
            type="email"
            class="form-control border-dark rounded-2 my-5"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
        />
        <button
            type="button"
            className="btn btn-primary w-50 mt-5"
            onClick={() => setPageNumber(0)}
        >
            Salvar
        </button>
    </div>
}

export default Admin;