# Informe académico entrega 2
Fecha de entrega: 29-nov-2021

# Construcción

## UML final del sistema
Decidimos armar un UML del sistema para planificar en forma correcta los metodos que iba a necesitar cada funcionalidad.
De esta forma logramos un diseño consistente del dominio el cual funciona de forma independiente de la interfaz.

- [Proceso de desarrollo del UML](docs/uml/README.md) 

<img width="35%" alt="UML final del sistema" src="docs/assets/UMLFinal.png">


## Implementación de funciones principales (sin la necesidad de persistencia de datos)

- [Demos de las funcionalidades en desktop y mobile](docs/demo/README.md) 

<img src="https://media.giphy.com/media/SH8hhuxXV55LeEaHQN/giphy.gif"/>

## Configuración de plataforma tecnológica para desarrollo y producción

## Documentación del uso de librerías externas (package.json)

En relación al uso de librerías externas para el desarrollo del proyecto utilizamos las siguientes:
- Eslint
- moment.js
- chart.js

Sobre el uso de Eslint, fue agregada ya que era un ítem requerido según la letra del obligatorio, usado para hacer análisis estático del código.

Por otro lado decidimos usar la librería moment.js para poder hacer un manejo y validación de las fechas, ya que esta librería por ejemplo, nos permite validar un formato específico así como pueden ser otras validaciones, algo que nos pareció muy necesario, de manera
de poder controlar todo lo relacionado a este tipo de dato.

Previo uso de moment.js, probamos otra librería para poder mostrar un datepicker en la selección de la fecha sin mucho éxito, ya que no logramos hacerlo funcionar, esta fue: material-datetime-picker: https://www.npmjs.com/package/material-datetime-picker

Por último, usamos chart.js para poder crear las distintas gráficas que necesitábamos, y esta librería provee un abanico de opciones.

A continuación adjuntamos links a cada una de ellas como referencia:
- Eslint: https://eslint.org/docs/user-guide/getting-started
- moment.js: https://momentjs.com/
- chart.js: https://www.chartjs.org/docs/latest/

# Interfaz de usuario

## Interfaz de usuario web / mobile (responsive)

## Página única con navegación entre secciones

## Implementación: Material Design Web Components

## Aplicar un sistema de diseño y principios de usabilidad

Para la evaluacion de la usabilidad de nuestro sistema, aplicamos y revisamos los principios de usabilidad de la siguiente manera:

- [Evaluacion de los principios de usabilidad](docs/usabilidad/README.md)
## Cumplimiento de estándar de accesibilidad WCAG
- [Check List estándares WCAG](docs/WCAG/README.md)

## Seguir especificación de estilo
- [Especificaciones de estilo](docs/estilo-estandares/README.md)

# Codificación

## IDE Visual Studio Code: configuración común del equipo
#### Para la configuracion del IDE utilizamos lo siguiente:
- node v14.17.4
- Visual Studio Code 1.62.3
- npm 6.14.14
- eslint: 8.2.0
- eslint-config-google: 0.14.0
- git version 2.33.0
- moment: 2.29.1
- jest: 26.6.3
- chart.js: 3.6.0
- material-components-web: 11.0.0
- Extensión ESLint

## Estándares de codificación Google (HTML, CSS, JavaScript)
- [Estándares de codificación Google](docs/estilo-estandares/README.md)


## Buenas prácticas de OOP: separación de lógica e interfaz

## Análisis estático de código: mostrar reducción de problemas
- [Análisis estatico de código](docs/estilo-estandares/README.md)
# Test unitario

## Test unitarios en Jest

Durante el desarrollo de la aplicación fuimos realizando pruebas unitarias utilizando jest para saber que funcionaba de forma correcta con certeza y ahorrarnos hacer las pruebas en runtime. También si cambiamos algo del funcionamiento de la aplicación sabíamos con certeza si algo de la app se rompía. Conseguimos llegar al 100% de cobertura de código y luego de llegar a esa meta continuamos agregando pruebas para los casos límites de las funciones.

Para organizar los test creamos una carpeta dentro de dominio llamada tests y creamos una clase de prueba para cada clase del dominio. Luego utilizamos los estandares vistos en clase para desarrollar los tests.

## 100% cobertura en clases de dominio
<img width="40%" alt="Cobertura de codigo" src="https://i.imgur.com/0pVrit7.png">

| En la semana previa a la entrega se debe congelar el desarrollo (22-nov-2021).
A partir de este punto solo se realizan actividades de test de sistema, reporte de issues y generación del informe académico.

# Test de sistema

## Realizar test de sistema en un entorno separado del desarrollo
Generamos una rama separada de dev y main con una copia del código del code freeze 
todas las pruebas y verificaciones así como la documentación posterior al code freeze se realizarion sobre esa rama.

<img width="45%" alt="Rama dev" src="docs/assets/rama_qa.png">

## Generar casos de prueba aplicando técnica partición equivalente

- [Casos de prueba agregar gasto](docs/particion-equivalente/agregar-gasto.md)
- [Casos de prueba agregar ingreso](docs/particion-equivalente/agregar-ingreso.md)
- [Casos de prueba cambio de contraseña](docs/particion-equivalente/cambio-contrasena.md)
- [Casos de prueba iniciar sesion](docs/particion-equivalente/iniciar-sesion.md)
- [Casos de prueba registro de usuario](docs/particion-equivalente/registro-usuario.md)

## Pruebas de valores limite

En las siguientes pruebas solo se testearon los valores limite ya que los errores normales se testearon en las pruebas de particion equivalente.

- [Prueba Log In](docs/testing-valores-limite/tvl-singin.md)
- [Prueba Agregar Ingreso](docs/testing-valores-limite/tvl-agregar-ingreso.md)
- [Prueba Agregar Gasto](docs/testing-valores-limite/tvl-agregar-gasto.md)

## Detallar sesiones de prueba exploratoria
- [Sesion Exploratoria Sign in](docs/sesion-testing-exploratorio/sign-in.md)
- [Sesion Exploratoria Reportes](docs/sesion-testing-exploratorio/reporte.md)

# Reporte de issues

## Reportar issues (bugs, improvements, missing features) en GitHub 
- [Bugs, improvements, missing features](https://github.com/ORT-FIS-202108/proyecto-6-caraballo-lopez-speranza/issues)
- [Issues Cerrados](https://github.com/ORT-FIS-202108/proyecto-6-caraballo-lopez-speranza/issues?q=is%3Aissue+is%3Aclosed)

## Aplicar buenas prácticas de reporte de issues
- [Formato de reporte de issues](docs/issues/README.md) 

## Definir labels para tipos de issue y niveles de severidad
- [Definición de labels y severidad](docs/issues/README.md) 

## Dejar issues abiertos para correcciones o mejoras futuras
- [Issues Abiertos](https://github.com/ORT-FIS-202108/proyecto-6-caraballo-lopez-speranza/issues)

Una vez terminado el desarrollo del software y empezada la fase de testing, fuimos detectando issues que nuestra aplicacion presentaba, cada issue que encontramos la documentamos en github y podra ser visualizada en las imagenes que siguen.

## Sumarizar número de issues reportados por tipo

Aqui dejamos las issues ordenadas en tabla y representadas con graficas.<br>
<img width="70%" alt="Cobertura de codigo" src="https://i.imgur.com/TIviiyk.png">

## Realizar una evaluación global de la calidad
[Evaluación global de la calidad](docs/evaluacion-global/README.md)
# Reflexión

## Detalle del trabajo individual:<br>
- [Tabla: Detalle del trabajo individual](docs/detalle-individual/README.md)
- [Diego](docs/reflexiones/diego.md)<br>
- [Ernesto](docs/reflexiones/ernesto.md)<br>
- [Francisco](docs/reflexiones/fran.md)<br>

## Técnicas aplicadas y aprendizajes

Para la segunda instancia lo que hicimos fue mantener lo que desde nuestro
punto de vista funcionó bien en la entrega anterior, esto fue:

Usar Trello para gestionar el proyecto, de manera de definir bien al comienzo
todas las tareas que pudimos identificar que eran necesarias y a su vez
nos las asignamos a los diferentes miembros del equipo, buscando poder organizar el trabajo.

A su vez también mantuvimos el uso de Google Drive, donde cada uno de los integrantes iba compartiendo el avance y además el resto podía ir revisando y validando, pudiendo ver en alguna reunión en caso de ser necesario.

Luego algo que nos llevó un poco de tiempo entender bien cómo funciona es Material Design, ya que ninguno de nosotros no había trabajado previamente con esto, luego de superar los primeros días fuimos entendiendo su funcionamiento y cómo aprovechar los componentes que proporciona.

También tuvimos que interiorizarnos sobre el uso de librerías externas para poder hacer las gráficas y realizar todas las validaciones necesarias para las fechas. Esto nos demandó cierta investigación de cómo se debía importar y configurar cada una de ellas para el correcto funcionamiento de las mismas.

Otro ítem a destacar fue el uso de Eslint, ya que al principio tuvimos varios errores detectados y eso nos llevó a hacer varios cambios en nuestro código, algo que al pasar el tiempo después nos resulto practico y muy útil de usar, ya que incorporamos cuales son algunos de los errores que nos pasaban y cómo solucionarlos, por nombrar algunos: imports sin usar, funciones sin usar, correcta indentación, const vs let.

Por último, también queremos mencionar los relacionado al manejo de los issues en github, algo en lo que ninguno estaba acostumbrado a realizar, pero que resultó ser de mucha ayuda para ver fácilmente si había algún problema, como poder reproducirlo para su posterior solución.
