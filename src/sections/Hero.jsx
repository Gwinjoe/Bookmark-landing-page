import {hero} from "@constants"

const Hero = () => {
  return (
    <section id="home" className="grid pl-40 max-lg:p-0 h-full max-sm:flex max-sm:flex-col-reverse max-sm:gap-6 items-center max-lg:grid-cols-[50%_1fr] grid-cols-[45%_1fr]">
      <div className="padding-x flex flex-col justify-center max-sm:items-center max-sm:gap-4 max-sm:text-center max-sm:p-0 max-lg:pl-6 gap-6 pr-12 max-lg:p-0 max-lg:gap-3">
    <h1 className="text-5xl font-extrabold text-blue-950 max-xl:text-4xl max-sm:text-3xl">{hero.heading}</h1>
    <p className="text-gray-400 lg:pr-12">{hero.paragraph}</p>
    <div className="flex gap-4">
      <button className=" max-lg:py-3 max-lg:px-4 bg-blue-600 font-extrabold cursor-pointer py-4 hover:bg-white hover:text-blue-600 hover:outline-2 hover:outline-blue-600 text-sm px-6 rounded-lg text-white">{hero.chromeCTA}</button>
      <button className=" max-lg:py-3 max-lg:px-4  py-4 hover:bg-white font-extrabold cursor-pointer hover:text-gray-600 hover:outline-2 hover:outline-gray-600 text-sm px-6 rounded-lg text-gray-600 shadow-md">{hero.firefoxCTA}</button>
    </div>
      </div>
    <div className="">
    <div className="relative flex justify-center">
    <img src={hero.img} className="w-2xl lg:pr-12"/>
      <div className="w-[80%] bg-blue-600 -z-5 h-[85%] rounded-l-full absolute bottom-0 right-0"></div>
    </div>
    </div>
    </section>
  )
}

export default Hero
