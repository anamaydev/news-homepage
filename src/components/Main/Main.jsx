import HeroArticle from './HeroArticle.jsx'
import FeaturedArticles from './FeaturedArticles'

export default function Main(){
  return (
    <main className="grid gap-8 lg:grid-cols-3 lg:gap-3">
      <HeroArticle/>
      <FeaturedArticles/>
    </main>
  )
}