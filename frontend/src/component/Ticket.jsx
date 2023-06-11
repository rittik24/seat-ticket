import React, { useEffect, useState } from 'react'

const Ticket = () => {

  const [seat, setSeat] = useState(0)
  const [data, setData] = useState([])

  let arr = []
  for (let i = 0; i < 80; i++) {
    arr.push({
      a: false,
      b: i + 1
    })
  }

  const handelChange = (e) => {
    setSeat(e.target.value)
  }
  const getData = async () => {
    let r = await fetch(`https://lazy-pink-coypu-hem.cyclic.app`)
    let d = await r.json()
    setData(d)
  }
  useEffect(() => {
    getData()
  }, [])
  // console.log(data)
  let arr1 = []
  for (let i = 0; i < data.length; i++) {
    arr1.push(data[i].id)
  }
  useEffect(() => {
    for (let i = 0; i < arr1.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        if (arr1[i] == arr[j]) {
          console.log("rick", arr[j])
        }
      }
    }
  },[])

  const seatBook = async () => {
    try {
      let r = await fetch(`https://lazy-pink-coypu-hem.cyclic.app/data`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          id: seat,
          is_Booked: true
        })
      })
    } catch (error) {
    }
  }
  return (
    <>
    <h1>Ticket Booking App</h1>
      <div style={{ display: 'grid', gridTemplateColumns: "repeat(7,1fr)", width: "40%", margin: "auto", border:"solid 2px red", 
      marginTop:"20px", padding:"10px", backgroundColor:"brown", borderRadius:"20px" }}>
        {
          data.map((item, index) => {
            return (
              <div>
                <button style={{backgroundColor:item.is_Booked == false ? "yellow" : "blue"}} >{item.id}</button>
              </div>
            )
          })
        }

      </div>
      <input type="number" placeholder='No of Seats' onChange={handelChange}
       style={{width:"20%", border:"1px solid black", marginTop:"10px" }} /> <br />
      <button style={{width: "20%", marginTop:"10px", backgroundColor:"teal", border:"none",borderRadius:"10px",
       padding:"10px", color:"white", cursor:"pointer"}}
      //  disabled= {+seat>0 && +seat< 8 ? false : true}
       onClick={seatBook}>Book Seats</button>
    </>
  )
}

export default Ticket


