import React from 'react'
import useMediaQueries from '../hooks/useMediaQueries'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { motion } from 'framer-motion'
import { SocialMediaNav } from '../components/SocialMediaNav'

export const Home = ({ setSelectedPage }) => {
    const isLargeScreen = useMediaQueries("(min-width: 1060px)");

    return (
        <section 
            id="home"
            className="md:flex md:justify-between md:items-center md:h-full gap-16 py-10"
        >
            {/* Profile picture */}
            <div className="md:order-2 flex justify-center basis-3/5 z-10 mt-8 md:mt-16">
                {isLargeScreen ? (
                    <div
                        className="relative z-0 ml-20 
                        before:absolute before:-top-8 before:-left-20 
                        before:w-full before:max-w-[400px] before:h-full 
                        before:rounded-t-[400px] before:border-2 before:border-blue before:z-[-1]"
                    >
                        <img 
                            src="./images/profile-image.png" 
                            alt="This is me" 
                            className="w-full max-w-[400px] z-10 
                            hover:filter hover:saturate-200 transition duration-200"
                        />
                    </div>
                ) : (
                    <img 
                        src="./images/profile-image.png" 
                        alt="This is me" 
                        className="w-full max-w-[400px] md:max-w-[500px] z-10 
                        hover:filter hover:saturate-200 transition duration-200"
                    />
                )}
            </div>

            {/* Text information */}
            <div className="z-30 flex flex-col basis-2/5 mt-8 md:mt-16">
                <motion.div
                    initial = "hidden"
                    whileInView = "visible"
                    viewport = {{ once: true, amount: 0.5 }}
                    transition = {{ duration: 0.5 }}
                    variants = {{
                        hidden: {opacity: 0, x: -50},
                        visible: {opacity: 1, x: 0}
                    }}
                >
                    <h1 className="z-10 text-6xl font-playfair text-center md:text-start">
                        Jane {" "}
                        <span
                            className="relative z-20 xs:font-semibold xs:text-deep-blue xs:before:content-brush 
                            xs:before:absolute xs:before:-top-[125px] xs:before:-left-[38px] xs:before:z-[-1]
                            " 
                        >
                            Smith
                        </span>
                    </h1>

                    <p className="font-light mt-10 mb-5 text-center md:text-start">
                        Some additional text for men here: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    </p>
                </motion.div>

                <motion.div
                    className="flex mt-4 justify-center md:justify-start"
                    initial = "hidden"
                    whileInView = "visible"
                    viewport = {{ once: true, amount: 0.5 }}
                    transition = {{ delay: 0.2, duration: 0.5 }}
                    variants = {{
                        hidden: {opacity: 0, x: -50},
                        visible: {opacity: 1, x: 0}
                    }}
                >
                    <AnchorLink 
                        href="#contacts"
                        onClick={() => setSelectedPage("contacts")}
                        className="px-6 py-2 rounded-sm bg-gradient-rainblue text-deep-blue font-semibold 
                        hover:bg-blue hover:text-white transition duration-300"
                    >
                        Contact me
                    </AnchorLink>

                    <AnchorLink 
                        href="#contacts"
                        onClick={() => setSelectedPage("contacts")}
                        className="rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5"
                    >
                        <div
                            className="flex items-center w-full h-full px-6 bg-deep-blue font-playfair 
                            hover:text-red transition duration-300"
                        >
                            Lets talk!
                        </div>
                    </AnchorLink>
                </motion.div>

                {/* Social Media Menu */}
                <motion.div
                    className="flex mt-7 justify-center md:justify-start"
                    initial = "hidden"
                    whileInView = "visible"
                    viewport = {{ once: true, amount: 0.5 }}
                    transition = {{ delay: 0.4, duration: 0.5 }}
                    variants = {{
                        hidden: {opacity: 0, x: -50},
                        visible: {opacity: 1, x: 0}
                    }}
                >
                    <SocialMediaNav />
                </motion.div>
            </div>

        </section>
    )
}