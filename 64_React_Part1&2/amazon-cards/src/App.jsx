import './App.css'
import Cards from "./Cards.jsx"

function App() {

  return (
    <>
      <h2>Blockbuster Deals on Computer Accessories | <span style={{color:"Grey", cursor:"Pointer"}}>Shop Now</span> </h2>
      <Cards title={"Logitech MX Master"} description={["8000 DPI", "5 Programmable Buttons"]} oldPrice={12495} newPrice={8990}/>
      <Cards title={"Apple Pencil (2nd Gen)"} description={["Intutive Touch Surface", "Designed for iPad Pro"]} oldPrice={11900} newPrice={9190}/>
      <Cards title={"Zebronics"} description={["Designed for iPad Pro", "Intutive Touch Surface"]} oldPrice={1599} newPrice={899}/>
      <Cards title={"Petronics"} description={["Wireless Mouse 2.4GHz", "Optical Orientation"]} oldPrice={599} newPrice={278}/>
      <Cards title={"Dell"} description={["Wireless Mouse 2.4GHz", "5 Programmable Buttons"]} oldPrice={899} newPrice={699}/>
    </>
  )
}

export default App;
