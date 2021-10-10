# Informe académico entrega 1
Fecha de entrega: 18-oct-2021

# Repositorio Git

- Creación y uso de repositorios locales y remotos
- Comandos Git ejecutados desde terminal y desde el IDE

## Convenciones sobre el uso y nombramiento en git

A continuación pasamos a documentar cómo vamos a manejar el uso de git en el proyecto.

Sobre todo las buenas prácticas a utilizar y las convenciones de nombrado.

**En primer lugar tendremos dos categorizaciones de ramas**

### Ramas permanentes:

Dentro de las ramas permanentes contamos con las siguientes Main, QA y Dev. Cada una tiene un propósito específico y representa un estado de desarrollo del proyecto. De esta forma mantenemos el orden y podemos ver de forma clara el status de los cambios de una fase a la otra.

**Dev:** Dev o Development es la rama reservada para que los desarrolladores puedan comitear los últimos cambios, cuando todos los cambios de esta rama están listos se para el código a la rama de QA.

**QA:** En esta rama se procede a testear la calidad de código y levantar los issues que sean necesarios. Luego que el código pasa todas las pruebas se pasa a la rama Main.

**Main:** Esta rama contiene la última versión del proyecto la cual pasó por los estados anteriores, por lo tanto la versión que se encuentra en esta branch está lista para producción.

### Ramas temporales:

Estas ramas se crean para trabajar en algo específico por lo tanto la idea es mantener un nombrado claro sobre la tarea a llevar a cabo y categorizarla dentro de las siguientes opciones:

**Bug Fix (bug\_fix)**: El propósito de esta rama es reparar un error que se detectó en QA.

**Hot Fix (hot\_fix)**: El propósito de esta rama es reparar un error que se detectó en producción.

**Feature (feature)**: El propósito de esta rama es agregar un feature al proyecto.

## Nomenclatura para nombrar una rama

**ID de tarea - Tipo de rama - Responsable - breve descripción**

Un ejemplo sería el siguiente:

_687 - feature - ernesto\_speranza - log\_in\_usuario_

_367 - bug\_fix - diego\_caraballo - agregar\_gasto\_validar\_negativos_

### _Referencias:_

[https://hackernoon.com/git-branch-naming-convention-7-best-practices-to-follow-1c2l33g2](https://hackernoon.com/git-branch-naming-convention-7-best-practices-to-follow-1c2l33g2)

[https://deepsource.io/blog/git-branch-naming-conventions/](https://deepsource.io/blog/git-branch-naming-conventions/)

[https://codingsight.com/git-branching-naming-convention-best-practices/](https://codingsight.com/git-branching-naming-convention-best-practices/)

# Versionado

- Buenas prácticas de versionado
- Uso de ramas separadas de 'main'
- Resumen de commits y evolución del proyecto

# Elicitación

## Técnicas de elicitación utilizadas

Para nuestro proyecto decidimos realizar dos técnicas de elicitacion diferentes, Primero utilizamos Ingenieria Inversa sobre una aplicación que soluciona un problema similar al planteado en la consigna.

Elegimos Ingeniería Inversa porque nos da una base sobre la que comparar nuestra solución, podremos analizar qué funcionalidades deberíamos importar y cuales dejar de lado. También es una buena forma de conocer a nuestra “competencia”, sus fortalezas y debilidades. Con este estudio intentaremos imitar lo que consideremos bueno de la aplicación y dejar de lado lo no tan bueno.

Otra técnica utilizada es la entrevista, en este caso dirigida a nuestro cliente. Para que la aplicación funcione y tenga sentido se tiene que alinear con la necesidades de nuestro cliente y para conocer esas necesidades llevamos a cabo una entrevista con el. Nuestro objetivo aquí es obtener la información clave (sus necesidades) que nos guiará durante el proyecto.

- Evidencia de actividades de investigación
- Referencias a fuentes de información
- Caracterización de usuarios: User Personas

## Modelo conceptual del problema

A continuación presentamos el modelo conceptual así como también las distintas versiones que fuimos generando de manera de mostrar la evolución del mismo.

![alt Modelo conceptual](https://i.im.ge/2021/10/10/oQDscM.png "Modelo conceptual")

# Especificación

- Definición de requerimientos funcionales y no funcionales
- User Stories / Use Cases detallados
- Bocetos de IU
# Validación y verificación

- Verificar la especificación
- Validar la solución con personas no involucradas en el proyecto

# Reflexión

- Detalle del trabajo individual

## Técnicas aplicadas y aprendizajes

Para gestionar las distintas tareas del obligatorio decimos usar Trello.

### _¿Que es Trello?_

Trello es una herramienta enfocada en gestión de proyectos que facilita la colaboración, en donde se puede definir un tablero, que contiene una lista de tareas definidas en tarjetas.

### _¿Que ventajas nos da?_

El uso de esta herramienta nos permite visibilizar de una manera clara las distintas tareas a realizar para el obligatorio.
A su vez podemos saber en qué tarea estaba trabajando cada uno de nosotros, cuales están pendientes y cuales estarían terminadas, es decir, de una manera rápida pudimos ver el estado de las distintas etapas y eso nos da la posibilidad de realizar ajustes para poder cumplir con los tiempos de entrega.

### _¿Como organizamos el tablero?_

Nuestro tablero lo definimos usando 3 columnas para reflejar el estado de cada una de las tareas:

**TODO:** Donde inicialmente definimos cada tarea en una tarjeta. A su vez cada vez que uno de nosotros terminaba una, podía elegir una de las existentes en dicha columna, asignarla y comenzar a trabajar.

**DOING:** Columna que muestra que las tareas bajo esta columna están siendo trabajadas por alguno/s de los integrantes del equipo.

**DONE:** Las tarjetas en esta columna ya están completadas.

A continuación a modo de ejemplo ilustramos cómo quedó compuesto el tablero:

![alt Uso de Trello](https://i.im.ge/2021/10/10/oQDA2c.png  "Uso de Trello")



