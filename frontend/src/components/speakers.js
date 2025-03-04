import React, { useState } from 'react';

import Speakercard from "./speakercard";
import Ashneer from "../images/ashneer.png";

import narayan from "../images/Narayan.png";
import anupam from '../images/anupam.png'


const Speakers = () => {

   const [speakers,SETspeakers] =useState([{
    title:'Anupam Mittal',img:anupam,company:'Co founder,Shaadi.com',keyid:0
   },{title:'Narayana Murthy',img:narayan,company:'Co founder,Bharatpe',keyid:1},
   {title:'Ashneer Grover',img:Ashneer,company:'Co founder,Bharatpe',keyid:2},
   {title:'Ashneer Grover',img:anupam,company:'Co founder,Bharatpe',keyid:3},
   {title:'Ashneer Grover',img:narayan,company:'Co founder,Bharatpe',keyid:4}] );


const rightclick = () => {
    setTimeout(()=>{ SETspeakers([speakers[1],speakers[2],speakers[3],speakers[4],speakers[0],]);},100)
   
    
}

const leftclick = () => {
    setTimeout(()=>{ SETspeakers([speakers[4],speakers[0],speakers[1],speakers[2],speakers[3],]);},100)
   
    
}


const mainspeaker = speakers[2];
const speaker0 = speakers[0];
const speaker1 = speakers[1];
const speaker3 = speakers[3];
const speaker4 = speakers[4];


   console.log(speakers);


    return (<div className="Speakers">
     
        <div className="sidespeaker" >
            <img className="sideimg" src={speaker0.img}>
            </img>

        </div>
        <div className="sidespeaker">
        <img  className="sideimg" src={speaker1.img}>
            </img>
            </div>


          <Speakercard
           key={mainspeaker.keyid}
           title={mainspeaker.title}
           img={mainspeaker.img}
           company={mainspeaker.company}
           leftclick = {leftclick}
           rightclick = {rightclick}
          />

     <div className="sidespeaker">
     <img  className="sideimg" src={speaker3.img}>
            </img>
            </div>
            <div className="sidespeaker">
            <img  className="sideimg" src={speaker4.img}>
            </img>
            </div>
    </div>  );
}
 
export default Speakers;

