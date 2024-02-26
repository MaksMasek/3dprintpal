import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { motion } from "framer-motion";


function ContactForm() {
    const [state, handleSubmit] = useForm("xkndjknq");
    if (state.succeeded) {
        return (
            <div className='text-center pb-20 mt-3'>
            <p className='text-3xl dark:text-light'>Thanks for the message! </p>
            <p className='text-medium dark:text-light'> I will reply soon... </p>
            </div>
            )

        
    }




    return (
        


        <motion.section
        id="contact"
        className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center flex justify-center items-center"

        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          duration: 1,
        }}
        viewport={{
          once: true,
        }}
      >
        <form onSubmit={handleSubmit} className="mt-10 flex flex-col dark:text-black">
            
        <div className='text-center'>
            <h1 className='font-bold text-3xl pt-5 dark:text-light'>Contact me</h1>
            <div> 
                <p className="text-gray-700 dark:text-white/80 pb-5 xl:text-center">
                Please contact me directly at{" "}
                <a className="underline" href="mailto:m.masek@zlotoryja.xyz">
                m.masek@zlotoryja.xyz
                </a>{" "}
                or through this form.
            </p>
            </div>
        </div>


        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white  transition-all dark:outline-none"
          id="email"
          type="email" 
          name="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
          <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
        />

        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4  transition-all dark:outline-none"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
        />

        <button type="submit" disabled={state.submitting}   className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-light   text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 dark:bg-white dark:bg-opacity-10 disabled:scale-100 disabled:bg-opacity-65">
          Submit
        </button>
      </form>
      </motion.section>
    );
  }


  function Contact() {
    return (
      <ContactForm />
    );
  }
  export default Contact;