import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ConfigAnuncios = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // Replace "your_url_here" with the specific URL you want to redirect to
        const redirectUrl = "/config-anuncios/min-des";
        navigate(redirectUrl);
    }, [navigate]);

    return <div></div>;
};

export default ConfigAnuncios;
