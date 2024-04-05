import Text from './components/Text'
import Card from "./components/Card"
import Header from "./components/Header"
import Navbar from "./components/Navbar"

function App() {
  return (
    <div className="w-full  bg-black p-10">
      <div className="container w-[1200px] m-auto  ">
        <Navbar></Navbar>
        <Header></Header>
        <Text></Text>
        <Card></Card>
      </div>
    </div>
  )
}

export default App