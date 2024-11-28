import React, { useEffect, useState } from 'react'


function Makecard({ name,changescore }) {


  let [count, setcount] = useState(1)


  useEffect(()=>{
    changescore(count);
  },[count]);


  const updatescore =(type)=>{
    if(type==="plus"){
      setcount(count+1);
    }
    else if(type==="minus"){
      setcount(count-1);
    }
  };

         



  return (
      <div className='card'>
          <h1>{name}</h1>


          <h2>💀</h2>
          <h1>{count}</h1>



          <div className='cardbtn'>
              <button onClick={() => updatescore("plus")}>+</button>


              <button onClick={() => updatescore("minus")}>-</button>
          </div>


      </div>
  )
}





function Scoremaker() {



    let[team1score,setteam1score]=useState(0)
    let [team2score,setteam2score]=useState(0)
    let [winner,setwinner]=useState(false)


    function checkwinner(){
      if(team1score==team2score){
         return(
          <div className='winnercard'>
            <h1>its tie 😊</h1>
          </div>
         )
      }
      else if(team1score>team2score){
        return(
          <div className='winnercard'>
            <h1>Kunals team won😂🍫🍫💀</h1>
          </div>
        )
      } 
      else if(team2score>team1score){
        return(
          <div className='winnercard'>
            <h1>Rahul taam won 👌🍫🍫🍫</h1>
          </div>
        )
      }
    }
     
   



  
    return (
        <div className='main'>
            <div className='maincontainer'>

                <Makecard name={"⚔️Team Kunal ⚔️ "} changescore={setteam1score} />
                <Makecard name={"💣Team Rahul💣"}  changescore={setteam2score} />
                
               
            </div>
            <button className='who' onClick={()=>{
              return setwinner(!winner)
            }}>who won ?</button>
              
              
                    {winner?checkwinner():null}
              

            <h1>{team1score}:{team2score}</h1>
            {console.log(team1score)}
            
        </div>

    )
}

export default Scoremaker;