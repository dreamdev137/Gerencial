import React, { useContext, useEffect, useState } from "react";
import Texteditor from "../../components/Texteditor";

const Termos = (props) => {
    const { placeholder, setPageNumber, setContext } = props;
        // useEffect(() => {
        //     setContext(prevState => ({
        //         ...prevState,
        //         pageTitle: "Termos de Uso"
        //     }))
        // }, [placeholder])
    return (
        <>
            <Texteditor placeholder={placeholder} />
            <div className="mt-4 ms-4 d-flex justify-content-start">
                <button
                    type="button"
                    className="btn btn-primary"
                    style={{ width: "15%" }}
                    onClick={() => setPageNumber(1)}
                >
                    Salvar
                </button>
            </div>
        </>
    );
};

export default Termos;