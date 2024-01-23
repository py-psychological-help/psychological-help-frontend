const chats = [
	{
		psychologist: {
			first_name: 'Анастасия',
			complaint: 'Психосоматика / физическое здоровье',
		},
		id: 42,
		chat_secret_key: '1',
		active: true,
		new: false,
		messages: [
			{
				id: 1,
				text: 'Здравствуйте!Чем могу помочь?',
				is_author_me: true,
			},
			{
				id: 1,
				text: 'Здравствуйте!Кружится голова',
				is_author_me: false,
			},
		],
	},

	{
		psychologist: {
			first_name: 'User',
			complaint: 'Семейные проблемы',
		},
		id: 43,
		chat_secret_key: '2',
		active: false,
		new: true,
		messages: [
			{
				id: 1,
				text: 'Здравствуйте!Чем могу помочь?',
				is_author_me: true,
			},
			{
				id: 1,
				text: 'Здравствуйте!Проблема в семье',
				is_author_me: false,
			},
		],
	},
	{
		psychologist: {
			first_name: '',
			complaint: 'Я не знаю что со мной',
		},
		id: 44,
		chat_secret_key: '3',
		active: true,
		new: false,
		messages: [
			{
				id: 1,
				text: 'Здравствуйте!Чем могу помочь?',
				is_author_me: true,
			},
			{
				id: 1,
				text: 'Здравствуйте!Постоянно злой',
				is_author_me: false,
			},
		],
	},
];

export default chats;
