import React, { useContext, useEffect, useState } from "react";
import Texteditor from "../../components/Texteditor";

const Politicas = (props) => {
    const { placeholder, setContext } = props;
    // useEffect(() => {
    //     // if (placeholder === "Políticas de Privacidade") {
    //         setContext(prevState => ({
    //             ...prevState,
    //             pageTitle: placeholder
    //         }))
    //     // }
    // }, [])
    return (
        <>
            <Texteditor placeholder={placeholder} />
            <div className="mt-4 ms-4 d-flex justify-content-start">
                <button
                    type="button"
                    className="btn btn-primary"
                    style={{ width: "15%" }}
                >
                    Salvar
                </button>
            </div>
        </>
    );
};

export default Politicas;