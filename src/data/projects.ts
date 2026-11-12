
export interface ProjectLink {
	label: string;
	href: string;
}

export interface Project {
	id: string;
	title: string;
	context: string;
	year: string;
	paragraphs: string[];
	tags: string[];
	media: {
		video: string;
		poster: string;
		alt: string;
	};
	links: ProjectLink[];
}

export const projects: Project[] = [
	{
		id: 'voxel-dungeon',
		title: 'Destructible Voxel Dungeon',
		context: 'Final-year dissertation, graded 86.2%',
		year: '2025-26',
		paragraphs: [
			'A dungeon crawler where you carve new rooms out of solid rock with a spell. If a room won\'t fit, the generator digs a tunnel to the nearest cave instead.',
			'Carving runs on a worker thread, which took the 1% low during room generation from 45.2 ms to 17.1 ms. The generator, enemy AI, shop and inventory are mine. Meshing uses the free Voxel Plugin.',
		],
		tags: ['C++', 'Unreal Engine 5', 'Multithreading', 'Octree', 'Procedural generation'],
		media: {
			video: '/video/voxel.mp4',
			poster: '/video/voxel.jpg',
			alt: 'First-person view of a freshly carved cave room with bat enemies flying out of a tunnel.',
		},
		links: [{ label: 'Dissertation (PDF)', href: '/DissertationReport.pdf' }],
	},
	{
		id: 'moss',
		title: 'Moss',
		context: 'Personal project, my own game engine',
		year: '2026',
		paragraphs: [
			'A small 2D game engine in C++20 and Vulkan, which I built to learn how renderers and game loops work. Sprites that share a texture go out in one draw call, and the game runs on a fixed 60 Hz loop. It also has AABB collision, tilemaps, particles, text and audio.',
			'Jumper, a small platformer, tests it, and I\'m using Moss for my GitHub Game Off entry in November. I\'ll put the code on GitHub when it\'s finished.',
		],
		tags: ['C++20', 'Vulkan', 'SDL3', 'Slang', 'Engine architecture'],
		media: {
			video: '/video/moss.mp4',
			poster: '/video/moss.jpg',
			alt: 'Jumper, a pixel-art platformer running on the Moss engine, with the debug overlay showing FPS and draw calls.',
		},
		links: [],
	},
	{
		id: 'souls-like',
		title: 'Souls-like Action RPG',
		context: 'Advanced Games Technology module coursework',
		year: '2025-26',
		paragraphs: [
			"A Souls-like action RPG written in C++ on the university's teaching engine, with a dodge-roll, state-machine enemies, a boss with timed damage windows and souls you spend on upgrades.",
			"After uni I came back to it and added the features I'd cut for scope and time: lock-on targeting, slash effects, area attacks and shadow mapping (AI-assisted). The first commit on GitHub is my original uni submission.",
		],
		tags: ['C++', 'Game AI', 'Combat'],
		media: {
			video: '/video/souls-like.mp4',
			poster: '/video/souls-like.jpg',
			alt: 'Third-person knight fighting a horned devil boss in a red-lit forest arena.',
		},
		links: [{ label: 'GitHub', href: 'https://github.com/Abhijit2401/souls-like-cpp-agt' }],
	},
	{
		id: 'opengl-racer',
		title: 'OpenGL Spline Racer',
		context: 'Computer Graphics module coursework, 78%',
		year: '2025-26',
		paragraphs: [
			"An off-road racing game on a Catmull-Rom spline track, built in C++ and OpenGL on the module's framework. I added bloom, shadow mapping, reflections, a water shader, instanced trees and grass, motion blur and frustum culling.",
		],
		tags: ['C++', 'OpenGL', 'GLSL'],
		media: {
			video: '/video/opengl-racer.mp4',
			poster: '/video/opengl-racer.jpg',
			alt: 'Chase camera following a car along a dirt track through a pine forest at dusk.',
		},
		links: [
			{ label: 'GitHub', href: 'https://github.com/Abhijit2401/opengl-spline-racer' },
		],
	},
	{
		id: 'game-jams',
		title: 'Game Jams',
		context: 'GMTK Game Jam 2026 and others',
		year: '2026',
		paragraphs: [
			'Sign of the Times was our GMTK 2026 entry: a Souls-like about an old warrior trying to reach a mountain memorial before their health timer runs out. I wrote the code with Nycto03 and drew every sprite myself in Piskel.',
			'I also made a PSX-style horror game in Unity for another jam, where I drew the first-person item animations frame by frame in Krita.',
		],
		tags: ['Unity', 'C#', 'Pixel art', 'Game jams'],
		media: {
			video: '/video/sign-of-the-times.mp4',
			poster: '/video/sign-of-the-times.jpg',
			alt: 'Pixel-art samurai fighting a glowing red enemy on a lantern-lit hillside.',
		},
		links: [
			{ label: 'Play Sign of the Times', href: 'https://tijiboo.itch.io/sign-of-the-times' },
			{ label: 'All my games (itch.io)', href: 'https://tijiboo.itch.io/' },
			{ label: 'PSX horror (GitHub)', href: 'https://github.com/Abhijit2401/psx-horror-gamejam' },
		],
	},
];
