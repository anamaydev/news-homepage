/* todo:
*   [x] create custom spacings, colors and fonts
*   [ ] create all components
*       [x]  Header
*           [x] Nav Bar
*       [ ]  Main
*           [x] Hero Article
*           [ ] Featured Article
*       [ ] Footer
*           [ ] Article List
* */

import Header from './components/Header/Header'
import Main from './components/Main/Main'

function App() {
  return (
    <div className="max-w-139 mx-auto grid gap-8">
      <Header/>
      <Main/>
    </div>
  )
}

export default App
