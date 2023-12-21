import React, { useEffect, useState } from 'react'
import "./home.css"
function Home() {



    useEffect(()=>{
        let modern = document.getElementById('modern');

        const handleScroll = () => {
            let value = window.scrollY;
            modern.style.marginLeft = value * 2.5 + 'px';
          };

          window.addEventListener('scroll', handleScroll);

          return () => {
            window.removeEventListener('scroll', handleScroll);
          };
    },[])


    useEffect(()=>{
        let modern = document.getElementById('luxury');

        const handleScroll = () => {
            let value = window.scrollY;
            modern.style.marginRight = value * 2.5 + 'px';
          };

          window.addEventListener('scroll', handleScroll);

          return () => {
            window.removeEventListener('scroll', handleScroll);
          };
    },[])
    

    useEffect(()=>{
        let  iphone16= document.getElementById('iphone16');

        const handleScroll = () => {
            let value = window.scrollY;
            iphone16.style.right= value * 2.5  + 'px';
            iphone16.style.bottom= value/3   + 'px';
            
          };

          window.addEventListener('scroll', handleScroll);

          return () => {
            window.removeEventListener('scroll', handleScroll);
          };
    },[])


    useEffect(()=>{
        let  iphone16P= document.getElementById('iphone16P');

        const handleScroll = () => {
            let value = window.scrollY;
            iphone16P.style.right= value*1.5   + 'px';
            iphone16P.style.bottom= value   + 'px';
            
          };

          window.addEventListener('scroll', handleScroll);

          return () => {
            window.removeEventListener('scroll', handleScroll);
          };
    },[])

    useEffect(()=>{
        let  iphone14= document.getElementById('iphone14');

        const handleScroll = () => {
            let value = window.scrollY;
          
            iphone14.style.right= value* 2.5 + 'px';
            
          };

          window.addEventListener('scroll', handleScroll);

          return () => {
            window.removeEventListener('scroll', handleScroll);
          };
    },[])


    useEffect(()=>{
        let  iphone14P= document.getElementById('iphone14P');

        const handleScroll = () => {
            let value = window.scrollY;
            iphone14P.style.bottom= value/3   + 'px';
            
            
          };

          window.addEventListener('scroll', handleScroll);

          return () => {
            window.removeEventListener('scroll', handleScroll);
          };
    },[])
    

        


  return (

    <>
   <div className='homeMain'>
      <h1 className='firstHead' id='modern'>MORDER</h1>
      <h1 className='firstHea' id='luxury'>LUXURY</h1>

    </div>

      
    <div className='homeMainSecond' >
        <img id='iphone16' className='iphone16' src="https://images.macrumors.com/t/4UdtWI63s3vVRjhMIrZUDw7kVbw=/1600x/article-new/2022/09/iPhone-14-Pro-Rear-Camera.jpg" alt="" />
        <p id='iphone16P' className='iphone16P'>
        The iPhone 16 Pro and iPhone 16 Pro Max are expected to have larger display sizes, according to multiple sources. The iPhone 16 Pro will have a display that's 6.27 inches in size (rounded to 6.3), while the iPhone 16 Pro Max is expected to have a display that's 6.85 inches in size (rounded to 6.9).
        </p>
    </div>

    <div className='homeMainThird' >
        <img id='iphone14' className='iphone14' src="https://images.unsplash.com/photo-1701680845055-fcbe1bd117bc?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aXBob25lJTIwMTQlMjBwcm8lMjBtYXglMjB3YWxscGFwZXJ8ZW58MHx8MHx8fDA%3D" alt="" />
        <p id='iphone14P' className='iphone14P'>
        The iPhone 14 and iPhone 14 Pro Max are expected to have larger display sizes, according to multiple sources. The iPhone 14 Pro will have a display that's 6.27 inches in size (rounded to 6.3), while the iPhone 1 Max is expected to have a display that's 6.85 inches in size (rounded to 6.9).
        </p>

        
    </div>
     
     
      
    
    
    </>  
      
      
  )
}

export default Home
