import { Avatar, Button, Col, Input, Row, Typography } from 'antd'
import React, { useState } from 'react';
import { IoChevronBack } from "react-icons/io5";
import { IoMdArrowDropright } from "react-icons/io";


const EmpresasFilter = () => {
    const [activeButton, setActiveButton] = useState('Geral')
    const handleChange = (file) => {
        let currentFile = { name: '', type: '' };
        currentFile.name = file[0].name;
        currentFile.type = file[0].type;
        setInputFile([...inputFile, file[0].name] )
    }
    const [inputFile, setInputFile] = useState([
    ]);
    return (
        <div>
            <Button type='ghost' style={{ fontSize: 32, color: '#000' }} className='d-flex align-items-center' ><IoChevronBack />Empresa ABC</Button>
            <div className='bg-white m-2 p-3 rounded' >
                <div className='d-flex justify-content-between flex-wrap'>
                    <div className='d-flex gap-2'>
                        <Button style={{ minWidth: '6rem', backgroundColor: activeButton === 'Geral' ? '#fff' : '#f1f1f1', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }} type="ghost" onClick={() => { setActiveButton('Geral') }} >Geral</Button>
                        <Button style={{ minWidth: '6rem', backgroundColor: activeButton === 'Contato' ? '#fff' : '#f1f1f1', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }} type="ghost" onClick={() => { setActiveButton('Contato') }} >Contato</Button>
                        <Button style={{ minWidth: '6rem', backgroundColor: activeButton === 'Responder' ? '#fff' : '#f1f1f1', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }} type="ghost" onClick={() => { setActiveButton('Responder') }} >Responder</Button>
                        <Button style={{ borderBottom: '2px solid #38d7b0', borderRadius: 0, marginLeft: 22 }} type='ghost' >Analise Pendente</Button>
                    </div>
                    <div>
                        <Button type='ghost' style={{ backgroundColor: '#4e4c5a', color: '#fff' }}>Anuncios pendentes</Button>
                    </div>
                </div>
                <div>
                    {activeButton === 'Geral' ?
                        <div className='mt-3'>
                            <p>Imagens</p>
                            <div className='d-flex gap-4'>
                                <Avatar src='/images/upload.png' size={75} style={{ padding: 10, border: '2px solid #8f8f8f' }} />
                                <div className='d-flex gap-2'>
                                    <Avatar src='/images/upload.png' size={75} style={{ padding: 10, border: '2px solid #8f8f8f' }} shape='square' />
                                    <Avatar src='/images/upload.png' size={75} style={{ padding: 10, border: '2px solid #8f8f8f' }} shape='square' />
                                    <Avatar src='/images/upload.png' size={75} style={{ padding: 10, border: '2px solid #8f8f8f' }} shape='square' />
                                </div>
                            </div>
                            <Row gutter={[16, 16]}>
                                <Col xs={24} sm={24} md={12} lg={12} >
                                    <Typography className='my-1'><b>Informacoes da Empresa</b></Typography>
                                    <Typography>Nome: Empressa ABC</Typography>
                                    <Typography>CNPJ: 123456/1234-56</Typography>
                                    <Typography>Categoria principal: Restaurant</Typography>
                                    <Typography>Categoria secundarias: Lancheria, cafe Colonial </Typography>
                                    <Typography>Descrição: Localizado em um edificio histórico cuidadosamente restaurado, decoração requintada
                                        e detalhes arquitetónicos preservados. Menu é inspirado nas raizes da culinária colonial, trazendo
                                        pratos tradicionais e utilização de Ingredientes frescos e locais.
                                        Detalhes do Proprietário</Typography>
                                    <Typography className='my-1'><b>Detalhes do Proprietário</b></Typography>
                                    <Typography>Nome: Pedro Silveira</Typography>
                                    <Typography>CPF: 123.456.789-12</Typography>
                                    <Typography>Telefone: +55 51 99999-9999</Typography>
                                    <Typography>Email: pedro@empressabe.com.br</Typography>
                                </Col>
                                <Col xs={24} sm={24} md={12} lg={12} >
                                    <Typography className='my-1'><b>Membros</b></Typography>
                                    <Typography>Administradores: admin1@abc.com.br,admin2@abc.com.br,</Typography>
                                    <Typography>Validadores de Cupons: admin1@abc.com.br,admin2@abc.com.br,</Typography>

                                    <Typography className='my-1'><b>Dados para Repasse dos Valores das Vendas</b></Typography>
                                    <Typography>Bacnco: Banco la barles</Typography>
                                    <Typography>Agencia: 0123</Typography>
                                    <Typography>Tipo de conta: corrente</Typography>
                                    <Typography>Numero de conta: 123456-78</Typography>
                                    <Typography>Formas de aceties: casta XDU</Typography>
                                </Col>
                            </Row>
                        </div>
                        :
                        activeButton === 'Contato' ?
                            <div className='mt-3'>
                                <Row gutter={[16, 16]}>
                                    <Col xs={24} sm={24} md={12} lg={12} >
                                        <Typography className='my-1'><b>Informacoes da Empresa</b></Typography>
                                        <Typography>Nome: Empressa ABC</Typography>
                                        <Typography>CNPJ: 123456/1234-56</Typography>
                                        <Typography>Categoria principal: Restaurant</Typography>
                                        <Typography>Categoria secundarias: Lancheria, cafe Colonial </Typography>
                                        <Typography>Descrição: Localizado em um edificio histórico cuidadosamente restaurado, decoração requintada
                                            e detalhes arquitetónicos preservados. Menu é inspirado nas raizes da culinária colonial, trazendo
                                            pratos tradicionais e utilização de Ingredientes frescos e locais.
                                            Detalhes do Proprietário</Typography>
                                        <Typography className='my-1'><b>Detalhes do Proprietário</b></Typography>
                                        <Typography>Nome: Pedro Silveira</Typography>
                                        <Typography>CPF: 123.456.789-12</Typography>
                                        <Typography>Telefone: +55 51 99999-9999</Typography>
                                        <Typography>Email: pedro@empressabe.com.br</Typography>
                                    </Col>
                                    <Col xs={24} sm={24} md={12} lg={12} >
                                        <Typography className='my-1'><b>Membros</b></Typography>
                                        <Typography>Administradores: admin1@abc.com.br,admin2@abc.com.br,</Typography>
                                        <Typography>Validadores de Cupons: admin1@abc.com.br,admin2@abc.com.br,</Typography>

                                        <Typography className='my-1'><b>Dados para Repasse dos Valores das Vendas</b></Typography>
                                        <Typography>Bacnco: Banco la barles</Typography>
                                        <Typography>Agencia: 0123</Typography>
                                        <Typography>Tipo de conta: corrente</Typography>
                                        <Typography>Numero de conta: 123456-78</Typography>
                                        <Typography>Formas de aceties: casta XDU</Typography>
                                    </Col>
                                </Row>
                            </div>
                            :
                            activeButton === 'Responder' ?
                                <div className='mt-3'>
                                    <Typography><b>Historico de alalises</b></Typography>
                                    <div role='button' className='d-flex justify-content-between border rounded p-2 align-items-center mb-2' >
                                        <Typography>123-12/3456 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </Typography>
                                        <IoMdArrowDropright />
                                    </div>
                                    <div role='button' className='d-flex justify-content-between border rounded p-2 align-items-center mb-2' >
                                        <Typography>123-12/3456 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </Typography>
                                        <IoMdArrowDropright />
                                    </div>
                                    <div role='button' className='d-flex justify-content-between border rounded p-2 align-items-center mb-2' >
                                        <Typography>123-12/3456 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </Typography>
                                        <IoMdArrowDropright />
                                    </div>
                                    <div className='d-flex gap-3'>
                                        <div>
                                            <b>Reprovar</b>
                                        </div>
                                        <div className='w-100'>
                                            <Input.TextArea rows={6} />
                                        </div>
                                    </div>
                                    <div className="mt-3">
                                            <div style={{position:"absolute"}}>+ Adicionar arquivo</div>
                                            <input className ="fileOpen" style={{width:"20px", height:"30px", opacity:"0", marginTop:"-40px"}} type="file" onChange={(e) => handleChange(e.target.files)} />
                                    </div>
                                    <div className="mt-3">
                                        {inputFile.length !=0 && inputFile.map((item, index) => {
                                            return <div className="mt-1">
                                                {item.type === "jpg" ? <i class='bi bi-file-earmark-image'></i> : <i class='bi bi-file-earmark-text'></i>}&nbsp;
                                                {item}
                                            </div>
                                        })}
                                    </div>
                                    <div className='text-end my-3'>
                                        <Button type='ghost' className='bg-success text-white' style={{minWidth:'8rem'}} >Salvar</Button>
                                    </div>
                                </div>
                                :
                                ''}
                </div>
            </div>
        </div>
    )
}

export default EmpresasFilter