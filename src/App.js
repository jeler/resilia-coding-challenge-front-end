import React from "react";
import "./App.css";
import { Card } from "@mui/material";
import resilia_small from './resilia_small.jpeg';
import { parseISO } from 'date-fns'
function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/messages")
      .then((res) => res.json())
      .then((data) => {
        setData(data)
      });
  }, []);
  

  return (
     <div className="App-Container">
       <header className="App-resilia-header">
       <img src={resilia_small} className="App-resilia-logo" alt="resilia-logo"></img>
       Notification Center
       </header>
       {data ? <div>
       {data.map((message) => (
         <Card variant="outlined">
         <div key={message.message_id}>
           <div><b>Message:</b> {message.message}</div>
           <div><b>Created At:</b> {message.created_at}</div>
         </div>
         </Card>
       ))}
     </div>: 'Loading'}
     
   </div>
  );
}

export default App;