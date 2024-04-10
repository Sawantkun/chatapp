import React from 'react';

import { PrettyChatWindow } from 'react-chat-engine-pretty';
import { useMultiChatLogic } from 'react-chat-engine-advanced';

const Chat = (props) => {
  const chatProps=useMultiChatLogic(
    '89619f85-af90-4289-bac4-54517d438045',
    props.user.username,
    props.user.secret
  )
  return (
    <div style={{height:'100vh'}}>
          <PrettyChatWindow {...chatProps} style={{ height: '100%' }}/>
    </div>
  )
}

export default Chat