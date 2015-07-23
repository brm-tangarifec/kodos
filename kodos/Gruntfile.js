  module.exports = function(grunt) {

      // Configuración del proyecto.
      grunt.initConfig({
          pkg: grunt.file.readJSON('package.json'),
		  
          //Tarea para Subir los cambios al servidor al hacer push
          'sftp-deploy': {
              build: {
                  auth: {
                      host: '',
                      port: 22,
                      authKey: 'privateKeyCustom'
                  },
                  cache: 'sftpCache.json',
                  src: 'publication/',
                  dest: '',
                  exclusions: ['.git'],
                  serverSep: '/',
                  concurrency: 4,
                  progress: true,
                  
              }
          },


          //Tarea para observar los cambios producidos al hacer push
          watch: {
              scripts: {
                  files: ['publication/.git/refs/remotes/origin/master'],
                  tasks: ['sftp-deploy'],
                  options: {
                      spawn: true,
                  },
              },
          }
		});

      // Carga de los plugins que contienen las tareas
      grunt.loadNpmTasks('grunt-sftp-deploy');
      grunt.loadNpmTasks('grunt-contrib-watch');
      // Definición de las tareas.
      grunt.registerTask('default', ['watch']);


  };