 const ChatPage:React.FC=()=>{
   return  <div>
        <Chat />
    </div>
}
 const Chat:React.FC=()=>{
   return  <div>
      <Messages2 />
      <AddMessssageform />
    </div>
}
const Messages2:React.FC=()=>{
    return  <div>
       message
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