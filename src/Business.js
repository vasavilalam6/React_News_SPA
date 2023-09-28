import React, { useEffect, useState } from 'react';
import Heading from './Components/Heading';
import axios from 'axios';

function DisplayDate(props){
    var presentTime = new Date().getHours();
  var publishedTime = props.publishedAt.slice(11, 13);
  var diff = Math.abs(publishedTime - presentTime)
  return (
    <p><i className="fa fa-clock-o" aria-hidden="true"></i>&nbsp;{diff}&nbsp;hours ago</p>
  )
}


const Business = () => {
    const [business,setBusiness] = useState([]);

    useEffect(()=>{
        axios.get('https://newsapi.org/v2/everything?q=bitcoin&apiKey=078d01ec49c940b3b208172eff7a1846')
        .then((res)=>{setBusiness(res.data.articles)})
        .catch((err)=>{console.log(err)})
        console.log(business)
    },[])

    return (
        <div className='business' id='business'>
            <Heading name="Business"/>
                {business.filter((item, index) => index < 7).map((item,index)=>{
                    return(
                        <div className="blog">
                            <div className="blog-box">
                                <div className="blog-img">
                                    <img src={item.urlToImage} alt="alternate" />
                                </div>
                                <div className="blog-details">
                                    <h3>{item.title}</h3>
                                    <p>{<DisplayDate publishedAt={item.publishedAt} />}</p>
                                    <p>{item.description}</p>
                                    <a href={item.url}>CONTINUE READING&nbsp;-------</a>
                                </div>
                            </div>
                        </div>
                    )
                })}
                    
        </div>
    );
};

export default Business;