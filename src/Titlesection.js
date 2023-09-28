import React from 'react';
import './App.css';
import logo from './OIP.jpeg';
const Titlesection = () => {
    return (
        <div  className='title'>
            <div><i class="fa fa-globe" aria-hidden="true" style={{fontSize:'50px'}}></i></div>
            <div className='navbar'>
                <li><a href="#"> Home </a></li>
                <li><a href="#latest">Latest</a></li>                
                <li><a href="#world" >World</a></li>                
                <li><a href="#politics" >Politics</a></li>                
                <li><a href="#business" >Bussiness</a></li>                                
        </div>
        <div className="ui search">
            <div className="ui icon input">
                <input className="prompt" type="text" placeholder="Search" />
                <i className="search icon"></i>
            </div>
            <div className="results"></div>
        </div>
        </div>
    );
};

export default Titlesection;