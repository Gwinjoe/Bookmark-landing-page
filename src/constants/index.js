import {bgDots, iconArrow, iconClose, iconError, iconFacebook, iconHamburger, iconTwitter, illustration1, illustration2, illustration3, heroImg, bookmarkLogo, chromeLogo, firefoxLogo, operaLogo} from "@assets/index.js";

export const navlinks = [
  {href: "#features", label: "features"},
  {href: "#pricing", label: "pricing"},
  {href: "#contact", label: "contact"},
]

export const hero = {
  heading: "A Simple Bookmark Manager",
  paragraph: "A clean and simple interface to organize your favorite websites. Open a new browser tab and see your sites load instantly. Try it for free.",
  chromeCTA: "Get it on Chrome",
  firefoxCTA: "Get it on Firefox",
  img: heroImg,
}


export const features = {
  heading: "Features",
  paragraph: "Our aim is to make it quick and easy for you to access your favorite websites. Your bookmarks sync between your devices so you can access them on the go."}


export const featuresTab = [
  {title: "simple bookmarking", heading: "Bookmark in one click", paragraph: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favorite sites.", cta: "More Info", image: illustration1},
  {title: "speedy searching", heading: "intelligent search", paragraph: "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.", cta: "more info", image: illustration2},
  {title: "easy sharing", heading: "Share your bookmarks", paragraph: "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.", cta: "more info", image: illustration3}
]

export const download = {
  heading: "Download the extension",
  paragraph: "we've got more browsers in the pipeline. Please do let us know if you've got a favorite you'd like us to prioritize."
} 

export const browsers = [
  {image: chromeLogo, text: "Add to chrome", cta: "Add & install extension", minVersion: "Minimum version 62"},
  {image: firefoxLogo, text: "Add to firefox", cta: "Add & install extension", minVersion: "minimum version 55"},
  {image: operaLogo, text: "Add to opera", cta: "Add & install extension", minVersion: "minimum version 46" },
]

export const faq = {
  heading: "Frequently asked questions", paragraph: "Here are some of our FAQs. If you have any other questions you'd like answered please feel free to email us."
}

export const faqs = [
  {ques: "what is bookmark?", ans: ""},
  {ques: "How can i request a new browser?", ans: ""},
  {ques: "Is there a mobile app?", ans: ""},
  {ques: "What about other chromium browsers?", ans: ""},
]

export const contact = {
  alreadyJoined: "35,000+ Already Joined", heading: "Stay up-to-date with what we're doing", input: {placeholder: "example@mailprovider.com", cta: "Contact us", errTxt: "Whoops, make sure it's an email", errIcon: iconError, }
}

export const socialIcons = [
  {image: iconFacebook, href: "https://facebook.com"},
  {image: iconTwitter, href: "https://x.com"}
]

export const logo = {
  image: bookmarkLogo, href: "#"
}

export {bgDots, iconArrow, iconClose, iconError, iconFacebook, iconHamburger, iconTwitter, illustration1, illustration2, illustration3, heroImg, bookmarkLogo, chromeLogo, firefoxLogo, operaLogo}
