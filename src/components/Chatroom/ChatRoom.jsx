import React from 'react';
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './comps/ChatFeed';
import LoginForm from './comps/LoginForm';
import './ChatRoom.css';
const ChatRoom = () => {
	if (!localStorage.getItem('username')) return <LoginForm />;
	return (
		<ChatEngine
			height="100vh"
			projectID="7acb769f-184c-4a15-a288-53fbad5e8c73"
			userName={localStorage.getItem('username')}
			userSecret={localStorage.getItem('password')}
			renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
		/>
	);
};
export default ChatRoom;
