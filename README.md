Estimado profesor:

Junto con saludar, le comento que la propuesta inicial de la landing page "SmartBudget" la diseñé en formato Desktop, alineada con los requerimientos de las lecciones del proyecto. No obstante, mediante la incorporación progresiva de las buenas prácticas y metodologías de las lecciones, el código lo fuí reestructurado hacia una versión Mobile. Este proceso contribuye que el producto final cuente con un desarrollo modular, escalable y con un diseño responsivo óptimo para pantallas las distintas pantallas web. 

La metodologia que utilicé: BEM.
¿Porqué?: Para el desarrollo de la landing Page de SmartBudget opté por la metodología BEM debido a las siguientes ventajas:
1.	Al desarrollar un prototipo diseñado en Figma, BEM me permitió trasladar los componentes visuales directamente al código. Los bloques estables como el .Header, .Hero y .card actúan de forma aislada e independiente.
2.	En lugar de usar selectores que dependan de la jerarquía rigida del HTML (como main>div article) con BEM puedo usar clases únicas de un solo nivel de especificidad (.card—title). Esto me ayuda a agilizar el renderizado del navegador evitando que los estilos rompan la estructura si la estructura HTML cambia despúes.
3. Mi interfaz cuenta con una estructura repetitiva de tres tarjetas con características donde la segunda posee una inversión comatica. La implementación de la clase .card—featured ilustra perfectamente el concepto de Modificador BEM, alternando el comportamiento visual de un bloque base sin necesidad de duplicar el código en CSS.

