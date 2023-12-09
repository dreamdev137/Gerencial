import { Avatar, Button, Checkbox, Divider, Form, Input, Radio, Select, Typography } from 'antd';
import React, { useEffect, useState } from 'react';
import { IoChevronBack } from "react-icons/io5";
import { IoMdArrowDropright } from "react-icons/io";
import { FaPlus } from 'react-icons/fa';

const ConfiguracoesScreen = () => {
    const [form] = Form.useForm();
    const [activePage, setActivePage] = useState('Criar');

    /* Setting value to Form */
    useEffect(() => {
        form.setFieldsValue({
            title: 'Titulo do Anúncio',
            description: 'Descrição Curta',
            description2: 'Descrição Completa',
        })
    }, []);

    const sugestionButtons = [
        { title: "restaurante" },
        { title: "churrasco" },
        { title: "almoço" },
        { title: "Criciúma" },
        { title: "janta" },
        { title: "Santa Catarina" },
        { title: "Maracaja" },
        { title: "litoral" },
        { title: "Balneário Rincão" },
        { title: "Araranguá" },
        { title: "litoral" },
    ]
    return (
        <div className="container-fluid">
            <div className='d-flex justify-content-center text-center ' >
                {activePage == 'Criar' ?
                    <div className='bg-white rounded text-center p-3' style={{ width: '30rem' }}>
                        <header className='d-flex justify-content-between align-items-center fs-5' style={{ fontWeight: 600 }} ><IoChevronBack role="button" />Criar Anúncio © <span style={{ opacity: 0 }}>.</span></header>
                        <Divider className='mt-2' />
                        <Typography>
                            Para garantir o sucesso do seu anúncio, utilize termos ou palavras relevantes ao seu
                            negócio e forneça informações verídicas.
                        </Typography>
                        <Typography>Lembre-se, a qualidade do seu anúncio reflete diretamente em seus resultados.</Typography>
                        <Typography>Precisa de ajuda? Confira nossas Dicase Sugestões <IoMdArrowDropright style={{ fontSize: 26 }} /></Typography>
                        <Typography>Crie agora seu anúncio e comece a atrair mais clientes!</Typography>
                        <div className='d-flex gap-3 justify-content-center my-5'>
                            <div>
                                <Typography>Principle</Typography>
                                <Avatar src='/images/upload.png' size={75} style={{ padding: 10, border: '2px solid #8f8f8f' }} shape='square' />
                            </div>
                            <div>
                                <Typography>Principle</Typography>
                                <Avatar src='/images/upload.png' size={75} style={{ padding: 10, border: '2px solid #8f8f8f' }} shape='square' />
                            </div>
                        </div>
                        <div className='d-flex justify-content-center'>
                            <Form form={form} className='w-75'>
                                <Form.Item name={'title'}>
                                    <Input style={{ borderRadius: 0 }} />
                                </Form.Item>
                                <Form.Item name={'description'}>
                                    <Input.TextArea rows={4} style={{ resize: 'none', borderRadius: 0 }} />
                                </Form.Item>
                                <Form.Item name={'description2'}>
                                    <Input.TextArea rows={4} style={{ resize: 'none', borderRadius: 0 }} />
                                </Form.Item>
                                <div className='d-flex gap-3 w-100' >
                                    <Select
                                        className='w-75'
                                        defaultValue={'Categoria Principal'}
                                        options={[
                                            {
                                                value: 'a',
                                                label: "A"
                                            },
                                            {
                                                value: 'b',
                                                label: "B"
                                            },
                                            {
                                                value: 'c',
                                                label: "C"
                                            },
                                        ]} />
                                    <Button><FaPlus /></Button>
                                </div>
                                <Form.Item>
                                    <Typography>Informações</Typography>
                                </Form.Item>
                                <div className='d-flex gap-3 w-100' >
                                    <Select
                                        className='w-75'
                                        defaultValue={'Categoria Principal'}
                                        options={[
                                            {
                                                value: 'a',
                                                label: "A"
                                            },
                                            {
                                                value: 'b',
                                                label: "B"
                                            },
                                            {
                                                value: 'c',
                                                label: "C"
                                            },
                                        ]} />
                                    <Button><FaPlus /></Button>
                                </div>
                                <Button htmlType='submit' onClick={() => { setActivePage('Configurar') }} className='mt-2 bg-success text-white' block >SALVAR</Button>
                            </Form>
                        </div>

                    </div>
                    :
                    activePage == 'Configurar' ?
                        <div className='bg-white rounded text-center p-3' style={{ width: '30rem' }}>
                            <header className='d-flex justify-content-between align-items-center fs-5' style={{ fontWeight: 600 }} ><IoChevronBack role="button" onClick={() => { setActivePage('Criar') }} />Configurar Anúncio © <span style={{ opacity: 0 }}>.</span></header>
                            <Divider className='mt-2' />
                            <Typography>
                                Ao criar um novo anúncio, é importante definir os parametros e preferências
                                adequados para alcançar seu público alvo e atingir seus objetivos de negócios.
                            </Typography>
                            <Typography>Tenha em mente que suas configurações selecionadas irão impactar diretamente ocusto total do seu anúncio</Typography>
                            <Typography className='my-2'><b></b></Typography>
                            <div className='d-flex justify-content-center'>
                                <Radio.Group name="radiogroup" defaultValue={2} style={{ display: 'flex', flexDirection: 'column' }} >
                                    <Radio value={1}>Importar Configuração de Anúncio</Radio>
                                    <Radio value={2}>Criar Nova</Radio>
                                </Radio.Group>
                            </div>
                            <div className='w-75 m-auto mt-3' >
                                <Input value={"Salvar como"} style={{ borderRadius: 0 }} />
                            </div>
                            <Typography className='my-3'>Selecione a opção abaixo para destacar o seu anúncio e obter maior visibilidade.</Typography>
                            <Checkbox checked ><b>Anúncio em destaque</b></Checkbox>
                            <Typography className='fs-4 my-2' ><b>Tempo de Veiculação</b></Typography>
                            <Typography className='my-3'>Defina a duração da campanha. Poderá escolher dias específicos para a veiculaçãodo seu anúncio.</Typography>
                            <div className='w-75 m-auto mt-3' >
                                <Input type='number' placeholder='Duração em dias' />
                            </div>
                            <Typography className='fs-4 my-2' ><b>Gênero de Preferência</b></Typography>
                            <Select
                                className='w-75'
                                defaultValue={'Categoria Principal'}
                                options={[
                                    {
                                        value: 'a',
                                        label: "A"
                                    },
                                    {
                                        value: 'b',
                                        label: "B"
                                    },
                                    {
                                        value: 'c',
                                        label: "C"
                                    },
                                ]} />
                            <Typography className='fs-4 my-2' ><b>Endereço do Serviço</b></Typography>
                            <div className='w-75 m-auto mt-3' >
                                <div className='d-flex gap-3 w-100' >
                                    <Input value={"CEP"} />
                                    <Button><FaPlus /></Button>
                                </div>
                            </div>
                            <div className='w-75 m-auto mt-3' >
                                <Button onClick={() => { setActivePage('Palavras') }} className='mt-2 bg-success text-white' block >SALVAR</Button>
                            </div>

                        </div>
                        :
                        activePage == "Palavras" ?
                            <div className='bg-white rounded text-center p-3' style={{ width: '30rem' }}>
                                <header className='d-flex justify-content-between align-items-center fs-5' style={{ fontWeight: 600 }} ><IoChevronBack role="button" onClick={() => { setActivePage('Configurar') }} />Palavras-chave © <span style={{ opacity: 0 }}>.</span></header>
                                <Divider className='mt-2' />
                                <Typography className='my-2'><b>Configurar Palavras-chave</b></Typography>
                                <Typography>
                                    Defina as palavras-chave mais relevantes para o seu negócio e alcance o
                                    público-alvo com precisão.
                                </Typography>
                                <Input.TextArea rows={6} style={{ resize: 'none' }} value={`Adicionar palavras-chave separadas por virgula(restaurante, Criciúma, Santa Catarina, SC,...)`} />
                                <Typography className='d-flex my-2'>Sugestões :</Typography>
                                <div className='d-flex flex-wrap' >
                                    {sugestionButtons?.map((items, index) => {
                                        return (
                                            <Button key={index} type='ghost' className='border m-1' shape='round' >{items?.title}</Button>
                                        )
                                    })}
                                </div>
                                <div className='border rounded my-3' >
                                    <Typography><b className='fs-5'>R$ 100 para 10 dias</b></Typography>
                                    <Typography>Gasto total O</Typography>
                                </div>
                                <div className='w-75 m-auto mt-3' >
                                    <Button onClick={() => { setActivePage('Reservas') }} className='mt-2 bg-success text-white' block >SALVAR</Button>
                                </div>
                            </div>
                            :
                            activePage == "Reservas" ?
                                <div className='bg-white rounded text-center p-3' style={{ width: '30rem' }}>
                                    <header className='d-flex justify-content-between align-items-center fs-5' style={{ fontWeight: 600 }} ><IoChevronBack role="button" onClick={() => { setActivePage('Palavras') }} />Reservas © <span style={{ opacity: 0 }}>.</span></header>
                                    <Divider className='mt-2' />
                                    <Typography className='my-2'><b>Reservas de Vagas</b></Typography>
                                    <Input.TextArea rows={6} style={{ resize: 'none' }} value={`Descrição sobre as reservas de vagas`} />
                                    <Checkbox className='mt-3' checked ><b>Reserva de vagas direto pela</b></Checkbox>
                                    <div className='w-75 m-auto mt-3' >
                                        <Input className='my-1' type='number' placeholder='Vagas por dia' />
                                        <Input className='my-1' type='date' placeholder='Disponibilidade' />
                                    </div>
                                    <Checkbox className='mt-3' checked ><b>Possibilidade de Reagendamento</b></Checkbox>
                                    <div className='w-75 m-auto mt-3' >
                                        <Input className='my-1' type='number' placeholder='Dias de antecedência' />
                                    </div>

                                    <div className='border rounded my-3' >
                                        <Typography><b className='fs-5'>R$ 100 para 10 dias</b></Typography>
                                        <Typography>Gasto total O</Typography>
                                    </div>
                                    <div className='w-75 m-auto mt-3' >
                                        <Button onClick={() => { setActivePage('Compras') }} className='mt-2 bg-success text-white' block >SALVAR</Button>
                                    </div>
                                </div>
                                :
                                activePage == "Compras" ?
                                    <div className='bg-white rounded text-center p-3' style={{ width: '30rem' }}>
                                        <header className='d-flex justify-content-between align-items-center fs-5' style={{ fontWeight: 600 }} ><IoChevronBack role="button" onClick={() => { setActivePage('Reservas') }} />Compras © <span style={{ opacity: 0 }}>.</span></header>
                                        <Divider className='mt-2' />
                                        <Typography>Ative a opção de compras diretas e permita que seus clientes adquiram seus
                                            produtos ou serviços diretamente na plataforma.</Typography>
                                        <Checkbox className='mt-3' checked ><b>Compras direto pela plataforma</b></Checkbox>
                                        <Checkbox className='mt-3' checked ><b>Validação e controle de cupons direto</b></Checkbox>
                                        <div className='w-75 m-auto mt-3' >
                                            <Input.TextArea rows={3} style={{ resize: 'none' }} value={`Regras de utilização do cupom`} />
                                            <Typography className='d-flex my-2'>Opções : </Typography>
                                            <Input className='my-1' value={"Nome"} />
                                            <Select
                                                className='w-100 my-1'
                                                defaultValue={'Disponibilidade na semana'}
                                                options={[
                                                    {
                                                        value: 'a',
                                                        label: "A"
                                                    },
                                                    {
                                                        value: 'b',
                                                        label: "B"
                                                    },
                                                    {
                                                        value: 'c',
                                                        label: "C"
                                                    },
                                                ]} />
                                            <Input className='my-1' value={"Hora"} />
                                            <Input className='my-1' value={"Valor (R$)"} />
                                            <Input className='my-1' value={"Descrição do valor"} />
                                            <Button block type='ghost' className='mt-2' ><b><FaPlus />Adicionar outro</b></Button>
                                        </div>
                                        <div className='w-75 m-auto mt-3' >
                                            <div className='border rounded my-3' >
                                                <Typography><b className='fs-5'>R$ 100 para 10 dias</b></Typography>
                                                <Typography>Gasto total O</Typography>
                                            </div>
                                        </div>
                                        <div className='w-75 m-auto mt-3' >
                                            <Button onClick={() => { setActivePage('Adicionais') }} className='mt-2 bg-success text-white' block >SALVAR</Button>
                                        </div>
                                    </div>
                                    :
                                    activePage == "Adicionais" ?
                                        <div className='bg-white rounded text-center p-3' style={{ width: '30rem' }}>
                                            <header className='d-flex justify-content-between align-items-center fs-5' style={{ fontWeight: 600 }} ><IoChevronBack role="button" onClick={() => { setActivePage('Compras') }} />Adicionais © <span style={{ opacity: 0 }}>.</span></header>
                                            <Divider className='mt-2' />
                                            <Typography>Ative a opção de serviços adicionais e ofereça mais opções aos seus clientes.</Typography>
                                            <Checkbox className='mt-3' checked ><b>Serviços adicionais</b></Checkbox>
                                            <div className='w-75 m-auto mt-3' >
                                                <Input.TextArea rows={3} style={{ resize: 'none' }} value={`Descrição dos serviços adicionais`} />
                                                <Typography className='d-flex my-2'>Opções : </Typography>
                                                <Input className='my-1' value={"Nome"} />
                                                <Input className='my-1' value={"Valor (R$)"} />
                                                <Input className='my-1' value={"Descrição do valor"} />
                                                <Button block type='ghost' className='mt-2' ><b><FaPlus />Adicionar outro</b></Button>
                                            </div>
                                            <div className='w-75 m-auto mt-3' >
                                                <div className='border rounded my-3' >
                                                    <Typography><b className='fs-5'>R$ 100 para 10 dias</b></Typography>
                                                    <Typography>Gasto total O</Typography>
                                                </div>
                                            </div>
                                            <div className='w-75 m-auto mt-3' >
                                                <Button onClick={() => { setActivePage('Finalizar') }} className='mt-2 bg-success text-white' block >SALVAR</Button>
                                            </div>
                                        </div>
                                        : activePage == "Finalizar" ?
                                            <div className='bg-white rounded text-center p-3' style={{ width: '30rem' }}>
                                                <header className='d-flex justify-content-between align-items-center fs-5' style={{ fontWeight: 600 }} ><IoChevronBack role="button" onClick={() => { setActivePage('Adicionais') }} />Finalizar © <span style={{ opacity: 0 }}>.</span></header>
                                                <Divider className='mt-2' />
                                                <Typography>Veja abaixo o resumo e orçamento do seu anúncio.</Typography>
                                                <div className='w-75 m-auto mt-3' >
                                                    <div className='border rounded d-flex p-2 flex-column' >
                                                        <div className='d-flex justify-content-between w-100 my-1' >
                                                            <Typography>Anúncio em Destaque</Typography>
                                                            <Typography>R$ 20,00</Typography>
                                                        </div>
                                                        <div className='d-flex justify-content-between w-100 my-1' >
                                                            <Typography>15 palavras-chave</Typography>
                                                            <Typography>R$ 20,00</Typography>
                                                        </div>
                                                        <div className='d-flex justify-content-between w-100 my-1' >
                                                            <Typography>Reservas direto pela plataforma</Typography>
                                                            <Typography>R$ 20,00</Typography>
                                                        </div>
                                                        <div className='d-flex justify-content-between w-100 my-1' >
                                                            <Typography>Compras direto pela plataforma</Typography>
                                                            <Typography>R$ 20,00</Typography>
                                                        </div>
                                                        <div className='d-flex justify-content-between w-100 my-1' >
                                                            <Typography>Validação e controle de cupons</Typography>
                                                            <Typography>R$ 20,00</Typography>
                                                        </div>
                                                    </div>
                                                    <div className='w-75 m-auto mt-3' >
                                                        <div className='border rounded my-3' >
                                                            <Typography><b className='fs-5'>R$ 100 para 10 dias</b></Typography>
                                                            <Typography>Gasto total O</Typography>
                                                        </div>
                                                    </div>
                                                    <div className='w-75 m-auto mt-3' >
                                                        <Button onClick={() => { }} className='mt-2 bg-success text-white' block >SALVAR</Button>
                                                    </div>
                                                </div>
                                            </div>
                                            : null
                }
            </div>
        </div>
    )
}

export default ConfiguracoesScreen