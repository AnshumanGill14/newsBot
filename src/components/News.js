import React, { Component, useEffect, useState } from 'react'
import NewsItem from './NewsItem'

const News=(props)=> {
  const[articles,setArticles]=useState([]);
  const[page,setPage]=useState(1);
  const[totalResults,setTotalResults]=useState(0);

  const newsUpdate=async()=>{
    props.setProgress(0);
    const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.cat}&apiKey=df1462fd68ea4478a462e75c47036e8d&page=${page}&pageSize=${props.pageSize}`
    let data= await fetch(url)
    props.setProgress(30)
    let parsedData= await data.json()
    props.setProgress(70)
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    props.setProgress(100)
  }

 useEffect( ()=>{
    newsUpdate();}
  ,[])

 

  const btnPrevious=async ()=>{
     setPage(page-1);
     newsUpdate();
  }

  const btnNext=async ()=>{
     setPage(page+1);
     newsUpdate();
}
  


    return (
      <div className="container my-3">
        <h1 className='text-center' style={{margin:"40px", marginTop:"90px"}}>News Headlines</h1>
        <div className='row my-3'>
          {articles.map((element)=>{

            return <div className='col-md-4 my-2' key={element.url}>
            <NewsItem title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage} newsUrl={element.url}/>
          </div>

          })}
         
          
          
        </div>
        <div className="d-flex justify-content-between">
        <button disabled={page===1} type="button" className="btn btn-dark" onClick={btnPrevious}>&larr;Previous</button>
        <button disabled={page+1> Math.ceil(totalResults/props.pageSize)} type="button" className="btn btn-dark" onClick={btnNext}>Next&rarr;</button>
        
        </div>
        
      </div>
    )
 
}

export default News
