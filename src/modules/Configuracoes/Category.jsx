import React, { useContext, useEffect, useState } from "react";
import "./configuration.scss"

const Category = (props) => {
    const [catList, setCatList] = useState([]);
    const [selectedItem, setSelectedItem] = useState({});

    const getCatList = (cat) => {
        setCatList(cat.split(","));
    }

    const tableHeaders = [
        "",
        "Categoria",
        "Total de anúncios usando",
        "Criado em",
        "Criado por",
        ""
    ];
    const tableData = [
        {
            category: 'Restaurante',
            using: "10.000",
            created: "10/06/2023",
            user: 'admin@admin.com',
        },
        {
            category: 'Restaurante',
            using: "10.000",
            created: "10/06/2023",
            user: 'admin@admin.com',
        },
        {
            category: 'Restaurante',
            using: "10.000",
            created: "10/06/2023",
            user: 'admin@admin.com',
        },
        {
            category: 'Restaurante',
            using: "10.000",
            created: "10/06/2023",
            user: 'admin@admin.com',
        },
        {
            category: 'Restaurante',
            using: "10.000",
            created: "10/06/2023",
            user: 'admin@admin.com',
        },
        {
            category: 'Restaurante',
            using: "10.000",
            created: "10/06/2023",
            user: 'admin@admin.com',
        },
        {
            category: 'Restaurante',
            using: "10.000",
            created: "10/06/2023",
            user: 'admin@admin.com',
        },
        {
            category: 'Restaurante',
            using: "10.000",
            created: "10/06/2023",
            user: 'admin@admin.com',
        },
    ]
    return (
        <div className="row">
            <div className="col-xs-5 col-lg-5">
                <input
                    type="text"
                    class="form-control border-dark rounded-2"
                    placeholder="Adicionar uma ou mais categorias separadas por vírgula"
                    onChange={(e) => getCatList(e.target.value)}
                />
                <div className="mt-5">
                    <button
                        type="button"
                        className="btn btn-primary"
                    >
                        Salvar
                    </button>
                </div>
            </div>
            <div className="col-xs-7 col-lg-7 table-responsive border-0">
                <table id="data-table-basic" className="table table-hover">
                    <thead>
                        <tr>
                            {tableHeaders.map((header, index) => (
                                <th key={index} className="text-center bg-white">{header}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {tableData && tableData.map((item, index) => {
                            return <tr className="border border-1" onClick={() => setSelectedItem(item)}>
                                <td className="align-middle rounded-start">
                                    <input
                                        type="checkbox"
                                        class="form-check-input border-dark py-0"
                                        id="domingo"
                                        name="domingo"
                                    />
                                </td>
                                <td className="align-middle text-center text-black py-0">{item.category}</td>
                                <td className="align-middle text-center text-black py-0">{item.using}</td>
                                <td className="align-middle text-center text-black py-0">{item.created}</td>
                                <td className="align-middle text-center text-black py-0">{item.user}</td>
                                <td className="py-0 rounded-end">
                                    <div className="dropdown">
                                        <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i className="bi bi-three-dots-vertical fw-bold fs-5 fw-bold fs-5"></i>
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li>
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi bi-pencil"></i> Edit
                                                </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi bi-eye"></i> View
                                                </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi bi-trash"></i> Delete
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Category;