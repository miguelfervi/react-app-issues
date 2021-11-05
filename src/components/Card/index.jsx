import React from 'react';

export const Card = ({issue}) => (
  <div className="card-container">
    <img alt="issue" src={issue.cover_image}/>
    <h1>{issue.name}</h1>
    <p>{issue.description}</p>
  </div>
)
