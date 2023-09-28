import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Heading from './Components/Heading';
import SmallComponent from './Components/SmallComponent';

function DateDisplay(props) {
  var presentTime = new Date().getHours();
  var publishedTime = props.publishedAt.slice(11, 13);
  var diff = Math.abs(publishedTime - presentTime)
  return (
    <p><i className="fa fa-clock-o" aria-hidden="true"></i>&nbsp;{diff}&nbsp;hours ago</p>
  )
}

const TopNews = () => {
  const [Normaldata, setNormaldata] = useState([]);
  const [Topdata, setTopdata] = useState([])

  useEffect(() => {
    axios.get('https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=078d01ec49c940b3b208172eff7a1846')
      .then((res) => { setNormaldata(res.data.articles) })
      .catch((err) => { console.log(err) })


    axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=078d01ec49c940b3b208172eff7a1846')
      .then((res) => { setTopdata(res.data.articles) })
      .catch((err) => { console.log(err) })
  }, [])

  return (
    < div>
        <Heading name="Top NEWS" />
        <div className='title-image' id='#'>{
            Topdata.filter((item, index) => index < 1).map((item, index) => {
              return (
                <><h2 key={index}>{item.title}</h2><br></br><a href={item.url}>Know More</a></>)
            })
          }</div>


        <div className='Normal' >
            <Heading name="Latest" />
            <div className='Normaldata-section' id='latest'>{
              Normaldata.filter((item, index) => index < 4).map((item, index) => {
                return (
                  <div className='Normaldata' key={index}>
                  <SmallComponent urlToImage={item.urlToImage} publishedAt={item.publishedAt} url={item.url} title={item.title} />
                  </div>
                )
              })
            }</div>
        </div>
        <Heading name="World" />
      <div className='Normal-World' id="world">
          <table>
          <thead><tr></tr></thead>
          <tfoot><tr></tr></tfoot>
          <tbody>{
            Normaldata.filter((item, index) => index > 9 && index < 16).map((item, index) => {
              return (
                <tr key={index}>
                  <td><img src={item.urlToImage} alt="alternate" /></td>
                  <td>{<DateDisplay publishedAt={item.publishedAt} />}<b><a href={item.url}>{item.title}</a></b></td>
                </tr>
              )
            })
          }</tbody>
        </table>
        <table>
          <thead><tr></tr></thead>
          <tfoot><tr></tr></tfoot>
          <tbody>{
            Normaldata.filter((item, index) => index > 20 && index < 27).map((item, index) => {
              return (
                <tr key={index}><td><img src={item.urlToImage} alt="alternate" /></td>
                  <td>{<DateDisplay publishedAt={item.publishedAt} />}<b><a href={item.url}>{item.title}</a></b></td>
                </tr>
              )
            })
          }</tbody>
        </table>
      </div>



      <div className='Normal' id="politics">
        <Heading name="Politics" />
        <div className='Normaldata-section'>{
          Normaldata.filter((item, index) => index > 4 && index < 15).map((item, index) => {
            return (
              <div className='Normaldata' key={index}>
                <SmallComponent urlToImage={item.urlToImage} publishedAt={item.publishedAt} url={item.url} title={item.title} />
              </div>
            )
          })
        }</div>
      </div>
    </div>
  );
};

export default TopNews;