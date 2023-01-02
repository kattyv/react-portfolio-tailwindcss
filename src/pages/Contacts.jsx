import { LineSeparator } from '../components/LineSeparator'
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form'

export const Contacts = () => {
  const { register, trigger, formState: { errors } } = useForm();
  const formActionLink = "https://formsubmit.co/sample@email.com"; // the email will be replaced with string after first test

  const onFormSubmit = async (event) => {
    // check if form is validated
    const isValided = await trigger();

    if(!isValided) {
      event.preventDefault();
    }
  }

  return (
    <section 
      id="contacts"
      className="pt-16 pb-16"
    >
      {/* Section title */}
      <motion.div
        className = "md:w-full md:flex md:justify-start"

        initial = "hidden"
        whileInView = "visible"
        viewport = {{ once: true, amount: 0.5 }}
        transition = {{ duration: 0.5 }}
        variants = {{
          hidden: {opacity: 0, y: 50},
          visible: {opacity: 1, y: 0}
        }}
      >
        <div className="basis-1/2 w-full pr-16">
          <h1 className="mb-5 text-4xl font-playfair font-semibold">
            <span className="text-red uppercase">Contact me </span> 
            to get started
          </h1>

          <LineSeparator width='w-1/2' />
        </div>
      </motion.div>

      {/* Page content */}
      <div className="md:flex md:justify-between gap-16 mt-20">

        <motion.div
          className="basis-1/2 w-full"

          initial = "hidden"
          whileInView = "visible"
          viewport = {{ once: true, amount: 0.5 }}
          transition = {{ delay: 0.2, duration: 0.5 }}
          variants = {{
            hidden: {opacity: 0, x: -50},
            visible: {opacity: 1, x: 0}
          }}
        >
          <form
            target = '_blank'
            onSubmit = { onFormSubmit }
            action = { formActionLink }
            method = "POST"
          >
            <input 
              type = "text" 
              className = "w-full p-3 bg-blue rounded-sm font-medium placeholder-opaque-black  focus:outline-red"
              placeholder = "Your NAME" 
              { ...register("name", {required: true, minLength: 2, maxLength: 200}) } 
            />
            {errors.name && (
              <p className='text-red mt-1'>
                {errors.name.type === 'required' && "This field is required" }
                {errors.name.type === 'minLength' && "Too short" }
                {errors.name.type === 'maxLength' && "Too long" }
              </p>
            )}

            <input 
              type = "text" 
              className = "w-full mt-5 p-3 bg-blue rounded-sm font-medium placeholder-opaque-black  focus:outline-red"
              placeholder = "Your EMAIL" 
              {...register("email", {
                required: true, 
                pattern: /^[A-z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
              })} 
            />
            {errors.email && (
              <p className='text-red mt-1'>
                {errors.email.type === 'required' && "This field is required" }
                {errors.email.type === 'pattern' && "Invalid email address" }
              </p>
            )}

            <textarea 
              rows = "4"
              className = "w-full mt-5 p-3 bg-blue rounded-sm font-medium placeholder-opaque-black  focus:outline-red"
              placeholder = "Your MESSAGE" 
              {...register("message", {
                required: true, 
                minLength: 5,
                maxLength: 2000
              })} 
            />
            {errors.message && (
              <p className='text-red mt-1'>
                {errors.message.type === 'required' && "This field is required" }
                {errors.message.type === 'minLength' && "Too short" }
                {errors.message.type === 'maxLength' && "Too long, must be up to 2000 chrs" }
              </p>
            )}

            <button 
              type = "submit"
              className = "w-full mt-5 p-3 rounded-sm bg-yellow font-semibold text-deep-blue uppercase hover:bg-red hover:text-white transition duration-300"
            >
              Send Message
            </button>
          </form>
        </motion.div>

        <motion.div
          className="basis-1/2 flex justify-center mt-10 md:mt-0"

          initial = "hidden"
          whileInView = "visible"
          viewport = {{ once: true, amount: 0.5 }}
          transition = {{ delay: 0.2, duration: 0.5 }}
          variants = {{
            hidden: {opacity: 0, x: 50},
            visible: {opacity: 1, x: 0}
          }}
        >
          <img src="./images/contact-image.jpeg" alt="Contact me" />
        </motion.div>
      </div>

    </section>
  )
}
