module.exports = function(grunt) {
	grunt.initConfig({
		cssmin: {
			minify: {
				expand: true,
				cwd: 'css/',
				src: ['*.css', '!*.min.css'],
				dest: 'css/',
				ext: '.min.css'
			}
		},
		jshint: {
			all: ['Gruntfile.js', 'js/*.js'],
			options: {
				ignores: ['js/require.js']
			}
		},
		watch: {
			scripts: {
				files: ['js/*.js',],
				tasks: ['jshint'],
				options: {
					spawn: false,
				},
			},
			css: {
				files: ['sass/*'],
				tasks: ['css'],
				options: {
					spawn: false,
				},
			},
		},
		connect: {
			server: {
				options: {
					port: 8080,
					base: ''
				}
			}
		}
	});

	// Load the plugin that provides the "uglify" task.
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks( 'grunt-contrib-connect' );
	grunt.loadNpmTasks( 'grunt-contrib-cssmin' );


	grunt.registerTask('default', ['jshint','cssmin']);

	// Serve presentation locally
	grunt.registerTask( 'serve', ['jshint','cssmin', 'connect', 'watch' ] );
};
