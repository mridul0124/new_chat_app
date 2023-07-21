import React,{useState,useEffect} from 'react';
import ChatBar from '../ChatBar/ChatBar.component'
import ChatBody from '../ChatBody/ChatBody.component'
import ChatFooter from '../ChatFooter/ChatFooter.component'

const ChatPage = ({ socket }) => {
  const [messages,setMessages] = useState([]);

  useEffect(()=>{
    socket.on('receive',(data)=>setMessages([...messages,data]));
  },[socket,messages])


  return (
    <div className="chat">
      <ChatBar socket={socket} />
      <div className="chat__main">
        <ChatBody messages={messages} />
        <ChatFooter socket={socket} />
      </div>
    </div>
  );
};

export default ChatPage;

