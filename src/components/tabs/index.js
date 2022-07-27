import React, { useState } from 'react'
import Card from '../card'

const Tabs = ({ options, className }) => {

    const [ active, setActive ] = useState(options ? options[0] : null)

    const cols = options ? `lg:grid-cols-${options.length}` : 'grid-flow-col'

    return(

        <Card cardWrapperClass={className} cardBodyClass="flex flex-col">
            {options ?
                <ul className={`grid grid-cols-1 ${cols} gap-2 p-2`}>
                    {options.map((option, i) => {
                        return(
                            <li 
                                key={i} 
                                className={`cursor-pointer rounded-md hover:bg-green transition-colors text-lg p-2 text-center hover:shadow-md ${active === option ? 'bg-green shadow-sm text-white font-semibold' : 'bg-lightGreen hover:text-white'}`}
                                onClick={() => setActive(option)}
                                onKeyDown={() => setActive(option)}
                                tabIndex={i}
                            >
                                {option.name}
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