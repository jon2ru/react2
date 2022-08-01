import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { json } from "stream/consumers"
import { ChatMessageType } from "../../api/chat-api"
import { sendMessage, startMessagesListining, stopMessagesListining } from "../../Redux/chat-Reduser"
import { AppStateType } from "../../Redux/new-store"

const ChatPage: React.FC = () => {
  return <div>
    <Chat />
  </div>
}
const Chat: React.FC = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(startMessagesListining())
    return () => {
      dispatch(stopMessagesListining())
    }

  }, [])
  return <div>
    <Messages2 />

    <AddMessssageform />
  </div>
}
const Messages2: React.FC<{}> = ({ }) => {
  // ниже получаю сообщения из стейта
  const messages= useSelector((state: AppStateType) => state.chat.messages)
  console.log(messages)
  const messagesssq = [{
    message: "wefwef",
    photo: "https://social-network.samuraijs.com/activecontent/images/users/22994/user-small.jpg?v=71",
    userId: 22994,
    userName: "edk_001"
  },
  {
    message: "wefwef",
    photo: "https://social-network.samuraijs.com/activecontent/images/users/22994/user-small.jpg?v=71",
    userId: 22994,
    userName: "edk_001"
  },
  {
    message: "wefwef",
    photo: "https://social-network.samuraijs.com/activecontent/images/users/22994/user-small.jpg?v=71",
    userId: 22994,
    userName: "edk_001"
  }]
  console.log(messagesssq)
  return (<div style={{ height: '400px', overflow: 'auto' }}>
    {messages.map((m, index) => <Message key={index} message={m} />)}
  </div>)
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
const AddMessssageform: React.FC<{}> = () => {
  const [message, setMessages] = useState('');
  // ********************************************************
  // проверка канал готов к запуску?
  const [readyStatus, setreadyStatus] = useState<'pending' | 'ready'>('pending')
  const dispatch = useDispatch()

  // *******************************
  const sendMessageHandler = () => {
    if (!message) {
      return
    }
    dispatch(sendMessage(message))
    // setMessages=('')   118 урок не работает в конце видео 

  }
  return <div>
    <div>
      <textarea disabled={false} onChange={(e) => setMessages(e.currentTarget.value)} value={message}></textarea>
      {/* disabled если нет соединения websocket  */}
    </div>
    <div>
      <button onClick={sendMessageHandler}>Send</button>
    </div>
  </div>
}
export default ChatPage;