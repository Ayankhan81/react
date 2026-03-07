import HeaderComp from "./components/HeaderComp";

const App_ = () => {
    let greet="welcome"
  return (

    <div>
      <h1>I'm Parent component</h1>
    <h2>{greet}</h2>  
    <HeaderComp/>  
    </div>
    
  )
}

export default App_

