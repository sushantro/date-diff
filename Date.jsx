 import  DateDiff  from "date-diff";


import { useState } from "react";

const Faga=()=>
{
const [kola,setkola]=useState()
const[dhanoi,setdhanoi]=useState()
const[jok,setjok]=useState()
const joker=(e)=>{
    setkola(e.target.value)
}

const londa=(e)=>{
    setdhanoi(e.target.value)

}


const cal=()=>{
    const date1=new Date(kola)
    console.log(date1);
    const date2=new Date(dhanoi)
    console.log(date2);
   const diff=new DateDiff(date2,date1)
  const ba= ` ${diff.years()} ${diff.months()} ${diff.days()}`
 

//    const ja=diff.months
   
    setjok(ba)
    
    

   

    
}













    return(
        <>
        <input type="date" onChange={joker} />
        <input type="date" onChange={londa} />
        
        
        <button onClick={cal}>calculate</button>

        {/* <ol>
            {
                jok.map((iy)=>{
                    return<li>{iy}</li>
                })
            }
        </ol> */}

        <li>{jok}</li>


        
        
        
        </>

    )
}
export default Faga;


// const date1=newDate(2015,11,1)
// const date2=newDate(2014,0,1)
// const diff=new DateDiff(date1,date2)
// console.log(diff)