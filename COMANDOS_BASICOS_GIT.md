# CONFIGURACIONES GIT (MUY BASICO)



# Configuración básica
`git config --global user.name "mi nombre"`  

`git config --global user.email "miemail@elquesea.com"` (para usar el repo q hizo Gaby hay q usar el email q le pasamos para ser colaboradores)

# Comandos básicos para tener el repo en la máquina local
Entrar a una carpeta donde se quiere bajar el repo desde git con  

`cd e:/TP` (aca se creara dsp del clone la carpeta, para el caso del repo creado por Gaby, Comision-24153-Grupo16 y ahí descarga el repo de la rama main pero estan las ramas creadas y los commits que se hayan hecho)  

`git clone https://github.com/GabyMaC24/Comision-24153-Grupo16.git` (para clonar el repo que creo Gaby, esto trae todas las ramas y commits que se hayan hecho al momento de clonarlo)  

`cd Comision-24153-Grupo16` (para entrar al repositorio local)  

`ls` (si quieren listar los archivos que hayan en la carpeta)  

`git switch develop/formulario_contacto` (se cambia a la rama, en este caso x ejemplo a la que cree yo para formulario y ahí ya se ven los archivos esta rama)

# Comandos básicos para ir actualizando
`git -c switch rama_nueva` (crea y se posiciona en la rama nueva creada, esto creo que seria lo mas comodo para que cada uno vaya haciendo en su local la parte q corresponda, luego sera un tema a ver el tema de las fusiones porque hay que "resolver problemas" cuando se fusionan las ramas y decir que queda de cada parte ya que como es una onepage las modificaciones de cada uno estan en local, pero por ejemplo hasta fusionar yo no tengo el login de Felipe o cualquier modificacion que se haga en el index.html  

`git status` (para ver si hay algo que no se haya subido/actualizado desde nuestras modificaciones)  

`git pull` (esto es para descargar lo que haya nuevo del repositorio remoto)  

`git add archivo.html` (esto prepara el "archivo.html" obvio que cualquier archivo puede ser .css .js o imagen o lo que sea para commitear y subir, o "git add . " con el . Se indica que se prepare todo lo que se haya modificado y este para subir  

`git commit -m "mensaje del commit que se quiere dejar"` (para hacer un commit de lo que hicimos)  

`git push` (esto es para subir las modificaciones commiteadas locales al remoto)

