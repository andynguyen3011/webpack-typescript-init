import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';


// Layout Before Login
const NonAuthLayoutContent = (props:any) => {
  return <React.Fragment>
    {props.children}
  </React.Fragment>
}

// Layout After Login
const AuthLayoutContent = (props:any) => {
  var pathname = window.location.pathname.replace('/', ''); 
  return <React.Fragment>
    <div className="page-container">
      <Sidebar />
      <div className={(pathname === 'blank') ? 'is_blank_page main-content' : 'main-content'} id="main_content_sec">
        <Header />
        <div className="main-content-inner">
          {props.children}
        </div>
      </div>
      <Footer />
    </div>
  </React.Fragment>
}
interface AppProps {
  //code related to your props goes here
  layout:any
  children:any
}
class Layout extends React.Component<AppProps> {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //   };
  // }

  // componentDidMount() {
  //   var e = function () {
  //     var el = document.getElementById("main_content_sec");
  //     var e = (window.innerHeight > 0 ? window.innerHeight : this.screen.height) - 5;
  //     // (e -= 67) < 1 && (e = 1), e > 67 && el.style.height = e + 'px'
  //     el.style.height = e - 67 + 'px';
  //   };
  //   window.onresize = e;
  //   window.onload = e;
  // }

  render() {  
    return (
    
      <React.Fragment>
        {this.props.layout.layoutType === 'Auth' ? <AuthLayoutContent {...this.props} /> : <NonAuthLayoutContent {...this.props} />}
      </React.Fragment>
    );
  }
}

const mapStatetoProps = (state:any) => {
  return {
    layout: state.Layout
  };
}

export default (connect(mapStatetoProps)(Layout));
