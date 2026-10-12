
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
	media?: {
		video: string;
		poster: string;
		alt: string;
	};
	links: ProjectLink[];
	featured?: boolean;
}

export const projects: Project[] = [
	{
		id: 'voxel-dungeon',
		title: 'Destructible Voxel Dungeon',
		context: 'Final-year dissertation, graded 86.2%',
		year: '2025-26',
		featured: true,
		paragraphs: [
			'A dungeon crawler where you carve new rooms out of solid rock with a spell. If a room won\'t fit, the generator digs a tunnel through to the nearest cave instead.',
			'A buffered AABB query on the voxel octree checks the space before carving. The carving runs on a worker thread through AsyncTask with a voxel write lock, taking the 1% low during room generation from 45.2 ms to 17.1 ms.',
			'Meshing is by the free Voxel Plugin (Marching Cubes). The generator, enemy AI, shop and inventory are mine.',
		],
		tags: ['C++', 'Unreal Engine 5', 'Multithreading', 'Procedural generation'],
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
			'A small 2D game engine in C++20 and Vulkan, which I built to learn how renderers and game loops work. SDL3 handles the window and input, vk-bootstrap and VMA set up the device and memory, and the shaders are written in Slang.',
			'Sprites that share a texture are batched into a single draw call, and the game logic runs on a fixed 60 Hz loop. On top of that it has sprite animation, AABB collision, tilemaps, particles, text, audio and a Dear ImGui overlay for FPS and draw calls.',
			'Jumper is a small platformer I built on it to test everything together. I\'m using Moss for my GitHub Game Off entry in November.',
		],
		tags: ['C++20', 'Vulkan', 'Slang', 'Engine architecture'],
		media: {
			video: '/video/moss.mp4',
			poster: '/video/moss.jpg',
			alt: 'Jumper, a pixel-art platformer running on the Moss engine, with the debug overlay showing FPS and draw calls.',
		},
		links: [{ label: 'GitHub', href: 'https://github.com/Abhijit2401/moss' }],
	},
	{
		id: 'fft-ocean',
		title: 'FFT Ocean in Unreal Engine 5',
		context: 'Personal project',
		year: '2026',
		featured: true,
		paragraphs: [
			"An ocean built on Unreal's compute shaders and Render Dependency Graph, without the Water plugin. The waves use Tessendorf's FFT method, written as four compute passes: a Phillips spectrum, time evolution with choppy displacement, a radix-2 Cooley-Tukey FFT and an inversion pass.",
			"It runs three cascades (20 m, 5 m and 1.2 m patches) at 256×256, which comes to 150 dispatches a frame. Colour goes through Single Layer Water, with open-ocean absorption taken from Pope and Fry's measurements, and Ocean, Tropical and Murky presets that switch at runtime with one call.",
		],
		tags: ['C++', 'HLSL', 'Compute shaders', 'Unreal RDG'],
		media: {
			video: '/video/ocean.mp4',
			poster: '/video/ocean.jpg',
			alt: 'Wide view of the simulated ocean surface with sunlight reflecting off the waves.',
		},
		links: [
			{ label: 'GitHub', href: 'https://github.com/Abhijit2401/OceanFFTWaterSystem' },
			{ label: 'Write-up (PDF)', href: '/Ocean_FFT_Writeup.pdf' },
		],
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
		id: 'souls-like',
		title: 'Souls-like Action RPG',
		context: 'Advanced Games Technology module coursework',
		year: '2025-26',
		paragraphs: [
			"A Souls-like action RPG written in C++ on the university's teaching engine, with an invulnerable dodge-roll, state-machine enemies, a boss with timed damage windows, and souls you spend on upgrades and potions.",
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
	{
		id: 'ascii-filter',
		title: 'ASCII Render Filter',
		context: 'Personal project',
		year: '2026',
		paragraphs: [
			'Turns an image, a video or a webcam feed into ASCII art live on the GPU. Each cell picks a glyph from its brightness, and a 3×3 Sobel pass swaps in - | / \\ characters along real edges.',
			'It also has Bayer dithering, retro palettes, motion trails and presets, and can export the core effect as a Unity shader or a standalone WebGL widget.',
		],
		tags: ['GLSL', 'WebGL', 'Three.js', 'TypeScript'],
		media: {
			video: '/video/ascii.mp4',
			poster: '/video/ascii.jpg',
			alt: 'Video footage converted live into coloured ASCII characters.',
		},
		links: [{ label: 'GitHub', href: 'https://github.com/Abhijit2401/ascii-filter' }],
	},
];
