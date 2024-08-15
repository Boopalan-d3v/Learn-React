import React from 'react'
import { Title } from './Title'
import { Tour } from '../data'

export const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title title='featured' subTitle='tours' />
      <div className="section-center featured-center">
      {
        Tour.map((data) => {
          const {img, date, text, info, place, days, price} = data
          return(
          <article className="tour-card">
          <div className="tour-img-container">
            <img src={img} className="tour-img" alt={text} />
            <p className="tour-date">{date}</p>
          </div>
          <div className="tour-info">
            <div className="tour-title">
              <h4>{text}</h4>
            </div>
            <p>
              {info}
            </p>
            <div className="tour-footer">
              <p>
                <span><i className="fas fa-map"></i></span> {place}
              </p>
              <p>{days}</p>
              <p>{price}</p>
            </div>
          </div>
        </article>
          )
        })
      }
      </div>
    </section>
  )
}
