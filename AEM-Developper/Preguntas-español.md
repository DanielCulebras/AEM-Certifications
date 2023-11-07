1
Un desarrollador necesita crear un componente de banner. Este componente muestra una imagen en todo el ancho de la página. Se muestra un título encima de la imagen. Este texto se puede alinear a la izquierda, al centro o a la derecha. Los componentes principales incluyen un componente teaser que cumple con casi todos los requisitos, pero no con todos.
¿Cuál es la forma más fácil de mantener para que el desarrollador implemente estos requisitos?
A.
Usar y configurar el componente principal del avance.
B.
Cree un nuevo componente personalizado desde cero.
C.
Superponga el componente principal del avance.
D.
Heredar del componente principal del avance.
Es la D.

2
Un desarrollador está trabajando en un proyecto complejo con varios paquetes. Un paquete proporciona un servicio OSGi para otros paquetes.
¿Qué dos opciones son necesarias para garantizar que los otros paquetes puedan hacer referencia a ese servicio OSGi? (Escoge dos)
A.
Los paquetes que consumen el servicio deben importar el nombre completo de la interfaz del servicio.
B.
El servicio necesita declarar correctamente la información del metatipo.
C.
El paquete que proporciona el servicio debe contener una lista blanca de paquetes de consumidores permitidos.
D.
El paquete que proporciona el servicio debe contener un archivo descriptor SCR adecuado.
MI.
El paquete que proporciona el servicio debe exportar el paquete java de la interfaz del servicio.
Es la C y E.

3
La sección de estructura de una plantilla editable tiene un componente bloqueado.
¿Qué sucede con el contenido de ese componente cuando un desarrollador lo desbloquea?
A.
El contenido permanece en el mismo lugar pero se ignora en las páginas que utilizan la plantilla.
B.
El contenido se mueve a la sección inicial de la plantilla editable.
C.
El contenido se elimina después de la confirmación del autor de la plantilla.
D.
El contenido se copia a la sección inicial de la plantilla editable.
Es la B.

4
¿Qué archivo de registro contiene entradas de solicitud y respuesta de la aplicación AEM?
A.
respuesta.log
B.
solicitud.log
C.
historia.log
D.
registro de auditoría
Es la B.

5
Un desarrollador crea un servlet Sling. El servlet Sling está vinculado a una ruta (/servicio/sling/sample). Consulte el código resultante a continuación.
@Component (inmediato = verdadero, servicio = {Servlet.class})
@SlingServletPaths(valor? {\"/servicio/sling/sample\"})
¿Qué debe hacer el desarrollador para controlar el acceso al servlet mediante las ACL predeterminadas?
A.
Utilice @SlingServletResourceTypes en lugar de @SlingServletPaths.
B.
Modifique @SlingServletPaths(valor = {\"/bin/sling/sample\" }).
C.
Agregue la anotación @SlingServletName(servletName = \"AccessControlServlet\").
D.
Agregue la anotación @SlingServletPrefix(value = \"/apps\").
Es la A.

6
Un desarrollador quiere ampliar AEM Core Components para crear un componente de carrusel personalizado.
¿Cómo debería el desarrollador ampliar los componentes principales?
A.
Realice cambios en el componente original y asigne un grupo de componentes.
B.
Utilice la propiedad sling:resourceSuperType para apuntar al componente principal.
C.
Utilice la propiedad sling:resourceType para apuntar al componente principal.
D.
Copie el componente Core Carousel a la carpeta /apps/<proyecto>.
Es la B.

7
Un desarrollador quiere cambiar el nivel de registro de una API personalizada.
¿Qué configuración OSGi debería modificar el desarrollador?
A.
Configuración de registro de Apache Sling
B.
Servicio de seguimiento de registros de Apache Sling
C.
Configuración del escritor de registro Apache Sling
D.
Servicio de análisis de registros de Adobe Granite
Es la A.

8
Un desarrollador está instalando un paquete de contenido con el administrador de paquetes. El desarrollador debe restringir la cantidad aproximada de nodos en un lote que se guarda en un almacenamiento persistente en una transacción.
¿Cómo debería el desarrollador modificar la cantidad de nodos transitorios que se activarán hasta el guardado automático?
A.
Las instancias de AEM modifican automáticamente la cantidad de nodos transitorios en función del equilibrio de carga.
B.
Modifique el encabezado del manifiesto del paquete de exportación y copie el paquete de contenido en la carpeta de instalación de AEM.
C.
Seleccione la opción MergePreserve para el menú desplegable Manejo de control de acceso en el cuadro de diálogo Instalar paquete.
D.
Cambie el valor de Guardar umbral en el cuadro de diálogo Instalar paquete.
Es la D.

9
Un desarrollador necesita implementar un componente de servicio que las operaciones deben configurar manualmente para reaccionar ante las circunstancias operativas. El componente de servicio NO debe estar activo de forma predeterminada. El servicio tiene las propiedades myservice.name (un valor de cadena) y myservice.stringValues (una lista de los valores de cadena) que se van a configurar.
El desarrollador necesita utilizar anotaciones OSGi Metatype para que esas propiedades sean configurables en Apache Felix Web Console.
¿Qué conjunto de pasos debe seguir el desarrollador para cumplir con estos requisitos?
A.
1. Para los campos de clase myserviceName y myserviceStringValues, agregue una anotación @AttributeDefinition, cada una con los nombres establecidos en myservice.name y myservice.stringValues respectivamente.
2. Utilice la anotación @Component con ConfigurationFactory = true en la clase de componente de servicio.
3. Utilice la clase de componente de servicio @Service.
4. Utilice el método de activación de la clase de componente de servicio para inyectar la clase de interfaz de anotación de configuración.
B.
1. Cree una interfaz de anotación como clase interna del componente de servicio y anótela con @ObjectClassDefinition.
2. Aplique @AttributeDefinition para los métodos myservice.name y myservice.stringValues.
3. Utilice la anotación @Component con ConfigurationPolicy = ConfigurationPolicy.REQUIRE en el componente de servicio.
4. Utilice la anotación @Designate para vincular el componente de servicio a la interfaz de anotación de configuración creada.
5. Utilice el método de activación de la clase de componente de servicio para inyectar la clase de interfaz de anotación de configuración.
C.
1. Cree una interfaz de anotación como clase interna del componente de servicio y anótela con @ObjectClassDefinition.
2. Aplique @AttributeDefinition para los métodos myservice_name y myservice_stringValues.
3. Utilice la anotación @Component con ConfigurationPolicy = ConfigurationPolicy.REQUIRE en el componente de servicio.
4. Utilice la anotación @Designate para vincular el componente de servicio a la interfaz de anotación de configuración creada.
5. Utilice el método de activación de la clase de componente de servicio para inyectar la clase de interfaz de anotación de configuración.
D.
1. Para los campos de clase myserviceName y myserviceStringValues, agregue una anotación @Property, cada una con los nombres establecidos en myservice.name y myservice.stringValues respectivamente.
2. Utilice la anotación @Component con ConfigurationFactory = true en la clase de componente de servicio.
3. Utilice la clase de componente de servicio @Service.
4. El tiempo de ejecución del componente de servicio inyecta automáticamente la configuración en el campo.
Es la C.

10
Un desarrollador crea plantillas editables basadas en un componente de página personalizado. El desarrollador quiere aprovechar el sistema de estilo dentro de las plantillas editables para permitir a los autores cambiar entre el tema oscuro y claro. El cuadro de diálogo Sistema de estilo NO está habilitado para el sitio.
¿Qué debe hacer el desarrollador para resolver este problema? *
A.
Defina definiciones de estilo mediante el cuadro de diálogo Política de página en la plantilla editable.
B.
Cree dos nuevas bibliotecas cliente con un tema oscuro y claro y asígnelas al componente Página.
C.
Establezca la propiedad sling:resourceSuperType en core/wcm/components/page/v2/page en el componente Página.
D.
Cree un nuevo cuadro de diálogo para los componentes de página personalizados.
Es la A.

11
Se produce una excepción de puntero nulo si NO se establecen valores charLimit en el cuadro de diálogo del componente.
¿Qué debe hacer el desarrollador para resolver este problema?
A.
Reemplace el atributo defaultValue=\"0\" del campo \"˜charLimit' en el cuadro de diálogo con min=\"0\".
B.
Agregue la anotación @Default a la variable \"˜chatLimit' en el modelo Sling.
C.
Reemplace el atributo defaultValue=\"0\" del campo charLimit en el cuadro de diálogo con defaultValue=\"{Long}0\".
D.
Cambie defaultInjectionStrategy del modelo de eslinga de truncamiento a DefaultInjectionStrategy.REQUIRED.
Es la B.

12
Después de agregar nuevas funciones, el entorno de un desarrollador experimenta lentitud antes de quedarse sin memoria. El análisis de registro inicial apunta hacia una gran cantidad de sesiones abiertas.
¿Qué acción debe tomar el desarrollador para monitorear aún más el recuento general de sesiones en esta instancia de AEM? *
A.
Ejecute el siguiente comando para generar volcados de subprocesos jstack -l <pid> >> threaddumps.log, analice los volcados de subprocesos para encontrar sesiones de ejecución prolongada.
B.
Vaya a Consola web > Estado > Subprocesos y verifique el recuento total de subprocesos.
C.
Vaya a Herramientas > Operaciones > Monitoreo. Cree un nuevo informe basado en el número de sesiones activas como métrica
D.
Vaya a <aem-install>/crx-qiuckstart/logs/strderr/log, use el siguiente comando grep -o 'CRXSessionImpl' strderr.log| baño -l.
Es la C.

13
El sitio web de una compañía de seguros en línea tiene contenido generado por el usuario que debe replicarse en todas las instancias de publicación.
¿Qué medidas debe tomar el desarrollador para lograrlo?
A.
Configure el agente de descarga del despachador en la instancia de publicación.
B.
Configure agentes de replicación inversa para el autor.
C.
Configure el agente de replicación en las instancias de publicación.
D.
Deshabilite el agente estático en la instancia del autor.
Es la B.

14
Un desarrollador debe crear un paso del flujo de trabajo que asigne un 'Elemento de trabajo' a la persona adecuada en función de quién tiene la menor cantidad de trabajo por hacer. El grupo que debe realizar la acción se configura en el flujo de trabajo.
¿Qué interfaz no obsoleta debería utilizar la clase de implementación de Java para realizar la tarea?
A.
com.adobe.granite.workflow.exec.ParticipantStepChooser
B.
com.day.cq.workflow.exec.ParticipantChooser
C.
com.day.cq.workflow.exec.WorkItem
D.
com.adobe.granite.workflow.exec.WorkflowData
Es la A.

15
¿Desde qué consola web de AEM debería un desarrollador acceder y descargar archivos de registro de AEM completos?
A.
Consola web -> Información del sistema
B.
Estado -> Archivos de registro
C.
OSGI -> Servicio de registro de canto
D.
AEM -> Archivos de registro
Es la B.

dieciséis
Un desarrollador necesita crear un nuevo componente llamado \"Componente A\". El componente A debe mostrar una lista de otros componentes que tengan un tipo de recurso del \"Componente B\" existente. El Componente A debe representar esta lista de mosaicos para cada Componente B donde la representación del mosaico es diferente de la predeterminada. La lista de mosaicos renderizados debe ser reutilizable para futuros componentes nuevos.
¿Cómo debería el desarrollador implementar esta funcionalidad?
A.
Cree una secuencia de comandos para la representación de mosaicos en el Componente B
y use el atributo data-sly-resource con un selector Sling en el Componente A para representar el mosaico.
B.
El componente A se superpone al componente B y sobrescribe el renderizador base para facilitar los mosaicos.
C.
El componente A hereda del componente B y sobrescribe el renderizador base para facilitar los mosaicos.
D.
El componente A llama al HTL del componente B directamente utilizando un atributo data-sly-include.
Es la A.

17
Para cada nodo CRX en la jerarquía, ¿qué acciones se pueden configurar mediante la interfaz de administración de usuarios?
A.
Leer, modificar, crear, eliminar, leer ACL, editar ACL, replicar
B.
Leer, escribir, leer ACL, editar ACL, replicar
C.
Leer, escribir, eliminar, editar ACL, replicar
D.
Leer, modificar, crear, eliminar, leer ACL, editar ACL
Es la A.

18
Una aplicación ejecuta comprobaciones de licencia específicas contra ciertos activos DAM todos los días. Debería enviar un correo electrónico a una lista configurada si encuentra advertencias y marcar el activo en consecuencia. Se crea un componente de servicio que utiliza el servicio ApacheSling Scheduler. Los activos DAM que NO deben usarse más se ocultan mediante ACL y la verificación de licencia debe volver a verificarlos.
¿Cómo debería un desarrollador obtener un solucionador de recursos que pueda leer y actualizar los activos DAM?
A.
Configure un trabajo cron con llamadas curl con el usuario administrador y use request.getResourse ().getResourceResolver().
B.
Cree una línea de configuración en PID com.day.cq.security.ACLSetup para el usuario para el que obtiene una sesión a través de ResourceResolverFactory.getResourceResolver(...).
C.
Configure el administrador de usuarios en PID org.apache.sling.serviceusermapping.impl.ServiceUserMapperImpl como user.default y asegúrese de que el usuario del servicio exista y tenga permisos jcr:read y jcr:write.
D.
Cree una configuración para PID org.apache.sling.serviceusermapping.impl.ServiceUserMapperImpl.amendeddamaccess que haga referencia a un usuario de servicio creado previamente con permisos de lectura y escritura y use ResourceResolverFactory.getServiceResourceResolver(...).
Es la D.

19
Un desarrollador está creando plantillas y/o componentes utilizando CRXDE Lite. El desarrollador necesita registrar los archivos en el control de código fuente.
¿Qué herramienta debería utilizar el desarrollador para lograr este objetivo?
A.
comando vlt
B.
Explorador de contenido
C.
http://localhost:4502/crx/checkout
D.
comando mvn
Es la A.

20
Una aplicación AEM personalizada utiliza la API de PageManager.
¿Qué debe agregar un desarrollador para que la aplicación se compile y ejecute correctamente en AEM?
A.
una dependencia maven de AEM uber-jar al paquete de contenido
B.
una dependencia de maven para incluir cq-wcm-core en el paquete de la aplicación
C.
una dependencia maven de AEM uber-jar al paquete de aplicaciones
D.
una dependencia de maven para agrupar cq-wcm-api en el paquete de contenido
Es la C.

21
¿Cómo debería un desarrollador habilitar la depuración remota de un servidor AEM sin modificar el script de inicio de AEM?
A.
Habilite el servicio de depuración remota a través del menú Servicios en la nube de AEM.
B.
Cambie el nombre del archivo jar de inicio rápido para incluir la configuración de depuración adicional.
C.
Habilite el servicio de depuración remota a través de la consola web AEM.
D.
Incluya un parámetro JVM adicional al iniciar AEM con java -jar.
Es la D.

22
Un desarrollador desarrolló un flujo de trabajo que hace una copia de cada nodo creado o modificado bajo una ruta determinada a uno diferente. El flujo de trabajo se inicia pero los nodos no se copian.
¿Qué dos métodos debería utilizar el desarrollador para resolver este problema? (Escoge dos.)
A.
Vaya a la pantalla Fallos del flujo de trabajo y verifique si hay alguna instancia del flujo de trabajo presente.
B.
Vaya a la pantalla Instancias de flujo de trabajo y verifique que la instancia del flujo de trabajo esté presente y verifique su estado.
C.
Vaya a la pantalla del Administrador de paquetes y reinstale el paquete que contiene el flujo de trabajo para que se reinicie.
D.
Vaya a la pantalla Modelos de flujo de trabajo, luego elimine y vuelva a crear el flujo de trabajo.
MI.
Vaya a Iniciadores de flujo de trabajo y cree un nuevo iniciador para el flujo de trabajo incluso si ya existe uno.
Es la A y B.

23
Un desarrollador crea una plantilla editable de AEM que incluye un contenedor de diseño. Cuando el desarrollador crea una página usando esta plantilla, el marcador de posición del contenedor de diseño NO aparece.
¿Qué está causando este problema?
A.
El Contenedor de Diseño NO tiene una política.
B.
La plantilla de página NO ha sido habilitada.
C.
La plantilla de la página NO ha sido publicada.
D.
El contenedor de diseño NO se ha desbloqueado.
Es la D.

24
Se invalidan demasiadas páginas en la caché del distribuidor cuando se publica una página.
¿Qué es lo más probable que esté causando este problema en la configuración del despachador?
A.
Las sesiones fijas NO están configuradas correctamente, lo que provoca que las solicitudes se entreguen al servidor equivocado
B.
El nivel de invalidación de caché NO es apropiado para el modelo de contenido publicado.
C.
La inclusión de archivos en la configuración del despachador NO es correcta
D.
Los permisos del sistema de archivos del sistema operativo NO están configurados correctamente.
Es la B.

25
El requisito para el cuadro de diálogo es que el campo \"Alinear texto\" se muestre después del campo \"Título\".
¿Qué debería hacer el desarrollador sin cambiar el Componente B?
A.
Mueva el nodo de alineación del Componente A al Componente B y ordénelos según los requisitos.
B.
Amplíe el Componente B con la funcionalidad del Componente A.
C.
Agregue la propiedad sling:orderBefore=\"description\" al nodo de alineación.
D.
Mueva todos los nodos debajo del nodo del artículo del Componente B al Componente A y ordénelos según los requisitos.
Es la C.

26
Un componente de servicio recupera periódicamente contenido de una interfaz REST externa y guarda la información en JCR. El punto final REST se configura mediante una propiedad de servicio OSGi. Hay una URL para producción (runmode prod) y otra URL para todos los demás entornos.
¿Cómo debería un desarrollador configurar el servicio OSGi?
A.
Debajo de /apps/<proyecto>/settings, cree las subcarpetas global y prod y nodo con el nombre <PID>.conf cada una y configure las propiedades a través de las propiedades del nodo.
B.
Debajo de /config/<project>/settings, cree las subcarpetas config.default y config.prod y un archivo con el nombre <PID>.config cada una y enumere las propiedades como pares clave-valor allí.
C.
Debajo de /apps/<proyecto>, cree las subcarpetas config y config.prod y un archivo con el nombre <PID>.config cada una y enumere las propiedades como pares clave-valor allí.
D.
Debajo de /config/<project>/settings, cree las subcarpetas config y config.prod y un archivo con el nombre <PID>.config cada una y enumere las propiedades como pares clave-valor allí.
Es la C.

27
¿Cuál es el ID del artefacto de la dependencia maven que contiene todas las API principales de AEM?
A.
tarro central
B.
tarro de api
C.
aem-tarro
D.
uber-tarro
Es la D.

28
Existen problemas de rendimiento, estabilidad y seguridad con una instancia de AEM instalada.
¿Qué debe hacer un desarrollador para solucionar estos problemas?
A.
Elimine y reinstale la instancia de AEM.
B.
Instale el archivo de configuración de Apache proporcionado por Adobe.
C.
Detenga, borre los archivos de caché y reinicie la instancia de AEM.
D.
Instale las actualizaciones del paquete de servicio desde el paquete compartido.
Es la D.

29
Un paquete de contenido de una aplicación personalizada contiene las siguientes rutas de contenido.
/aplicaciones/muproj/instalar
/apps/miproyecto/componentes
/apps/myproj/i18n
El servidor también contiene la ruta de contenido /apps/myproj/configuration que NO debe tocarse al instalar el paquete.
¿Qué dos definiciones de filtro debería usar un desarrollador para actualizar siempre solo las rutas contenidas durante la instalación en el servidor? (Escoge dos.)
A.
<filtro raíz=\"/apps/myproj\">
     <excluir patrón=\"configuración.*\"/>
</filtro>
B.
<filtro raíz=\"/apps/myproj\">
     <incluir patrón=\".*\"/>
     <excluir patrón=\"configuración.*\"/>
</filtro>
C.
<filtro raíz=\"/apps/myproj\">
     <excluir patrón=\"apps/myproj/configuration.*\"/>
</filtro>
D.
<filtro raíz=\"/apps/myproj\" modo=\"merge\">
</filtro>
MI.
<filtro raíz=\"/apps/myproj\">
     <include patrón=\"/apps/myproj/(install|components|i18n).*\"/>
</filtro>
Es la C y E.

30
Un desarrollador debe asegurarse de que la ruta /content/<proj>/segments exista en todos los entornos con el contenido inicial correcto que el desarrollador proporciona en un paquete. El contenido que existe en esa ruta NO debería verse afectado.
¿Qué modo de importación debería utilizar el desarrollador en la definición del filtro?
A.
actualizar
B.
unir
C.
reemplazar
D.
opcional
Es la B.

31
Un desarrollador tiene un componente ubicado en la ruta /apps. Este componente tiene una biblioteca cliente que se carga directamente en una página. La instancia de publicación carga la página correctamente. El despachador también carga la página pero falta la biblioteca del cliente.
¿Cómo debería el desarrollador resolver este problema teniendo en cuenta la seguridad?
A.
Cambie las ACL de la biblioteca del cliente.
B.
Mueva la biblioteca cliente a /apps/<project>library.
C.
Agregue la propiedad enableProxy con un valor booleano verdadero.
D.
Permita la ruta a clientlibs en el despachador.
Es la C.

32
Un desarrollador crea una biblioteca de cliente personalizada llamada foobar. Esta biblioteca de cliente incorpora otras cinco bibliotecas de cliente y contiene 10 archivos fuente de JavaScript. Uno de estos archivos, llamado foo.js, tiene un error en la línea 8 que provoca una excepción. La Biblioteca del Cliente lanza esta excepción en línea 1350 cuando se incluye en una página web.
¿Cómo debería un desarrollador encontrar la línea exacta en foo.js donde se lanzó la excepción?
A.
1. Habilite la minificación de JS/CSS en la consola de configuración OSGi para HTML Library Manager
2. Verifique el registro de excepciones de JavaScript en la consola web OSGi
B.
1. Elimine temporalmente las bibliotecas de cliente integradas en la biblioteca de cliente de foobar.
2. Utilice las herramientas de depuración de JavaScript del navegador.
C.
1. Agregue el selector debugClientLibs a la solicitud de página.
2. Verifique el registro de excepciones de JavaScript en la consola web OSGi
D.
1. Agregue el parámetro de consulta debugClientLibs=true a la solicitud.
2. Utilice las herramientas de depuración de JavaScript del navegador.
Es la D.

33
¿Qué complemento de Maven se requiere para instalar un paquete de contenido en un entorno AEM local utilizando Maven?
A.
Complemento de instalación de Maven
B.
Complemento Maven del paquete FileVault
C.
Complemento Maven del paquete de contenido
D.
Complemento del paquete Maven
Es la C.

34
Un desarrollador necesita implementar una funcionalidad que requiere la creación de un paso de flujo de trabajo personalizado.
¿Qué dos pasos debería seguir el desarrollador para comenzar a desarrollar el comportamiento personalizado? (Escoge dos.)
A.
Implemente una clase Java con este método \"proceso público vacío (elemento WorkItem, WorkflowSession wfsession) arroja WorkflowExceptien\".
B.
Implemente una clase Java que se extienda desde la clase com.adobe.granite.workflow.exec.WorkflowProcess.
C.
Cree un nodo de componente de flujo de trabajo del tipo de superrecurso \"cq/workflow/components/model/process\" en la carpeta /apps//components.
D.
Implemente una clase Java que implemente la interfaz com.adobe.granite.workflow.exec.WorkflowProcess.
MI.
Cree un nodo de componente de flujo de trabajo del tipo de superrecurso \"cq/workflow/components/step\" en la carpeta /etc/workflow/models.
Es la C y D.

35
¿De qué dos maneras puede un desarrollador mantener listas de control de acceso CRX simples y fáciles de mantener? (Escoge dos.)
A.
Elimina el grupo "todos".
B.
Utilice declaraciones Deny con moderación.
C.
Asigne derechos de acceso a grupos de usuarios en lugar de usuarios.
D.
Asignar derechos de acceso usuario por usuario.
Es la B y C.

36
Un desarrollador quiere crear una biblioteca de cliente que solo se incluirá en dispositivos táctiles.
¿Qué medidas debe tomar el desarrollador para lograrlo?
A.
Agregue la línea \"#base=touch\" a los archivos js.txt y css.txt en la carpeta Biblioteca del cliente.
B.
Cree una carpeta de recursos llamada \"touch\" en la carpeta de la biblioteca del cliente.
C.
Establezca la propiedad de canales en la carpeta de la biblioteca del cliente en \"touch\".
D.
Pase el parámetro user-agent='touch' cuando haga referencia a la biblioteca del cliente.
Es la C.

37
Un desarrollador está trabajando en un proyecto localmente y necesita instalar paquetes manualmente. Las implementaciones en el host local deben automatizarse para acelerar el desarrollo. Esta funcionalidad debe activarse y desactivarse, según las necesidades del desarrollador.
¿Qué paso debe dar el desarrollador para lograrlo?
A.
Configure el complemento de instalación de Maven definiendo la URL de destino, el nombre de usuario y la contraseña como propiedades de Maven.
B.
Ejecute maven con la fase de implementación. Maven instalará el paquete en todas las instancias locales de AEM que se ejecuten sin configuración adicional.
C.
Agregue un perfil maven y configure el complemento maven del paquete de contenido dentro de este perfil.
D.
Escriba un script que realice una llamada PUT a AEM cada vez que Maven cree un nuevo paquete.
Es la C.

38
¿Qué etiqueta xml se utiliza dentro de la definición del paquete de almacén para agregar una nueva ruta a un paquete de contenido?
A.
<filtro>
B.
<contenido>
C.
<ruta>
D.
<regla>
Es la A.

39
Un desarrollador quiere truncar automáticamente los archivos de registro de solicitudes una vez que superan los 10 MB.
¿Qué configuración OSGi debería modificar el desarrollador?
A.
Registrador de datos de solicitudes personalizable Apache Sling
B.
Servicio de análisis de registros de Adobe Granite
C.
Configuración del escritor de registro Apache Sling
D.
Configuración de registro de Apache Sling
Es la C.

40
Una biblioteca del lado del cliente tiene la categoría \"biblioteca.ejemplo\".
¿Qué declaración HTL debería usar un desarrollador para hacer referencia únicamente a los archivos CSS de esta biblioteca del lado del cliente?
A.
<sly data-sly-use.clientlib=\"/libs/granite/sightly/templates/clientlib.html\" data-sly-call=\"\${clientlib.css @ categorías='biblioteca.ejemplo'}\ "/>
B.
<sly data-sly-use.clientlib=\"/libs/granite/sightly/templates/clientlib.html\" data-sly-call=\"\${clientlib.css @ categoría='biblioteca.ejemplo'}\ "/>
C.
<sly data-sly-use.clientlib=\"/libs/granite/sightly/templates/clientlib.html\" data-sly-call=\"\${clientlib.all @ categorías='biblioteca.ejemplo.css' }\"/> categorías='biblioteca.ejemplo.css'}\"/>
D.
<sly data-sly-use.clientlib=\"/libs/granite/sightly/templates/clientlib.html\" data-sly-call=\"\${clientlib.all @ tipo='css', categorías=' biblioteca.ejemplo'}\"/>
Es la A.

41
Un desarrollador necesita instalar un paquete de contenido en el entorno AEM. Sin embargo, ya está instalado un paquete de contenido con el mismo nombre.
¿Cuál sería la forma más segura para que el desarrollador instale el paquete de contenido para asegurarse de que solo se apliquen los cambios del nuevo paquete de contenido?
A.
Utilice la opción \"Forzar carga cuando cargue el nuevo paquete de contenido.
B.
Desinstale el paquete de contenido existente antes de instalar el nuevo paquete de contenido.
C.
Cargue el paquete de contenido en CRX Package Share antes de instalarlo.
D.
Instale el paquete de contenido utilizando la consola web OSGi.
Es la B.

42
Un desarrollador está creando un componente personalizado en la página /latestBlogs.html que necesita enumerar todos los títulos de las páginas de blogs en /content/blogs.
¿Cómo obtiene este componente la lista de páginas secundarias?
A.
Cree una instancia de un objeto de nodo con session.getNode(/content/blogs) y luego repita los nodos secundarios e imprima el título de cada uno.
B.
Utilice PageManager.getPage(\"/content/blogs\") de la clase PageManager estática para crear una instancia de un objeto Página y luego recorrer las páginas secundarias e imprimir el título de cada una.
C.
Utilice QueryDebugger para buscar todos los elementos secundarios de /content/blogs y luego repita el conjunto de resultados e imprima el título de cada uno.
D.
Adapte el recursoResolver al servicio PageManager, luego use getPage(/content/blogs) para crear una instancia de un objeto Página y luego recorra las páginas secundarias e imprima el título de cada una.
Es la C.

43
Una aplicación bancaria AEM contiene una funcionalidad para calcular una tasa hipotecaria en función de la entrada del usuario. Un servlet in situ calcula el resultado en el backend. Se requiere una llamada a un servicio REST interno de terceros para recuperar el promedio oValor del objeto basado en un código postal determinado.
Se utilizan las siguientes tres interfaces de servicio: MortgageCalculationServlet, MortgageCalculationService y ObjectValueLookupRestService, donde MortgageCalculationServlet depende de MortgageCalculationService y MortgageCalculationService depende deObjectValueLookupRestService.
El cálculo tiene muchas combinaciones de parámetros de entrada y casos extremos, por lo que la cobertura de JUnit debe ser lo más alta posible.
¿Qué dos estrategias debería utilizar el desarrollador para garantizar la capacidad de prueba del código de la aplicación? (Escoge dos.)
A.
Utilice BundleContext.getServiceReference(…) y BundleContext.getService(…) en el código de la aplicación para buscar los servicios necesarios justo antes de su uso.
B.
Utilice métodos estáticos para evitar textos repetitivos en el código de la aplicación.
C.
Utilice un marco simulado para poder crear e inyectar simulacros en el código de prueba.
D.
Utilice la anotación OSGi @Reference estándar para conectar las dependencias en el código de la aplicación
MI.
Implemente un contenedor de inyección de dependencias de terceros para conectar las dependencias de manera más eficiente en el código de la aplicación.
Es la A y C.

44
Un desarrollador crea una plantilla editable con un contenedor de diseño. El desarrollador debe restringir LayoutContainer a un solo diseño de columna.
¿Qué debe hacer el desarrollador con la plantilla editable para hacer cumplir esta restricción?
A.
Usando el Editor de plantillas, establezca la configuración de respuesta en 1 columna para la Política de contenedor de diseño.
B.
Agregue un componente de control de columna responsivo a la plantilla y establezca el tipo de columna en 1.
C.
Superponga la biblioteca de cliente wcm.foundation.components.page.responsive y establezca @max_col en 1.
D.
Usando el Editor de plantillas, bloquee el componente de estructura de la plantilla.
Es la A.

45
Una aplicación AEM personalizada tiene una dependencia de tiempo de ejecución con un paquete OSGi de terceros que NO está incluido en AEM listo para usar. La dependencia de terceros debe estar disponible para varias aplicaciones y actualizarse por separado de la aplicación AEM personalizada.
¿Cómo debe asegurarse un desarrollador de que el paquete esté instalado en todos los entornos?
A.
Agregue la dependencia al paquete de terceros en el pom.xml del paquete del proyecto.
B.
Incruste el paquete de terceros en el paquete que depende de él.
C.
Incruste el paquete en un paquete de contenido para que se implemente automáticamente.
D.
Declare la dependencia correctamente utilizando un enlace al repositorio de paquetes OSGi (OBR).
Es la C.

46
Un desarrollador que ejecuta una instancia de AEM local y trabaja en un proyecto de AEM necesita cambiar una gran cantidad de archivos localmente en el sistema de archivos. ¿El desarrollador necesita cargar los cambios en la instancia de AEM local para verificar los cambios casi de inmediato en el navegador?
¿Qué acción debe tomar el desarrollador para cumplir con la mayor eficiencia estos requisitos?
A.
Acceda a CRXDE y cargue los archivos a través de la interfaz.
B.
Realice los cambios en CRXDE, cree un paquete de contenido, descárguelo y expándalo en el directorio de trabajo después de cada cambio.
C.
Instale el paquete FileVault en la instancia de AEM y registre el directorio de trabajo local para la sincronización.
D.
Cree un paquete de contenido utilizando maven e impleméntelo después de cada cambio.
Es la C.

47
Una aplicación AEM personalizada contiene un componente de servicio que necesita acceder al repositorio JCR dentro del método de activación. El método de activación utilizaResourceResolverFactory.getServiceResourceResolver(…) sin especificar un nombre de subservicio.
¿Qué debe hacer un desarrollador para asegurarse de que la asignación de servicios de usuario para el componente de servicio esté disponible?
1/1
A.
Cree un campo de tipo ServiceUserMapped y anótelo con @Reference.
B.
Espere el servicio ServiceUserMapper a través de BundleContext.getServiceReference(…).
C.
Cree un campo de tipo ServiceUserMapped y anótelo con @Reference usando ReferencePolicy.DYNAMIC.
D.
Cree un campo de tipo ServiceUserMapper y anótelo con @Reference usando ReferencePolicy.STATIC.
Es la A.

48
Después de una implementación de código reciente, un sitio de AEM está experimentando un tiempo de ejecución de consultas más prolongado de lo habitual. El paquete de implementación contenía algunas definiciones nuevas de índices de Lucene. Un desarrollador debe identificar las consultas de larga duración y confirmar que las nuevas definiciones de índice se estén aplicando correctamente.
¿Qué acción debería tomar el desarrollador para investigar este problema?
A.
Vaya a Herramientas > Operaciones > Diagnóstico > Descargar volcados de subprocesos. Analice los volcados de subprocesos para identificar solicitudes de larga duración.
B.
Vaya a Herramientas > Operaciones > Diagnóstico > Mensaje de registro. Configure el nivel de registro DEBUG en com.day.cq.search para monitorear las consultas de búsqueda.
C.
Vaya a Herramientas > Operaciones > Diagnóstico > Administrador de índices. Seleccione los nuevos índices y ejecute una verificación de coherencia.
D.
Vaya a Herramientas > Operaciones > Diagnóstico > Rendimiento de consultas > Consultas lentas. Seleccione una consulta y haga clic en Explicar.
Es la D.

49
Un desarrollador instala el último Service pack en una instancia de autor de AEM local.
¿Cómo debería el desarrollador instalar este paquete en la instancia de publicación?
A.
Replicar desde el administrador de paquetes de la instancia de publicación.
B.
Utilice la carga/instalación desde la consola OSGI de la instancia de publicación.
C.
Utilice la carga/instalación desde la consola OSGI de la instancia del autor.
D.
Replicar desde el administrador de paquetesde instancia de autor.
Es la D.

50
Dos publicaciones de AEM alimentan a un único Dispatcher.
¿Qué parte de la configuración de Dispatcher debería revisar un desarrollador para garantizar que se utilicen ambas instancias de publicación de AEM?
A.
hosts virtuales
B.
cache
C.
filtrar
D.
granjas
Es la D.

51
¿Un desarrollador necesita que un flujo de trabajo existente se ejecute solo cuando se crean páginas en una carpeta determinada?
¿Qué debería crear el desarrollador para lograr esto?
A.
Un Lanzador con el campo excluir que tiene el valor !jcr:nodetype==cq:Page
B.
Un iniciador con la ruta del campo apuntando a la carpeta y el campo de tipo de nodo tiene el valor cq:Page.
C.
Un iniciador con la ruta del campo que apunta a la carpeta y al campo de condición y tiene el valor jcr:content/jcr:primaryType==cq:Page.
D.
Un iniciador con la condición de campo que tiene el valor jcr:content/page.
Es la B.

52
Un desarrollador crea un tipo de plantilla para crear plantillas editables.
Las plantillas y páginas editables resultantes siempre deben contener un contenedor de diseño específico que el autor NO puede eliminar.
¿Cómo debe el desarrollador cumplir este requisito?
A.
Agregue el componente contenedor de diseño incluyéndolo en el componente de página real.
B.
Agregue una política de contenido al tipo de plantilla para deshabilitar la eliminación del contenedor de diseño.
C.
Agregue el componente contenedor de diseño a la sección inicial del tipo de plantilla.
D.
Agregue el componente contenedor de diseño a la sección de estructura del tipo de plantilla.
Es la D.

53
Una aplicación contiene una configuración OSGi que contiene una contraseña.
¿Cómo debería un desarrollador evitar que esta información confidencial se almacene en texto sin formato en JCR?
A.
1. Utilice la consola en /system/console/crypto para cifrar el valor.
2. Cree un valor cifrado para cada instancia de AEM y utilice modos de ejecución para aplicar los diferentes valores o asegúrese de que las instancias relevantes compartan la misma clave maestra.
3. Al cargar el valor en el código, llame a CryptoSupport.unprotect(…) antes de usar el valor.
B.
1. Utilice la consola en /system/console/configMgr y marque la casilla \"encrypt\" antes de guardar una configuración.
2. Utilice valores cifrados que funcionen en todas las instancias.
3. Al cargar el valor en el código, llame a CryptoSupport.unprotect(…) antes de usar el valor.
C.
1. Utilice la consola en /system/console/configMgr y marque la casilla \"encrypt\" antes de guardar la configuración.
2. Cree un valor cifrado para cada instancia de AEM y utilice modos de ejecución para aplicar los diferentes valores o asegúrese de que las instancias relevantes compartan la misma clave maestra.
3. La información confidencial se descifra automáticamente utilizando el servicio CryptoSupport OSGi antes de que se devuelva el valor.
D.
1. Utilice la consola en /system/console/crypto para cifrar el valor.
2. Cree un valor cifrado para cada instancia de AEM y utilice modos de ejecución para aplicar los diferentes valores o asegúrese de que las instancias relevantes compartan la misma clave maestra.
3. La información confidencial se descifra automáticamente utilizando el servicio CryptoSupport OSGi antes de que se devuelva el valor.
Es la A.

54
¿Qué variable de entorno en el script de inicio de AEM debería modificar un desarrollador para permitir la depuración remota?
A.
CQ_HOST
B.
CQ_JVM_OPTS
C.
CQ_PORT
D.
CQ_RUNMODE
Es la B.

55
AEM está instalado en $AEM_HOME.
¿En qué subcarpeta se encuentran los scripts de inicio y apagado de la línea de comandos?
A.
$AEM_HOME/crx-quickstart/bin/
B.
$AEM_HOME/crx-quickstart/scripts/
C.
$AEM_HOME/
D.
$AEM_HOME/crx-quickstart/opt/
Es la A.

56
Un paquete de cliente de una aplicación está en estado \"Instalado\" después de implementarlo con Maven.
¿Qué debe hacer un desarrollador para cambiarlo al estado \"Activo\"?
A.
Utilice la acción \"Actualizar\" para el paquete en la consola web Apache Felix.
B.
Utilice la acción \"Iniciar\" para el paquete en la consola web Apache Felix.
C.
Reinstale el paquete de contenido usando el administrador de paquetes.
D.
Asegúrese de que se cumplan todos los requisitos de OSGi y vuelva a implementarlos utilizando Maven.
Es la C.

57
¿Qué archivo de registro debería utilizar un desarrollador para buscar seguimientos de pila de excepciones?
A.
<aem-install>/crx-quickstart/logs/request.log
B.
<aem-install>/crx-quickstart/logs/error.log
C.
<aem-install>/crx-quickstart/logs/access.log
D.
<aem-install>/crx-quickstart/logs/info.log
Es la B.

58
Un desarrollador necesita configurar conjuntos de valores según los siguientes parámetros:
Varía para diferentes entornos de puesta en escena.
Varía para diferentes rutas de contenido.
Difiere entre autor y publicación.
¿Qué estrategia de implementación debería utilizar el desarrollador para cumplir con estos requisitos?
A.
Una configuración de nube personalizada
B.
Una configuración consciente del contexto con depósitos que utilizan una configuración OSGi
C.
Una configuración OSGi para el conjunto de valores con modos de ejecución
D.
Una propiedad JCR en el nodo raíz de contenido del sitio con heredadoPageProperties
Es la B.

59
¿En qué fase de compilación de Maven se ensambla el paquete de contenido?
A.
compilar
B.
desplegar
C.
paquete
D.
instalar
Es la C.

60
Un desarrollador necesita cambiar la etiqueta \"Sitios\" en la navegación del autor de AEM a \"Sitios web\".
¿Qué acción debería tomar el desarrollador para lograrlo?
A.
Modifique el nodo /libs/cq/core/content/nav/sites actualizando el valor de la propiedad icr:title.
B.
Cambiar el código de /libs/granite/ui/components/shell/clientlibs/shell/js/globalnav.js para mostrar el nuevo valor.
C.
Cree un nuevo nodo /apps/cq/core/content/nav/sites y actualice la propiedad icr:title.
D.
Modifique el código de /libs/granite/ui/components/shell/globalnav/overlay/overlay.jsp para mostrar el nuevo valor.
Es la C.

61
Un sitio AEM experimenta cargas de página más lentas. Un desarrollador necesita identificar las solicitudes de ejecución lenta.
¿Cómo debería un desarrollador analizar las solicitudes con tiempos de respuesta prolongados?
A.
Utilice rlog.jar con el siguiente comando $ java -jar ../opt/helpers/rlogs.jar -n 10 request.log para identificar solicitudes de larga duración.
B.
Utilice proxy.jar con el siguiente comando java -jar proxy.jar <host> <remoteport> <localport> para depurar la comunicación del servidor web y del servidor AEM.
C.
Descargue Heapdumps desde Herramientas > Operaciones > Diagnóstico y analice los Heapdumps utilizando la herramienta Analizador de memoria.
D.
Incruste el componente /libs/foundation/components/timing en el componente de página y verifique el tiempo de carga de la página.
Es la A.

62
¿Qué propiedad se debe utilizar para encontrar el repositorio donde se guardan los cambios de configuración realizados en Web Console?
A.
Identidad persistente (PID)
B.
Repositorio de referencia
C.
Componente.id
D.
Nombre del componente
Es la A.

63
¿Qué afirmación sobre el uso de servicios declarativos al crear un componente OSGi es verdadera?
A.
La anotación @Property se utiliza para hacer referencia a otros servicios desde el tiempo de ejecución del componente por componente.
B.
La anotación @Reference es opcional y se utiliza para definir las propiedades disponibles para el componente.
C.
La anotación @Component es la única anotación requerida y faltante que NO declarará la clase como componente
D.
Se requiere la anotación @Service y describe qué interfaz de servicio proporciona el componente.
Es la C.

64
¿Cuáles tres afirmaciones sobre los permisos de replicación en un recurso son verdaderas? (Elige tres).
A.
Los derechos de replicación se evalúan de abajo hacia arriba en el árbol de nodos.
B.
Permitir derechos de replicación tiene mayor prioridad que denegar derechos de replicación.
C.
Para otorgar derechos de replicación a un usuario en cualquier recurso, el usuario debe tener permisos de lectura para/etc/replication, /bin.
D.
Permitir derechos de replicación tiene menor prioridad que denegar derechos de replicación.
Es la A, B y C.

sesenta y cinco
¿Cuáles son las tres causas por las que Dispatcher deja de actualizar los archivos de caché en el directorio de caché del servidor web? (Elige tres).
A.
La solicitud a la página en cuestión contiene parámetros de cadena de consulta.
B.
La solicitud a la página en cuestión tiene encabezados de autorización y Dispatcher.any no contiene \allowAuthorized.
C.
El agente Dispatcher Flush está deshabilitado en la instancia de publicación.
D.
El URI de solicitud de la página en cuestión siempre debe comenzar con /content.
Es la A, B y C.

66
En una configuración típica de autor, publicación y despachador,
¿Dónde está configurada la descarga del despachador?
A.
En el caso del autor.
B.
En la instancia de publicación
C.
En el módulo despachador.
D.
A nivel de servidor web.
Es la B.

67
¿Qué nombre de jar NO se puede utilizar para instalar una instancia de publicación de AEM?
A.
aem-publicar-p4503, tarro
B.
cq5-publish-4505, tarro
C.
cq5-publish-4503, tarro
D.
cq5-publish_4503, tarro
Es la D.

68
¿Qué propiedad está en desuso al resolver una plantilla (T) que se puede utilizar como plantilla para la página (P)?
A.
Propiedad cq:allowedTemplates del subnodo jcr:content de P o un antepasado de P
B.
propiedad permitidaPaths de T
C.
permitidoPropiedad de los padres de T
D.
propiedad de los hijos permitidos de la plantilla de P
Es la A.

69
Supongamos que hay varias instancias de publicación (publ, pub2 y pub3) que atienden solicitudes para un sitio de compras en línea. El usuario final puede proporcionar reseñas y comentarios sobre cada producto y sobre su experiencia de compra. El módulo Dispatcher está implementado para equilibrar la carga de las solicitudes para publicar instancias y solo hay una instancia de autor, denominada autor, donde los editores de contenido crean las páginas. Cuando un usuario, llamado Usuario A, proporciona comentarios y la solicitud es atendida por la Instancia de publicación publ, ¿de qué tres maneras se replican estos comentarios en pub2 y pub3? (Elija tres).
A.
Configure el vaciado del Dispatcher para el autor que apunta a un URI de servidor web en el que se implementó y configuró Dispatcher.
B.
Configure agentes de replicación para el autor que apunten a publ, pub2 y pub3.
C.
Configure agentes de replicación inversa para el autor que apunten a publ, pub2 y pub3.
D.
Configurar un agente estático para el autor.
Es la A, C y D.

70
¿Qué plantilla permitía que la expresión Rutas permitiera crear una página con la ruta/contenido/principal/página1/página2?
A.
/contenido/principal/?
B.
/content/main/[^/]+(/,*)?
C.
/contenido/principal/[A/]+[A/]
D.
/contenido/principal/*
Es la B.

71
Desea invertir el orden de visualización de los componentes agregados a parsys proporcionados de fábrica. Los componentes agregados recientemente siempre deben mostrarse en la parte superior.
Al implementar el nuevo componente parsys, ¿qué dos opciones son válidas? (Escoge dos).
A.
Copie el componente parsys y todo su contenido de /libs/foundation/components/parsys a /apps/foundation/components/parsys y modifique los JSP aplicables.
B.
Copie los únicos JSP del componente parsys aplicables de /libs/foundation/components/parsys a/apps/foundation/components/parsys y modifíquelos.
C.
Cree un nuevo componente parsys en/apps/<projectid>/components/content/myparsys y aplique la propiedad sling:resourceSuperType=foundation/components/parsy$, modifique el JSP según corresponda.
D.
Cree un nuevo componente parsys desde cero.
Es la B y C.

72
Ha iniciado sesión como usuarioA y se está haciendo pasar por el usuarioB.
¿Cómo se registran sus actividades en access.log?
A.
El usuario registrado es \"usuarioB suplantado por usuarioA\"
B.
El usuario registrado es \"usuarioA en nombre del usuarioB\"
C.
El usuario registrado es \"usuarioB\"
D.
El usuario registrado es \"usuarioA\"
Es la C.

73
¿Qué paquete OSGI debería deshabilitarse para restringir la visualización de registros basados en web?
A.
Soporte de Adobe CRXDE (com.day.crx.crxde-support)
B.
Implementación de Apache Sling OSGiLogService (org.apache.sling.commons.logservi
C.
Registro de solicitudes de granito (com.adobe.granite.requests.logging)
D.
Biblioteca Day Commons: soporte de entrada/salida (day-commons-io)
Es la A.

74
¿Qué complemento de Maven permite la instalación directa del paquete en AEM?
A.
complemento-maven-sling
B.
complemento-maven-scr
C.
complemento-paquete-maven
D.
complemento-maven-javadoc
Es la A.

75
Al instalar Internet Information Services, ¿qué característica de desarrollo de aplicaciones debe habilitarse para funcionar con AEM Dispatcher?
A.
Filtros ISAPI
B.
Incluye del lado del servidor
C.
CGI
D.
Extensiones ISAPI
Es la D.

76
¿Cuál se debe configurar para crear un archivo de registro personalizado con un nivel de registro diferente?
A.
Configuración del registro de Apache Sling
B.
Configuración del lector de registro Apache Sling
C.
Configuración del registrador Apache Sling Logging
D.
Configuración de registro de Apache Sling
Es la C.

77
¿Cuál es un modo de ejecución de cabestrillo válido y listo para usar?
A.
activar
B.
producción
C.
cargar contenido de muestra
D.
contenido de muestra
Es la D.

78
¿Qué comando ingresaría en su secuencia de comandos de CQ Component para obtener la ruta de la plantilla de una página AEM en la instancia de publicación?
A.
. Propiedades-get(\"cq:temp|ate\"/-);
B.
Página.getTemplate();
C.
Página.getTemplate().getPath();
D.
recurso.getTemplate.getPath();
Es la C.

79
El mismo parámetro de configuración OSGI está presente en /libs/*/config.. Y /apps/*/config..andmodified en ambas ubicaciones, así como a través de Felix Console.
Durante el tiempo de ejecución, ¿cuál es el orden de recarga?
A.
/libs/*/config, Felix Console y /apps/*/config
B.
Consola Felix,/apps/*/config y /llbs/*/config
C.
/llbs/*/config, /apps/*/config y Felix Console
D.
/apps/*/config, /libs/*/config y Felix Console
Es la B.

80
¿Cómo se elimina una propiedad dentro de un objeto Nodo?
A.
node.setProperty(npropertyName\",\"\");
B.
node.setProperty(\"propertyName\",null);
C.
node.delete(\"nombre de propiedad\");
D.
node.removeProperty(\"propertyName\");
Es la B.

81
Al configurar un archivo de registro personalizado en una instancia de publicación de producción, ¿qué dos afirmaciones son verdaderas? (Escoge dos).
A.
La URL de la consola web http://<aemhost>:<port>/system/console/slinglog proporciona información sobre Sling Logging.
B.
Comience siempre con el nivel de registro DEBUG en el servidor de producción para obtener más información.
C.
Cree un modo de ejecución basado en la configuración de Apache Sling Logging Logger para el modo de ejecución de publicación como org.apache.sling.commons.log.LogManager.factory.config-<identlfier>.
D.
La ubicación física del archivo de registro personalizado NO es relativa a la carpeta crx-quickstart.
Es la A y C.

82
¿Qué hace el comando vlt 'resolver'?
A.
Elimina los marcadores de conflicto.
B.
Resuelve semánticamente conflictos.
C.
Elimina los archivos de artefactos relacionados con conflictos.
D.
Permite comprometer el camino con los conflictos.
Es la C.

83
Agrega \"sling.run.modes=publish/f en sling.properties e inicia la instancia usando el comando\"java -jar aem-6-p4502.jar -r Author\".
¿En qué modo se iniciará la instancia?
A.
Tanto autor como publicar.
B.
Autor
C.
Publicar
D.
Debido a un conflicto en los modos de ejecución, AEM no se iniciará
Es la C.

84
¿Cuáles tres afirmaciones de mejores prácticas son verdaderas con respecto a permisos y privilegios? (Elige tres).
A.
Los derechos de acceso no deben asignarse usuario por usuario.
B.
Utilice declaraciones de denegación para especificar los derechos de acceso de un grupo de usuarios.
C.
Después de la instalación, actualice las contraseñas de los usuarios predeterminados para evitar violaciones de seguridad.
D.
Utilice una instalación de prueba para garantizar las relaciones correctas entre Usuarios y Grupos,
Es la A, C y D.

85
¿Cuál es la forma óptima de transferir contenido del repositorio JCR al sistema de archivos local?
A.
Utilice el comando de exportación VLT.
B.
Cree y cree un paquete utilizando el administrador de paquetes CQ. Descargue y descomprima el paquete en el sistema de archivos local.
C.
Utilice el comando de importación VLT.
D.
Descargue contenido del repositorio como un archivo XML.
Es la A.

86
Una instancia de autor y publicación tiene un almacén de datos compartido con una gran cantidad de activos. ¿Qué tipo de replicación se recomienda para evitar la duplicación de datos?
A.
Replicación asincrónica.
B.
Replicación sin binarios.
C.
ClusterDataStore sin agentes de replicación.
D.
. Replicación sin control de versiones.
Es la B.

87
¿Qué dos URL mostrarán los registros del servidor? (Escoge dos.)
A.
http://{servidor}/system/console/status-slinglogs
B.
http://{servidor}/system/console/slinglog
C.
http://{servidor}/bin/crxde/registros
D.
http://{servidor}/system/console/logs
Es la A y B.

88
La ubicación de instalación predeterminada para AEM 6.0 en un servidor de aplicaciones es \${user.dfr}/crx-quickstart. ¿Qué método se utiliza para cambiar esta ubicación?
A.
Configure el parámetro sling.home en el archivo WEB-INF/web.xml del archivo AEM WAR después de la implementación.
B.
Configure el parámetro sling.home en el archivo WEB-INF/web.xml del archivo AEM WAR antes de la implementación.
C.
Configure el parámetro sling.run.modes en el archivo WEB-INF/web.xml del archivo AEM WAR después de la implementación.
D.
Configure el parámetro sling.run.modes en el archivo WEB-INF/web.xml del archivo AEM WAR antes de la implementación
Es la B.

89
¿Qué tres afirmaciones son verdaderas cuando una instancia de autor de AEM se inicia en modo de depuración? (Elige tres.)
A.
Cuando AEM se inicia en modo de depuración, no obliga a JVM a bifurcar un proceso independiente.
B.
AEM comienza con la opción -Xdebug (por ejemplo, java -Xdebug -Xnoagent -Djava.compiler=NONE Xmnjdwp:transport=dt_socket,server=y,suspend=n/address=30303–jaraem6~autbor-p4502).
C.
AEM comienza con una opción -debug (por ejemplo, Java -jaraem6-author-p4502 -debug 30303) desde la línea de comandos
D.
Cuando AEM se inicia en modo de depuración, obliga a JVM a bifurcar un proceso.
Es la B, C y D.

90
¿Cómo se puede incluir un JSP en una plantilla atractiva?
A.
<cq:include script=\" Include.jsp7>
B.
<div data-sly-include=\"include.jsp\"></div>
C.
<div data-sly-use=\"include.jsp\"></div>
D.
<%@ incluir archivo=\"1nclude.jsp\" %>
Es la B.

91
Quiere restringir el tamaño de un archivo de registro personalizado y habilitar la rotación del archivo de registro. ¿Qué configuración de Apache Sling se debe cambiar en la consola web de AEM?
A.
Comprobación del estado compuesto de Apache Sling
B.
Administrador de trabajos de Apache Sling
C.
Configuración del escritor de registro Apache Sling
D.
Configuración del registrador Apache Sling Logging
Es la C.

92
Estás creando una nueva configuración OSGi en el repositorio. ¿Cuándo se aplican los cambios de configuración?
A.
Al detener e iniciar el paquete que refiere el servicio,
B.
Los cambios se aplican tan pronto como se actualiza el nodo reiniciando el servicio.
C.
Inmediatamente.
D.
Después de reiniciar la instancia de CQ.
Es la C.

93
¿Qué archivo de registro en <cq-installation-dir>/crx-quickstrat/logs debería mirar para ver los mensajes de registro que indican eventos durante el inicio?
A.
Registro de auditoría
B.
Registro de errores
C.
salida estándar.log
D.
stderr.log
Es la C.

94
¿Dónde se almacenan los permisos de nodo ACL para un nodo en el JCR?
A.
Se almacenan como permiso ACL en los grupos en /home/groups
B.
Se almacenan como permisos ACL en el nodo de usuario en/home/users.
C.
Se almacenan como rep: nodo de política en el mismo nodo.
D.
Se almacenan dentro del nodo de plantilla en/etc/designs
Es la C.

95
Crea un nodo nt: no estructurado dentro de las aplicaciones en CRXDE Lite y luego crea una carpeta dentro de las aplicaciones y hace clic en guardar. ¿Cuál es el comportamiento esperado?
A.
La carpeta y el nodo nt:unstructured, ninguno de ellos se guardará.
B.
La carpeta se guardará después de actualizar las aplicaciones.
C.
La carpeta y el nodo nt:unstructured se guardarán.
D.
La carpeta se guardará.
Es la C.

96
¿Qué tres afirmaciones sobre la configuración de un entorno de desarrollo para un nuevo proyecto AEM llamado \"banco de clientes\", que contiene servicios OSGi personalizados y componentes AEM son verdaderas? (Elige tres).
A.
http://<aemhost>:<aemport>/system/console/depfinderls utilizado para encontrar las dependencias
B.
El repositorio de archivos jar de dependencia de AEM puede ser http://repo.adobe.com/nexus/content/groups/public/ o el Apache Archiva local con todas las dependencias necesarias.
C.
Cree un proyecto Maven con archtypemultimodule-content-package-archetype desde el repositorio http://repo.adobe.com/nexus/content/groups/public/
D.
Cree un proyecto Maven con archtype simple-content-package-archetype desde el repositorio http://repo.adobe.com/nexu5/content/gmups/public/
Es la B, C y D.

97
¿Cuál es la diferencia entre extender un componente y superponer componentes?
A.
No hay diferencia.
B.
La superposición sirve para anular la funcionalidad predeterminada del componente. Extender consiste en ampliar la funcionalidad del componente mediante el uso de jerarquía de recursos y supertipos.
C.
La superposición sirve para ampliar la funcionalidad del componente mediante el uso de jerarquía de recursos y supertipos. Extender es anular la funcionalidad del componente predeterminado.
D.
Extender el componente significa extender el comportamiento del componente básico. El componente de superposición anula el comportamiento del componente personalizado.
Es la B.

98
¿Cuál tiene la mayor preferencia durante el registro de Sling Servlet?
A.
sling.servlet.rutas
B.
sling.servlet.tiposderecursos
C.
sllng.servlet.extensión
D.
sling.servlet.selectores
Es la A.

99
¿Qué tres nombres de jar de AEM iniciarán AEM en modo de autor? (Elige tres.)
A.
inicio rápido-4502.jar
B.
cq5-autor-p4502.jar
C.
aem-publicar.jar
D.
cq5-autor-4502.jar
Es la A, B y D.

100
Al modificar la configuración de un paquete OSGi desde Felix Web Console, ¿cuándo se aplican los cambios de configuración?
A.
Después de reiniciar la instancia CQ,
B.
Después de reiniciar el paquete.
C.
Después de reiniciar el servicio.
D.
Inmediatamente ya que tiene prioridad en tiempo de ejecución.
Es la D.

101
cual st¿La afirmación sobre las bibliotecas cliente es cierta?
A.
Un tipo de nodo de biblioteca cliente tiene el valor jcr:primaryType nt:folder
B.
La biblioteca cliente para un proyecto llamado myapp debe definirse en /etc/clientlibs/myapp
C.
Para incluir solo archivos CSS en el header.jsp de la biblioteca cliente llamada \"myproject.all\" utilice <cqincludeClientLib categorías=\"myproject all\"/>
D.
Utilice el servicio Day CQ HTML Library Manager en la consola Felix para comprimir y minimizar el CSS generado para un mejor rendimiento en los sistemas de producción.
Es la D.

102
¿Qué afirmación sobre una instancia de AEM iniciada con el modo de ejecución de autor es correcta?
A.
El modo de ejecución de autor NO PUEDE usarse para obtener una vista previa de un sitio web,
B.
El sidekick NO aparece en el modo autor,
C.
El modo de ejecución se puede cambiar para publicar después de la instalación,
D.
El modo de ejecución NO SE PUEDE cambiar para publicar después de la instalación.
Es la D.

103
¿Cuál es la forma correcta de utilizar clientlibs con Sightly?
A.
<meta data-sly-template=\"\${clientLib.all@ categorías=,your.cllentlib,}\"data-sly-unwrap></meta>
B.
<meta data-sly-call=\"\${clientLib.all @ categorías-,your.clientlib,}M data-sly-unwrap></meta>
C.
<meta data-sly-use-\"\${clientLib.all @ categorfes^'your.clientlib'}\" data-sly-unwrap></meta>
D.
<meta data-sly-include=n\${clientLib.all @ categorías='your.cllentlib'}\" data-sly-unwrap></meta>
Es la B.

104
Está utilizando IIS como servidor web con el despachador y la ruta de la carpeta raíz de su sitio web es /content/mycompany. La página /content/mycompany/about us se edita y activa en la instancia de publicación de AEM. Suponiendo que el agente de descarga del despachador NO esté disponible y IIS esté instalado en C:\inetpub del servidor Windows, ¿qué se debe hacer para que la nueva versión de la página se vea desde el servidor web IIS?
A.
Elimine las subcarpetas del directorio \"C:\inetpub\wwwroot\" para borrar el caché de contenido.
B.
Nada.
C.
Elimine el directorio \"C:\inetpub\tempn para borrar el caché de contenido.
D.
Elimine el siguiente directorio \"C:\inetpub\wwwroot\content\mycompany\" para borrar el caché de contenido.
Es la B.

105
¿Cuál es una forma válida de crear un servicio OSGI?
A.
clase MyServiceImpl extiende ServiceRegistry { }
B.
Clase de servicioMyServiceImpl extiende MyService}
C.
©Componente ©Clase de servicio MyServiceImpl extiende MyService
D.
/** * * */ classMyServiceImpI extiende MyService {
Es la C.

106
Usando la configuración predeterminada de Dispatcher, ¿qué tipo de URL tendrá una respuesta almacenada en caché por Dispatcher?
A.
URL denegada por las secciones /cache en el archivo Dispatcher.any.
B.
URL sin extensión de archivo.
C.
URL con parámetros de consulta.
D.
URL con una extensión en su sufijo.
Es la D.

107
¿Cómo proporciona AEM el modelo de página a una aplicación de página única (SPA)?
A.
El SPA solicita el HTML de AEM usando HTL o JSP
B.
El SPA solicita la estructura a través del DOM
C.
El SPA solicita el modelo de página a los Servicios de Contenidos.
D.
El modelo de página SPA se proporciona en las bibliotecas del cliente.
Es la C.

108
¿Cuál sería un buen caso de uso para utilizar AEM para editar su aplicación de página única (SPA)?
A.
Le permite implementar el SPA
B.
Implementar el SPA en dispositivos nativos
C.
Evita el servicio de un desarrollador front-end.
D.
Agrega la capacidad para que los autores interactúen con el contenido SPA.
Es la D.


109

Un cliente solicitó compartir una versión HTML del informe de cobertura de prueba para el proyecto AEM.

¿Qué complemento debería utilizar el desarrollador de AEM para generar un informe de cobertura de prueba utilizando el arquetipo más reciente?
A.
<plugin><groupId>org.codehaus.mojo</groupId><artifactId>selenium-maven-plugin</artifactId>....</plugin>

B.
<plugin><groupId>org.apache.maven.plugins</groupId><artifactId>maven-surefire-plugin</artifactId>....</plugin>

C.
<plugin><groupId>org.apache.maven.plugins</groupId><artifactId>maven-checkstyle-plugin</artifactId>....</plugin>

D.
<plugin><groupId>org.apache.maven.plugins</groupId><artifactId>maven-pmd-plugin</artifactId>....</plugin>


https://dzone.com/articles/reporting-code-coverage-using-maven-and-jacoco-plu

Es la B.
110

AEM admite capacidades de entrega tradicional, sin cabeza e híbrida de varias maneras.

¿Cuáles de las siguientes son las herramientas que permiten la capacidad de experiencia omnicanal en AEM?
A.
1. Exportador de modelos Sling para fragmentos de contenido y fragmentos de experiencia
2. API HTTP de activos de AEM
3. Servicios de contenido

B.
1. Exportador de modelos Sling para fragmentos de contenido y fragmentos de experiencia
2. API HTTP de activos de AEM
3. API GraphsQL para fragmentos de contenido y fragmentos de experiencia

C.
1. API HTTP de activos de AEM
2. API GraphsQL para fragmentos de contenido y fragmentos de experiencia
3. Servicios de contenido

D.
1. Exportador de modelos Sling para fragmentos de contenido y fragmentos de experiencia
2. API GraphsQL para fragmentos de contenido y fragmentos de experiencia
3. Servicios de contenido


https://medium.com/adobetech/headless-commerce-content-management-with-aem-io-runtime-87c315283b74

Es la A.
111

Un desarrollado tiene múltiples proveedores de autenticación LDAP. No es necesario que el usuario pase la prueba de autenticación del proveedor de autenticación.

- Si la autenticación tiene éxito, el control vuelve a la persona que llama; no hay ningún proveedor de autenticación posterior inactivola lista se ejecuta.
- Si la autenticación falla, la autenticación continúa en la lista de proveedores.

¿Cuál debería ser el valor del indicador de control JAAS en la configuración del módulo de inicio de sesión externo Apache Jackrabbit Oak?
A.
OPCIONAL

B.
SUFICIENTE

C.
REQUERIDO

D.
OBLIGATORIO


https://docs.oracle.com/javase/8/docs/api/javax/security/auth/login/Configuration.html

Es la B.
112

Un proyecto requiere compartir información entre componentes SPA.

¿Cuál es el enfoque menos complejo para lograr ese objetivo?
A.
Implementar una biblioteca de estados para compartir los estados de los componentes.

B.
Centralice la lógica y transmita a los componentes necesarios.

C.
Utilice accesorios de modelo para profundizar y acceder o establecer el estado de los componentes deseados.

D.
Personalice y amplíe el componente contenedor para aprovechar la jerarquía de objetos.


https://experienceleague.adobe.com/docs/experience-manager-64/developing/headless/spas/spa-getting-started-react.html?lang=en#sharing-information-between-spa-components

Es la B.
113

Un desarrollador de AEM crea un índice OAK Lucene personalizado para /content/mywebsite en el nodo /oak:index. Al probar el sitio en vivo, se descubre que el índice no se aplica a ninguna consulta dentro del sitio web. La AEM está recogiendo los índices predeterminados de Lucene con un alto coste.

¿Cuál es la causa más probable de este problema?
A.
Al índice OAK Lucene personalizado le faltan las propiedades evaluaPathRestrictions y queryPaths.

B.
El índice OAK Lucene personalizado debe reemplazarse con el índice de propiedad OAK Lucene.

C.
Al índice OAK Lucene personalizado le faltan la propiedad evaluaPathRestrictions y la propiedad includePaths.

D.
El índice OAK Lucene personalizado debe incluir la propiedad de impulso para clasificarlo por encima del índice Lucene predeterminado.


https://experienceleague.adobe.com/docs/experience-manager-65/deploying/practices/best-practices-for-queries-and-indexing.html?lang=en

Es la B.
114

Se requiere una aplicación AEM para crear direcciones URL absolutas para el dominio web en el que se supone que se ejecutará la aplicación. El desarrollador quiere crear las URL absolutas en el servidor para facilitar otros casos de uso para SEO y análisis.

¿Cuál de las siguientes opciones funcionaría para el desarrollador?
A.
Configure Day CQ Link Externalizer para eliminar el dominio del autor.

B.
Configure Day CQ Link Externalizer para agregar una asignación de dominio al servidor de creación y publicar la página.

C.
Configure Day CQ Link Externalizer para agregar una asignación de dominio al editor/servidor web.

D.
Configure las reglas de reescritura de Apache para crear las URL absolutas.


https://experienceleague.adobe.com/docs/experience-manager-65/developing/platform/externalizer.html?lang=en#using-the-externalizer-service

Es la C.
115

Un desarrollador tiene el requisito de agregar una nueva pestaña personalizada a las propiedades de una página específica. El sling:resourceType de esa página es \"foo/components/page\" y el sling:resourceSuperType de esa página es \"core/wcm/components/page/v2/page\".

¿Cuál es el mejor enfoque?
A.
1. Copie el cuadro de diálogo cq: desde app/core/wcm/components/page/v2/page a app/foo/components/page
2. Elimina todas las pestañas.
3. Agregue la pestaña personalizada

B.
1. Identifique la ubicación del nodo cq:dialog desde app/core/wcm/components/page/v2/page
2. Identificar la última entrada del nodo de artículos.
3. Agregue la pestaña personalizada después de ese nodo.

C.
1. Copie el cuadro de diálogo cq: desde app/core/wcm/components/page/v2/page a app/foo/components/page
2. Identificar la última entrada del nodo de artículos.
3. Agregue la pestaña personalizada después de ese nodo.

D.
1. Cree un nuevo nodo cq:dialog en app/foo/components/page
2. Agregue los nodos cq:dialog > content > items
3. Agregue la pestaña personalizada en este nodo.


https://helpx.adobe.com/experience-manager/kt/sites/using/page-properties-technical-video-develop/6-3-page-properties-technical-video-develop.html
Es la A.
116

Una aplicación AEM personalizada contiene el paquete A y el paquete B. El paquete A depende del paquete B a través de Import-Package.

¿Cómo se pueden implementar ambos paquetes de manera más eficiente en todos los entornos?
A.
Incruste ambos paquetes en un paquete de contenido y use la propiedad 'installationOrder' en las propiedades del paquete para obtener el orden correcto de instalación del paquete.

B.
Cree un paquete de contenido por paquete y utilice una dependencia de paquete para garantizar el orden de instalación.

C.
Utilice Felix Web Console para cargar los paquetes en el orden correcto

D.
Incruste ambos paquetes en un paquete de contenido; la dependencia a través de Import-Package es suficiente para garantizar una instalación correcta


https://stackoverflow.com/questions/32455624/order-of-deployment-of-bundles
Es la D.
117

Un desarrollador de AEM está configurando un nuevo proyecto de AEM para un SPA personalizado que utilizará el Editor de SPA.

¿Qué comando debería utilizar el desarrollador?
A.
mvn -B arquetipo:generar \
   -D archetypeGroupId=com.adobe.granite.archetypes \
   -D arquetipoArtifactId=aem-proyecto-arquetipo \
   -D versiónarquetipo=23 \
   -D módulo de interfaz = angular

B.
mvn -B arquetipo:generar \
   -D archetypeGroupId=com.adobe.granite.archetypes \
   -D arquetipoArtifactId=aem-proyecto-arquetipo \
   -D versiónarquetipo=23 \
   -D módulo de interfaz = general

C.
mvn -B arquetipo:generar \
   -D arquetipoGroupId=com.adoser.granito.arquetipos \
   -D arquetipoArtifactId=aem-proyecto-arquetipo \
   -D versiónarquetipo=23 \
   -D módulo de interfaz = reaccionar

D.
mvn -B arquetipo:generar \
   -D archetypeGroupId=com.adobe.granite.archetypes \
   -D arquetipoArtifactId=aem-proyecto-arquetipo \
   -D versiónarquetipo=23 \
   -D sdkVersion=última


https://experienceleague.adobe.com/docs/experience-manager-core-components/using/developing/archetype/overview.html?lang=en

Es la D.
118

Una aplicación AEM debe tener alta disponibilidad y escalabilidad en un escenario geográfico distribuido.

¿Qué enfoque se debe utilizar para cumplir con los requisitos?
A.
Espera en frío TarMK

B.
Granja TarMK

C.
Oak Cluster con conmutación por error de MongoMK en varios centros de datos

D.
Oak Cluster con conmutación por error de MongoMK en un único centro de datos


https://experienceleague.adobe.com/docs/experience-manager-65/deploying/deploying/recommended-deploys.html?lang=en

Es la C.
119

Un desarrollador de AEM debe eliminar la opción de pretítulo desde el cuadro de diálogo del componente Core Teaser.

Comienzan por:

1. Crear un componente con el componente Core Teaser como recursoSuperType
2. Agregar una carpeta _cq_dialog debajo del componente

¿Dónde están los próximos pasos correctos que debe seguir el desarrollador de AEM?
A.
1. Navegue a /apps/core/wcm/components/teaser/v1/teaser/cq:dialog/content/items/tabs/items/text/items/columns/items/column/items en CRX.
2. Elimine el nodo secundario del título previo.

B.
1. Cree un archivo llamado .content.xml dentro de esa nueva carpeta.
2. Copie solo la estructura del nodo que se modificará en .content.xml.
3. Agregue sling:hideChildren[pretitle] al nodo principal del nodo pretitle.

C.
1. Cree un archivo llamado dialog.xml dentro de esa nueva carpeta.
2. Copie toda la estructura del nodo desde el dialog.xml del componente Core Teaser.
3. Elimine el nodo de pretítulo.

D.
1. Navegue hasta el cuadro de diálogo de nuevos componentes en CRX.
2. Elimine el nodo secundario del título previo.


https://experienceleague.adobe.com/docs/experience-manager-64/developing/components/hide-conditions.html?lang=en

Es la B.
120

¿Qué está fuera del alcance de la herramienta Detector de patrones al realizar una actualización de AEM?
A.
rep: Compatibilidad de nodos de usuario (en el contexto de la configuración de OAuth)

B.
Compatibilidad con versiones anteriores de la versión AEM anterior

C.
OSGI agrupa el desajuste entre exportaciones e importaciones

D.
Definiciones de índices de roble para compatibilidad


https://experienceleague.adobe.com/docs/experience-manager-64/deploying/upgrading/pattern-detector.html?lang=en

Es la B.


121

Una aplicación AEM desea configurar el arrendamiento múltiple utilizando las mejores prácticas recomendadas por Adobe y vincularle múltiples configuraciones.

¿Cuál de las siguientes opciones es recomendable?
A.
importar org.osgi.service.metatype.annotations.AttributeDefinition;
importar org.osgi.service.metatype.annotations.ObjectClassDefinition;
@ObjectClassDefinition(nombre = \"Mi configuración\")

B.
importar org.osgi.service.metatype.annotations.Component;
importar org.osgi.service.metatype.annotations.Designate;
@Component(servicio = ConfigurationFactory.clase)
@Designate(ocd = ConfigurationFactoryImpl.Config.class, fábrica = verdadero)

C.
importar org.apache.felix.src.annotations.Component;
@Component(label = \"Mi configuración\", metatype = true, factory = true)

D.
importar org.osgi.service.metatype.annotations.Component;
@Component(servicio = ConfigurationFactory.clase)


https://sourcedcode.com/blog/aem/how-to-enable-configuration-for-osgi-components-with-r6

Es la B.
122

¿Qué opción se debe utilizar para sincronizar los datos del usuario entre servidores de publicación en una granja de publicación?
A.
Usando el complemento Vault

B.
Agentes de replicación

C.
Usando rizo

D.
Uso de la distribución de cabestrillo


https://experienceleague.adobe.com/docs/experience-manager-65/administering/security/sync.html?lang=en

Es la D.
123

Una aplicación AEM debe implementar pruebas de usuario mediante AEM Mocks.

¿A qué dos servicios Class AemContext proporciona acceso a los desarrolladores? (Escoge dos).
A.
Agente de descarga

B.
Sesión

C.
Administrador de etiquetas

D.
Sesión de flujo de trabajo

MI.
ModeloFábrica


https://experienceleague.adobe.com/docs/experience-manager-learn/getting-started-wknd-tutorial-develop/project-archetype/unit-testing.html?lang=en

Es la C y E.
124

Un cliente agrega bibliotecas cliente de terceros para agregar algunas funciones en una aplicación AEM existente, lo que reducirá significativamente el rendimiento.

¿Cuál es la mejor opción para que el AEM Desarrollado optimice el sitio?

A.
Reconstruir bibliotecas de cliente

B.
Depurar la biblioteca del cliente de terceros y corregir el código

C.
Incruste bibliotecas de clientes para consolidarlas en menos archivos

D.
Crear una nueva aplicación AEM desde Scartch


https://helpx.adobe.com/experience-manager/kb/optimize-aem-site-rendimiento.html

Es la C.
125

Mientras realiza una actualización de AEM local, el desarrollador observa un problema en los registros del servidor donde todos están activos excepto el paquete ACS Commons, que es incompatible debido a una versión anterior.

¿Qué debe hacer el desarrollador para resolver este problema?

A.
Solicite la credencial de administrador e instale el nuevo paquete en la consola Felix

B.
Actualiza el complemento en pom.xml

C.
Coloque el nuevo paquete en la ruta crx-quickstart/install y reinicie

D.
InstaLlene el nuevo jar usando el administrador de paquetes en el entorno anterior.


https://experienceleague.adobe.com/docs/experience-manager-65/deploying/upgrading/pre-upgrade-maintenance-tasks.html?lang=en#remove-updates-install-directory

Es la C.
126

Según el último arquetipo de AEM, ¿cuáles son los dos propósitos principales del módulo it.launcher? (escoge dos)

A.
Empaquetar las pruebas de Junit que luego se ejecutarán en la diapositiva del servidor

B.
Agrupe el código que implementa ui.test en el servidor

C.
Mantenga todos los datos simulados del usuario para las pruebas de Junit

D.
Activar la ejecución remota de Junit.

MI.
Agrupe todas las pruebas de Hobbes para automatizar las pruebas de IU.


https://github.com/styladev/adobeExperienceManagerStylaPlugin

Es la B y D.
127

Un desarrollador de AEM necesita automatizar las pruebas de la interfaz de usuario.

¿Qué herramienta se proporciona en el marco AEM para pruebas de IU automatizadas?

A.
Jazmín

B.
HobbesJS

C.
Sinón

D.
Moca


https://experienceleague.adobe.com/docs/experience-manager-65/developing/components/hobbes.html?lang=en#components

Es la B.
128

Una aplicación AEM requiere que un usuario del servicio tenga acceso de ESCRITURA a los nodos secundarios, pero no al nodo principal.

¿Qué consola debería utilizar el desarrollador para aplicar la ACL adecuada?

A.
Consola de gestión de usuarios

B.
Consola de administración de grupos

C.
Consola de clientes OAuth

D.
Consola de permisos


https://experienceleague.adobe.com/docs/experience-manager-65/administering/security/security.html?lang=en#managing-users-and-groups

Es la A.
129

¿Qué configuración tiene prioridad en tiempo de ejecución cuando existen varias configuraciones en AEM?

A.
Cualquier archivo .config de <cq-installation-dir>/crq-quickstart/launchpad/config/.... en el sistema de archivos local

B.
Nodos de repositorio con tipo sling:OsgiConfig en /libs/*/config...

C.
Configuraciones que existen en la Consola Web

D.
Nodos del repositorio en /apps/*/config...


https://experienceleague.adobe.com/docs/experience-manager-65/deploying/configuring/configuring-osgi.html?lang=en#configuration-details

Es la D.
130

Un desarrollador de AEM recibe los requisitos para Sling Models en un formato yaml legible por humanos. Es necesario crear una aplicación personalizada. La dependencia es como se muestra:

<dependencia>
<groupId>com.fasterxml.jackson.core</groupId>
<artifactId>jackson-databind</artifactId>
<versión>2.8.4</versión>
<ámbito>proporcionado</ámbito>
</dependencia>
<dependencia>
<groupId>com.fasterxml.jackson.dataformat</groupId>
<artifactId>jackson-dataformat-yaml</artifactId>
<versión>2.8.4</versión>
<ámbito>proporcionado</ámbito>
</dependencia>

Después de implementar ModelExporter, ¿qué método se debe utilizar para cumplir con este requisito?

A.
1. Cree modelos OSGI para exportar como yalm
2. Configurar el tipo mime en el servicio de tipo MIME Apache Sling

B.
1. Cree modelos de Sling para exportar como yaml
2. Configurar el tipo mime en el servicio de tipo MIME Apache Sling

C.
1. Cree modelos OSGI para exportar como yaml
2. Configurar el tipo mime en Apache Sling Servlet/Script Resolver y Error Handler

D.
1. Cree modelos de Sling para exportar como yaml
2. Configurar el tipo mime en el filtro de referencia de Apache Sling


https://taradevko.com/aem/sling-model-exporter-now-really-custom/

Es la B.
131

Una aplicación AEM requiere integración del servicio LDAP para sincronizar usuario/grupo
¿Qué dos configuraciones OSGI se requieren para la integración LDAP en AEM? (Escoge dos)

A.
Módulo de inicio de sesión externo Apache Jackrabbit Oak

B.
Proveedor de servidor Apache Jackrabbit Oak Solr

C.
Controlador de sincronización predeterminado de Apache Jackrabbit Oak

D.
Configuración de CUG de roble Apache Jackrabbit

MI.
Apache Jackrabbit Oak Proveedor de acción autorizado


https://experienceleague.adobe.com/docs/experience-manager-65/administering/security/ldap-config.html?lang=en#configuring-the-ldap-identity-provider

Es la A y C.
132

¿Qué URI se debe utilizar para configurar un agente de descarga para un despachador que escucha en el puerto 8080?

A.
http://<dispacherHost>:8080/cache.invalidate

B.
http://<dispacherHost>:8080/dispatcher/cache.invalidate

C.
http://<dispacherHost>:8080/invalidate.cache

D.
http://<dispacherHost>:8080/disptcaher/cache.invalidate


https://experienceleague.adobe.com/docs/experience-manager-dispatcher/using/configuring/page-invalidate.html?lang=en#setting-up-aem-user-accounts

Es la C.
133

PageModelManager de AEM SPA aprovecha el exportador de modelos JSON.

¿Qué dos metacampos están expuestos a través de ese exportador? (Escoge dos))

A.
:padre

B.
:longitud

C.
:niños

D.
:recurso

MI.
:tipo


https://experienceleague.adobe.com/docs/experience-manager-64/developing/headless/spas/spa-blueprint.html?lang=en#general-concepts

Es la C y E.

134

Un desarrollador de AEM necesita crear un archivo de registro para el proyecto.

¿Qué siguiente paso debería dar el desarrollador?

A.
Cree un archivo de registro en /var/system/configuration... carpetas específicas del modo de ejecución.

B.
Cree un archivo de registro en /apps/system/configuration... carpetas específicas del modo de ejecución.

C.
Cree un archivo de registro en /apps/myproject/configuration... carpetas específicas del modo de ejecución.

D.
Solicite a AMS/DevOps acceso de administrador para crear un archivo de registro a través de la consola


https://helpx.adobe.com/experience-manager/using/custom_log_file.html

Es la C.
135

Un desarrollador crea tdos clases. ClassA tiene el siguiente código:

paquete com.aem.abc;
importar org.slf4.Logger:
importar organización slf4.LoggerFactory;
clase pública ClaseA{
registrador final estático privado registrador = LoggerFactory.getLogger(this.getClass());
    método de clase vacío público() {
        logger.debug(\"Mensaje del método Clase A\");
     }
}

El desarrollador crea un registro personalizado custom.log con nivel de depuración en el soporte de registro OSGI sling para el paquete Java com.aem.abc. El desarrollador agrega otra clase ClassB con el siguiente código:

paquete com.aem.xyz;
importar org.slf4.Logger:
importar organización slf4.LoggerFactory;
clase pública ClaseB{
registrador final estático privado registrador = LoggerFactory.getLogger(this.getClass());
    método de clase vacío público() {
        logger.debug(\"Mensaje del método Clase B\");
     }
}

¿Qué acción debe realizar el desarrollador para ver los mensajes de registro en el mismo archivo de ambas clases?

A.
Configure custom.log en la consola web OSGI --> Sling --> Log Support y reemplace el registrador com.aem.abc con com.aem

B.
Configure custom.log en la consola web OSGI --> Sling --> Log Support y reemplace el registrador com.aem.xyz con com.aem.abc

C.
Configure custom.log en la consola web OSGI --> Sling --> Log Support y reemplace el paquete com.aem.abc con com.aem.xyz

D.
Cree un archivo de registro independiente en la consola web OSGI --> Sling --> Soporte de registro para logger com.aem.xyz


https://helpx.adobe.com/experience-manager/using/custom_log_file.html

Es la A.
136

¿Qué solución se debe utilizar para sincronizar los permisos de usuario entre servidores AEM?

A.
Empaquetador de ACL de ACS Commons

B.
Complemento de bóveda de Maven

C.
Herramienta de sincronización de usuarios

D.
Empaquetador autorizado de ACS Commons


https://experienceleague.adobe.com/docs/experience-manager-65/administering/security/sync.html?lang=en#introduction

Es la C.
137

La configuración OSGI se agrega a una configuración específica del modo de ejecución \"config.author.staging\" en AEM como servicio en la nube. La aplicación no puede leer la configuración.

¿Cuál es una posible causa de este problema?

A.
AEM como servicio en la nube no admite modos de ejecución de configuración ORGI.

B.
El modo de ejecución de configuración OSGI personalizado utilizado (es decir, \"config.author.staging\") no es compatible con AEM como servicio en la nube.

C.
Los modos de ejecución de configuración OSGI no se pueden instalar automáticamente en AEM como servicio en la nube. Necesitamos instalarlos como un paquete usando el administrador de paquetes.

D.
Solo los modos de ejecución de configuración OSGI específicos de <servicio> como \"config.author\" os \"config.publish\" son compatibles con AEM como servicio en la nube.


https://experienceleague.adobe.com/docs/experience-manager-cloud-service/implementing/deploying/configuring-osgi.html?lang=en#runmode-solving

Es la B.
138

¿Qué configuración/sección debería usarse para resolver el nombre de dominio por parte del despachador?

A.
Configuración en httpd.conf

B.
Configuración en filtros.cualquiera

C.
Configuración en DNS

D.
Configuración en archivo vhost


https://experienceleague.adobe.com/docs/experience-manager-dispatcher/using/configuring/dispatcher-domains.html?lang=en#define-virtual-hosts-on-the-web-server

Es la A.
139

¿Dónde debería un desarrollador de AEM agregar una dependencia frontal?

A.
configuración-xml

B.
configuración.json

C.
bóveda.xml

D.
paquete.json


https://experienceleague.adobe.com/docs/experience-manager-learn/spa-angular-tutorial/integrate-spa.html?lang=es#agregar-estilos-con-sass

Es la D.

140

Los componentes SPA se conectan a componentes AEM mediante el método MapTo(). ¿Qué código se debe utilizar para conectar correctamente un componente SPA llamado ItemList a su equivalente AEM?

A.
MapTo (ItemList) ('proyecto/componentes/contenido/itemList',ItemListEditConfig);

B.
MapTo ('proyecto/componentes/contenido/itemList',ItemListEditConfig);

C.
ItemList.MapTo('proyecto/componentes/contenido/itemList');

D.
('proyecto/componentes/contenido/itemList').MapTo(ItemList, ItemListEditConfig);


https://experienceleague.adobe.com/docs/experience-manager-learn/spa-angular-tutorial/map-components.html%3Flang%3Dko#create-the-image-component

Es la A.
141

¿Qué herramienta permite compartir recursos con varias instancias de AEM como recursos locales de solo lectura?

A.
Gerente de empaquetación

B.
Consola Félix


C.
Activos conectados

D.
Compartir enlace de activos


https://experienceleague.adobe.com/docs/experience-manager-65/assets/using/use-assets-across-connected-assets-instances.html?lang=en#using

Es la C.

142

Un desarrollado necesita crear modelos de cabestrillo para dos campos, nombre y ocupaciones. El cuadro de diálogo tiene dos campos, nombre (un campo de valor único) y ocupaciones (un campo de valores múltiples).
El siguiente código se incluye en los modelos de cabestrillo heredados de la interfaz com.adobe.aem.guides.wknd.core.models.Byline

paquete com.adobe.aem.guides.wknd.core.models.impl;
……
la clase pública BylineImpl implementa Byline{
    ……
    @Anular
    Lista pública <Cadena> getOcupaciones(){
        if (ocupaciones!=null){
           Colecciones.sort(ocupaciones);
           devolver nuevas ocupaciones ArrayList<String>;
        }demás{
           return Colecciones.emptyList();

       }
    …..
}

¿Qué método debería utilizarse para representar este modelo en HTL?

A.
<div data-sly-use-byline=" com.adobe.aem.guides.wknd.core.models.Byline.impl”
data-sly-use-placeholderTemplate=”core/wcm/components/commons/v1/templates.html”
data-sly-test-hasContent=”\${!byline.empty}” clase=”cmp-byline”>
<h2 class=”cmp-byline__name”>\${byline.name}”</h2>
<p clase= cmp-byline__pccupations”>\${byline.ocupaciones @ join=’, ‘}</p>
</div>

B.
<div data-sly-use-byline =” com.adobe.aem.guides.wknd.core.models.Byline”
data-sly-use-placeholderTemplate=”core/wcm/components/commons/v1/templates.html”
data-sly-test-hasContent=”\${!byline.empty}” clase=”cmp-byline”>
<h2 class=”cmp-byline__name”>\${byline.name}”</h2>
<p clase= cmp-byline__ocupaciones”>\${byline.ocupaciones @ join=’, ‘}</p>
</div>


C.
<div data-sly-use-byline =” com.adobe.aem.guides.wknd.core.models.Byline”
data-sly-use-placeholderTemplate=”core/wcm/components/commons/v1/templates.html”
data-sly-test-hasContent=”\${!byline.empty}” clase=”cmp-byline”>
<h2 class="cmp-byline__name">\${byline.name @ join=', '}"</h2>
<p clase= cmp-byline__ocupaciones”>\${byline.ocupaciones @ join=’, ‘}</p>
</div>

D.
<div data-sly-use-byline =” com.adobe.aem.guides.wknd.core.models.Byline”
data-sly-use-placeholderTemplate=”core/wcm/components/commons/v1/templates.html”
data-sly-test-hasContent=”\${!byline.empty}” clase=”cmp-byline”>
<h2 class=”cmp-byline__name”>\${byline.name}”</h2>
<p clase= cmp-byline__ocupaciones”>\${byline.ocupaciones }</p>
</div>


https://experienceleague.adobe.com/docs/experience-manager-htl/using/htl/expression-language.html?lang=en#array-join

Es la B.
143

Un desarrollador está utilizando una configuración sensible al contexto de sling intentando obtener el recurso de configuración usando:

@Referencia
Configuración privadaResourceResolver cfgResourceResolver;
confResource = cfgResourceResolver.getResource(recurso, BUCKET_NAME, CONFIG_NAME);

Esto funciona según lo previsto en autor y en publicación cuando inicia sesión para publicar como administrador. Sin embargo, esto da un valor nulo cuando se ejecuta como anónimo.
¿Qué método solucionará el problema?

A.
Aplicar permisos de lectura a usuarios anónimos para el directorio /etc.

B.
Aplicar permisos de lectura a usuarios anónimos para el directorio /config.


C.
Aplicar permisos de lectura a usuarios anónimos para el directorio /content.

D.
Aplicar permisos de escritura a un usuario anónimo para el directorio /config.


https://experienceleague.adobe.com/docs/experience-manager-65/deploying/configuring/configuring-osgi.html#osgi-configuration-in-the-repository

Es la B.
144

Un desarrollador necesita hacer que la plantilla T esté disponible como página secundaria de la página P. El desarrollador ha determinado que:
- La plantilla T coincide con la propiedad cq:allowedTemplates en la página P.
- La plantilla T no tiene establecida la propiedad AllowPaths.
- La plantilla T no está en la misma aplicación que la página P.
- La plantilla de la página P no coincide con la propiedad AllowParents de la plantilla T.
- La plantilla T no coincide con la propiedad AllowTemplates en la plantilla de la página P.

¿Qué debería cambiar el desarrollador?

A.
Haga que la página P coincida con la propiedad AllowPaths de la plantilla T.

B.
Haga que la propiedad AllowParents de la plantilla T coincida con la plantilla de la página P.


C.
Migre la plantilla T a la misma aplicación que la página P.

D.
Borre la propiedad AllowParents de la plantilla T.


https://experienceleague.adobe.com/docs/experience-manager-65/developing/platform/templates/templates.html?lang=en#templates-content-fragments

Es la B.

145

Una aplicación AEM debe procesar un gran volumen de ingesta de contenido en el servidor de autor.

¿Cuál es un factor clave para optimizar un diseño y obtener un aumento general del rendimiento al implementar flujos de trabajo?

A.
Utilice flujos de trabajo transitorios

B.
Asigna más RAM para la ingestión de contenidos por adelantado.


C.
Ejecute la recolección de basura cada vez que se produzca una ingestión de contenido.

D.
Utilice programadores para ejecutar los flujos de trabajo solo los fines de semana


https://experienceleague.adobe.com/docs/experience-manager-65/assets/administer/performance-tuning-guidelines.html?lang=en#workflows

Es la A.
146

Un desarrollador tiene problemas al intentar incluir un nuevo elemento integrable en el componente principal Insertar.
- El Desarrollado está utilizando el componente Embed versión 1 de los componentes WCM Core.
- El desarrollador ve el nuevo componente integrable como un componente normal que se puede agregar a la página, lo cual es incorrecto.
- El Desarrollado no ve el nuevo componente integrable como una opción en el componente Incrustar.

¿Qué enfoque debería utilizarse para definir el nuevo componente?

A.
<jcr:root xmlns:sling=http://sling.apache.org/jcr/sling/1.0 xmlns:jcr=http://www.jcp.org/jrc/1.0 jcr:primaryType=”cq:Component” jcr :title=”Foo” sling:resourceSuperType=”core/wcm/components/embed/v1/embed/embeddable” componenteGroup=” incrustable”/>

B.
<jcr:root xmlns:sling=http://sling.apache.org/jcr/sling/1.0 xmlns:jcr=http://www.jcp.org/jrc/1.0 jcr:primaryType=”cq:Component” jcr :title=”Foo” sling:resourceType=”core/wcm/components/embed/v1/embed” componenteGroup=” .hidden”/>

C.
<jcr:root xmlns:sling=http://sling.apache.org/jcr/sling/1.0 xmlns:jcr=http://www.jcp.org/jrc/1.0 jcr:primaryType=”cq:Component” jcr :title=”Foo” sling:resourceType=”core/wcm/components/embed/v1/embed/embeddable” componenteGroup=“integrable”/>

D.
<jcr:root xmlns:sling=http://sling.apache.org/jcr/sling/1.0 xmlns:jcr=http://www.jcp.org/jrc/1.0 jcr:primaryType=”cq:Component” jcr :title=”Foo” sling:resourceSuperType=”core/wcm/components/embed/v1/embed/embeddable” componenteGroup=” .hidden”/>


https://github.com/adobe/aem-core-wcm-components/tree/master/content/src/content/jcr_root/apps/core/wcm/components/embed/v1/embed#extending-the-embed- componente

Es la D.
147

Un cliente necesita almacenar aproximadamente 200 elementos de datos sin procesar de la API REST y mostrar cada elemento como una página AEM. Existe una plantilla de página de borrador.

¿Qué método se debe utilizar para cumplir con este requisito?

A.
Cree un segmento utilizando datos de la llamada a la API REST

B.
Cree páginas vinculando los datos de cada elemento mediante la plantilla de página de borrador y la lógica de recuperación de datos personalizada.


C.
Cree fragmentos de experiencia vinculando los datos de cada elemento mediante la plantilla de página de borrador y la lógica de recuperación de datos personalizada.

D.
Cree fragmentos de contenido vinculando los datos de cada elemento mediante la plantilla de página de borrador y la lógica de recuperación de datos personalizada.


https://experienceleague.adobe.com/docs/experience-manager-65/assets/extending/assets-api-content-fragments.html?lang=en#extending

Es la D.
148

Un desarrollador ha creado un menú desplegable que contiene cada uno de los cincuenta estados de EE. UU. como opción estática. El nodo de diálogo se llama estados. Un nuevo requisito solicita utilizar ese mismo menú desplegable en el cuadro de diálogo de otro componente.

¿Qué método sería un enfoque más modular para la solución?

A.
1. Extrapolar el nodo de estados a una ubicación más genérica.
2. Establezca esa nueva ubicación como recursoSuperType

B.
1. Extrapolar el nodo de estados a una ubicación más genérica.
2. Utilice granito: incluya en ambos componentes y aporte sólo lo necesario.


C.
Copie y pegue todo el nodo de estado del componente antiguo al nuevo.

D.
Copie y pegue solo las opciones del componente antiguo en el nuevo.


https://experienceleague.adobe.com/docs/experience-manager-65/developing/platform/sling-resource-merger.html?lang=en#Purpose

Es la A.
149

  Un desarrollado identifica que algunas solicitudes para la página /content/sampleproject/page.html tardan más que otras solicitudes para la misma página. Consulte el directorio $DOCROOT/content/sampleproject a continuación.
[usuario@gropu /opt/dispatcher/cache/content/sampleproject ] $ ls –la
Total 2
drwxr-xr-x. 5 apache apache 4096 11 de febrero a las 11:41.
drwxr-xr-x. 3 apache apache 4096 29 de noviembre 16:07 ..
drwxr-xr-x. 4 apache apache 4096 7 de febrero 03:21 page.html
-rw-r—r--. 1 apache apache 0 7 de febrero 03:19 .stat

El archivo Dispatcher.log contiene las siguientes líneas:

[Miércoles 13 de febrero 13:14:04 2012] [D] [1376(1532)] comprobando [/libs/cq/security/userinfo.json]
[Miércoles 13 de febrero 13:14:04 2012] [D] [1376(1532)] Almacenamiento en caché deshabilitado debido a una cadena de consulta: track_id=1350373444666
[Miércoles 13 de febrero 13:14:04 2012] [D] [1376(1532)] acción de caché para [/libs/cq/security/userinfo.json]: NINGUNO

¿Cómo debe asegurarse el desarrollador de que la página esté siempre almacenada en caché?

A.
Modifique el archivo Dispatcher.any para que contenga las siguientes líneas:
/normas
{
…
/0000 {/glob “*” /type “allow” /params “tracking_id” }
…
}

B.
Modifique el archivo Dispatcher.any para que contenga las siguientes líneas:
/filtrar
{
…
/0023 { /tipo “permitir” /url “/content//.html” /params “tracking_id” }
…
}


C.
Modifique el archivo Dispatcher.any para que contenga las siguientes líneas:
/ignoreUrlParams
{
…
/0002 { /glob “id_seguimiento” /tipo “permitir” }
…
}


D.
Modifique el archivo Dispatcher.any para que contenga las siguientes líneas:
/filtrar
{
…
/0023 { /tipo “permitir” /url “/content//.html?tracking_id=*” }
…
}





https://experienceleague.adobe.com/docs/experience-manager-dispatcher/using/configuring/dispatcher-configuration.html?lang=en#ignoring-url-parameters

Es la C.
150

AEM recomienda que un equipo actualice los servidores AEM con la actualización local porque las versiones existentes han alcanzado el EOL.

¿Cuáles son dos desventajas de realizar una actualización local a la última versión de AEM? (Escoge dos.)

 
A.
Se pierden las ACL, los usuarios y los grupos.

B.
Se requiere migración de contenido.


C.
Configuración compleja para desarrolladores y automatización del proceso de actualización.


D.
El historial de revisión de contenido no se conserva.
MI.
Dependiendo de la diferencia de versión entre las instancias antiguas y nuevas, la actualización puede ser un proceso largo y arduo.



https://www.bounteous.com/insights/2018/08/30/aem-upgrades-quick-guide-minimize-your-risk/

Es la C y E.

151

  Una empresa quiere reutilizar contenido con varios sitios multinacionales en el mismo idioma y decide usar MSM en AEM. Esto permite reutilizar el contenido principal, al tiempo que permite variaciones nacionales.

¿Cuál es el diseño MSM recomendado para el sitio web?


A.
/contenido
   l– nosotros.retail
         l- copia en vivo
              l- es
   l– nosotros.retail
          yo-nosotros
               l- es
   l– nosotros.retail
          l- gb
               l- es
   l– nosotros.retail
           l-ca
               l- es
  

B.
/contenido
   l– nosotros.retail
           l-maestros de idiomas
                l- es
   l– nosotros.retail
          yo-nosotros
                l- es
   l– nosotros.retail
           l- gb
                l- es
   l– nosotros.retaill-ca
                l- es
l– nosotros.retail
          yo-au
                l- es

  

C.
/contenido
    l– nosotros.retail
       l- es
                yo-nosotros
                l- gb
        l- fr
                l- fr
                l-ca

   


D.
/contenido
    l– nosotros.retail1
       l- es
    l– nosotros.retail2
       l- es
    l– nosotros.retail3
       l- es
    l– nosotros.retail4
       l- es


https://experienceleague.adobe.com/docs/experience-manager-65/administering/introduction/tc-bp.html?lang=en#site-structure

Es la B.
152

Un cliente tiene problemas con algunas consultas de búsqueda y proporciona la siguiente información:
- Los registros muestran que la siguiente advertencia ocurre muchas veces: *WAR* Atravesó 1000 nodos con filtro Filtro(consulta=seleccionar...)
- El cliente tiene más de 100.000 páginas almacenadas en su instancia de AEM.
- El cliente utiliza una propiedad de página personalizada para ayudar a buscar páginas de un tipo determinado.

¿Qué debe hacer el desarrollador de AEM para ayudar a resolver el problema del cliente?

A.
Aconsejar al cliente reorganizar su contenido teniendo nodos de no más de 10.000.

B.
Cree un índice de roble personalizado para la propiedad de página personalizada.


C.
Establezca el indicador de reindexación en verdadero para el nodo 'oak:index/cqPageLucene'.

D.
Utilice el Administrador de índices para validar que el índice 'cqPageLucene' esté habilitado.


https://experienceleague.adobe.com/docs/experience-manager-64/deploying/deploying/queries-and-indexing.html?lang=en#configuring-the-indexes

Es la B.


153

¿Qué tipo de configuración se puede crear en OSGI Configuration Manager?

A.
Configuración de paquetes

B.
Modos de ejecución Configuración


C.
Configuración de componentes

D.
Configuración del servicio


https://experienceleague.adobe.com/docs/experience-manager-65/deploying/configuring/configuring-osgi.html?lang=en#osgi-configuration-with-the-web-console

Es la A.
154

Mientras trabaja con plantillas editables, el autor informa que los cambios que realiza se pierden periódicamente.

¿Qué debería corregir AEM Developer para evitar perder actualizaciones de autor?

A.
Configure el modo para que sea "fusionado" en filter.xml

B.
Mueva la plantilla editable afectada a /etc/templates

C.
Mueva la plantilla editable afectada a /apps/templates

D.
Configure el modo para que sea "actualizar" en filter.xml


https://experienceleague.adobe.com/docs/experience-manager-learn/getting-started-wknd-tutorial-develop/project-archetype/pages-templates.html?lang=en

Es la A.
155

Un servidor AEM está sobrecargado con demasiados flujos de trabajo que se ejecutan simultáneamente. El desarrollador decide reducir la cantidad de flujos de trabajo simultáneos.

¿Qué se debe configurar para reducir la cantidad de flujos de trabajo simultáneos?

A.
El número de hilos en Scheluder.

B.
Máximo de trabajos paralelos en la consola OSGI

C.
El número de subprocesos en el servicio HTTP Apache Felix Jetty

D.
Lanzadores para cada flujo de trabajo

https://experienceleague.adobe.com/docs/experience-manager-65/developing/extending-aem/extending-workflows/workflows-best-practices.html?lang=en#tuning-dam-workflows

Es la B.
156

A un equipo de desarrollo de aplicaciones AEM se le asigna la tarea de crear una implementación de capa de datos basada en eventos para una solución de análisis.

¿Qué mejores prácticas recomendadas por Adobe debería elegir el desarrollador?

A.
Cree una configuración de Adobe Cloud Service para utilizar la capa de datos de herramientas de terceros

B.
Cree una capa de datos personalizada y agregue cada componente, plantilla y sus propiedades a la capa de datos

C.
Utilice la capa de datos de Adobe Experience Platform para integrarse con AEM

D.
Utilice Adobe Client Data Layer e intégrelo con los componentes principales


https://experienceleague.adobe.com/docs/experience-manager-learn/sites/integrations/adobe-client-data-layer/data-layer-overview.html?lang=en#integrations

Es la D.
157

Un desarrollador de AEM establece una variable de argumento "myVariable" para que la consuma el proceso de flujo de trabajo en la misma definición del modelo de flujo de trabajo.

¿Qué enfoque se debe utilizar?

A.
//Obtener myVariable directamente desde MetaDataMap
String miVariable = workItem.getMetaDataMap().get(“miVariable”);

B.
//Obtener myVariable del objeto HistoryItem
Lista<HistoryItem> historial = flujo de trabajoSession.getHistory(workItem.getWorkflow());

C.
//Obtener miVariable de WorkflowData
String miVariable = workItem.getWorkflowData().getPayload().toString();

D.
//Obtener miVariable de args
String args = metadataMap.get(“PROCESS_ARGS”,String.class);


https://experienceleague.adobe.com/docs/experience-manager-65/developing/extending-aem/extending-workflows/using-variables-in-aem-workflows.html?lang=en#workflow-steps- without- soporte para variables

Es la A.
158

Un desarrollador quiere consumir datos de página de AEM en una aplicación de una sola página. La aplicación de una sola página está codificada para comprender el formato JSON. Sólo el contenido de la página debe exponerse a través de JSON. Todos los componentes existentes se basan en componentes de cimentación.

¿Qué cambio debería realizar el desarrollador en los componentes existentes para cumplir con este requisito?

A.
Implementar un exportador de modelos Sling para los componentes.

B.
Invoque la URL de la página con la extensión .json para obtener los valores para construir el resultado requerido.

C.
Cree un controlador de eventos de honda personalizado para manejar solicitudes JSON

D.
Agregue JSON como extensión predeterminada en ApacheConfiguración del controlador de errores y resolución de scripts/servlet de Sling


https://experienceleague.adobe.com/docs/experience-manager-64/developing/headless/spas/spa-overview.html?lang=en#authoring-workflow

Es la A.