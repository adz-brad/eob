import React from 'react'

const PageWrapper = ({ children }) => {
    return(
        <div className="p-4 lg:p-8">
            {children}        
        </div>
    )
}

export default PageWrapper