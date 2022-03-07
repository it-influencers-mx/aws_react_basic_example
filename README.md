
# Crear y montar una App de React en AWS

## 1. Descargar e instalar Node

   1. Iremos a la página de [Node](https://nodejs.org/es/)
   2. Descargaremos e instalaremos la versión de la izquierda.  

   ![Node Main Page](./img/Node.png)  

   3. Al terminar la instalación comprobaremos en una consola de comandos si Node ya es reconocido en nuestro sistema corriendo el comando **node -v**, si retorna la versión de Node que acabamos de instalar, fue exitosa, si no, reiniciar el equipo debería solucionar el problema.

   ![Node V](./img/node-v1.png)

## 2. Crear nuestra App de React

   1. Abriremos una **Consola de Comandos** y navegaremos al directorio donde deseamos crear el folder y el proyecto de la app.

   ![CMD React](./img/cmd1.png)

   2. Ya en el directorio correremos el comando **npx create-react-app app-name** sustituyendo app-name por el nombre que deseemos darle a nuestra app, sin mayusculas, y usando guiones (-) en lugar de espacios para separar palabras como ***my-aws-app***.
   3. Esperamos a que el proceso termine, sabremos que el proceso finalizó correctamente cuando la consola nos muestre esto.

   ![NPX Finished](./img/cmd2.png)

   4. Terminado el proceso, entraremos al directorio creado con el nombre que le dimos a la App y correremos el comando ***npm start***.

   ![Cmd Npm Start](./img/cmd3.png)

   5. Cuando la consola muestre que compiló correctamente y retorne la dirección y puerto donde se levanto el servidor de nuestra app, sabremos que el proceso termino y que podemos visualizar nuestra app en un navegador en dicha dirección y puerto.

   ![Cmd Compiled](./img/cmd4.png)

   ![React Mounted](./img/react1.png)

## 3. Crear una cuenta de GitHub

   1. Iremos a la página principal de [Github](https://github.com) y daremos click en **Sign Up** o **Crear Cuenta**.

   ![Git Main Page](./img/git1.png)

   2. Se mostrará un formulario que iremos llenando, los campos cargarán conforme los llenemos.

   ![Git Form 1](./img/git2.png)  

   ![Git Form 2](./img/git3-2.png)

   ![Git Form 3](./img/git4-2.png)

   ![Git Form 4](./img/git5-2.png)

   ![Git Form 5](./img/git6-2.png)

   ![Git Form 6](./img/git7-2.png)

   3. Una vez completado el formulario, Github hará envío de un código al correo que registramos y tendrémos que escribirle en esta ventana.

   ![Git Code](./img/git8.png)

   4. Al validar el código, podremos avanzar a personalizar nuestro perfil o saltarnos y dejar para luego este paso.

   ![Git Profile](./img/git9.png)

   5. Ya en nuestro perfil, daremos clic en **Create Repository** o **Crear Repositorio**.

   ![Git Repo](./img/git10.png)

   6. Se abrirá un formulario donde llenaremos la información para crear nuestro nuevo Repo.

   ![Git New Repo](./img/git11.png)

   7. Una vez creado el Repo, Github nos muestra como podemos hacer uso de este, utilizaremos el segundo método sugerido, haciendo push de un proyecto existente.

   ![Git Created](./img/git12.png)

## 4. Crear Cuenta de AWS y vincular proyecto
  
   1. Navegaremos a la página principal de [AWS](https://aws.amazon.com) y daremos click en "**Create free account**" o "**Comienza de forma gratuita**".

   ![Aws Main Page](./img/aws1.png)

   2. Aparecerá un formulario que deberemos llenar con nuestra información para crear la cuenta.

   ![Aws Form](./img/aws2.png)

   3. Al llenar todos los datos nos pedira completar un tipo Captcha para validar.

   ![Aws Captcha](./img/aws3.png)

   4. Aparecerá otro formulario, esta vez para llenar nuestra información de contacto (Personal).

   ![Aws Personal Info](./img/aws4.png)

   5. Abrirá un formulario donde debemos ingresar los datos de alguna tarjeta de crédito o débito (*no se hace ningún cobro, solo es para validar nuestra identidad*).

   ![CC DC Info](./img/aws5.png)

   6. Deberemos proporcionar un número celular que se vinculará a nuestra cuenta para recibir el código de verificación, también debemos completar el captcha.

   ![Verif Code](./img/aws6.png)

   7. Ingresaremos el código que llegó por mensaje a nuestro celular.

   ![Input Code](./img/aws7.png)

   8. Seleccionaremos el tipo de soporte que deseamos para nuestra cuenta, en nuestro caso es el gratis a la izquierda.

   ![Support Type](./img/aws8.png)

   9. Nos mostrará una pantalla confirmando que nuestra cuenta se creó correctamente y podremos avanzar a la consola de AWS.

   ![Congrats](./img/aws9.png)

   10. En la consola nos preguntará si deseamos usar la nueva consola, de momento daremos clic en "*Quizás más tarde*".

   ![Maybe Later](./img/aws10.png)

   11. En la barra de busqueda que se encuentra en la parte de arriba escribiremos "**Amplify**" y daremos clic en la opción "**AWS Amplify**" que nos muestra.

   ![Amplify](./img/aws11.png)

   12. Daremos clic en "**Introducción**".

   ![Intro1](./img/aws12.png)

   13. Ahora daremos clic en la opción de "**Introducción**" en la sección a la derecha de "**Amplify Hosting**".

   ![Intro2](./img/aws13.png)

   14. Ya en Amplify Hosting, nos pedirá seleccionar de donde está nuestro código existente, y seleccionaremos "**Github**".

   ![Github Opt](./img/aws14.png)

   15. Si tenemos sesión iniciada en **Github** en el mismo navegador, nos mostrará una ventana donde nos pide autorizar vincular nuestro **Github** con la **Aws-Amplify-Console**. Si no tenemos sesión, deberemos hacer login en *Github* antes.

   ![Auth Amplify](./img/aws15.png)

   16. Al vincular correctamente nustro Github con la consola de Amplify, podremos seleccionar el Repo que deseamos buscandolo en la Dropdown que nos muestra.

   ![Repo Drop](./img/aws16.png)

   17. Al seleccionar el repo, seleccionará automáticamente una de las branches disponibles en el proyecto, normalmente será *master*, *dev* o *main* de estar disponibles, pero podemos elegir la que gustemos.

   ![Branch Drop](./img/aws17.png)

   18. Ahora nos mostrará una ventana donde podemos modificar las opciones de compilación, por si queremos añadir, modificar o quitar alguna, de momento nosotros solo daremos **Siguiente**.

   ![Compile Opt](./img/aws18.png)

   19. Esta vista nos da un resumen de lo que fuimos configurando antes de terminar para validar cualquier posible error, si todo está correcto daremos clic en **Guardar e Implementar**.

   ![Final Resume](./img/aws19.png)

   20. Al llegar a esta vista, significa que nuestro repo y nuestro AWS Amplify ya están conectados y AWS estará escuchando y al pendiente de cualquier merge a la branch que indicamos en el paso 17.

   ![Finish](./img/aws20.png)

## 5. Crear un bucket y subir recursos con S3

   1. Regresaremos a la ventana principal de nuestra consola de AWS, podemos hacerlo dando clic en el logo de AWS en la esquina superior izquierda.

   ![AWS logo](./img/s3-1.png)

   2. En la bara de busqueda escribiremos S3 para la busqueda, y daremos clic en el resultado que solo dice S3.

   ![S3 search](./img/s3-2.png)

   3. Ya en la consola de S3, daremos click en cualquiera de los 2 botones para crear un nuevo **Bucket**.

   ![S3 new Bucket](./img/s3-3.png)

   4. En la ventana que nos muestre, deberemos escribir un nombre para nuestro bucket que sea único, no se pueden repetir.

   ![S3 bucket name](./img/s3-4.png)

   5. Bajaremos hasta la sección de **Object Ownership** o **Propiedad de objeto**.

   ![S3 Bucket Ownershipt 1](./img/s3-5.png)

   6. Daremos clic en la opción de la derecha, esta opción es para abilitar las ACLs (*Access Control Lists* o *Listas de Control de Accesos*), y después seleccionaremos la segunda opción que nos mostrará *Object Writer* o *Escritor de Objetos*.

   ![S3 Bucket Ownership 2](./img/s3-6.png)

   7. Bajaremos a la siguiente sección, esta se encarga de las configuraciones de control de acceso público a nuestro bucket.

   ![S3 Bucket Access](./img/s3-7.png)

   8. Deseleccionaremos la casilla marcada en la parte superior, y seleccionaremos la casilla que aparece en la parte inferior de la sección.

   ![S3 Bucket Public](./img/s3-8.png)

   9. Bajaremos por la página hasta topar, y daremos clic en el botón naranja para crear nuestro nuevo Bucket.

   ![S3 Create Bucket](./img/s3-9.png)

   10. Nuestro nuevo bucket debería aparecer en el listado, de ser así, daremos clic en el nombre de nuestro bucket.

   ![S3 Bucket List](./img/s3-10.png)

   11. Aquí podremos ver los archivos en nuestro bucket, daremos clic en cualquiera de los 2 botones para subir el archivo que deseemos cargar.

   ![S3 Upload File](./img/s3-11.png)

   12. En esta ventana ya sea usando los botones para **Añadir un archivo o carpeta** o usando **Drag and Drop**, seleccionaremos los archivos que deseamos tener en el bucket.

   ![S3 Choose Files](./img/s3-12.png)

   13. Los archivos que hayamos añadido se mostrarán en un listado en la parte inferior de esta sección.

   ![S3 Chosen Files](./img/s3-13.png)

   14. Bajaremos un poco, y daremos clic en la sección de permisos para expandirla.

   ![S3 Permissions](./img/s3-14.png)

   15. La sección de permisos debería de verse así.

   ![S3 Permissions Expanded](./img/s3-15)

   16. La primera sección la dejaremos igual, en la segunda sección elegiremos la segunda opción que nos muestra, y marcaremos la casilla que aparecerá al dar clic en dicha opción.

   ![S3 Public Access Opt](./img/s3-16.png)

   17. Finalmente podremos dar clic en el botón narajna (*Upload* o *Cargar*) para subir nuestros archivos.

   ![S3 Final Upload](./img/s3-17.png)

   18. Nos regresará a la vista de contenido del bucket, con un recuadro verde en la parte superior indicando que los archivos se subieron con éxito.

   ![S3 Upload Succeded](./img/s3-18.png)

   19. Si bajamos un poco, podremos ver la lista de archivos, y daremos clic en su nombre.

   ![S3 File List](./img/s3-19.png)

   20. La ventana que nos abre, nos mostrará los datos y propiedades del archivo que subimos, el que nos interesa es el link en la parte derecha, daremos clic en dicha URL.

   ![S3 File URL](./img/s3-20.png)

   21. Si la imagen es visible en dicha URL, nuestro link está listo para ser usado en nuestros proyectos, compatido, etc.

   ![S3 Accessed Img](./img/s3-21.png)