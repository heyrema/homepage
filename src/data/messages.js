const messages = {
	error: [
		'Where did I land up?',
		'How on Earth did I land up here?',
		'Wish this were real...',
		'No path, invalid destination.',
		'Hey! Got any grapes?'
	],
	fun: [
		'Service to you is my supreme responsibility.',
		'There\'s nothing wrong with having a little fun!',
		'Now you know all about me, eh?'
	]
};

const getMessage = (type = 'error') => {
	const msgs = messages[type];
	const randomIndex = Math.floor(Math.random() * msgs.length);
	return msgs[randomIndex];
};

export default getMessage;