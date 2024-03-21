import React from 'react'
import './SingleNews.css'

const SingleNews = ({ newsData }) => {
  const news = newsData

  return (
    <>
      <div className='container'>
          <div className='row'>
            <div className='col-10 bg-light p-4' id='newsBox'>
              <h2 className='mb-3' style={{fontWeight:"bold"}}>{ news.title }</h2>
              <div className='text-muted mb-1'>來源：{ news.source }</div>
              <div className='text-muted mb-3'>更新日期：{ news.update }</div>
              <section className='fs-5 mb-3'>
                { news.content }
              </section>
              <a href={"/news"} type='button' className='btn btn-lg btn-outline-secondary mb-3'>返回新聞</a>
            </div>
          </div>
      </div>
    </>
  )
}

export default SingleNews