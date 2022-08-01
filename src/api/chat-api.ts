let subscribers = [] as SubscribeType[]
let ws: WebSocket | null = null
const closeHandler = () => {
    console.log('Close WS')
    setTimeout(createChannel, 3000);
}
const messageHandler = (e: MessageEvent) => {
    const newMessagess = JSON.parse(e.data)
    subscribers.forEach(s => s(newMessagess))
}
const cleanUP=()=>{
    ws?.removeEventListener('close', closeHandler)
    ws?.removeEventListener('message', messageHandler)
}
function createChannel() {
    // ниже когда запускаем webSocket и нужно проверить  может он уже был запущен?
    cleanUP()
    ws?.close()

    ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')

    ws?.addEventListener('close', closeHandler)
    ws?.addEventListener('message', messageHandler)
}
export const chatApi = {
    start() {
        createChannel()
    },
    stop() {
        subscribers = []
        ws?.close()
        cleanUP()
    },
    subscribe(callback: SubscribeType) {
        subscribers.push(callback)
        // ниже отписаться
        return () => {
            subscribers = subscribers.filter(s => s !== callback)
        }
    },
    unsubscribe(callback: SubscribeType) {
        subscribers = subscribers.filter(s => s !== callback)
    },
    sendMessage(message: string) {
        ws?.send(message)
    }
}
type SubscribeType = (messages: ChatMessageType[]) => void
export type ChatMessageType = {
    message: string,
    photo: string,
    userId: number,
    userName: string
}