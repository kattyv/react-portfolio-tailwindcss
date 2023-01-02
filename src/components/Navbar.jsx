import React, { useState } from 'react'
import useMediaQueries from '../hooks/useMediaQueries'
import { Link } from './Link';

export const MenuItems = [
    "Home", "Skills", "Projects", "Testimonials", "Contacts"
]

export const Navbar = ({ selectedPage, setSelectedPage, isScrolled }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const isDesctop = useMediaQueries("(min-width: 768px)");
    const bgNavbar = isScrolled ? "bg-red" : "";

    return (
        <nav className={`z-40 w-full fixed top-0 py-4 ${bgNavbar}`}>
            <div className="flex items-center justify-between mx-auto w-5/6">
                <h4 className="font-playfair text-3xl font-bold">
                    KattyV
                </h4>

                {/* NAV Desctop */}
                {isDesctop ? (
                    <div className="flex justify-between gap-16 font-roboto text-sm font-medium">
                        <MenuLinks 
                            selectedPage={selectedPage} 
                            setSelectedPage={setSelectedPage} 
                        />
                    </div>
                ) : (
                    <button 
                        className="rounded-full bg-red p-2"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <img src="/images/menu-icon.svg" alt="menu-icon" />
                    </button>
                )}

                {/* NAV Mobile */}
                {!isDesctop && isMenuOpen && (
                    <div className="fixed w-[300px] h-full bottom-0 right-0 bg-blue">
                        <div className="flex justify-end p-3">
                            <button
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <img src="/images/close-icon.svg" alt="menu-close" />
                            </button>
                        </div>

                        <div className="flex flex-col gap-10px p-3 text-2xl text-deep-blue">
                            <MenuLinks 
                                selectedPage={selectedPage} 
                                setSelectedPage={setSelectedPage} 
                            />
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}

// MENU Links
const MenuLinks = ({ selectedPage, setSelectedPage }) => {
    return (
        <>
            {MenuItems.map(item => (
                <Link 
                    key = { item }
                    page = { item }
                    selectedPage = {selectedPage}
                    setSelectedPage = {setSelectedPage}
                />
            ))}      
        </>
    )
}
