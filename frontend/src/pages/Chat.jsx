import React from 'react';

import { PrettyChatWindow } from 'react-chat-engine-pretty';
import { useMultiChatLogic } from 'react-chat-engine-advanced';

const Chat = (props) => {
  const chatProps=useMultiChatLogic(
    '5a797e38-dd22-4e02-aa4b-4d3f78f632e1',
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