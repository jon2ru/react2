import { message } from "antd"
import { useEffect, useState } from "react"

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
  const [wsChannel, setWsChannel] = useState<WebSocket | null>(null)
  useEffect(() => {
    let ws: WebSocket;
    const closeHandler = () => {
      console.log('Close WS')
      setTimeout(createChannel, 3000);

    }
    function createChannel() {
      // ниже когда запускаем webSocket и нужно проверить  может он уже был запущен?
        ws?.removeEventListener('close', closeHandler)
        ws?.close()

      ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')
      setWsChannel(ws)
      // если нет соединения ниже перезапускаем соединение каждые 3 сек
      ws?.addEventListener('close', closeHandler)
    }
    createChannel();
    return () => {
      ws.removeEventListener('close', closeHandler)
      ws.close()
      // выше когда уходим из компоненты нужно закрыть webSocket
    }

  }, [])
  return <div>
    <Messages2 wsChannel={wsChannel} />
    {/* wsChannel прокинул через props строка выше */}
    <AddMessssageform wsChannel={wsChannel} />
  </div>
}
const Messages2: React.FC<{ wsChannel: WebSocket | null }> = ({ wsChannel }) => {
  const [messagesss, setMessages] = useState<ChatMessageType[]>([])
  useEffect(() => {
    const messageHandler=(e:MessageEvent) => {
      let newMessagess = JSON.parse(e.data)
      setMessages((prevMessages) => [...prevMessages, ...newMessagess]);
    }
    wsChannel?.addEventListener('message', messageHandler)
    return ()=>{
      wsChannel?.removeEventListener('message', messageHandler)
    }
  }, [wsChannel])
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
const AddMessssageform: React.FC<{ wsChannel: WebSocket | null }> = ({ wsChannel }) => {
  const [message, setMessages] = useState('');
  // ********************************************************
  // проверка канал готов к запуску?
  const [readyStatus, setreadyStatus] = useState<'pending' | 'ready'>('pending')

  useEffect(() => {
    const openHandler=() => {
      setreadyStatus('ready')
    }
    wsChannel?.addEventListener('open',openHandler )
    return ()=>{
    wsChannel?.removeEventListener('open',openHandler )
    }
  }, [wsChannel])
  // *******************************
  const sendMessage = () => {
    if (!message) {
      return
    }
    wsChannel?.send(message)
    // setMessages=('')   118 урок не работает в конце видео 

  }
  return <div>
    <div>
      <textarea disabled={wsChannel === null || readyStatus !== 'ready'} onChange={(e) => setMessages(e.currentTarget.value)} value={message}></textarea>
      {/* disabled если нет соединения websocket  */}
    </div>
    <div>
      <button onClick={sendMessage}>Send</button>
    </div>
  </div>
}
export default ChatPage;