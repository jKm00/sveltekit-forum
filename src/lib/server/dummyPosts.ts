import type { Post } from "@/models/Post";

export const dummyPosts: Post[] = [
		{
			id: 1,
			title: 'Introduction to TypeScript',
			content: 'TypeScript is a strongly-typed superset of JavaScript that compiles to plain JavaScript.',
			author: 'John Doe',
			likes: 20,
			comments: 10,
			shares: 5
		},
		{
			id: 2,
			title: 'The Benefits of Using React for Front-End Development',
			content: 'React is a popular JavaScript library for building user interfaces. It offers a number of benefits, such as component reusability and improved performance.',
			author: 'Jane Smith',
			likes: 30,
			comments: 12,
			shares: 6
		},
		{
			id: 3,
			title: 'How to Use Git for Version Control',
			content: 'Git is a popular version control system that allows you to track changes in your codebase over time. It offers a number of useful features, such as branching and merging.',
			author: 'Bob Johnson',
			likes: 15,
			comments: 8,
			shares: 3
		},
		{
			id: 4,
			title: 'Tips for Effective Time Management',
			content: 'Effective time management is crucial for productivity and success. Some tips include prioritizing tasks, minimizing distractions, and delegating responsibilities when possible.',
			author: 'Samantha Lee',
			likes: 25,
			comments: 6,
			shares: 2
		},
		{
			id: 5,
			title: 'The Importance of Regular Exercise',
			content: 'Regular exercise has many benefits, such as improved physical health, reduced stress levels, and increased energy. Some popular forms of exercise include running, yoga, and weightlifting.',
			author: 'David Kim',
			likes: 18,
			comments: 4,
			shares: 1
		},
		{
			id: 6,
			title: 'Introduction to Object-Oriented Programming',
			content: 'Object-oriented programming is a programming paradigm that uses objects to represent and manipulate data. It offers a number of benefits, such as code reusability and improved organization.',
			author: 'Emily Chen',
			likes: 35,
			comments: 15,
			shares: 8
		},
		{
			id: 7,
			title: 'The Basics of HTML and CSS',
			content: 'HTML and CSS are the foundation of web development. HTML is used to structure content on a webpage, while CSS is used to style and layout the content. Learning these languages is essential for creating websites.',
			author: 'Michael Wong',
			likes: 22,
			comments: 9,
			shares: 4
		},
		{
			id: 8,
			title: 'Common Interview Questions and How to Answer Them',
			content: "Interviews can be nerve-wracking, but preparation can help. Some common interview questions include 'Tell me about yourself' and 'What are your strengths and weaknesses?' Practicing your answers can help you feel more confident during the interview.",
			author: 'Amy Smith',
			likes: 28,
			comments: 11,
			shares: 6
		}
	];