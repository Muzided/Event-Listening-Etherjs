import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import LoginForm from "./LoginForm";
import Post from "./Post";
import axios from 'axios';
import EventListner from "./Pages/EventListner";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setData(response.data);
        console.log(response.data)
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  //   var today =new Date().toLocaleTimeString();
  //  //var date = today.getHours() +':'+  today.getMinutes() +':'+ today.getSeconds()+'';
  //   const state = useState();

  //   const[time, setTime]=useState(0);
  // const addder=()=>{
  //   today= new Date();
  //   setTime(today);
  //  console.log("clicked")
  // }
  // setInterval(addder,1000);
  return (
    <div className="grid grid-cols-3 gap-4 p-3">
      
      {/* {data.map((post) => (
        <Post
          key={post.id} // always include a key prop when mapping an array in React
          userId={post.userId}
          id={post.id}
          title={post.title}
          body={post.body}
        /> */}
   
   

      {/* <center>
   <div className=' bg-slate-300 mt-44 h-auto w-min pb-8  '>
    <h1 className='p-10 text-center text-black text-3xl sm:4xl lg:text-3xl font-bold px-24'>  {today}</h1>
   
    </div>
   </center> */}
   <EventListner/>
   
    </div>
  );
}

export default App;
