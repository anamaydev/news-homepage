import imageWeb3Mobile from '../../assets/images/image-web-3-mobile.jpg'
import imageWeb3Desktop from '../../assets/images/image-web-3-desktop.jpg'

export default function HeroArticle(){
  return (
    <article className="flex flex-col gap-3 lg:col-span-2">
      <picture>
        <source media="(min-width: 40rem)" srcSet={imageWeb3Desktop} />
        <source srcSet={imageWeb3Mobile} />
        <img className="h-37.5 w-full object-cover" src={imageWeb3Mobile} alt="Image featuring article about future of web"/>
      </picture>
      <div className="flex flex-col gap-3 md:flex-row md:gap-4">
        <h1 className="flex-1 text-preset-2 text-navy-950 md:text-preset-1">The Bright Future of Web 3.0?</h1>
        <div className="flex flex-col gap-3 flex-1 md:gap-4">
          <p className="text-preset-6 text-navy-600">We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
          <button className="py-1.5 px-4 text-preset-7 text-navy-950 bg-red self-start hover:bg-navy-950 hover:text-white transition-colors duration-500 cursor-pointer">
            <span className="sr-only"> Read more about The Bright Future of Web 3.0</span>
            <span aria-hidden="true">READ MORE</span>
          </button>
        </div>
      </div>
    </article>
  )
}