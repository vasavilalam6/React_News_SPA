import React, { useEffect,useState } from 'react';
import Heading from './Components/Heading';
// import logo from './Title.jpg'
import axios from 'axios';

const Headnews = () => {
    const [headlines,setHeadlines] = useState([]);

    useEffect(()=>{
        axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=078d01ec49c940b3b208172eff7a1846')
        .then((response)=>{setHeadlines(response.data.articles)})
        .catch((error)=>{console.log(error)})
        
    },[])

    return (
        <><Heading name="Headlines"/>
        <div className='headnews-line' id='latest'>            
            {console.log(headlines)}
                {headlines.filter((item, index) => index < 4).map((item,index)=>{
                    return(
                        <div className='card' key={index}>
                            <img src={item.urlToImage}  alt="alternate"/>                            
                            <div className='extra-content'>
                               <a href={item.url}><h5>{item.title}</h5></a>                               
                                <p>{(item.description).slice(0,100)}</p>
                            </div>
                        </div>
                    )
            })}                
        </div></>
    );
};

export default Headnews;