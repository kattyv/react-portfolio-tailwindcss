import useMediaQueries from '../hooks/useMediaQueries'
import { motion } from 'framer-motion'
import { LineSeparator } from '../components/LineSeparator';
import { projectsData } from '../data/projects'

// animation for Projects container
const animateContainer = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2 } // delay for each children animation
    }
}
// animation for single Project
const animateChild = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
}

export const Projects = () => {
    const isLargeScreen = useMediaQueries("(min-width: 1060px)");
    const projects = projectsData;
    

    return (
        <section 
            id="projects"
            className="pt-32 pb-32"
        >
            {/* Info text */}
            <motion.div
                className="md:w-2/4 mx-auto text-center"

                initial = "hidden"
                whileInView = "visible"
                viewport = {{ once: true, amount: 0.5 }}
                transition = {{ duration: 0.5 }}
                variants = {{
                    hidden: {opacity: 0, y: 50},
                    visible: {opacity: 1, y: 0}
                }}
            >
                <h1 className="text-4xl font-playfair font-semibold">
                    My
                    <span className="text-red uppercase"> Pro</span>jects
                    
                    <div className="flex justify-center mt-5">
                        <LineSeparator width='w-1/3' />
                    </div>
                </h1>


                <p className="mt-10 mb-10">
                    Some additional text for men here: Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Some additional text for men here: Lorem ipsum dolor sit amet.
                </p>
            </motion.div> 

            {/* Projects list */}
            <div className="flex justify-center">
                <motion.div
                    className="sm:grid sm:grid-cols-3"

                    initial = "hidden"
                    whileInView = "visible"
                    viewport = {{ once: true, amount: 0.5 }}
                    transition = {{ delay: 0.2, duration: 0.5 }}
                    variants = {
                        animateContainer
                    }
                >
                    <div
                        className="flex justify-center items-center p-10 bg-red 
                        max-w-[400px] max-h-[400px]
                        text-center text-2xl font-playfair font-semibold uppercase"
                    >
                        Beautiful User Interfaces
                    </div>

                    {projects && projects.map((project, index) => (
                        <Project 
                            key = { index }
                            title = { project.title } 
                            info = { project.info }
                        />
                    ))}

                    <div
                        className="flex justify-center items-center p-10 bg-blue 
                        max-w-[400px] max-h-[400px]
                        text-center text-2xl font-playfair font-semibold uppercase"
                    >
                        Smooth User Experience
                    </div>
                </motion.div>
            </div>   
        </section>
    )
}

// Single Project component
const Project = ({ title, info }) => {
    const imgDirectory = './images/';
    const titleSlug = title.split(" ").join("-").toLowerCase();
    const styleOverlay = `absolute inset-0 z-20 w-full h-full p-16
        flex flex-col justify-center items-center 
        bg-white text-deep-blue text-center
        opacity-0 hover:opacity-80 transition duration-200`

    return (
        <motion.div
            className="relative"
            variants = { animateChild }
        >
            <div className={ styleOverlay }>
                <h3 className="text-2xl font-playfair">{ title }</h3>
                <p className="mt-5">{ info }</p>
            </div>

            <img src={`${imgDirectory + titleSlug}.jpeg`} alt={title} className="z-0" />
        </motion.div>
    )
}
