# kodos

![Alt text](http://abraham.brm.com.co/lafabricadecajas/images/iconos/kodos.png "Optional title")

Kodos



En brm trabajamos día a día para hacer que las cosas sean más sencillas, por eso se desarrolló Kodos lo cual le permite al diseñador, copy, socializer, desarrollador, project subir cosas a un servidor  a través de un un push en un repositorio git.

¿Por qué se hizo?

Kodos se desarrolló para agilizar la subida de archivos a los servidores en proyectos en los cuales no se necesita un desarrollador.


¿Qué es Kodos?

Kodos es un desarrollo interno de brm el cual le permite a un perfil diferente a un desarrollador subir archivos a una ruta especifica a un servidor web.

¿Qué se utilizó?

Para desarrollar Kodos se utlizó:

Gruntjs= Es un automatizado de tareas.
Git= Es un sistema de versionamiento no centralizado.
Ssh= es el nombre de un protocolo y del programa que lo implementa, y sirve para acceder a máquinas remotas a través de una red.

¿Cómo funciona?

Kodos es un script que utiliza la tarea “watch” de grunt para observar el archivo “master” en la carpeta origin del repositorio remoto (ruta “.git/refs/remotes/origin/master”), al momento de detectar un cambio en dicho archivo que es producido al momento de hacer un push hacía el servidor, ejecuta la tarea “sftp-deploy” que sube los archivos agregados o modificados a una ruta especifica en un servidor.



Orden de comandos

grunt = Se utliza para iniciar la tarea de observación al archivo

git add -A . = Selecciona los archivos modificados para ser agregados al stage en el proximo commit

git commit -m “mensaje descriptivo” = Agrega los cambios seleccionados con el git add al stage del proyecto.

git push = Envía los archivos del stage al repositorio remoto.Kodos



En brm trabajamos día a día para hacer que las cosas sean más sencillas, por eso se desarrolló Kodos lo cual le permite al diseñador, copy, socializer, desarrollador, project subir cosas a un servidor  a través de un un push en un repositorio git.

¿Por qué se hizo?

Kodos se desarrolló para agilizar la subida de archivos a los servidores en proyectos en los cuales no se necesita un desarrollador.


¿Qué es Kodos?

Kodos es un desarrollo interno de brm el cual le permite a un perfil diferente a un desarrollador subir archivos a una ruta especifica a un servidor web.

¿Qué se utilizó?

Para desarrollar Kodos se utlizó:

Gruntjs= Es un automatizado de tareas.
Git= Es un sistema de versionamiento no centralizado.
Ssh= es el nombre de un protocolo y del programa que lo implementa, y sirve para acceder a máquinas remotas a través de una red.

¿Cómo funciona?

Kodos es un script que utiliza la tarea “watch” de grunt para observar el archivo “master” en la carpeta origin del repositorio remoto (ruta “.git/refs/remotes/origin/master”), al momento de detectar un cambio en dicho archivo que es producido al momento de hacer un push hacía el servidor, ejecuta la tarea “sftp-deploy” que sube los archivos agregados o modificados a una ruta especifica en un servidor.


Requisitos

Para hacer uso de Kodos se necesita tener instalado en el pc “nodejs, npm, grunt, git”

Tareas de grunt

Las tareas que se deben tener instaladas para el funcionamiento de Kodos son: “grunt-sftp-deploy, grunt-contrib-watch”