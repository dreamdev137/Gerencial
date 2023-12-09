import React, { useContext, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { HiDotsVertical } from "react-icons/hi";
import { RiEqualizerFill } from "react-icons/ri";
import Context from "../../components/Context";
import AnúnciosData from "./Anúncios.json";

const Available = () => {
    const [context, setContext] = useContext(Context)

    const historyData = [
        { date: '01/06/2023', title: 'Falta de inforamtion1' },
        { date: '02/06/2023', title: 'Falta de inforamtion2' },
        { date: '03/06/2023', title: 'Falta de inforamtion3' },
    ];

    useEffect(() => {
        setContext(prevState => ({
            ...prevState,
            pageTitle: "Anúncios"
        }))
    }, [])

    return (
        <div className="card mt-5 mx-auto">
            <div class="card-body p-0">
                <div className="h5 ">Configurações de Produto/Serviço</div>
                <p>Compras pela plataforma: Sim</p>
                <p>Validação e controle de cupons pela plataforma: Sim</p>
                <p>Regras de utilização do cupom: Na hora de utilizar o serviço, informe o Código do Cupom, nome completo, CPF, email ou apresente o QR Code para um funcionário da Empresa ABC.</p>
                <p>Opções:</p>
                <p>1- Nome: 1hr</p>
                <p>Valor: R$199,99</p>
                <p>Descrição do valor: por pessoa. Consulte valores especiais para grupos turísticos e crianças menores de 10 anos de idade. Necessita de Agendamento.</p>
                <p>2- Nome: 2hrs</p>
                <p>Valor: R$299,99</p>
                <p>Descrição do valor: por pessoa. Consulte valores especiais para grupos turísticos e crianças menores de 10 anos de idade. Necessita de Agendamento.</p>
                <p>3- Nome: 3hrs</p>
                <p>Valor: R$399,99</p>
                <p>Descrição do valor: por pessoa. Consulte valores especiais para grupos turísticos e crianças menores de 10 anos de idade. Necessita de Agendamento.</p>
                <p>Serviços adicionais</p>
                <p>Descrição completa: Acelere a sua adrenalina com o serviço adicional de Base Jump de Balão! Voe alto e mergulhe na emoção de saltar dos céus. Com o nosso serviço de Base Jump de balão, você terá uma experiência única e inesquecível!</p>
                <p>1- Nome: Base jump 100m</p>
                <p>Valor: R$59,99</p>
                <p>Descrição do valor: por pessoa. Consulte valores especiais para grupos turísticos e crianças menores de 10 anos de idade. Necessita de Agendamento.</p>
            </div>
        </div>
    );
};

export default Available;
