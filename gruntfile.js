module.exports = function (grunt) {
    grunt.initConfig({
      // Configuração da tarefa para compilação do LESS
      less: {
        development: {
          options: {
            paths: ['src/less'] // Pasta onde estão os arquivos LESS
          },
          files: {
            'dist/css/styles.css': 'src/less/main.less' // Arquivo de saída e arquivo LESS de entrada
          }
        }
      },
      
      // Configuração da tarefa para compressão do JavaScript
      uglify: {
        my_target: {
          files: {
            'dist/js/app.min.js': ['src/js/*.js'] // Arquivo de saída e arquivos JavaScript de entrada
          }
        }
      }
    });
  
    // Carrega os plugins
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
  
    // Tarefa padrão
    grunt.registerTask('default', ['less', 'uglify']);
  };
  