import * as storymaps from "storymap";

storymaps.global.config = {
	debug: true,
	data: "./sample/bruges.geojson",
	path: "./sample/path.json",
	container: "container",
	citycenter: [3.227183, 51.209651],
	color_background: 0xf0f0f0,
	color_buildings: 0xffffff,
	grid: { primary: 0x555555, secondary: 0x333333 },
	color_ground: 0x00ff00,
	opacity_ground: 0.25,
};

storymaps.setup();
// storymaps.start();
