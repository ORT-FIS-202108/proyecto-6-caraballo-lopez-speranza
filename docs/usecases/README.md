**Use cases**

**Título:** Registrarse **Actor:** nuevo usuario

**Curso normal:**

| Acción de los actores | Respuesta del sistema |
| --- | --- |
| 1. En la pantalla de inicio el usuario selecciona la opción &quot;registrarse&quot; | 2. Lo lleva a la pantalla de registro |
| 3. Introduce su email, nombre y contraseña, verificando el mail y la contraseña y presiona en el botón &#39;Registrar&#39; | 4. Registra al usuario y muestra la pantalla principal de la aplicación |

**Cursos alternativos:**

3.1: El usuario introduce un email que ya está registrado. El sistema le notifica de este problema a través de un mensaje y deja que el usuario cambie el email.

3.2: El usuario ingresa mal el email de verificación o la contraseña de verificación. el sistema le notifica de este error y deja que el usuario lo corrija.
<br><br>

**Titulo:** Iniciar sesión **Actor:** Usuario

**Curso normal:**

| Acción de los actores | Respuesta del sistema |
| --- | --- |
| 1. En la pantalla de inicio el usuario introduce su email y contraseña y selecciona iniciar sesión | 2. El sistema verifica los datos, inicia la sesión y lleva al usuario a la pantalla principal. |

**Cursos alternativos:**

1.1. El usuario introduce mal su mail o contraseña, el sistema notifica el error y el usuario lo puede corregir.

1.2. El sistema le notifica al usuario que no tiene cuenta creada en la aplicación, que debe registrarse.
<br><br>

**Título:** Registro de gasto **Actor:** Usuario

**Curso normal:**

| Acción de los actores | Respuesta del sistema |
| --- | --- |
| 1. El usuario selecciona el botón de registrar gasto | 2. El sistema lo lleva a la página de registrar gasto |
| 3. El usuario ingresa el nombre del gasto, la categoría, fecha y el monto | 4. El sistema registra el gasto a los datos del usuario |

**Cursos alternativos:**

3.1 El usuario selecciona cancelar. El sistema lo lleva a la ventana anterior

3.2 El usuario deja un campo vacío. El sistema notifica el error y deja que el usuario lo arregle.

3.3 El usuario ingresa caracteres no válidos en el campo &quot;monto&quot;. El sistema notifica el error y deja que el usuario lo arregle.
<br><br>

**Título:** Registro de ingreso **Actor:** Usuario

**Curso normal:**

| Acción de los actores | Respuesta del sistema |
| --- | --- |
| 1- El usuario selecciona el botón de registrar ingreso | 2- El sistema lo lleva a la página de registrar ingreso |
| 3- El usuario ingresa el nombre del ingreso, la categoría, fecha y el monto. | 4- El sistema registra el ingreso a los datos del usuario. |

**Cursos alternativos:**

3.1 El usuario selecciona cancelar. El sistema lo lleva a la ventana anterior

3.2 El usuario deja un campo vacío. El sistema notifica el error y deja que el usuario lo arregle.

4.1 El usuario ingresa caracteres no válidos en el campo &quot;monto&quot;. El sistema notifica el error y deja que el usuario lo arregle.
<br><br>

**Título:** Escanear facturas **Actor:** Usuario

**Curso normal:**

| Acción de los actores | Respuesta del sistema |
| --- | --- |
| 1. El usuario selecciona la opción de escanear factura | 2. El sistema muestra un lector para la factura |
| 3. El usuario escanea la factura | 4. El sistema la procesa, crea un gasto y notifica al usuario |

**Cursos alternativos:**

2.1. Uno de los datos no es válido. El sistema notifica al usuario de esto y le da la opción de escanear de nuevo, o ingresar el gasto manualmente.
<br><br>

**Título:** Gasto recurrente **Actor:** Usuario

**Curso normal:**

| Acción de los actores | Respuesta del sistema |
| --- | --- |
| 1. El usuario selecciona el botón de registrar gasto | 2. El sistema lo lleva a la página de registrar gasto |
| 3. El usuario ingresa el nombre del gasto, la categoría, fecha, el monto y marca el gasto como recurrente | 4. El sistema registra el gasto a los datos del usuario y utiliza la fecha utilizada y agenda agregar ese gasto todos los meses en el día seleccionado. |

**Cursos alternativos:**

3.1 El usuario selecciona cancelar. El sistema lo lleva a la ventana anterior

3.2 El usuario deja un campo vacío. El sistema notifica el error y deja que el usuario lo arregle.

3.3 El usuario ingresa caracteres no válidos en el campo &quot;monto&quot;. El sistema notifica el error y deja que el usuario lo arregle.
<br><br>

**Título:** Reportes por categoría **Actor:** Usuario

**Curso normal:**

| Acción de los actores | Respuesta del sistema |
| --- | --- |
| 1. El usuario selecciona el botón de reportes en la página principal | 2. El sistema muestra una gráfica detallando los gastos |

**Cursos alternativos:**

1.1. El usuario no tiene gastos. El sistema le notifica que no tiene gastos y no muestra ninguna gráfica.
<br><br>

**Título:** Balance contable **Actor:** Usuario

**Curso normal:**

| Acción de los actores | Respuesta del sistema |
| --- | --- |
| 1. El usuario selecciona el botón de ver reporte | 2. El sistema muestra una gráfica mostrando el balance entre ingresos y gastos |
<br><br>

**Título:** listado de costos e ingresos **Actor:** Usuario

**Curso normal:**

| Acción de los actores | Respuesta del sistema |
| --- | --- |
| 1. El usuario está en la página principal | 2. El sistema muestra una lista de sus mayores gastos e ingresos. |

**Cursos alternativos:**

2.1. El usuario no tiene gastos ni ingresos. El sistema no muestra nada
<br><br>

**Título:** Objetivos financieros **Actor:** Usuario

**Curso Normal:**

| Acción de los actores | Respuesta del sistema |
| --- | --- |
| 1. El usuario selecciona el botón de agregar objetivos financieros | 2. El sistema lo lleva a la pagina de objetivos financieros, mostrándole el historial de sus objetivos y si fueron cumplidos o no |
| 3. El usuario selecciona &quot;agregar objetivo&quot; | 4. El sistema lo lleva a la ventana de agregar objetivo |
| 5. El usuario ingresa el marco temporal y cuánto dinero quiere ahorrar | 6. El sistema lo registra y agrega a su lista de objetivos financieros |

**Cursos alternativos:**

5.1. El usuario selecciona un monto de dinero invalido. El sistema lo notifica del problema y deja que el usuario lo arregle.