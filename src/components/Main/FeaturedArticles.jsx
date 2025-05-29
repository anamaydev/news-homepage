import { nanoid } from 'nanoid'

export default function FeaturedArticles() {
  const featuredArticles = [
    {title:'Hydrogen VS Electric Cars', desc:'Will hydrogen-fueled cars ever catch up to EVs?', href:'#'},
    {title:'The Downsides of AI Artistry', desc:'What are the possible adverse effects of on-demand AI image generation?', href:'#'},
    {title:'Is VC Funding Drying Up?', desc:'Private funding by VC firms is down 50% YOY. We take a look at what that means.', href:'#'},
  ]

  function ArticleListItems(){
    return featuredArticles.map(article =>(
      <li
        key={nanoid()}
        className="py-4 border-b border-navy-600 first:pt-0 last:pb-0 last:border-none"
      >
        <a
          href={article.href}
          className="flex flex-col gap-1"
        >
          <h3 className="text-preset-4">{article.title}</h3>
          <p className="text-preset-6">{article.desc}</p>
        </a>
      </li>
    ))
  }

  return (
    <article className="flex flex-col gap-4 py-2 px-3 sm:py-4 sm:px-5 lg:py-2 lg:px-3 bg-navy-950 text-white">
      <h2 className="text-preset-3 text-gold">New</h2>
      <ul>
        <ArticleListItems/>
      </ul>
    </article>
  )
}