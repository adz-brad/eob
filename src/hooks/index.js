import { useEffect, useState } from 'react'
import { window } from 'browser-monads'

// Debounce utility function
const debounce = (func, wait) => {
    let timeout
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout)
            func(...args)
        }
        clearTimeout(timeout)
        timeout = setTimeout(later, wait)
    }
}

const useWindowWidth = () => {
    const [ width, setWidth ] = useState(0)
    
    useEffect(() => {
        const updateWidth = () => {
            setWidth(window.innerWidth)
        }
        
        // Debounced resize handler for performance
        const debouncedUpdateWidth = debounce(updateWidth, 150)
        
        window.addEventListener('resize', debouncedUpdateWidth)
        updateWidth() // Set initial value immediately
        
        return () => window.removeEventListener('resize', debouncedUpdateWidth)
    }, []);
    
    return width;
};

const useWindowHeight = () => {
    const [ height, setHeight ] = useState(0)
    
    useEffect(() => {
        const updateHeight = () => {
            setHeight(window.innerHeight)
        }
        
        // Debounced resize handler for performance
        const debouncedUpdateHeight = debounce(updateHeight, 150)
        
        window.addEventListener('resize', debouncedUpdateHeight)
        updateHeight() // Set initial value immediately
        
        return () => window.removeEventListener('resize', debouncedUpdateHeight)
    }, []);
    
    return height;
};

export { useWindowHeight, useWindowWidth }
