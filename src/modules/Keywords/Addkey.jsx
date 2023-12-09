import { useState } from "react";
import keywords from "./Keywords.json";
import "./keywords.scss"

const Addkey = (props) => {
    const { setPageNumber } = props;
    const [rowData, setRowData] = useState({
        keywords: '',
        value: '',
    });
    const addKeyword = () => {
        if(rowData.keywords === "" || rowData.value === "") return
        keywords.push({...rowData})
    }

    return <div className="p-4">
        <p>Esta página é dedicada ao gerenciamento de palavras-chave. Aqui, os administradores têm a capacidade de adicionar novas palavras-chave e atribuir-lhes um valor específico. Esses valores representam o custo diário para os anunciantes que desejam destacar seus anúncios com essas palavras-chave.</p>
        <h4 className="mt-4">Palavras-chave e Valores</h4>
        <div className="row mt-4">
            <div className="col-xs-7 col-lg-7">
                <div className="d-flex">
                    <input
                        type="text"
                        class="form-control border-dark rounded-2 w-70"
                        placeholder="Adicionar uma ou mais palavras-chave separadas por vírgula"
                        onChange={(e) => setRowData({ ...rowData, keywords: e.target.value })}
                    />
                    <input
                        type="text"
                        class="form-control border-dark rounded-2 w-30 ms-2"
                        placeholder="Valor"
                        onChange={(e) => setRowData({ ...rowData, value: e.target.value })}
                    />
                </div>
                <div className="mt-5 text-center text-black h6" onClick={() => addKeyword()}>+ Adicionar outro grupo</div>
            </div>
            <div className="col-xs-5 col-lg-5 d-flex justify-content-center">
                <div className="w-80">
                    <div className="text-start my-1">Sugestões:</div>
                    <div className="d-flex flex-wrap justify-content-between">
                        {keywords && keywords.map((item, index) => {
                            return <div className="border border-1 border-dark rounded-4 ms-2 mb-2 px-3">{item.value}</div>
                        })}
                    </div>
                </div>
            </div>
        </div>
        <div className="w-full d-flex mt-5">
            <button
                type="button"
                className="btn btn-primary w-20"
                onClick={() => setPageNumber(0)}
            >
                Salvar
            </button>
        </div>
    </div>
}

export default Addkey;