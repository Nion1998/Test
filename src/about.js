import axios from 'axios';
import React, { useEffect, useState } from 'react';

const About = () => {
     
    const [data,setData ] = useState([]);
    useEffect(()=>{
        axios.get("https://sh1mu7.privateyebd.com/blog/post/").then((rsp)=>{
            console.log(rsp.data)
            setData(rsp.data);
        },(er)=>{
            console.log(er.data);
        })
    },[]);




    return (
        <div>
            {
                data.map((dt)=>
                <p>{dt.title}</p>
                
                )
            }
        </div>
    );
};

export default About;