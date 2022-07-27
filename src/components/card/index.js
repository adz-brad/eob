import React from 'react'

const Card = ({ _key, cardWrapperClass, cardBodyClass, children }) => {
    return(
        <div key={_key} className={`flex flex-col w-full shadow-lg h-full ${cardWrapperClass}`}>
            <div className="h-2 w-full rounded-t-lg bg-green"/>
            <div className={cardBodyClass}>
            {children}
            </div>
        </div>
    )
}

export default Card