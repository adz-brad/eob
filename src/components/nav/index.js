import React, { useEffect, useState } from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { useWindowHeight, useWindowWidth } from '../../hooks'
import { MdArrowBackIos } from 'react-icons/md'
import menuLinks from '../../data/menus/menuLinks.json'

const Navbar = () => {

    let windowHeight = useWindowHeight()
    let windowWidth = useWindowWidth()

    const [ dropdownOpen, setDropdownOpen ] = useState(null)
    const [ mobileNavOpen, setMobileNavOpen ] = useState(false)
    const [ mobileSlideOpen, setMobileSlideOpen ] = useState(null)

    const closeMobileNav = () => {
        setMobileNavOpen(false)
        setMobileSlideOpen(false)
    }

    useEffect(() => {
        if(windowWidth > 992){
             closeMobileNav()
        }
    }, [ windowWidth ])

    return(
        <nav onMouseLeave={() => setDropdownOpen(null)} className="bg-white flex flex-row items-center w-full p-1 rounded-b-lg shadow-md z-50" style={{zIndex:999}}>

        <Link to="/" className="h-20 py-1 -ml-8">
            <StaticImage 
                src="../../assets/images/Eob-logo.png" 
                style={{ height: "100%" }}
                imgStyle={{objectFit:" contain"}}
                alt="Essence of Beauty"/>
        </Link>

        {windowWidth >= 992 ?

            <div className="flex flex-row items-center mx-auto z-50">

                {menuLinks.map((link, i) => {
                    return(
                        link.slug ?
                            <Link 
                                key={i} 
                                className="p-1 cursor-pointer hover:text-green mx-3"
                                to={link.slug === '/' ? link.slug : `/${link.slug}`}
                                onMouseEnter={()=> setDropdownOpen(null)}
                                onClick={() => setDropdownOpen(link.title)}
                                onKeyDown={() => setDropdownOpen(link.title)}
                                role="button"
                                tabIndex={i}
                            >
                                <span className="md:text-lg lg:text-xl font-headers">{link.title}</span>
                            </Link>
                        : 
                            
                                <div 
                                    key={i}
                                    className="relative p-1 cursor-pointer mx-3 hover:text-green" 
                                    onMouseEnter={()=> setDropdownOpen(link.title)}
                                    onClick={() => setDropdownOpen(link.title)}
                                    onKeyDown={() => setDropdownOpen(link.title)}
                                    role="button"
                                    tabIndex={i}
                                >
                                    <span className="md:text-lg lg:text-xl font-headers">{link.title}</span>
                                
                                {dropdownOpen === link.title ?
                                    link.subMenus.length === 0 ?
                                        <div className="absolute transform left-1/2 -translate-x-1/2 flex flex-col whitespace-nowrap p-2 z-30 shadow-md rounded-sm cursor-default text-black bg-white">
                                            {link.pages.map((page, i) => {                          
                                                return(
                                                    <Link 
                                                        key={i} 
                                                        className="p-1 cursor-pointer hover:text-green mx-3 md:text-lg"
                                                        to={`/${page.slug}`}
                                                    >
                                                        {page.title}
                                                    </Link>
                                                )
                                            })}
                                        </div>
                                    : 
                                        <div className="absolute transform left-1/2 -translate-x-1/2 flex flex-row whitespace-nowrap p-2 z-30 shadow-md rounded-sm cursor-default text-black bg-white">
                                            {link.subMenus.map((subMenu, i) => {                          
                                                return(
                                                    <div key={i} className="flex flex-col mx-3 p-1">
                                                        <h3 className="border-b-2 border-green text-xl font-semibold text-brown my-2">{subMenu.title}</h3>
                                                        {subMenu.pages.map((page, i) => {
                                                            return(
                                                                <Link 
                                                                    key={i} 
                                                                    className="py-1 cursor-pointer hover:text-green md:text-lg"
                                                                    to={`/${page.slug}`}
                                                            >
                                                                    {page.title}
                                                                </Link>
                                                            )
                                                        })}
                                                    </div>
                                                )
                                            })}
                                        </div>
                                : null
                                }
                            </div>
                    )    
                })}

            </div>
        :

            <div className="relative ml-auto">
            
                <button 
                    className={`${mobileNavOpen === true ? 'fixed top-4' : 'absolute top-1/2 transform -translate-y-1/2'} right-3 h-12 w-12 z-50`}
                    onClick={mobileNavOpen === true ? () => closeMobileNav() : () => setMobileNavOpen(true)}
                >
                    <div
                        className={`absolute top-1/2 left-1/2 -translate-x-1/2 h-1 rounded-lg shadow-md transform transition duration-150 ease-in-out ${
                            mobileNavOpen === true
                            ? "-translate-y-1/2 rotate-45 bg-lightGreen w-8"
                            : "-translate-y-3 bg-darkGreen w-10 md:w-12"
                        }`}
                    />
                    <div
                        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-1 rounded-lg shadow-md transform transition duration-75 ease-in-out ${
                            mobileNavOpen === true ? "scale-0" : "bg-darkGreen w-10 md:w-12"
                        }`}
                    />
                    <div
                        className={`absolute top-1/2 left-1/2 -translate-x-1/2 h-1 rounded-lg shadow-md transform transition duration-150 ease-in-out ${
                            mobileNavOpen === true
                            ? "-translate-y-1/2 -rotate-45 bg-lightGreen w-8"
                            : "translate-y-2 bg-darkGreen w-10 md:w-12"
                        }`}
                    />
                </button>



                <div className={`transform transition-all duration-300 flex-col fixed top-0 left-0 z-40 ${mobileNavOpen === true ? '' : '-translate-x-full'}`} style={{ height: windowHeight, width: windowWidth }}>
                    
                    <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-green to-darkGreen z-20 opacity-90 overflow-auto">

                        <div className="relative flex flex-col justify-center h-full items-center text-white">

                            {menuLinks.map((link, i) => {
                                return(
                                    link.slug ?
                                    <Link 
                                        key={i} 
                                        className="p-1 m-2"
                                        to={link.slug === '/' ? link.slug : `/${link.slug}`}
                                        onClick={() => closeMobileNav()}
                                        onKeyDown={() => closeMobileNav()}
                                        tabIndex={i}
                                    >
                                        <span className="text-3xl font-semibold">{link.title}</span>
                                    </Link>
                                :
                                    <div 
                                        key={i} 
                                        className="relative p-1 m-2 flex flex-col items-center" 
                                        onClick={()=> setMobileSlideOpen(mobileSlideOpen === link.title ? null : link.title)}
                                        onKeyDown={()=> setMobileSlideOpen(mobileSlideOpen === link.title ? null : link.title)}
                                        role="button"
                                        tabIndex={i}
                                    >

                                    <span className="text-3xl font-semibold">{link.title}</span>
                            
                                    {mobileSlideOpen === link.title ?
                                        link.subMenus.length === 0 ?
                                            <div className="justify-center fixed top-0 left-0 h-full w-full flex flex-col items-center p-2 bg-gradient-to-r from-green to-darkGreen z-10">
                                                {link.pages.map((page, i) => {                          
                                                    return(
                                                        <Link 
                                                            key={i} 
                                                            className="pb-1 font-semibold text-2xl my-1"
                                                            to={`/${page.slug}`}
                                                            onClick={() => closeMobileNav()}
                                                            onKeyDown={() => closeMobileNav()}
                                                        >
                                                            {page.title}
                                                        </Link>
                                                    )
                                                })}
                                                <button className="mt-4 flex flex-row items-center">
                                                    <MdArrowBackIos className="text-2xl"/>
                                                    <span className="text-2xl">Back</span>
                                                </button>
                                            </div>
                                        : 
                                            <div className="justify-center fixed top-0 left-0 h-full w-full flex flex-col items-center p-2 bg-gradient-to-r from-green to-darkGreen z-10">
                                                {link.subMenus.map((subMenu, i) => {                          
                                                    return(
                                                        <div key={i} className="flex flex-col items-center w-full">
                                                            <h3 className="border-b-2 border-green text-3xl font-bold text-brown mt-4 mb-2 text-center w-full filter drop-shadow-lg">{subMenu.title}</h3>
                                                            {subMenu.pages.map((page, i) => {
                                                                return(
                                                                    <Link 
                                                                        key={i} 
                                                                        className="pb-1 font-semibold text-xl"
                                                                        to={`/${page.slug}`}
                                                                        onClick={() => closeMobileNav()}
                                                                        onKeyDown={() => closeMobileNav()}
                                                                >
                                                                        {page.title}
                                                                    </Link>
                                                                )
                                                            })}
                                                            
                                                        </div>
                                                    )
                                                })}
                                                <button className="mt-4 flex flex-row items-center">
                                                    <MdArrowBackIos className="text-2xl"/>
                                                    <span className="text-2xl">Back</span>
                                                </button>
                                            </div>
                                    : null
                                    }
                                </div>
                                )
                            })}

                        </div>
                    </div>

                    <div className="absolute top-0 left-0 h-full w-full z-10">
                        <StaticImage
                            src="../../assets/images/mobile-bg.jpg"
                            alt=""
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                              }}
                        />
                    </div>

                </div>
                           
            </div>

        }

    </nav>
    )
}

export default Navbar