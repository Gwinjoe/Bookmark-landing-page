import {faq, faqs} from "@constants";
const Faq = () => {
  return (
         <section id="faq" className="px-2">
        <div className="flex flex-col items-center justify-center gap-4">
          <h3 className="text-3xl text-blue-950 text-center font-extrabold">{faq.heading}</h3>
          <p className="max-w-[475px] text-gray-400 text-center">{faq.paragraph}</p>
        </div>
        
      <div className="flex flex-col justify-center items-center gap-6 max-sm:mt-6 mt-12">
    <div className="text-gray-600">
        {
          faqs && faqs.map(({ques}, index) => (
            <details key={index} className="px-3 py-5 border-t-2 border-gray-400 md:w-md nth-4:border-b-2">
            <summary className="cursor-pointer">{ques}</summary>
            <p className="mt-6">{ques}</p>
            </details>
          ))
        }
      </div>

      <button className="bg-blue-600 px-4 py-5 text-white rounded-lg font-extrabold hover:bg-white hover:outline-2 hover:outline-blue-600 hover:text-blue-600 cursor-pointer">More Info</button>
      </div>  
    </section>
   )
}

export default Faq
