import React from 'react'

const NewsItem=(props)=> {
  


    let {title,description, imageUrl,newsUrl}=props
    return (
        <div className="card" >
          <img src={imageUrl?imageUrl:"https://www.usatoday.com/gcdn/presto/2023/07/16/USAT/8efffa66-5dad-43f4-a908-83ad85a0ac02-powerball-topper.png?crop=2702,1520,x46,y7&width=2702&height=1520&format=pjpg&auto=webp"} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={newsUrl} className="btn btn-sm btn-dark" target='_blank'>Read More</a>
          </div>
        </div>
    )

}

export default NewsItem
