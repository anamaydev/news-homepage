import { nanoid } from 'nanoid';

import growthOfGamingImage from '../../assets/images/image-gaming-growth.jpg'
import topLaptopsImage from '../../assets/images/image-top-laptops.jpg'
import retroPcImage from '../../assets/images/image-retro-pcs.jpg'

export default function Footer() {
  const articleListArray = [
    {img:retroPcImage, alt:"Image of miniature retro pc", title: 'Reviving Retro PCs', desc: 'What happens when old PCs are given modern upgrades?', href:'#'},
    {img:topLaptopsImage, alt:"Image of laptop keyboard", title: 'Top 10 Laptops of 2022', desc: 'Our best picks for various needs and budgets.', href:'#'},
    {img:growthOfGamingImage , alt:"Image of gaming console joystick", title: 'The Growth of Gaming', desc: 'How the pandemic has sparked fresh opportunities.', href:'#'},
  ]

  function ArticleListItems(){
    return articleListArray.map((article, idx) =>(
      <li key={nanoid()} className="flex-1 group">
        <a
          href={article.href}
          className="flex gap-3"
        >
          <img src={article.img} alt={article.alt} className="w-12.5 h-16.25 object-cover group-hover:scale-105 transition-scale duration-500"/>
          <div className="flex flex-col gap-1">
            <p className="text-preset-3 text-red">{idx < 10 ? '0' + (idx+1) : (idx+1)}</p>
            <h3 className="text-preset-5 text-navy-950 group-hover:text-red">{article.title}</h3>
            <p className="text-preset-6 text-navy-600">{article.desc}</p>
          </div>
        </a>
      </li>
    ))
  }

  return (
    <footer className="">
      <ul className="flex flex-col gap-4 lg:flex-row lg:gap-5">
        <ArticleListItems/>
      </ul>
    </footer>
  )
}