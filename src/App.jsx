import PostItems from './Components/PostItems';
import Lists from '../src/Lists/Lists'
import './App.css'

function App() {
  const renderItems = Lists.map(posts=><PostItems key={posts.id} {...posts} />)
  return (
      <div className="post-item-wrapper">
      {renderItems}
     
    </div>
  )
}

export default App
