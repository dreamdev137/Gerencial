import React, { useContext, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { HiDotsVertical } from "react-icons/hi";
import { RiEqualizerFill } from "react-icons/ri";
import Context from "../../components/Context";
import AnúnciosData from "./Anúncios.json";

const Public = () => {
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
                <div className="h5 ">Configurações do Público-alvo</div>
                <p>Anúncio em Destaque: Sim</p>
                <p>Duração: 20 dias</p>
                <p>Gênero de preferência: Todos</p>
                <p>Palavras-chave: Voo de balão, Cânions, Santa Catarina, Rio Grande do Sul, Aventura, Passeio panorâmico, Turismo de aventura, Praia Grande, Fotografia aérea, Beleza natural, Excursão matinal, balão de ar quente, Segurança, Paisagem do cânion, Vistas deslumbrantes, Experiência única.</p>
                <p>Descrição sobre a reserva de vagas: Nossos voos de balão nos cânions de Santa Catarina e Rio Grande do Sul são uma experiência única, oferecendo vistas panorâmicas de tirar o fôlego.
                    No entanto, o espaço em nossos balões é limitado para garantir a segurança e o conforto de todos os passageiros.
                    Portanto, é altamente recomendável que as reservas sejam feitas com antecedência.
                    Nossas vagas são preenchidas rapidamente devido à popularidade desta experiência incrível.
                    Para garantir seu lugar, entre em contato conosco o quanto antes para reservar sua viagem.
                    Temos uma equipe de atendimento ao cliente dedicada e pronta para responder a quaisquer perguntas e auxiliar no processo de reserva.
                    Não perca a chance de vivenciar um voo de balão de tirar o fôlego pelos cânions de Santa Catarina e Rio Grande do Sul.
                </p>
                <p>Reserva de vagas pela plataforma: Sim</p>
                <p>Vagas por dia: 30</p>
                <p>Disponibilidade de datas: 01 a 30/06/2023, 10 a 30/07/2023, 10/08 a 30/09/2023, 10/09/2023, 20/09/2023, 30/09/2023.</p>
                <p>Possibilidade de reagendamento: Sim</p>
                <p>Dias de antecedência: 2</p>
            </div>
        </div>
    );
};

export default Public;
