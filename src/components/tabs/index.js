import React, { useState } from 'react'
import Card from '../card'

const Tabs = ({ columns, options, className }) => {

    const [ active, setActive ] = useState(options ? options[0] : null)

    return(

        <Card cardWrapperClass={className} cardBodyClass="flex flex-col">
            {options ?
                <ul className={`grid ${columns} gap-2 p-2`}>
                    {options.map((option, i) => {
                        return(
                            <li key={i}>
                                <button
                                    onClick={() => setActive(option)}
                                    className={`font-headers cursor-pointer rounded-md hover:bg-green transition-colors text-lg p-2 text-center hover:shadow-md w-full ${active === option ? 'bg-green shadow-sm text-white font-semibold' : 'bg-lightGreen hover:text-white'}`}
                                    aria-pressed={active === option}
                                >
                                    {option.name}
                                </button>
                            </li>
                        )
                    })}
                </ul>
            : null}
            {active ?
                <div className="text-left p-4">
                    {active.content ? active.content : null}
                </div>
            : null }
        </Card>

    )

}

export default Tabs