
import React from 'react';

import Category from '../Components/organism/Category';

import Maintemplate from "../components/templates/MainTemplate";
class Home extends React.Component{
    constructor(){
        super();
        this.state= {
            
        }
    }
    
    render(){
        return (
          <Maintemplate>
            <Category />
          </Maintemplate>
        );
    }
}


export default Home;
