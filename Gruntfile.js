module.exports = function (grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        uglify: {
            build: {
                files: {
                    'dist/js/main.min.js':['scripts/*.js','!scripts/*.min.js']
                },
                options: {
                  	banner: '/* Final minified js file */'
                },
            }
        },
        compass: {
            dev: {
                options: {
                    sassDir: 'sass',
                    cssDir: 'css',
                    imagesDir: 'images',
                    environment: 'development',
                    httpGeneratedImagesPath: 'images'
                }
            },
            bootstrap: {
                options: {
                    sassDir: 'sass',
                    cssDir: 'css',
                    imagesDir: 'images',
                    environment: 'development',
                    httpGeneratedImagesPath: 'images'
                }
            },
            live: {
                options: {
                    sassDir: 'sass',
                    cssDir: 'css',
                    imagesDir: 'images',
                    environment: 'production',
                    httpGeneratedImagesPath: 'images',
                    outputStyle: 'compressed'
                }
            }
        },

        cssmin: {
            combine: {
                files: {
                    'dist/css/main.min.css':['css/*.css','!css/*.min.css']
                },
                options: {
                 	banner: '/* Final minified css file */'
                },
            },
            
            /*minified: {
                files: [{
                  expand: true,
                  cwd: 'dist/css/',
                  src: ['*.css', '!*.min.css'],
                  dest: 'dist/css/',
                  ext: '.min.css'
                }]
            }*/
        },


        watch: {
            jshint: {
                files: ['scripts/main.js'],
                tasks: ['jshint']
            },
            compass: {
                files: ['sass/{,*/}*{,*/}*{,*/}*.{scss,sass}'],
                tasks: ['compass:dev', 'notify:compass'],
                options: {
                    livereload: true,
                }
            }
        },

        jshint: {
            all: ['scripts/main.js']
        },

        clean: {
            // Clean any pre-commit hooks in .git/hooks directory
            precommit: ['.git/hooks/pre-commit'],
            pull: ['.git/hooks/post-merge']
        },

        shell: {
            precommit: {
                command: 'cp git-hooks/pre-commit .git/hooks/'
            },
            pull: {
                command: 'cp git-hooks/post-merge .git/hooks/'
            }
        },

        notify: {
            compass: {
              options: {
                message: 'Compass compiled', //required
              }
            }
        }


    });


    // Required task(s)
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-notify');

    // Default task(s)
   // grunt.registerTask('default', ['compass:dev']);
    grunt.registerTask('default', ['watch']);
    grunt.registerTask('setup', ['clean:precommit','shell:precommit','clean:pull','shell:pull']);
    grunt.registerTask('live', ['jshint', 'uglify', 'compass:live', 'cssmin']);
};