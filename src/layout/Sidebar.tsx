import React, { useEffect } from 'react'
import MetisMenu from 'metismenujs';
import { Link, withRouter } from 'react-router-dom';

import logo from "../assets/images/logo.svg";
function Sidebar(props:any) {
   
    useEffect(()=>{
        new MetisMenu("#menu", {});

        var matchingMenuItem = null;
        var ul = document.getElementById("menu");
        var items = ul.getElementsByTagName("a");
        for (var i = 0; i < items.length; ++i) {

            if (location.pathname === items[i].pathname) {
                matchingMenuItem = items[i];
                break;
            }
        }
        if (matchingMenuItem) {
           activateParentDropdown(matchingMenuItem);
        }
      
    },[])
    const activateParentDropdown = (item:any) => {

        item.classList.add('mm-active');
        const parent = item.parentElement;

        if (parent) {
            parent.classList.add('mm-active'); // li 
            const parent2 = parent.parentElement;

            if (parent2) {
                parent2.classList.add("mm-show");
                const parent3 = parent2.parentElement;

                if (parent3) {
                    parent3.classList.add('mm-active'); // li
                    parent3.childNodes[0].classList.add('mm-active'); //a
                    const parent4 = parent3.parentElement;
                    if (parent4) {
                        parent4.classList.add('active');
                    }
                }
            }
            return false;
        }
   
   
    }
    return (
        <React.Fragment>
        <div className="left side-menu">
                <div className="sidebar-menu">
                    <div className="sidebar-header">
                        <div className="logo">
                            <a href="index.html">
                                <img src={logo} alt="Logo" />
                            </a>
                        </div>
                    </div>
                    <div className="main-menu">
                        <div className="menu-inner" id="sidebar_menu">
                            <nav>
                                <ul className="metismenu" id="menu">
                                    <li>
                                        <Link to="/#">
                                            <i className="feather ft-home"></i>
                                            <span>dashboard</span>
                                        </Link>
                                        <ul className="submenu">
                                            <li><Link to="dashboard"><span>Dashboard V1</span></Link></li>
                                            <li><Link to="dashboard-2"><span>Dashboard V2</span></Link></li>
                                            <li><Link to="dashboard-3"><span>Dashboard V3</span></Link></li>
                                        </ul>
                                    </li>

                                    <li>
                                        <Link to="/#">
                                            <i className="feather ft-gitlab"></i>
                                            <span>UI Features</span>
                                        </Link>
                                        <ul className="submenu">
                                            <li><Link to="alert"><i className="ti-alert"></i><span>Alert</span></Link></li>
                                            <li><Link to="buttons"><i className="icon-focus"></i><span>Buttons</span></Link></li>
                                            <li><Link to="badges"><i className="icon-ribbon"></i><span>Badges</span></Link></li>
                                            <li><Link to="cards"><i className="ti-id-badge"></i><span>Cards</span></Link></li>
                                            <li><Link to="carousel"><i className="ti-layout-slider"></i><span>Carousels</span></Link></li>
                                            <li><Link to="dropdown"><i className="icon-layers"></i><span>Dropdown</span></Link></li>
                                            <li><Link to="list-group"><i className="ti-list"></i><span>List Group</span></Link></li>
                                            <li><Link to="modals"><i className="ti-layers-alt"></i><span>Modals</span></Link></li>
                                            <li><Link to="pagination"><i className="ion-android-more-horizontal"></i><span>Pagination</span></Link></li>
                                            <li><Link to="progressbar"><i className="ion-ios-settings-strong"></i><span>Progressbar</span></Link></li>
                                            <li><Link to="tabs"><i className="ti-layout-tab"></i><span>Tabs</span></Link></li>
                                            <li><Link to="typography"><i className="ti-smallcap"></i><span>Typography</span></Link></li>
                                            <li><Link to="grid"><i className="ti-layout-grid4"></i><span>Grid</span></Link></li>
                                        </ul>
                                    </li>

                                    <li>
                                        <Link to="/#">
                                            <i className="feather ft-briefcase"></i>
                                            <span>Advance Kit</span>
                                        </Link>
                                        <ul className="submenu">
                                            <li><Link to="sweet-alert"><i className="ti-layout-media-overlay-alt-2"></i> <span>Sweet Alert</span></Link></li>
                                            <li><Link to="cropper"><i className="ion-crop"></i> <span>Image Cropper</span></Link></li>
                                            <li><Link to="dropzone"><i className="ti-layout-placeholder"></i> <span>Dropzone</span></Link></li>
                                            <li><Link to="loaders"><i className="ion-load-a"></i> <span>Css Loaders</span></Link></li>
                                            <li><Link to="ladda-button"><i className="ion-load-b"></i> <span>Ladda Button</span></Link></li>
                                        </ul>
                                    </li>

                                    <li>
                                        <Link to="/#">
                                            <i className="feather ft-award"></i>
                                            <span>Icons</span>
                                        </Link>
                                        <ul className="submenu">
                                            <li><Link to="font-awesome"><i className="ti-flag-alt"></i> <span>Font Awesome</span></Link></li>
                                            <li><Link to="themify"><i className="ti-themify-favicon"></i><span>Themify</span></Link></li>
                                            <li><Link to="ionicons"><i className="ion-ionic"></i><span>Ionicons V2</span></Link></li>
                                            <li><Link to="et-line"><i className="icon-basket"></i><span>ET Line Icons</span></Link></li>
                                        </ul>
                                    </li>

                                    <li>
                                        <Link to="/#">
                                            <i className="feather ft-map-pin"></i>
                                            <span>Maps</span>
                                        </Link>
                                        <ul className="submenu">
                                            <li><Link to="google-maps"><i className="icon-map"></i><span>Google Maps</span></Link></li>
                                            <li><Link to="vector-maps"><i className="icon-map-pin"></i><span>Vector Maps</span></Link></li>
                                        </ul>
                                    </li>

                                    <li>
                                        <Link to="/#">
                                            <i className="feather ft-credit-card"></i>
                                            <span>Tables</span>
                                        </Link>
                                        <ul className="submenu">
                                            <li><Link to="basic-table"><i className="ion-ios-grid-view"></i><span>Basic Tables</span></Link></li>
                                            <li><Link to="datatable"><i className="ti-layout-slider-alt"></i><span>Datatable</span></Link></li>
                                        </ul>
                                    </li>

                                    <li>
                                        <Link to="/#">
                                            <i className="feather ft-clipboard"></i>
                                            <span>Forms</span>
                                        </Link>
                                        <ul className="submenu">
                                            <li><Link to="form-basic"><i className="ion-edit"></i><span>Basic ELements</span></Link></li>
                                            <li><Link to="form-layouts"><i className="ti-layout-grid2-thumb"></i><span>Form Layouts</span></Link></li>
                                            <li><Link to="form-groups"><i className="ion-ios-paper"></i><span>Input Groups</span></Link></li>
                                        </ul>
                                    </li>

                                    <li>
                                        <Link to="/#">
                                            <i className="feather ft-edit"></i>
                                            <span>Editors</span>
                                        </Link>
                                        <ul className="submenu">
                                            <li><Link to="text-editor"><i className="ti-uppercase"></i><span>Text Editor</span></Link></li>
                                            <li><Link to="code-editor"><i className="ion-code"></i><span>Code Editor</span></Link></li>
                                        </ul>
                                    </li>

                                    <li>
                                        <Link to="full-calendar">
                                            <i className="feather ft-calendar"></i>
                                            <span>Calendar</span>
                                        </Link>
                                    </li>

                                    <li>
                                        <Link to="/#">
                                            <i className="feather ft-pie-chart"></i>
                                            <span>Charts</span>
                                        </Link>
                                        <ul className="submenu">
                                            <li><Link to="chart-js"><i className="feather ft-bar-chart"></i><span>Chart Js</span></Link></li>
                                            <li><Link to="echart"><i className="feather ft-bar-chart-2"></i><span>E Chart Js</span></Link></li>
                                            <li><Link to="c3-chart"><i className="feather ft-bar-chart-line"></i><span>C3 Chart Js</span></Link></li>
                                            <li><Link to="chartist"><i className="feather ft-bar-chart-line-"></i><span>Chartist Js</span></Link></li>
                                            <li><Link to="apex"><i className="feather ft-bar-chart-line-"></i><span>Apex Js</span></Link></li>
                                        </ul>
                                    </li>

                                    <li>
                                        <Link to="/#">
                                            <i className="feather ft-mail"></i>
                                            <span>Email</span>
                                        </Link>
                                        <ul className="submenu">
                                            <li><Link to="inbox"><i className="ion-ios-folder-outline"></i><span>Inbox</span></Link></li>
                                            <li><Link to="compose"><i className="ti-pencil-alt"></i><span>Compose Email</span></Link></li>
                                            <li><Link to="read-mail"><i className="ti-bookmark-alt"></i><span>Read Email</span></Link></li>
                                        </ul>
                                    </li>

                                    <li>
                                        <Link to="gallery">
                                            <i className="feather ft-image"></i>
                                            <span>Gallery</span>
                                        </Link>
                                    </li>

                                    <li>
                                        <Link to="/#">
                                            <i className="feather ft-users"></i>
                                            <span>Session</span>
                                        </Link>
                                        <ul className="submenu">
                                            <li><Link to="login"><i className="feather ft-log-in"></i><span>Login</span></Link></li>
                                            <li><Link to="register"><i className="ion-person-add"></i><span>Register</span></Link></li>
                                            <li><Link to="lock"><i className="ti-lock"></i><span>Lock Screen</span></Link></li>
                                            <li><Link to="reset-password"><i className="feather ft-lock"></i><span>Reset Password</span></Link></li>
                                            <li><Link to="forget-password"><i className="ti-bookmark-alt"></i><span>Forgot Password</span></Link></li>
                                        </ul>
                                    </li>

                                    <li>
                                        <Link to="/#">
                                            <i className="feather ft-anchor"></i>
                                            <span>Error Pages</span>
                                        </Link>
                                        <ul className="submenu">
                                            <li><Link to="404"><i className="ti-unlink"></i><span>404</span></Link></li>
                                            <li><Link to="500"><i className="ti-close"></i><span>500</span></Link></li>
                                            <li><Link to="505"><i className="ti-na"></i><span>505</span></Link></li>
                                        </ul>
                                    </li>

                                    <li>
                                        <Link to="/#">
                                            <i className="feather ft-file-plus"></i>
                                            <span>Other Pages</span>
                                        </Link>

                                        <ul className="submenu">
                                            <li><Link to="blank"><i className="feather ft-file"></i><span>Blank Page</span></Link></li>
                                            <li><Link to="invoice"><i className="feather ft-paperclip"></i><span>Invoice</span></Link></li>
                                            <li><Link to="pricing"><i className="feather ft-dollar-sign"></i><span>Pricing</span></Link></li>
                                            <li><Link to="timeline"><i className="feather ft-clock"></i><span>Timeline</span></Link></li>
                                        </ul>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
        </div>

    </React.Fragment>

    )
}

export default Sidebar
