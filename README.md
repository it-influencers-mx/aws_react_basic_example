
# Crear y montar una App de React en AWS

## 1. Descargar e instalar Node

   1. Iremos a la página de [Node](https://nodejs.org/es/)
   2. Descargaremos e instalaremos la versión de la izquierda.  

   ![Node Main Page](/Node.png)  

   3. Al terminar la instalación comprobaremos en una consola de comandos si Node ya es reconocido en nuestro sistema corriendo el comando **node -v**, si retorna la versión de Node que acabamos de instalar, fue exitosa, si no, reiniciar el equipo debería solucionar el problema.

   ![Node V](/node-v1.png)

## 2. Crear nuestra App de React

   1. Abriremos una **Consola de Comandos** y navegaremos al directorio donde deseamos crear el folder y el proyecto de la app.

   ![CMD React](/cmd1.png)

   2. Ya en el directorio correremos el comando **npx create-react-app app-name** sustituyendo app-name por el nombre que deseemos darle a nuestra app, sin mayusculas, y usando guines (-) en lugar de espacios para separar palabras como ***my-aws-app***.
   3. Esperamos a que el proceso termine, sabremos que el proceso finalizó correctamente cuando la consola nos muestre esto.

   ![NPX Finished](/cmd2.png)

   4. Terminado el proceso, entraremos al directorio creado con el nombre que le dimos a la App y correremos el comando ***npm start***.

   ![Cmd Npm Start](/cmd3.png)

   5. Cuando la consola muestre que compiló correctamente y retorne la dirección y puerto donde se levanto el servidor de nuestra app, sabremos que el proceso termino y que podemos visualizar nuestra app en un navegador en dicha dirección y puerto.

   ![Cmd Compiled](/cmd4.png)

   ![React Mounted](/react1.png)

## 3. Crear una cuenta de GitHub

   1. Iremos a la página principal de [Github](https://github.com) y daremos click en **Sign Up** o **Crear Cuenta**.

   ![Git Main Page](/git1.png)

   2. Se mostrará un formulario que iremos llenando, los campos cargarán conforme los llenemos.

   ![Git Form 1](/git2.png)  

   ![Git Form 2](/git3-2.png)

   ![Git Form 3](/git4-2.png)

   ![Git Form 4](/git5-2.png)

   ![Git Form 5](/git6-2.png)

   ![Git Form 6](/git7-2.png)

   3. Una vez completado el formulario, Github hará envío de un código al correo que registramos y tendrémos que escribirle en esta ventana.

   ![Git Code](/git8.png)

   4. Al validar el código, podremos avanzar a personalizar nuestro perfil o saltarnos y dejar para luego este paso.

   ![Git Profile](/git9.png)

   5. Ya en nuestro perfil, daremos clic en **Create Repository** o **Crear Repositorio**.

   ![Git Repo](/git10.png)

   6. Se abrá un formulario donde llenaremos la información para crear nuestro nuevo Repo.

   ![Git New Repo](/git11.png)

   7. Una vez creado el Repo, Github nos muestra como podemos hacer uso de este, utilizaremos el segundo método sugerido, haciendo push de un proyecto existente.

   ![Git Created](/git12.png)
