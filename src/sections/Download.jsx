import {download} from "@constants";
import {browsers, bgDots} from "@constants";
const Download = () => {
  return (
      <section id="download" className="">
        <div className="flex flex-col items-center justify-center gap-4">
          <h3 className="text-3xl text-blue-950 text-center font-extrabold">{download.heading}</h3>
          <p className="max-w-[475px] text-gray-400 text-center">{download.paragraph}</p>
        </div>
        
      <div className="flex max-sm:flex-col justify-center items-center gap-6 max-sm:mt-6 mt-12">
        {
          browsers && browsers.map(({image, text, cta, minVersion}, index) => (
            <div key={index} className="px-3 py-12 rounded-xl flex flex-col justify-center items-center gap-3 shadow-lg md:nth-2:mt-20 md:nth-3:mt-40">
             <img src={image} alt={text}/>
             <p className="text-xl font-extrabold">{text}</p>
             <p className="text-sm text-gray-500">{minVersion}</p>
             <img src={bgDots}/>
              <button className="bg-blue-600 w-4/5 py-5 text-white rounded-lg font-extrabold hover:bg-white hover:outline-2 hover:outline-blue-600 hover:text-blue-600 cursor-pointer">{cta}</button>
            
            </div>
          ))
        }
      </div>
      </section>
  )
}

export default Download
