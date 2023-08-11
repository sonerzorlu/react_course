import Card from './components/card/Card'
import Button from './components/button/Button'
import data from "./utils/data.js"

const App = () => {
  console.log(data);
  return (
    <>
    {data.map(({name,img,tel}) => (
      <Card name={name} img={img} tel={tel} />
    ) )}
    
    <Button/>
    </>
  )
}

export default App