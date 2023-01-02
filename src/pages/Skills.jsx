import useMediaQueries from '../hooks/useMediaQueries'
import { motion } from 'framer-motion'
import { LineSeparator } from '../components/LineSeparator'

export const Skills = () => {
    const isLargeScreen = useMediaQueries("(min-width: 1060px)");

    return (
        <section 
            id="skills"
            className="pt-10 pb-20"
        >
            {/* Info text */}
            <div
                className="md:flex md:justify-between md:gap-16 mt-32"
            >
                <motion.div
                    className="md:w-1/3"

                    initial = "hidden"
                    whileInView = "visible"
                    viewport = {{ once: true, amount: 0.5 }}
                    transition = {{ duration: 0.5 }}
                    variants = {{
                        hidden: {opacity: 0, x: -50},
                        visible: {opacity: 1, x: 0}
                    }}
                >
                    <h1 className="mb-5 text-4xl font-playfair font-semibold">
                        My
                        <span className="text-red uppercase"> Skills</span>
                    </h1>

                    <LineSeparator width='w-1/3' />

                    <p className="mt-10 mb-7">
                        Some additional text here: Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    </p>
                </motion.div>

                <div className="mt-16 md:mt-0">
                    {isLargeScreen ? (
                        <div
                            className="relative z-0 ml-20 
                            before:absolute before:-top-8 before:-left-8  
                            before:w-full before:h-full 
                            before:border-2 before:border-blue before:z-[-1]"
                        >
                            <img 
                                src="./images/skills-image.png" 
                                alt="My Skills" 
                                className="z-10"
                            />
                        </div>
                    ) : (
                        <img 
                            src="./images/skills-image.png" 
                            alt="My Skills" 
                            className="z-10"
                        />
                    )}
                </div>

            </div>

            {/* Skills List */}
            <div className="mt-6 md:flex md:justify-between gap-32">
                <motion.div
                    className="md:w-1/3 mt-10"

                    initial = "hidden"
                    whileInView = "visible"
                    viewport = {{ once: true, amount: 0.5 }}
                    transition = {{ delay: 0.2, duration: 0.5 }}
                    variants = {{
                        hidden: {opacity: 0, y: 50},
                        visible: {opacity: 1, y: 0}
                    }}
                >
                    <div className="relative h-24 mb-5
                        before:absolute before:right-0 before:top-0 before:z-[-1] 
                        before:w-1/2 md:before:w-3/4 before:h-24 before:bg-blue
                    ">
                        <h2 className="z-10 font-playfair font-semibold">
                            <small className="block mt-3 text-5xl">01</small>
                            <span className="text-2xl">Experience</span>    
                        </h2>
                    </div>
                    
                    <p>
                        Some additional text for men here: Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    </p>
                </motion.div>

                <motion.div
                    className="md:w-1/3 mt-10"

                    initial = "hidden"
                    whileInView = "visible"
                    viewport = {{ once: true, amount: 0.5 }}
                    transition = {{ delay: 0.4, duration: 0.5 }}
                    variants = {{
                        hidden: {opacity: 0, y: 50},
                        visible: {opacity: 1, y: 0}
                    }}
                >
                    <div className="relative h-24 mb-5 
                        before:absolute before:right-0 before:top-0 before:z-[-1] 
                        before:w-1/2 md:before:w-3/4 before:h-24 before:bg-red
                    ">
                        <h2 className="z-10 font-playfair font-semibold">
                            <small className="block mt-3 text-5xl">02</small>
                            <span className="text-2xl">Inovative</span>    
                        </h2>
                    </div>

                    <p>
                        Some additional text for men here: Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    </p>    
                </motion.div>

                <motion.div
                    className="md:w-1/3 mt-10"

                    initial = "hidden"
                    whileInView = "visible"
                    viewport = {{ once: true, amount: 0.5 }}
                    transition = {{ delay: 0.6, duration: 0.5 }}
                    variants = {{
                        hidden: {opacity: 0, y: 50},
                        visible: {opacity: 1, y: 0}
                    }}
                >
                    <div className="relative h-24 mb-5 
                        before:absolute before:right-0 before:top-0 before:z-[-1] 
                        before:w-1/2 md:before:w-3/4 before:h-24 before:bg-yellow
                    ">
                        <h2 className="z-10 font-playfair font-semibold">
                            <small className="block mt-3 text-5xl">03</small>
                            <span className="text-2xl">Imaginative</span>    
                        </h2>
                    </div>

                    <p>
                        Some additional text for men here: Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor. 
                    </p>
                </motion.div>
            </div>
        </section>
    )
}
