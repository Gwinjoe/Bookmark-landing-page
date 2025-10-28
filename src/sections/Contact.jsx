import {contact} from "@constants"

const Contact = () => {
  return (
    <section id="contact" className="text-center bg-blue-600 py-12 text-white flex flex-col gap-6 justify-center items-center">
     <p className="text-sm tracking-[0.3em]">{contact.alreadyJoined}</p>
    <h4 className="text-3xl max-w-md font-extrabold">{contact.heading}</h4>
    <div className="flex gap-2 max-sm:flex-col">
    <input className="px-4 py-2 text-gray-400 bg-white rounded-md " type="email" name="email" placeholder={contact.input.placeholder}/>
    <button className="px-4 py-2 bg-red-400 text-sm font-extrabold rounded-md">{contact.input.cta}</button>
    </div>
    </section>
  )
}

export default Contact
