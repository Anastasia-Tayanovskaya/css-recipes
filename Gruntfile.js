module.exports = function(grunt) {

	require('load-grunt-tasks')(grunt);

	  grunt.initConfig({
		connect: {
			server: {
			  options: {
				port: 9001,
				keepalive: true,
				open: true,
				base: './'
			  }
			}
		}
	  });

  grunt.registerTask('serve', ['connect']);

};