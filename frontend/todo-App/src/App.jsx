import React, { useEffect } from "react";
import Card from "./components/Card";

function App() {

  return (
    <>
     <div className='w-full h-screen bg-zinc-500'>

      <div className='flex justify-center text-5xl'>
        <h2 className=''>Todo App</h2>
      </div>

      <Card />
     </div>
    </>
  )
}

export default App;