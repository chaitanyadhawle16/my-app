import React from 'react'
import './card.css'

export default function CardComponent( props ) {
    return (
    <div className="card" >
      <img src={props.avatar} className="card-img" alt="..." />
      <div className="card-body">
        <h3 className="card-id">ID: {props.id} </h3>
        <p className="card-name">{props.first_name + props.last_name}</p>
        <p className="card-email">{props.email}</p>
      </div>
    </div>
  )
} 