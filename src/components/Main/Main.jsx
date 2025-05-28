import HeroArticle from './HeroArticle.jsx'
import FeaturedArticles from './FeaturedArticles'

export default function Main(){
  return (
    <main className="grid gap-8">
      <HeroArticle/>
      <FeaturedArticles/>
    </main>
  )
}