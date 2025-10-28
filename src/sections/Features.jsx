import {features} from "@constants";

const Features = () => {
  return (
    <section id="features" className="flex flex-col items-center justify-center gap-4">
      <h3 className="text-3xl text-blue-950 text-center font-extrabold">{features.heading}</h3>
      <p className="max-w-[475px] text-gray-400 text-center">{features.paragraph}</p>
    </section>
  )
}

export default Features
