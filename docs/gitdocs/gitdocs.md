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