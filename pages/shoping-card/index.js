import React from 'react';
import Router from "next/router";

// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";


import MainTemplate from '../../Components/templates/MainTemplate'
import ShopingCardInfo from '../../Components/organism/ShopingCardInfo';

class ShopingCard extends React.Component{
    constructor(){
        super();
        this.state= {
            
        }
    }
    
    render(){
        return <MainTemplate><ShopingCardInfo></ShopingCardInfo></MainTemplate>;
    }
}


export default ShopingCard;



