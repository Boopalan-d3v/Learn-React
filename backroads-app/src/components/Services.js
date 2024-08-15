import React from 'react'
import { Title } from './Title'
import { Service} from '../data'

export const Services = () => {
  return (
    <section className="section services" id="services">
    <Title title='our' subTitle='services'/>
    <div className="section-center services-center">
    {
      Service.map((data) => {
        const {icon, title, text } = data
        return(
        <article className="service">
          <span className="service-icon"><i className={icon}></i></span>
          <div className="service-info">
            <h4 className="service-title">{title}</h4>
            <p className="service-text">
              {text}
            </p>
          </div>
        </article>)
      })
    }
    </div>
    </section>
  )
}
