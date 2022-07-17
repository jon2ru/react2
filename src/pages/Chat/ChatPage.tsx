import { message } from "antd"
import { useEffect, useState } from "react"

const wsChannel = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')
export type ChatMessageType = {
  message: string,
  photo: string,
  userId: number,
  userName: string
}
const ChatPage: React.FC = () => {
  return <div>
    <Chat />
  </div>
}
const Chat: React.FC = () => {
  return <div>
    <Messages2 />
    <AddMessssageform />
  </div>
}
const Messages2: React.FC = () => {
  const [messagesss, setMessages] = useState<ChatMessageType[]>([])
  useEffect(() => {
    wsChannel.addEventListener('message', (e) => {
      let newMessagess = JSON.parse(e.data)
      setMessages((prevMessages) => [...prevMessages, ...newMessagess]);
    })
  }, [])
  return <div style={{ height: '400px', overflow: 'auto' }}>
    {messagesss.map((m, index) => <Message key={index} message={m} />)}
  </div>
}
const Message: React.FC<{ message: ChatMessageType }> = ({ message }) => {
  //  {
  //   url:'https://www.fauzer.ru/wa-data/public/shop/products/04/68/46804/images/60587/60587.70.jpg',
  //   autor:'Petr',
  //   text:'Hello!!!'
  //  }
  return <div>
    <img src={message.photo} style={{ width: '30px' }} /> <b>{message.userName}</b>
    <br />
    {message.message}
    <hr />
  </div>
}
//ниже отправляю соощение
// ***************************
const AddMessssageform: React.FC = () => {
  const [message, setMessages] = useState('');
  // ********************************************************
  // проверка канал готов к запуску?
  const [readyStatus,setreadyStatus] =useState<'pending' |'ready'>('pending')
  
  useEffect(() => {
    wsChannel.addEventListener('open',()=>{
      setreadyStatus('ready')
    })
  }, [])
  // *******************************
  const sendMessage = () => {
    if (!message) {
      return
    }
    wsChannel.send(message)
    // setMessages=('')   118 урок не работает в конце видео 

  }
  return <div>
    <div>
      <textarea disabled={readyStatus !=='ready'} onChange={(e) => setMessages(e.currentTarget.value)} value={message}></textarea>
      {/* disabled если нет соединения websocket  */}
    </div>
    <div>
      <button onClick={sendMessage}>Send</button>
    </div>
  </div>
}
export default ChatPage;