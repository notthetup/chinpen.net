require.config({

	baseUrl: '/js',

	deps: ['main'],

	paths: {
		jQuery: '//cdnjs.cloudflare.com/ajax/libs/jquery/1.10.0/jquery.min',
		Lettering: 'lettering'
	},

	shim: {
		jQuery: {
			exports: 'jQuery'
		},
		Lettering: {
			deps: ['jQuery'],
			exports: 'jQuery'
		}
	},

	waitSeconds: 20

});
