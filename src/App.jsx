import React from 'react'




const App = () => {
  let info = [
    {
      name: "React",
      version: 17,
      status: "active",
    },
    {
      name: "Angular",
      version: 18,
      status: "active",
    },
    {
      name: "Vue",
      version: 12,
      status: "active",
    },
    {
      name: "Stylus",
      version: 13,
      status: "active",
    },
  ]

  let x = info.map((item, index) => {
    return (
      <div key={index}>
        <h1>Name: {item.name}</h1>
        <p>Version: {item.version}</p>
        <p>Status: {item.status}</p>
      </div>
    )
  })

  let getinfo = () => {
    console.log("hello world");
  }

  let takeInfo = (hello) => {
    console.log(hello);
  }


  return (
    <div>
      
      <button onClick={getinfo}>
        click me 
      </button>

      <button onClick={() => {takeInfo("This is info")}}>
        print me
      </button>

    </div>

  )
}

export default App