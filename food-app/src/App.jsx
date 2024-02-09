import FoodList from './components/Foodlist';
import Nav from './components/Nav';
import Search from './components/Search'
import Container from './components/Container'
import InnerContainer from './components/InnerContainer'
import { useState } from "react"
import './App.css'
import FoodDetails from './components/FoodDetails';

function App() {
  const [data, setData] = useState([]);
  const [foodID, setFoodID] = useState('656329');


  return (
    <div className="App">
      <Nav />
      <Search data={data} setData={setData} />
      <Container>
        <InnerContainer>
          <FoodList data={data} setFoodID={setFoodID}/>
        </InnerContainer>
        <InnerContainer>
          <FoodDetails foodID={foodID} />
        </InnerContainer>
      </Container>
    </div>
  )
}

export default App
