| MISIÓN | Comprobar valores inválidos/válidos en los distintos campos del formulario de creación de un gastoComprobar el correcto funcionamiento del tab reporte, enfocándonos en la gráfica. |
| --- | --- |
| INICIO | 11:10 28.11.2021 |
| TESTER | Francisco Lopez |
| ESTRUCTURA DE DIVISIÓN | DURACIÓN: Corta (15 min) DISEÑO Y EJECUCIÓN DE PRUEBAS: 40% INVESTIGACIÓN Y REPORTES DE DEFECTOS: 60% ARMADO DE LA SESIÓN (Setup - Configuración): 0% OBJETIVO vs. OPORTUNIDAD: 100% - 0% |
| ARCHIVOS DE DATOS | ------- |
| Defectos y enhancements | No encontrados |
| Inconvenientes | No aplica |
| Notas de prueba |

Ingresamos al sitio: [http://localhost:8080/](http://localhost:8080/) donde se ejecuta la aplicación Mis gastos de manera local Creo un usuario con los siguientes datos: 
- nombre: fran 
- edad: 24 
- email: flopez[@gmail.com] 
- confirmar email: flopez[@gmail.com] 
- contraseña: 123123123 
- confirmar contraseña: 123123123

 Luego ingresamos un gasto con los siguientes datos:
 - nombre: pizza 
 - categoría: comida 
 - monto: 350 
 - fecha: 28/11/2021 
 
 Luego ingresamos un ingreso con los siguientes datos: 
 - nombre: sueldo 
 - categoría: trabajo 
 - monto: 10000 
 - fecha: 03/11/2021 
 
 Luego ingresamos un gasto con los siguientes datos: 
 - nombre: reparacion coche 
 - categoría: transporte 
 - monto: 3000 
 - fecha: 07/11/2021 
 
 Luego ingresamos un gasto con los siguientes datos: 
 - nombre: supermercado 
 - categoría: comida 
 - monto: 2500 
 - fecha: 09/11/2021 
 
 Luego ingresamos un gasto con los siguientes datos: 
 - nombre: ración mascota 
 - categoría: mascota 
 - monto: 1500 
 - fecha: 06/11/2021 
 
 Luego ingresamos un gasto con los siguientes datos: 
 - nombre: battlefield 2042 
 - categoría: ocio 
 - monto: 2500 
 - fecha: 17/11/2021 
 
 <br> P1 Selecciono &quot;Ver Reportes&quot; en el menú inferior Se visualiza el tab de ver reportes, y se muestran las categorías en orden de ingreso al sistema y muestran el balance de cada una, comparándolas con las demás categorías.<br> <img src="https://i.imgur.com/y66QKmw.png" alt="Imagen uno" width="300"/> <br> P2 Selecciono el boton &quot;Ver Historico&quot; Se muestra la gráfica Histórica que nos muestra cuánto gastamos o ganamos cada día, siempre comparando con el resto de transacciones así podemos tener una idea de en qué momentos del mes solemos gastar más.<br> <img src="https://i.imgur.com/fvkeyZs.png" alt="Imagen dos" width="300"/> <br> P3 Seleccionamos la opción home en el menú inferior se visualiza la ventana &quot;home&quot; y se muestra la gráfica mostrándonos nuestro balance general, comparando ingresos y gastos.<br> <img src="https://i.imgur.com/0kL9zIA.png" alt="Imagen tres" width="300"/>