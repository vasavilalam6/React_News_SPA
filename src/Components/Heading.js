import React from 'react';

const Heading = (props) => {
    return (
        <div className='heading'>
            <h3 style={{ marginBottom: "13px", color:"#557fe0",marginLeft:"3%"}}>{props.name}</h3>
        <h4 style={{borderBottom:"2px solid grey",marginLeft:"3%", marginBottom:"2%"}}></h4>
        </div>
    );
};

export default Heading;