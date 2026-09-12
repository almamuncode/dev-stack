import { Suspense, useState } from "react";
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Technologies from "./components/Technologies";
import Spinner from "./components/Spinner";


const fetchData = async()=>{
  const res = await fetch('./data.json');
  const data = await(res.json());
  return data;
}

function App() {

  const [promiseData] = useState(()=>fetchData())

  return (
    <>
    <Navbar></Navbar>
     <div className="divider"></div>
     <Hero></Hero>
     <Suspense fallback={<Spinner></Spinner>}>
      <Technologies promiseData={promiseData}></Technologies>
     </Suspense>
    
     <Footer></Footer>
  
    </>
  )
}

export default App
