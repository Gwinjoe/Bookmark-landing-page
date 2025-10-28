const Tab = ({tab}) => {
  return (
    <div className="py-12 lg:px-40 gap-20 grid grid-cols-[1fr_40%] max-sm:flex max-sm:flex-col justify-center max-sm:gap-8 items-center">
    <div className="flex max-lg:relative justify-end max-sm:justify-center items-center py-8 padding-x">
      <img className="" src={tab.image} alt={tab.title}/>
      <div className="w-[40%] max-sm:w-[80%] bg-blue-600 -z-5 h-[65%] rounded-r-full absolute bottom-0 left-0"></div>
    </div>
    <div className="flex flex-col max-sm:items-center max-sm:text-center items-start gap-6 max-sm:gap-4 padding-x">
    <h4 className="text-3xl max-sm:text-2xl font-extrabold text-blue-950">{tab.heading}</h4>
      <p className="text-gray-500">{tab.paragraph}</p>
    <button className="px-5 py-3 text-sm text-white cursor-pointer font-extrabold rounded-md bg-blue-600 ">{tab.cta}</button>
    </div>
    </div>
  )
}

export default Tab
