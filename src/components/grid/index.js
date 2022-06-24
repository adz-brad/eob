import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
const Grid = ({ _key, id, maxColumns, items, showItemNumbers, split, splitWidth, splitTitle, splitContent, splitImage }) => {

    const splitClass = 
            splitWidth === 0.25 ? { grid: 'lg:w-3/4', split: 'lg:w-1/4' } :
            splitWidth === 0.5 ? { grid: 'lg:w-1/2', split: 'lg:w-1/2' } :
            splitWidth === 0.75 ? { grid: 'lg:w-1/4', split: 'lg:w-3/4' } :
            { grid: 'lg:w-full', split: 'lg:w-0' }


    const gridClass = 
        maxColumns === 1 ? 'lg:grid-cols-1' :
        maxColumns === 2 ? 'lg:grid-cols-2' :
        maxColumns === 3 ? 'lg:grid-cols-3' :
        maxColumns === 4 ? 'lg:grid-cols-4' :
        maxColumns === 5 ? 'lg:grid-cols-5' :
        'grid-flow-col auto-cols-auto'

    console.log(splitImage)
    
    return(
        <div id={id} key={_key} className="flex flex-col md:flex-row">

            {split ?
            <div className={`relative ${splitClass.split} md:m-1`}>
                {splitImage ?
                <GatsbyImage image={splitImage.props.__imageData} className="h-full w-full rounded-sm shadow-lg" imgClassName="rounded-sm" />
                : null}
                {splitTitle ?   
                    <h1 className="splitGridTitle">{splitTitle}</h1>
                : null}
                {splitContent ?
                    <div 
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-3 bg-white/40 rounded-sm"
                        dangerouslySetInnerHTML={{__html: splitContent}}
                    />
                : null}
            </div>
            : null }
            
            <div className={`${splitClass.grid} grid grid-cols-1 ${gridClass} gap-1 text-white md:m-1`}>
                {items.map((item, i) => {
                    return(
                        <div key={i} className="gridItem shadow-lg">
                            {showItemNumbers ?
                            <span className="text-3xl xl:text-4xl font-bold">{i + 1}.</span>
                            : null}                 
                            <div dangerouslySetInnerHTML={{__html: item}} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Grid