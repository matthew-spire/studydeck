import React from 'react'

export function CardPreview(props) {
  // true is the default and shows the front (i.e. isFront)
  const [isFront, setIsFront] = React.useState(true)
  function handleCardFlip() {
    setIsFront(current => !current)
  }
  return (
    <div className={ `tile ${ isFront ? '' : 'back' }` }>
      <h4 className="cardTerm">{ isFront ? props.term : props.definition }</h4>
      <div className="cardButtons">
        <button type="button" className="tertiary" onClick={ handleCardFlip }>
          { isFront ? 'Show Back' : 'Show Front' }
        </button>
        <div>
          <button type="button" className="secondary">Edit Card</button>
          <button type="button" className="secondary danger">Delete Card</button>
        </div>
      </div>
    </div>
  )
}