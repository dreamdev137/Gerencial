import React, { useContext, useState, useEffect } from "react";
import Context from "../../components/Context";

const Infomation = (props) => {
    const { user } = props;
    const [context, setContext] = useContext(Context)

    useEffect(() => {
        setContext(prevState => ({
            ...prevState,
            pageTitle: "Anúncios"
        }))
    }, [])

    return (

        <div className="card mt-5 mx-auto">
            <div class="card-body p-0">
                <div>
                    <div className="h5">Imagens:</div>
                    <div className="d-flex">
                        <div >
                            <div className="fs-6" >Principal:</div>
                            <img src={user.principalImg} />
                        </div>
                        <div className="ms-2">
                            <div className="fs-6 ms-2" >Outras:</div>
                            {user && user.outras.map((item, index) => {
                                return <img className="ms-2" src={item} />
                            })}
                        </div>
                    </div>
                </div>
                <div className=" mt-3">
                    <div className="h5 ">Informações</div>
                    <p>{user.informations}</p>
                    <p>Categoria principal: Restaurante</p>
                    <p>Categorias secundárias: Lancheria, Café Colonial, Delivery</p>
                    <p>Categorias secundárias adicionais: Restaurante Colonial</p>
                    <p>
                        Descrição da categoria adicional: Localizado em um edifício histórico cuidadosamente restaurado,
                        decoração requintada e detalhes arquitetônicos preservados. Menu é inspirado nas raízes da culinária colonial, trazendo pratos tradicionais e utilização de ingredientes frescos e locais.
                    </p>
                    <p>Descrição da categoria adicional: Rua das Alamedas, 123, centro, Praia Grande-SC, CEP 12.345-678</p>
                </div>
            </div>
        </div >
    );
};

export default Infomation;
