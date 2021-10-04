# Repositorio plantilla para proyectos FIS

| Identificación del proyecto
|-----------
| Fundamentos de Ingeniería de Software
ID M4A - Docente: Alejandro Adorjan
Estudiantes: 

Lectura: 30-ago-2021

Entrega 1: 18-oct-2021

Code freeze: 22-nov-2021

Entrega 2: 29-nov-2021

[Letra del proyecto](letra.md)

[Instalación](install.md)

[Procedimiento de entrega](proc_entrega.md)

Los informes académicos para cada entrega se realizan en los archivos README.md que están en las carpetas docs (entrega 1) y src (entrega 2).
* [Informe entrega 1](docs/README.md)
* [Informe entrega 2](src/README.md)


# Convenciones sobre el uso y nombramiento en git

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

### Nomenclatura para nombrar una rama

→ ID de tarea - Tipo de rama - Responsable - breve descripción

Un ejemplo sería el siguiente:

_687 - feature - ernesto\_speranza - log\_in\_usuario_

_367 - bug\_fix - diego\_caraballo - agregar\_gasto\_validar\_negativos_

_Referencias:_

[https://hackernoon.com/git-branch-naming-convention-7-best-practices-to-follow-1c2l33g2](https://hackernoon.com/git-branch-naming-convention-7-best-practices-to-follow-1c2l33g2)

[https://deepsource.io/blog/git-branch-naming-conventions/](https://deepsource.io/blog/git-branch-naming-conventions/)

[https://codingsight.com/git-branching-naming-convention-best-practices/](https://codingsight.com/git-branching-naming-convention-best-practices/)

