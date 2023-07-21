import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home.component';
import ChatPage from './components/ChatPage/ChatPage.component.jsx'
import io from 'socket.io-client';

const socket = io.connect('http://localhost:3001');
function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" index element={<Home socket={socket} />}></Route>
          <Route path="/chat" element={<ChatPage socket={socket} />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;


// import React, {useEffect,useState} from 'react'
// import io from 'socket.io-client'

// const socket = io.connect("http://localhost:3001");

// function App() {
//   const[message,setMessage] = useState('');
//   const[receivedMessage,setReceivedMessage] = useState('');
//   const sendMessage = () => {
//     socket.emit('send',{message})
//   }
  
//    useEffect(()=>{
//     socket.on('receive',(data)=>{
//       // console.log(data);
//       // alert(data);
//       setReceivedMessage(data.message);
//     })
//    },[socket])
   
//   return (
//     <div className="App">
//      <h3>Chat Room</h3>
//      <input className='msgInput' placeholder='Type Message' type='text' onChange={(e)=>{
//       setMessage(e.target.value);
//      }} />
//      <button type='submit' onClick={sendMessage}>Submit</button>
//      <div className='message-box'>
//         <h1>message received :</h1>
//         {receivedMessage}
//      </div>
//     </div>
//   );
// }

// export default App;
