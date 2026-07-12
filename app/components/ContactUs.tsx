import React from 'react'
import Link from 'next/link'
const ContactUs = () => {
  return (
   <>
      <section className="relative w-full bg-[#02029c] py-6 md:py-8 px-6 md:px-16 text-center text-black z-20">
         <div className="max-w-4xl mx-auto space-y-4 scroll-fade-up">
           <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-light text-white">
             Start the Conversation
           </h2>
           <p className="font-sans text-xs sm:text-sm text-white font-normal max-w-2xl mx-auto leading-relaxed">
             Establish a direct partner relationship, or initiate a new mandate.<br/> Both practices operate under standard NDA protocols.
           </p>
           <div className="pt-2">
             <Link
               href="/contact-us"
               className="inline-block bg-white border border-transparent hover:bg-[#02029c] hover:border-white text-black hover:text-white font-bold text-xs tracking-[0.2em] uppercase px-10 py-3.5 transition-all duration-300 hover-target shadow-xl rounded-[1px]"
             >
               CONTACT US
             </Link>
           </div>
         </div>
      </section>
   </>
  )
}

export default ContactUs