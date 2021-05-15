import { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
	const [ username, setUsername ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ error, setError ] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();

		const authObject = {
			'Project-ID': '7acb769f-184c-4a15-a288-53fbad5e8c73',
			'User-Name': username,
			'User-Secret': password
		};

		try {
			await axios.get('https://api.chatengine.io/chats', { headers: authObject });

			localStorage.setItem('username', username);
			localStorage.setItem('password', password);

			window.location.reload();
			setError('');
		} catch (err) {
			setError('Oops, incorrect credentials.');
		}
	};
	return (
		<div className="wrapper">
			<div className="form">
				<h1>COVID Chat Feature</h1>
				<form onSubmit={handleSubmit}>
					<input
						type="text"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						className="input"
						placeholder="Username"
						required
					/>
					<input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						className="input"
						placeholder="Password"
						required
					/>
					<button type="submit" className="button">
						<span>Start Chat </span>
					</button>
				</form>
				<h3>{error}</h3>
			</div>
		</div>
	);
};
export default LoginForm;
