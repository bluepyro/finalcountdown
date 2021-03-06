module.exports = function(grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
        

        watch: {
    css: {
    files: ['css/*.less'],
    tasks: ['less'],
    options: {
        spawn: false,
    }
  }
},		
		
		less: {
    dist: {
        options: {
            style: 'compressed'
        },
        files: {
            'css/myless.css': 'css/myless.less'
        }
    } 
},

uglify: {
    build: {
        src: 'js/javascript.js',
        dest: 'js/javascript.min.js'
    }
}




});

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['watch','less','uglify']);

};