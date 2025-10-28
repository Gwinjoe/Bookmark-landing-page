import {useState} from "react";
import {featuresTab} from "@constants"
import Tab from "@components/Tab.jsx"

const FeaturesTab = () => {
  const [activeTab, setActiveTab] = useState(featuresTab[0]);
  return (
    <section className="flex flex-col justify-center items-center py-12">
    <ul className="flex max-sm:flex-col max-sm:items-center text-gray-500">{
      featuresTab && featuresTab.map(({title, heading, paragraph, image, cta}, index) => (
        <li key={index} onClick={() => setActiveTab(featuresTab[index])} className={`${activeTab.title == title ? "text-gray-700 border-red-400": ""} cursor-pointer hover:text-red-500 px-12 py-6 border-b-2 border-gray-400`}>
        <a>{title}</a>
        </li>
      ))
    }</ul>
    <div className="relative">
    {activeTab && <Tab tab={activeTab}/>}
    </div>
    </section>
  )
}

export default FeaturesTab
