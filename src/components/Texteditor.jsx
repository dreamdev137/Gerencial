import React, { useState } from "react";
import ReactQuill from "react-quill";

const Texteditor = (props) => {
    const {placeholder} = props;
    const modules = {
        toolbar: [
            ["bold", "italic", "underline"],
            [{ list: "ordered" }, { list: "bullet" }],
            ["image"],
        ]
    };

    const formats = [
        "bold",
        "italic",
        "underline",
        "list",
        "bullet",
        "image",
    ];
    const [code, setCode] = useState("Políticas de Privacidade");
    const handleProcedureContentChange = (content, delta, source, editor) => {
        setCode(content);
    }
    return (
        <>
            <ReactQuill
                theme="snow"
                modules={modules}
                formats={formats}
                value={placeholder}
                onChange={handleProcedureContentChange}
            />
        </>
    );
};

export default Texteditor;
