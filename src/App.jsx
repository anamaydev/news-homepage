/* todo:
*   [x] create custom spacings, colors and fonts
*   [x] create all components
*       [x]  Header
*           [x] Nav Bar
*       [x]  Main
*           [x] Hero Article
*           [x] Featured Article
*       [x] Footer
*           [x] Article List
*   [ ] create final responsive layout
* */

import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="max-w-139 mx-auto grid gap-8">
      <Header/>
      <Main/>
      <Footer/>
    </div>
  )
}

export default App
