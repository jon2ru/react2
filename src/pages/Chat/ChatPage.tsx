import { message } from "antd"
import { useEffect } from "react"

 const ws=new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')
 export type ChatMessageType={
     message: string,
     photo: string,
     userId: number,
     userName: string
   }
 const ChatPage:React.FC=()=>{
   return  <div>
        <Chat />
    </div>
}
 const Chat:React.FC=()=>{
  useEffect(()=>{
  ws.addEventListener('message',(e)=>{
    console.log(JSON.parse(e.data));
  })
  },[])
   return  <div>
      <Messages2 />
      <AddMessssageform />
    </div>
}
const Messages2:React.FC=()=>{
    const messages=[1,2,3,4]
    return  <div style={{height:'400px',overflow: 'auto'}}>
      { messages.map((m:any)=><Message />)} 
      { messages.map((m:any)=><Message />)} 
      { messages.map((m:any)=><Message />)} 
     </div>
 }
const Message:React.FC=()=>{
   const  message:ChatMessageType=null
  //  {
  //   url:'https://www.fauzer.ru/wa-data/public/shop/products/04/68/46804/images/60587/60587.70.jpg',
  //   autor:'Petr',
  //   text:'Hello!!!'
  //  }
    return  <div>
      <img src={message.url}/> <b>{message.autor}</b>
      <br/>
      {message.text}
      <hr/>
     </div>
 }
 const AddMessssageform:React.FC=()=>{
    return  <div>
        <div>
       <textarea ></textarea>
       </div>
       <div>
       <button>Send</button>
       </div>
     </div>
 }
export default ChatPage;