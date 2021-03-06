| MISIÓN | Validar el correcto funcionamiento del sign in |
| --- | --- |
| INICIO | 18:00 28.11.2021 |
| TESTER | Ernesto Speranza |
| ESTRUCTURA DE DIVISIÓN | 
| DURACIÓN: | Corta (30 min) |
DISEÑO Y EJECUCIÓN DE PRUEBAS: | 45% |
INVESTIGACIÓN Y REPORTES DE DEFECTOS: | 55% |
ARMADO DE LA SESIÓN (Setup - Configuración): | 0% |
OBJETIVO vs. OPORTUNIDAD:| 100% - 0% |
| ARCHIVOS DE DATOS | ------- |
| Defectos y enhancements | **P2:** Cambiar mensaje de error &quot;El campo de edad está vacío, ingrese un nombre para crear un usuario&quot; **P3:** Cambiar mensaje de error &quot;El campo de edad está vacío, ingrese su edad para crear un usuario&quot; **P4:** Cambiar mensaje de error &quot;El correo ingresado no es válido, use un mail con formato válido como usuario@provedor.com&quot;
| Inconvenientes | No aplica |
| Notas de prueba |

- Ingresamos al sitio: [http://localhost:8080/](http://localhost:8080/) donde se ejecuta la aplicación Mis gastos de manera local.

**P1 Intento crear un usuario con los siguientes datos:** 
- nombre: test 
- edad: 1 
- email: test@test.com 
- confirmar email: test@test.com
- contraseña: 12345678 
- confirmar contraseña: 12345678

 No me permite crear un usuario ya que no utilice una edad válida.  
 Se visualiza un mensaje de error que me pide que ingrese una edad válida entre 12 a 99 años. 

<img width="45%" alt="Rama dev" src="../assets/testing-exploratorio/test1.png">
 
 **P2 Intento crear un usuario con los siguientes datos:** 
 - nombre: (omito ingresar el nombre) 
 - edad: 1 
 - mail: test@test.com 
 - confirmar email: test@test.com 
 - contraseña: 12345678 
 - confirmar contraseña: 12345678 

No me permite crear un usuario ya que no complete el nombre. 

 Se visualiza un mensaje de error que dice que el nombre ingresado no es válido. 
 Sugerencia: mejorar el mensaje de error. 

<img width="45%" alt="Rama dev" src="../assets/testing-exploratorio/test2.png">
 
 **P3 Intento crear un usuario con los siguientes datos:** 
 - nombre: test 
 - edad: (omitio ingresar edad) 
 - email: test@test.com 
 - confirmar email: test@test.com 
 - contraseña: 12345678 
 - confirmar contraseña: 12345678 

 No me permite crear un usuario ya que no ingrese una edad. 

 Se visualiza un mensaje de error que me pide que ingrese una edad válida entre 12 a 99 años.

Sugerencia: Sugerencia: mejorar el mensaje de error. 
 
<img width="45%" alt="Rama dev" src="../assets/testing-exploratorio/test3.png">

**P4 Intento crear un usuario con los siguientes datos:** 
- nombre: test 
- edad: 76 
- email: testtest.com 
- confirmar email: test@test.com 
- contraseña: 12345678 
- confirmar contraseña: 12345678 

No me permite crear un usuario ya que no ingrese un formato de mail válido. 
Se visualiza un mensaje de error que me pide que ingrese un correo electrónico válido.

<img width="45%" alt="Rama dev" src="../assets/testing-exploratorio/test4.png">

**P5 Intento crear un usuario con los siguientes datos:** 
- nombre: test 
- edad: 76 
- email: test@test.com 
- confirmar email: test@test.com 
- contraseña: 12345678 
- confirmar contraseña: 12345678 

Utilizo 2 mails distintos 

No me permite crear un usuario ya que no ingrese dos mails que coincidan. 
Recibo un mensaje de error, los mails no coinciden por favor intenta de nuevo. 

<img width="45%" alt="Rama dev" src="../assets/testing-exploratorio/test5.png">


**P6 Intento crear un usuario con los siguientes datos:** 
Se visualiza un mensaje de error que dice que los mails no coinciden. 
- nombre: test 
- edad: 76 
- email: test@test.com 
- confirmar email: test@test.com 
- contraseña: 12345678 
- confirmar contraseña: 12345678 

Busco ingresar letras en el campo de la edad La plataforma no me lo permite. 

**P7 Intento crear un usuario con los siguientes datos:** 

Se visualiza un mensaje de error que dice que los mails no coinciden. 
- nombre: test 
- edad: 76 
- email: test@test.com 
- confirmar email: test@test.com 
- contraseña: 12345678 
- confirmar contraseña: 12345679 

Busco ingresar dos contraseñas distintas 
No me permite crear un usuario ya que no ingrese dos contraseñas que coincidan. 
Recibo un mensaje de error, las contraseñas no coinciden por favor intenta de nuevo. 

<img width="45%" alt="Rama dev" src="../assets/testing-exploratorio/test6.png">

**P8 Intento crear un usuario con los siguientes datos:** 

Se visualiza un mensaje de error que dice que los mails no coinciden. 
- nombre: test 
- edad: 76 
- email: test@test.com 
- confirmar email: test@test.com 
- contraseña: 12345678 
- confirmar contraseña: 12345678 

Intento ingresar un usuario con todos los requerimientos necesarios. 
El usuario se crea de forma exitosa, cambia la vista y veo mi perfil vacío en la home.

<img width="45%" alt="Rama dev" src="../assets/testing-exploratorio/test7.png">