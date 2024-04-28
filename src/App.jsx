import './App.css'
import { Link } from 'react-router-dom'

function App() {

  return (
    <>
      <div className='App'>
        <h1 style={{ margin: '.5em' }}>Post Your Yarn Projects</h1>
        <h3>Share your favorite projects, stictches, products, ect with people just like you.</h3>

  
        <div className="card">
          <Link to={'/feed'}>
            <button>
              Head to Stichify Feed
            </button>
          </Link>
        </div>
      </div>


    </>
  )
}

export default App
