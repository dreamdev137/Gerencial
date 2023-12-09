import historyData from "./history.json"

const StandValue = (props) => {
    const { setPageNumber } = props;
    const tableHeaders = [
        "data",
        "R$",
        "usuário",
    ];

    return <div className="p-5">
        <h4 className="text-black">Defina o Valor Padrão para palavras-chave não cadastradas</h4>
        <div className="row">
            <div className="col-xs-7 col-lg-7">
                <input
                    type="email"
                    class="form-control border-dark rounded-2 my-3 w-30"
                    placeholder="R$"
                />
            </div>
            <div className="col-xs-5 col-lg-5">
                <h6 className="text-black">Histórico de edições do Valor Padrão</h6>
                <div className="table-responsive">
                    <table class="table w-full">
                        <thead class="table-secondary bg-gray">
                            <tr>
                                {tableHeaders.map((header, index) => (
                                    <th key={index} className="text-center">{header}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {historyData && historyData.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td className="align-middle text-center text-black px-2 py-1">{item?.data}</td>
                                        <td className="align-middle text-center text-black px-2 py-1">{item?.money}</td>
                                        <td className="align-middle text-center text-black px-2 py-1">{item?.user}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
        <button
            type="button"
            className="btn btn-primary w-20"
            onClick={() => setPageNumber(0)}
        >
            Salvar
        </button>
    </div>
}

export default StandValue;