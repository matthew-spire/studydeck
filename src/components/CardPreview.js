import React from 'react'

export function CardPreview(props) {
  return (
    <div className="tile">
      <h4 className="cardTerm">{ props.term }</h4>
      <div className="cardButtons">
        <button type="button" className="tertiary">Show Back</button>
        <div>
          <button type="button" className="secondary">Edit Card</button>
          <button type="button" className="secondary danger">Delete Card</button>
        </div>
      </div>
    </div>
  )
}