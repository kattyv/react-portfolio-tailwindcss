import { motion } from "framer-motion"
import { LineSeparator } from '../components/LineSeparator'

export const Testimonials = () => {
  const styleTestimonial = `flex flex-col justify-end
    relative mx-auto mt-44 p-10 max-w-[400px] h-[350px] text-center
    before:absolute before:top-0 before:left-[50%]
    before:translate-x-[-50%] before:translate-y-[-50%]`

  return (
    <section 
      id = "testimonials"
      className="pt-32 pb-16"
    >
      {/* Section title */}
      <motion.div
        className="md:w-1/3 text-center md:text-left"

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
          Prowd of these 
          <span className="text-red uppercase"> Testimonials</span>
        </h1>

        <LineSeparator width='w-2/4 mx-auto' />

        <p className="mt-10">
            Here's what people are saying about my work. <br />
            You are in good hands! 
        </p>
      </motion.div>

      {/* Testimonials List */}
      <div className="md:flex md:justify-between gap-10 w-full">
        <motion.div 
          className={`${ styleTestimonial } bg-blue before:content-person1`}

          initial = "hidden"
          whileInView = "visible"
          viewport = {{ once: true, amount: 0.5 }}
          transition = {{ delay: 0.2, duration: 0.5 }}
          variants = {{
            hidden: {opacity: 0, scale: 0.8},
            visible: {opacity: 1, scale: 1}
          }}
        >
          <blockquote className="text-xl">
            <span className="text-6xl font-playfair">&#8220;</span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
          </blockquote>
        </motion.div>

        <motion.div 
          className={`${ styleTestimonial } bg-red before:content-person2`}

          initial = "hidden"
          whileInView = "visible"
          viewport = {{ once: true, amount: 0.5 }}
          transition = {{ delay: 0.4, duration: 0.5 }}
          variants = {{
            hidden: {opacity: 0, scale: 0.8},
            visible: {opacity: 1, scale: 1}
          }}
        >
          <blockquote className="text-xl">
            <span className="text-6xl font-playfair">&#8220;</span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
          </blockquote>
        </motion.div>

        <motion.div 
          className={`${ styleTestimonial } bg-yellow before:content-person3`}

          initial = "hidden"
          whileInView = "visible"
          viewport = {{ once: true, amount: 0.5 }}
          transition = {{ delay: 0.6, duration: 0.5 }}
          variants = {{
            hidden: {opacity: 0, scale: 0.8},
            visible: {opacity: 1, scale: 1}
          }}
        >
          <blockquote className="text-xl">
            <span className="text-6xl font-playfair">&#8220;</span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
          </blockquote>
        </motion.div>
        

      </div>

    </section>
  )    
}
