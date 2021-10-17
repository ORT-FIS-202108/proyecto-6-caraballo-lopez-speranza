# Uso de Git y GitHub

A la hora de trabajar en el proyecto utilizamos tanto git como github para llevar un registro de nuestro trabajo y combinarlo de forma ordenada. Para esto utilizamos ciertos estandares especificados en el README principal. Abajo se mostrara el procedimiento estandar a la hora de trabajar en git.
Para empezar a trabajar en una feature creamos una rama para trabajar en nuestro espacio y no modificar la rama que usan todos. <br>
<img src="https://i.imgur.com/Wnc3oHo.png" alt="git checkout" width="700"/><br>
Aqui utilizamos el flag -b para que se cree la rama a la que nos queremos mover y asi ahorrar tiempo.
Una vez que empezamos a trabajar en la rama y hacemos un par de &quot;git add&quot; verificamos el status con &quot;git status&quot; para ver que está agregado y que no.<br>
<img src="https://i.imgur.com/Puk5Wa3.png" alt="git add/status" width="700"/><br>
Luego si queremos agregamos los cambios al área de staging y una vez listo realizamos el commit. En el commit agregamos un mensaje utilizando el flag -m para que luego se sepa de qué trata el commit, paso que es opcional. Una vez realizado esto verificamos con git status para confirmar que esté todo bien.<br>
<img src="https://i.imgur.com/uJBluO6.png" alt="git commit" width="700"/><br>
Como es el primer push de esta rama tenemos que settear el upstream, una vez realizado el push es hora de realizar el merge, para esto utilizamos GitHub. <br>
<img src="https://i.imgur.com/ZnfXlBz.png" alt="Pull Request1" width="700"/> <br>
<img src="https://i.imgur.com/tXWVH5i.png" alt="Pull Request2" width="700"/> <br>
<img src="https://i.imgur.com/xRnjImK.png" alt="Pull Request3" width="700"/> <br>
<img src="https://i.imgur.com/QN0bfZa.png" alt="Pull Request4" width="700"/><br>
Una vez terminado estos pasos el merge esta terminado y nuestros cambios en dev.

# Errores cometidos con Git
Como era de esperar a la hora de usar una nueva tecnología cometimos algunos errores. El primer error que cometimos fue a la hora de nombrar las ramas, habíamos acordado un estándar pero algunos de nosotros nos olvidamos del estándar o lo recordamos distinto y no verificamos a la hora de crear las ramas. Esto llevó a que las primeras ramas no tuvieran el nombre correcto. Por ejemplo la rama “#6-feature-francisco_lopez-ingenieria_reversa” comienza con un “#” cuando el resto no, esto fue porque al principio pensamos en hacerlo así pero luego lo cambiamos, también hubieron ramas que no tenían el “feature” o ponían el nombre de la feature antes del nombre del autor. Rápidamente nos reunimos y corregimos estos errores.<br>
Otro error que cometimos un par de veces fue hacer merge con main en vez de hacerlo con dev, probablemente por distracción más que otra cosa pero fue algo que también tuvimos que arreglar y acordarse a la hora de hacer los merge. Por suerte solo cometimos este error dos veces pero esperamos que para el siguiente proyecto no pase ni una vez.<br>
Otro error fue el de borrar las ramas, si bien a nosotros nos parecía lo mejor, preguntamos a los profesores y se nos dijo que había que mantenerlas sin borrar, por esto las primeras ramas no están en github ya que fueron borradas a la hora de hacer merge.
