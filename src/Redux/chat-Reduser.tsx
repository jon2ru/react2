import { Dispatch } from 'redux';
import { FormAction } from 'redux-form';
import { chatApi, ChatMessageType } from '../api/chat-api';
import { BaseThunkType, InferActionsTypes } from './new-store';

let initialState = {
  messages: [] as ChatMessageType[]
};
//начальный state
const chatReduser = (state = initialState, action: ActionTypes): initialStateType => {
  switch (action.type) {
    case "sw/chat/MESSAGE_RECEIVED":
      return {
        ...state,
        messages: { ...state.messages, ...action.data.messages }
      };
    default:
      return state;
  }
};
// **************************
export const actions = {
  messageReceived: (messages: ChatMessageType[]) => ({ type: "sw/chat/MESSAGE_RECEIVED", data: { messages } } as const),
};
// **********************************************
// начать прослушивание сообщений ниже
let _newMessageHandler: ((messages: ChatMessageType[]) => void) | null = null
const newMessageHandlerCreator = (dispatch: Dispatch) => {
  if (_newMessageHandler === null) {
    _newMessageHandler = (messages) => {
      dispatch(actions.messageReceived(messages))
    }
  }
  return _newMessageHandler
}
export const startMessagesListining = (): ThunkType => async (dispatch) => {
  chatApi.start()
  chatApi.subscribe(newMessageHandlerCreator(dispatch))
}
export const stopMessagesListining = (): ThunkType => async (dispatch) => {
  chatApi.stop()
  chatApi.unsubscribe(newMessageHandlerCreator(dispatch))
}
export const sendMessage = (message: string): ThunkType => async (dispatch) => {
  chatApi.sendMessage(message)
}
export default chatReduser;
export type initialStateType = typeof initialState
type ActionTypes = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionTypes | FormAction>
