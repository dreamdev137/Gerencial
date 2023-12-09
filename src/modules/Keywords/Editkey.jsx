import { useState } from "react";
import keywords from "./Keywords.json";
import "./keywords.scss"

const Editkey = (props) => {
    const { setPageNumber } = props;
    const [selectedItem, setSelectedItem] = useState({keywords: '', value: ''});

    return <div className="p-4">
        <p>Esta página é dedicada ao gerenciamento de palavras-chave. Aqui, os administradores têm a capacidade de adicionar novas palavras-chave e atribuir-lhes um valor específico. Esses valores representam o custo diário para os anunciantes que desejam destacar seus anúncios com essas palavras-chave.</p>
        <h4 className="mt-4">Palavras-chave e Valores</h4>
        <div className="row mt-4">
            <div className="col-xs-7 col-lg-7">
                <div className="d-flex">
                    <input type="text" class="form-control border-dark rounded-2 w-70" placeholder="Praia" value={selectedItem.keyword}/>
                    <input type="text" class="form-control border-dark rounded-2 w-30 ms-2" placeholder="R$ 1,25" value={(selectedItem.value)} />
                </div>
                <div className="d-flex mt-3">
                    <input type="text" class="form-control border-dark rounded-2 w-70" placeholder="Serra Catarinense" />
                    <input type="text" class="form-control border-dark rounded-2 w-30 ms-2" placeholder="R$ 2,00" />
                </div>
                <div className="d-flex mt-3">
                    <input type="text" class="form-control border-dark rounded-2 w-70" placeholder="Voo de Balão, Balonismo, Aventura" />
                    <input type="text" class="form-control border-dark rounded-2 w-30 ms-2" placeholder="R$ 1,50" />
                </div>
                <div className="mt-5 text-center text-black h6">+ Adicionar outro grupo</div>
            </div>
            <div className="col-xs-5 col-lg-5 d-flex justify-content-center">
                <div className="w-80">
                    <div className="text-start my-1">Sugestões:</div>
                    <div className="d-flex flex-wrap justify-content-between">
                        {keywords && keywords.map((item, index) => {
                            return <div className="border border-1 border-dark rounded-4 ms-2 mb-2 px-3" onClick={() => setSelectedItem(item)}>{item.value}</div>
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

export default Editkey;