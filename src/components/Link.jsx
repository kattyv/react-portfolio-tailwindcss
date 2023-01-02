import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

export const Link = ({ page, selectedPage, setSelectedPage }) => {
    const pageLowerCase = page.toLowerCase();

    return (
        <AnchorLink
            className={`${selectedPage === pageLowerCase ? "text-yellow" : ""} hover:text-yellow  transition duration-500`}
            href={`#${pageLowerCase}`}
            onClick = {() => setSelectedPage(pageLowerCase)}
        >
            { page }
        </AnchorLink>
    )
}
