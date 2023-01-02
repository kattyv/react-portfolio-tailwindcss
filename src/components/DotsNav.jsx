import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { MenuItems } from './Navbar';

export const DotsNav = ({ selectedPage, setSelectedPage }) => {
    const styleSelected = `
        relative 
        bg-yellow 
        before:w-6 
        before:h-6 
        before:absolute
        before:rounded-full
        before:border-2
        before:border-yellow
        before:left-[-50%]
        before:top-[-50%]
    `;

    return (
        <div className="fixed flex flex-col gap-6 top-[50%] right-7 translate-y-[-50%]">
            {MenuItems.map(item => {
                const itemLowerCase = item.toLowerCase();

                return (
                    <AnchorLink
                        key = {item} 
                        className={`${selectedPage === itemLowerCase ? styleSelected : "bg-dark-grey"}
                             w-3 h-3 rounded-full`}
                        href={`#${itemLowerCase}`}
                        onClick={() => setSelectedPage(itemLowerCase)}
                    />
                )
            })}  
        </div>
    )
}
