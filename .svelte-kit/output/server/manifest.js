export const manifest = {
	appDir: "_app",
	assets: new Set(["FS0A5054.png","IMG_1521.jpeg","Loose_lips_might_sink_ships.jpeg","UPLOAD 2.png","android-icon-144x144.png","android-icon-192x192.png","android-icon-36x36.png","android-icon-48x48.png","android-icon-72x72.png","android-icon-96x96.png","apple-icon-114x114.png","apple-icon-120x120.png","apple-icon-144x144.png","apple-icon-152x152.png","apple-icon-180x180.png","apple-icon-57x57.png","apple-icon-60x60.png","apple-icon-72x72.png","apple-icon-76x76.png","apple-icon-precomposed.png","apple-icon.png","at.svg","browserconfig.xml","css-3.svg","favicon-16x16.png","favicon-32x32.png","favicon-96x96.png","favicon.ico","geo_at_sea.jpeg","github.svg","html-5.svg","javascript.svg","linkedin.svg","manifest.json","mongodb.svg","ms-icon-144x144.png","ms-icon-150x150.png","ms-icon-310x310.png","ms-icon-70x70.png","node.svg","pexels-pixabay-270373.jpg","pexels-pixabay-60504.jpg","portfolium.svg","reactjs.svg","svelte.svg"]),
	_: {
		mime: {".png":"image/png",".jpeg":"image/jpeg",".svg":"image/svg+xml",".xml":"application/xml",".ico":"image/vnd.microsoft.icon",".json":"application/json",".jpg":"image/jpeg"},
		entry: {"file":"start-a0830398.js","js":["start-a0830398.js","chunks/vendor-b540d2f1.js"],"css":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js')
		],
		routes: [
			{
				type: 'page',
				key: "",
				pattern: /^\/$/,
				params: null,
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			}
		]
	}
};
