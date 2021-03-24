import { INITIATE_MESSAGES, ADD_MESSAGE } from './types';
import axios from 'axios'
import socketIOClient from "socket.io-client";
const serverBaseURL = 'http://localhost:5000/'

export const subscribeMessages = (chat_id) => dispatch => {
  const socket = socketIOClient(serverBaseURL, {
    query: `chat_id=${chat_id}`,
  });
  socket.on('message', (message) => {
    console.log('history messages', message)

    if (message.error){
      return
    }
    switch (message.type) {
      case 'historyMessages':
        dispatch({
          type: INITIATE_MESSAGES,
          payload: message.messages
        })
        break;
      case 'newMessage':
        dispatch({
          type: ADD_MESSAGE,
          payload: message.message,
        });
        break;
    }

  });

  // socket.on('newMessage', (message) => {
  //   console.log('new message', message)
  //   dispatch({
  //     type: ADD_MESSAGE,
  //     payload: message,
  //   })
  // });
};

