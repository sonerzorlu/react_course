import Card from './components/Card'
import Header from './components/Header'
import Footer from './components/Footer'


import "./scss/app.scss"
import data from './data'
function App () {

  return (
    <>
     <Header />
     <Card data ={data}/>
    <Footer />
    </>
  )
}

export default App