import { useContext, useEffect } from "react";
import Context from "../../components/Context";

import { AiOutlinePercentage } from "react-icons/ai";
import { Col, Row } from "antd";
import { FaLongArrowAltUp } from "react-icons/fa";
import Highcharts from 'highcharts'
import HighchartsReact from "highcharts-react-official";


const Dashboard = () => {

    const [context, setContext] = useContext(Context)

    useEffect(() => {
        setContext(prevState => ({
            ...prevState,
            pageTitle: "Pagina Inicial"
        }))
    }, []);

    const staticData = [
        {
            title: 'Total De vandos',
            count: "23.33",
            percentage: "2.1%",
            subTitle: "que o ultima ano"
        },
        {
            title: 'Total De vandos',
            count: "45.648",
            percentage: "1.3%",
            subTitle: "que o ultima ano"
        },
        {
            title: 'Total De vandos',
            count: "1.234",
            percentage: "1.3%",
            subTitle: "que o ultima ano"
        },
        {
            title: 'Total De vandos',
            count: "12.345",
            percentage: "2.3%",
            subTitle: "que o ultima ano"
        },
        {
            title: 'Total De vandos',
            count: "1.234",
            percentage: "2.1%",
            subTitle: "que o ultima ano"
        },
        {
            title: 'Total De vandos',
            count: "1.234",
            percentage: "2.3%",
            subTitle: "que o ultima ano"
        },
        {
            title: 'Total De vandos',
            count: "1.234",
            percentage: "2.1%",
            subTitle: "que o ultima ano"
        },
        {
            title: 'Total De vandos',
            count: "90%",
            percentage: "2.1%",
            subTitle: "que o ultima ano"
        },
    ];

    /* Chart Options */
    const options = {
        chart: {
            type: 'column',
        },
        title: {
            text: 'Usuarios',
        },
        xAxis: {
            categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas'],
        },
        credits: {
            enabled: false,
        },
        plotOptions: {
            column: {
                borderRadius: '25%',
            },
        },
        series: [
            {
                name: 'John',
                data: [5, 3, 4, 7, 2],
            },
            {
                name: 'Jane',
                data: [2, -2, -3, 2, 1],
            },
            {
                name: 'Joe',
                data: [3, 4, 4, -2, 5],
            },
        ],
    };


    const config = {
        chart: {
            type: 'spline',
        },
        title: {
            text: 'Monthly Average Temperature',
        },
        subtitle: {
            text: 'Source: ' +
                '<a href="https://en.wikipedia.org/wiki/List_of_cities_by_average_temperature" ' +
                'target="_blank">Wikipedia.com</a>',
        },
        xAxis: {
            categories: ['Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            accessibility: {
                description: 'Months of the year',
            },
        },
        yAxis: {
            title: {
                text: '',
            },
            labels: {
                format: '{value}',
            },
        },
        tooltip: {
            crosshairs: true,
            shared: true,
        },
        plotOptions: {
            spline: {
                marker: {
                    radius: 4,
                    lineColor: '#666666',
                    lineWidth: 1,
                },
            },
        },
        series: [{
            name: '',
            data: [{
                y: 1.5,
                accessibility: {
                    description: 'Snowy symbol, this is the coldest point in the chart.',
                },
            }, 1.6, 3.3, 5.9, 10.5, 13.5],
        }],
    };

    return (
        <>
            <div className="container-fluid">
                {/* <div className="row d-flex justify-content-center text-center text-dark h-auto py-5">
                    <i className="bi bi-emoji-smile fs-1"></i>
                    <h1>Work in progress</h1>
                </div> */}

                <Row gutter={[16, 16]}>
                    {staticData?.map((item, index) => {
                        return (
                            <Col xs={24} sm={24} md={12} lg={6} xl={6} >
                                <div className="bg-white rounded d-flex w-100 p-3" >
                                    <div className="w-75">
                                        <p>{item?.title}</p>
                                        <h1><b>{item?.count}</b></h1>
                                        <p><b className="text-success">{item?.percentage} &nbsp;<FaLongArrowAltUp /></b> {item?.subTitle}</p>
                                    </div>
                                    <div className="w-25 d-flex justify-content-center align-items-center text-center"><AiOutlinePercentage style={{ border: "1px solid #d8e5ff", padding: 10, fontSize: '3.5rem', backgroundColor: '#e5eeff', borderRadius: '50%' }} /></div>
                                </div>
                            </Col>
                        )
                    })}
                </Row>
                <Row gutter={[16, 16]} className="mt-2">
                    <Col xs={24} sm={24} md={24} lg={16} xl={16} >
                        <HighchartsReact
                            highcharts={Highcharts}
                            options={options}
                        />
                        {/* <Row gutter={[16, 16]} className="mt-3">
                            {staticData?.map((item, index) => {
                                return (
                                    <Col xs={24} sm={24} md={12} lg={8} xl={8} >
                                        <div className="bg-white rounded d-flex w-100 p-3" >
                                            <div className="w-75">
                                                <p>{item?.title}</p>
                                                <h1><b>{item?.count}</b></h1>
                                                <p><b className="text-success">{item?.percentage} &nbsp;<FaLongArrowAltUp /></b> {item?.subTitle}</p>
                                            </div>
                                            <div className="w-25 d-flex justify-content-center align-items-center text-center"><AiOutlinePercentage style={{ border: "1px solid #d8e5ff", padding: 10, fontSize: '3.5rem', backgroundColor: '#e5eeff', borderRadius: '50%' }} /></div>
                                        </div>
                                    </Col>
                                )
                            })}
                        </Row> */}
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={8} xl={8} >
                        <div style={{ height: '20rem' }}>
                            <iframe
                                title="New York City Map"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d843144.9276293323!2d-74.25888794611297!3d40.705831637967314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York!5e0!3m2!1sen!2s!4v1620851833368!5m2!1sen!2s"
                                style={{
                                    width: "100%",
                                    height: "100%",
                                }}
                                allowFullScreen=""
                                loading="lazy"
                            />
                            {/* <div className="mt-3">
                                <HighchartsReact
                                    highcharts={Highcharts}
                                    options={config}
                                />
                            </div> */}
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default Dashboard;