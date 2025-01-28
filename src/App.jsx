import './App.css'
import './style.css'
import Header from './components/Header'
import Banner from './components/Banner'
import Vision from './components/Vision'
import Family from './components/Family'
import Team from './components/Team'
import Hope from './components/Hope'
import Pictures from './components/Pictures'
import Footer from './components/Footer'

function App() {

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 w-full font-sans">
      <Header />
      <Banner />
      <Vision />
      <Family />
      <Team />
      <Hope />
      <Pictures />
      <Footer />
    </div>
  )
}


export default App
