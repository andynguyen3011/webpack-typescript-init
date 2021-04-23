import React, { Component,useEffect } from 'react';
import { Row, Col, Table, Card, CardBody } from 'reactstrap';
import { activateAuthLayout } from '../../store/actions';
import { Link, withRouter } from 'react-router-dom';
import { useDispatch ,useSelector} from 'react-redux';
// import BarChart from './HomeCharts/barchart';
// import RecentSaleChart from './HomeCharts/recentSaleChart';
// import CurrentSaleChart from './HomeCharts/currentSaleChart';
// import Radarchart from './HomeCharts/radarchart';


function Dashboard() {
    const dispatch=useDispatch()
    const {user} = useSelector((state:any) => ({
        user:state.user
    }))

    useEffect(() => {
        dispatch(activateAuthLayout())
    }, [])
    return (
        <React.Fragment>
        <Row>
            <Col lg="8" className="stretched_card">
                <Card>
                    <CardBody>
                        <h4 className="card_title mb-2">Your Eccommerce store's Year Sales</h4>
                        <div className="d-flex flex-wrap align-items-baseline">
                            <h2 className="mr-3 mb-3">89,99 $</h2>
                            <i className="feather ft-arrow-up mr-1 text-success"></i><span><cite className="mb-0 text-success font-weight-medium">4.89%</cite></span>
                        </div>
                        <div className="chart_container mt-3">
                            {/* <BarChart /> */}
                        </div>
                    </CardBody>
                </Card>
            </Col>

            <Col lg="4" className="stretched_card d-block-mob">
                <Row>
                    <Col md="12">
                        <Card className="card-icon rt_icon_card mb-4 mt-mob-4 text-center">
                            <CardBody>
                                <div className="icon_rt">
                                    <i className="feather ft-users"></i>
                                </div>
                                <div className="icon_specs">
                                    <p>New Users</p>
                                    <span>20</span>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md="12">
                        <Card className="card-icon rt_icon_card mb-4 text-center">
                            <CardBody>
                                <div className="icon_rt">
                                    <i className="feather ft-activity"></i>
                                </div>
                                <div className="icon_specs">
                                    <p>User Activity</p>
                                    <span>670</span>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md="12">
                        <Card className="card-icon rt_icon_card mb-4 text-center">
                            <CardBody>
                                <div className="icon_rt">
                                    <i className="feather ft-shopping-bag"></i>
                                </div>
                                <div className="icon_specs">
                                    <p>Total Sales</p>
                                    <span>9466</span>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>

            </Col>
        </Row>

        <Row>
            <Col lg="3" className="stretched_card mt-4">
                <Card>
                    <CardBody>
                        <p className="card-title mb-1 text-muted">Recent Month Sales</p>
                        <div className="d-flex flex-wrap align-items-baseline">
                            <h2 className="mr-3">89,99 $</h2>
                            <i className="feather ft-arrow-up mr-1 text-success"></i><span><cite className="mb-0 text-success font-weight-medium">4.89%</cite></span>
                        </div>
                        <p className="mb-0 text-muted">World wide Sales</p>
                    </CardBody>
                    {/* <RecentSaleChart /> */}
                </Card>
            </Col>
            <Col lg="3" className="stretched_card mt-4">
                <Card>
                    <CardBody>
                        <p className="card-title mb-1 text-muted">Current Month Sales</p>
                        <div className="d-flex flex-wrap align-items-baseline">
                            <h2 className="mr-3">19,89 $</h2>
                            <i className="feather ft-arrow-down mr-1 text-danger"></i><span><cite className="mb-0 text-danger font-weight-medium">1.12%</cite></span>
                        </div>
                        <p className="mb-0 text-muted">World wide Sales</p>
                    </CardBody>
                    {/* <CurrentSaleChart /> */}
                </Card>
            </Col>

            <Col lg="6" className="stretched_card mt-4">
                <Card>
                    <CardBody>
                        <h4 className="card_title">Sales By Country Traffic Source</h4>
                        <ul className="country-sales list-group list-group-flush">
                            <li className="country-sales-content list-group-item"><span className="mr-2"><i className="flag-icon flag-icon-us" title="us" id="us"></i> </span>
                                <span className="">United States</span><span className="float-right text-dark">78%</span>
                            </li>
                            <li className="list-group-item country-sales-content">
                                <span className="mr-2"><i className="flag-icon flag-icon-ca" title="ca" id="ca"></i></span><span className="">Canada</span><span className="float-right text-dark">7%</span>
                            </li>
                            <li className="list-group-item country-sales-content">
                                <span className="mr-2"><i className="flag-icon flag-icon-ru" title="ru" id="ru"></i></span><span className="">Russia</span><span className="float-right text-dark">4%</span>
                            </li>
                            <li className="list-group-item country-sales-content">
                                <span className=" mr-2"><i className="flag-icon flag-icon-ir" title="in" id="in"></i></span><span className="">Iran</span><span className="float-right text-dark">12%</span>
                            </li>
                        </ul>
                    </CardBody>
                </Card>
            </Col>
        </Row>
        
        <Row>
            <Col lg="6" className="stretched_card mt-4">
                <Card>
                    <CardBody>
                        <h4 className="card_title">Timeline</h4>
                        <div className="pl-5">
                            <div className="timeline-task">
                                <div className="icon bg_secondary">
                                    <i className="feather ft-message-square"></i>
                                </div>
                                <div className="timeline_title">
                                    <h4>You got 1 New Message</h4>
                                    <span className="time"><i className="ti-time"></i>09:35</span>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse distinctio itaque at.
                            </p>
                            </div>
                            <div className="timeline-task">
                                <div className="icon bg_success">
                                    <i className="feather ft-check"></i>
                                </div>
                                <div className="timeline_title">
                                    <h4>Your Verification Successful</h4>
                                    <span className="time"><i className="ti-time"></i>7 Minutes Ago</span>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur.
                            </p>
                            </div>
                            <div className="timeline-task">
                                <div className="icon bg_danger">
                                    <i className="feather ft-alert-triangle"></i>
                                </div>
                                <div className="timeline_title">
                                    <h4>Something Went Wrong</h4>
                                    <span className="time"><i className="ti-time"></i>09:20 Am</span>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse distinctio itaque at.</p>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </Col>

            <Col lg="6" className="stretched_card mt-4">
                <Card>
                    <CardBody>
                        <h4 className="card_title">Sales By Traffic</h4>
                        <ul className="traffic-sales list-group list-group-flush">
                            <li className="traffic-sales-content list-group-item ">
                                <span className="traffic-sales-name">Direct</span>
                                <span className="traffic-sales-amount">$4000.00
                                <span className="icon-circle-small icon-box-xs text-success ml-4 bg-success-light">
                                        <i className="fa fa-fw fa-arrow-up"></i>
                                    </span>
                                    <span className="ml-1 text-success">5.86%</span>
                                </span>
                            </li>
                            <li className="traffic-sales-content list-group-item">
                                <span className="traffic-sales-name">Search
                                <span className="traffic-sales-amount">$3123.00
                                    <span className="icon-circle-small icon-box-xs text-success ml-4 bg-success-light">
                                            <i className="fa fa-fw fa-arrow-up"></i>
                                        </span>
                                        <span className="ml-1 text-success">5.86%</span>
                                    </span>
                                </span>
                            </li>
                            <li className="traffic-sales-content list-group-item">
                                <span className="traffic-sales-name">Social
                                <span className="traffic-sales-amount ">$3099.00
                                    <span className="icon-circle-small icon-box-xs text-success ml-4 bg-success-light">
                                            <i className="fa fa-fw fa-arrow-up"></i>
                                        </span>
                                        <span className="ml-1 text-success">5.86%</span>
                                    </span>
                                </span>
                            </li>
                            <li className="traffic-sales-content list-group-item">
                                <span className="traffic-sales-name">Referrals
                                <span className="traffic-sales-amount ">$2220.00
                                    <span className="icon-circle-small icon-box-xs text-danger ml-4 bg-danger-light">
                                            <i className="fa fa-fw fa-arrow-down"></i>
                                        </span>
                                        <span className="ml-1 text-danger">4.02%</span>
                                    </span>
                                </span>
                            </li>
                            <li className="traffic-sales-content list-group-item ">
                                <span className="traffic-sales-name">Email
                                <span className="traffic-sales-amount">$1567.00
                                    <span className="icon-circle-small icon-box-xs text-danger ml-4 bg-danger-light">
                                            <i className="fa fa-fw fa-arrow-down"></i>
                                        </span>
                                        <span className="ml-1 text-danger">3.86%</span>
                                    </span>
                                </span>
                            </li>
                            <li className="traffic-sales-content list-group-item ">
                                <span className="traffic-sales-name">Visits
                                <span className="traffic-sales-amount">$1567.00
                                    <span className="icon-circle-small icon-box-xs text-danger ml-4 bg-danger-light">
                                            <i className="fa fa-fw fa-arrow-down"></i>
                                        </span>
                                        <span className="ml-1 text-danger">3.86%</span>
                                    </span>
                                </span>
                            </li>
                            <li className="traffic-sales-content list-group-item ">
                                <span className="traffic-sales-name">Marketing
                                <span className="traffic-sales-amount">$1567.00
                                    <span className="icon-circle-small icon-box-xs text-danger ml-4 bg-danger-light">
                                            <i className="fa fa-fw fa-arrow-down"></i>
                                        </span>
                                        <span className="ml-1 text-danger">3.86%</span>
                                    </span>
                                </span>
                            </li>
                        </ul>
                    </CardBody>
                </Card>
            </Col>
        </Row>

        <Row>
            <Col lg="6" className="stretched_card mt-4">
                <Card>
                    <CardBody>
                        <h4 className="card_title">Top Campaigns</h4>
                        <Table responsive className="table no-wrap p-table">
                            <thead className="bg-light">
                                <tr className="border-0">
                                    <th className="border-0">Campaign</th>
                                    <th className="border-0">Visits</th>
                                    <th className="border-0">Revenue</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Campaign#1</td>
                                    <td>98,789 </td>
                                    <td>$4563</td>
                                </tr>
                                <tr>
                                    <td>Campaign#2</td>
                                    <td>2,789 </td>
                                    <td>$325</td>
                                </tr>
                                <tr>
                                    <td>Campaign#3</td>
                                    <td>1,459 </td>
                                    <td>$225</td>
                                </tr>
                                <tr>
                                    <td>Campaign#4</td>
                                    <td>5,035 </td>
                                    <td>$856</td>
                                </tr>
                                <tr>
                                    <td>Campaign#5</td>
                                    <td>5,035 </td>
                                    <td>$856</td>
                                </tr>
                                <tr>
                                    <td >
                                        <Link to="#" className="btn btn-outline-primary float-right">Details</Link>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </CardBody>
                </Card>
            </Col>

            <Col lg="6" className="stretched_card mt-4">
                <Card>
                    <CardBody>
                        <h4 className="card_title">Product Data Stats</h4>
                        <div className="chart_container">
                            {/* <Radarchart /> */}
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    </React.Fragment>

    )
}

export default Dashboard
