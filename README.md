Buenas tardes,

Metodología Seleccionada: BEM.
Mi justificación: Para el desarrollo de la landing Page de SmartBudget opté por la metodología BEM debido a las siguientes ventajas:
1.	Al desarrollar un prototipo diseñado en Figma estructurado, BEM me permite trasladar los componentes visuales directamente al código. Los bloques estables como el .Header, .Hero y .card actúan de forma aislada e independiente.
2.	En lugar de usar selectores que dependan de la jerarquía rigida del HTML (como main>div article) con BEM puedo usar clases únicas de un solo nivel de especificidad (.card—title). Esto agiliza el renderizado del navegador y evita que los estilos rompan la estructura si la estructura HTML cambia en el futuro.
3.	Uso explicito de modificadores: Mi interfaz cuenta con una estructura repetitiva de tres tarjetas con características donde la segunda posee una inversión comatica. La implementación de la clase .card—featured ilustra perfectamente el concepto de Modificador BEM, alternando el comportamiento visual de un bloque base sin necesidad de duplicar el código en CSS.
