Package.describe({
	summary: "Use Rome",
	version: "1.1.6"
});

Package.on_use(function (api) {
	api.use(['bower','less'], 'client');

	var files = [
		'lib/rome/dist/rome.css',
		'lib/rome/dist/rome.standalone.js',
		'rome.less'
	];

	api.add_files('smart.json', 'client');
	api.add_files(files, 'client');
});
