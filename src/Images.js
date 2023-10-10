import React, { useState } from 'react'
import axios from 'axios';
const Images = () => {
    const [images, setImages]= useState([]);
    const Fecth = async ()=>{
        try {
            const responce = await axios.get('https://picsum.photos/v2/list')
            const data = await responce.data;
      setImages(data);
        } catch (error) {
            console.log(error);
        }
     
        document.body.style.backgroundColor = 'aliceblue;'
        
    } 
   
  return (
    <>
    <div className="text">

      <h1>Random Images</h1>
    </div>
      <div className="btn">
    <button onClick={Fecth}>Get Images </button>
      </div>
    <div className="images">
    { images.map((ele,id)=>{
         return  <img src={ele.download_url} alt="" key={id} 
         width="300px"
         />
    })}
    </div>
    </>
  )
}

export default Images
