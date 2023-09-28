import React from 'react';

const SmallComponent = (props) => {
        var presentTime=new Date().getHours();
        var publishedTime=props.publishedAt.slice(11,13);
        var diff=Math.abs(publishedTime-presentTime)

    return (
        <div className='Normaldata'>
            <img src={props.urlToImage} alt="alternate" />
            <p style={{marginTop:'0',marginBottom:'0',fontSize:'12px'}}><i className="fa fa-clock-o" aria-hidden="true"></i>&nbsp;{diff}&nbsp;hours ago</p>
            <a href={props.url}><b>{props.title}</b></a>
        </div>
    );
};

export default SmallComponent;