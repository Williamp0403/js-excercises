export const levels = [
  {
    level: 1,
    title: 'Variables',
    description: 'Aprende sobre la declaración, tipos y uso de variables en JavaScript.',
    questions: [
      { id: 1, question: "¿Cómo se declara una variable en JavaScript?", options: ["var nombre", "let nombre", "variable nombre"], correctAnswer: "let nombre" },
      { id: 2, question: "¿Cuál es la diferencia entre `var`, `let` y `const`?", options: ["var es global, let es de bloque, const es constante", "Son iguales", "Solo const es válido"], correctAnswer: "var es global, let es de bloque, const es constante" },
      { id: 3, question: "¿Qué tipo de variable permite reasignación pero tiene alcance de bloque?", options: ["const", "var", "let"], correctAnswer: "let" },
      { id: 4, question: "¿Qué ocurre si intentas modificar una variable declarada con `const`?", options: ["Cambia su valor", "Lanza un error", "No afecta su valor"], correctAnswer: "Lanza un error" },
      { id: 5, question: "¿Cómo se puede definir una variable sin darle valor inicial?", options: ["let x;", "var x;", "Ambas son correctas"], correctAnswer: "Ambas son correctas" },
      { id: 6, question: "¿Cuál es el valor por defecto de una variable no inicializada en JavaScript?", options: ["null", "undefined", "0"], correctAnswer: "undefined" },
      { id: 7, question: "¿Cómo se asigna el valor de una variable a otra?", options: ["x = y;", "let x = y;", "var x == y;"], correctAnswer: "x = y;" },
      { id: 8, question: "¿Qué tipo de datos puede contener una variable en JavaScript?", options: ["Número", "String", "Todos los anteriores"], correctAnswer: "Todos los anteriores" },
      { id: 9, question: "¿Cómo se convierte una variable de tipo `string` en `number`?", options: ["parseInt()", "Number()", "Ambos son correctos"], correctAnswer: "Ambos son correctos" },
      { id: 10, question: "¿Cuál es el resultado de `typeof null` en JavaScript?", options: ["null", "object", "undefined"], correctAnswer: "object" },
    ]
  },
  {
    level: 2,
    title: 'Operadores',
    description: 'Explora los operadores aritméticos, lógicos y de comparación en JavaScript.',
    questions: [
      { id: 1, question: "¿Qué operador se usa para comparar valores sin conversión de tipo?", options: ["==", "===", "="], correctAnswer: "===" },
      { id: 2, question: "¿Qué resultado devuelve `true && false`?", options: ["true", "false", "Error"], correctAnswer: "false" },
      { id: 3, question: "¿Cómo funciona el operador `||` en una expresión lógica?", options: ["Devuelve el primer valor verdadero", "Devuelve false siempre", "Compara números"], correctAnswer: "Devuelve el primer valor verdadero" },
      { id: 4, question: "¿Qué operador se usa para sumar dos números en JavaScript?", options: ["+", "-", "*"], correctAnswer: "+" },
      { id: 5, question: "¿Qué devuelve el operador `typeof` cuando se usa en una función?", options: ["function", "object", "undefined"], correctAnswer: "function" },
      { id: 6, question: "¿Cómo se asigna un valor a una variable con un operador de asignación?", options: ["=", "==", "==="], correctAnswer: "=" },
      { id: 7, question: "¿Qué hace el operador `!==` en una comparación?", options: ["Compara valores y tipos", "Compara solo valores", "Es igual a `===`"], correctAnswer: "Compara valores y tipos" },
      { id: 8, question: "¿Cómo se puede incrementar el valor de una variable en 1 unidad?", options: ["x++", "x += 1", "Ambos son correctos"], correctAnswer: "Ambos son correctos" },
      { id: 9, question: "¿Cuál es el resultado de `5 % 2` y qué significa?", options: ["1, representa el resto", "2, representa el cociente", "0, significa número par"], correctAnswer: "1, representa el resto" },
      { id: 10, question: "¿Cómo se usa el operador ternario `? :` en JavaScript?", options: ["Para realizar una condición en una sola línea", "Para declarar variables", "Para convertir tipos"], correctAnswer: "Para realizar una condición en una sola línea" },
    ]
  },
  {
    level: 3,
    title: 'Arrays y Objetos',
    description: 'Descubre cómo trabajar con arrays y objetos en JavaScript.',
    questions: [
      { id: 1, question: "¿Cómo se define un array en JavaScript?", options: ["let arr = [];", "let arr = {};", "let arr = ();"], correctAnswer: "let arr = [];" },
      { id: 2, question: "¿Qué método agrega un elemento al final de un array?", options: ["push()", "pop()", "unshift()"], correctAnswer: "push()" },
      { id: 3, question: "¿Cómo accedes al primer elemento de un array?", options: ["arr[0]", "arr[1]", "arr.first()"], correctAnswer: "arr[0]" },
      { id: 4, question: "¿Qué es un objeto en JavaScript?", options: ["Una estructura de datos que almacena pares clave-valor", "Un tipo de variable numérica", "Una función especial"], correctAnswer: "Una estructura de datos que almacena pares clave-valor" },
      { id: 5, question: "¿Cómo accedes al valor de una propiedad en un objeto?", options: ["objeto.propiedad", "objeto[propiedad]", "Ambos son correctos"], correctAnswer: "Ambos son correctos" },
      { id: 6, question: "¿Qué método elimina el último elemento de un array?", options: ["pop()", "shift()", "splice()", "unshift()"], correctAnswer: "pop()" },
      { id: 7, question: "¿Cómo se verifica si un array incluye un elemento específico?", options: ["includes()", "indexOf()", "find()", "filter()"], correctAnswer: "includes()" },
      { id: 8, question: "¿Qué método devuelve un nuevo array con los elementos que cumplen una condición?", options: ["filter()", "map()", "reduce()", "forEach()"], correctAnswer: "filter()" },
      { id: 9, question: "¿Cómo se accede a todas las claves de un objeto?", options: ["Object.keys()", "Object.values()", "Object.entries()", "Object.getKeys()"], correctAnswer: "Object.keys()" },
      { id: 10, question: "¿Qué método combina dos arrays en uno solo?", options: ["concat()", "join()", "push()", "merge()"], correctAnswer: "concat()" },
    ]
  },
  {
    level: 4,
    title: 'Funciones',
    description: 'Aprende sobre la declaración, uso y tipos de funciones en JavaScript.',
    questions: [
      { id: 1, question: "¿Cómo se declara una función en JavaScript?", options: ["function miFuncion() {}", "let miFuncion = function() {}", "() => {}"], correctAnswer: "function miFuncion() {}" },
      { id: 2, question: "¿Qué diferencia hay entre una función declarada y una función expresada?", options: ["Las funciones declaradas pueden llamarse antes de su declaración", "Las funciones expresadas pueden llamarse antes de su declaración", "Son exactamente iguales"], correctAnswer: "Las funciones declaradas pueden llamarse antes de su declaración" },
      { id: 3, question: "¿Cuál es la sintaxis de una función flecha en JavaScript?", options: ["()=>{}", "function() {}", "let function = () => {}"], correctAnswer: "()=>{}" },
      { id: 4, question: "¿Cómo se llama a una función para ejecutarla?", options: ["miFuncion()", "call miFuncion", "run miFuncion"], correctAnswer: "miFuncion()" },
      { id: 5, question: "¿Qué ocurre si una función no tiene un `return`?", options: ["Devuelve `undefined`", "Devuelve `null`", "Genera un error"], correctAnswer: "Devuelve `undefined`" },
      { id: 6, question: "¿Cómo se pasa un argumento a una función?", options: ["miFuncion(valor)", "argument miFuncion", "param miFuncion"], correctAnswer: "miFuncion(valor)" },
      { id: 7, question: "¿Cuál es la diferencia entre parámetros y argumentos en una función?", options: ["Los parámetros se definen en la función, los argumentos se envían al llamarla", "Son lo mismo", "Los argumentos solo existen en funciones flecha"], correctAnswer: "Los parámetros se definen en la función, los argumentos se envían al llamarla" },
      { id: 8, question: "¿Qué palabra clave se usa dentro de una función para devolver un valor?", options: ["return", "exit", "break"], correctAnswer: "return" },
      { id: 9, question: "¿Cómo se define una función que se ejecuta automáticamente?", options: ["(function() {})()", "auto function () {}", "start function() {}"], correctAnswer: "(function() {})()" },
      { id: 10, question: "¿Cuál es el propósito de `this` dentro de una función?", options: ["Referirse al objeto que la invoca", "Referirse a la propia función", "Referirse al documento HTML"], correctAnswer: "Referirse al objeto que la invoca" },
    ]
  },
  {
    level: 5,
    title: 'DOM y Eventos',
    description: 'Aprende a manipular el Document Object Model (DOM) y a gestionar eventos en JavaScript.',
    questions: [
      { id: 1, question: "¿Qué es el DOM en el contexto de desarrollo web?", options: ["Un lenguaje de programación", "Una API para interactuar con documentos HTML y XML", "Un servidor web"], correctAnswer: "Una API para interactuar con documentos HTML y XML" },
      { id: 2, question: "¿Cómo se selecciona un elemento HTML por su ID en JavaScript?", options: ["document.getElementByName('id')", "document.getElementById('id')", "document.querySelector('#id')"], correctAnswer: "document.getElementById('id')" },
      { id: 3, question: "¿Qué método se utiliza para crear un nuevo elemento HTML en JavaScript?", options: ["document.createElement('div')", "document.makeElement('div')", "document.newElement('div')"], correctAnswer: "document.createElement('div')" },
      { id: 4, question: "¿Cómo se añade un elemento hijo a otro elemento en el DOM?", options: ["parent.appendChild(child)", "child.addTo(parent)", "parent.insertChild(child)"], correctAnswer: "parent.appendChild(child)" },
      { id: 5, question: "¿Qué propiedad se usa para cambiar el contenido de texto de un elemento HTML?", options: ["element.innerHTML", "element.textContent", "element.value"], correctAnswer: "element.textContent" },
      { id: 6, question: "¿Cómo se añade un 'event listener' a un elemento HTML?", options: ["element.addEventListener('click', funcion)", "element.attachEvent('onclick', funcion)", "element.on('click', funcion)"], correctAnswer: "element.addEventListener('click', funcion)" },
      { id: 7, question: "¿Qué objeto representa el evento dentro de una función manejadora de eventos?", options: ["event", "this", "target"], correctAnswer: "event" },
      { id: 8, question: "¿Cómo se previene el comportamiento por defecto de un evento (ej. envío de formulario)?", options: ["event.preventDefault()", "event.stopPropagation()", "event.stop()"], correctAnswer: "event.preventDefault()" },
      { id: 9, question: "¿Qué método se usa para eliminar un elemento del DOM?", options: ["element.remove()", "element.delete()", "element.removeChild()"], correctAnswer: "element.remove()" },
      { id: 10, question: "¿Cuál es la diferencia entre `innerHTML` y `textContent`?", options: ["innerHTML interpreta HTML, textContent solo texto", "textContent interpreta HTML, innerHTML solo texto", "Son idénticos"], correctAnswer: "innerHTML interpreta HTML, textContent solo texto" },
    ]
  },
  {
    level: 6,
    title: 'Asincronía en JavaScript',
    description: 'Comprende el funcionamiento de la asincronía, Callbacks, Promesas y Async/Await en JavaScript.',
    questions: [
      { id: 1, question: "¿Qué es la asincronía en JavaScript?", options: ["Ejecutar múltiples tareas al mismo tiempo", "Ejecutar tareas una después de otra secuencialmente", "Permitir que el código continúe ejecutándose sin esperar a que operaciones largas terminen"], correctAnswer: "Permitir que el código continúe ejecutándose sin esperar a que operaciones largas terminen" },
      { id: 2, question: "¿Qué es un 'callback' en JavaScript?", options: ["Una variable que almacena una función", "Una función que se pasa como argumento a otra función para ser ejecutada después", "Un tipo de bucle"], correctAnswer: "Una función que se pasa como argumento a otra función para ser ejecutada después" },
      { id: 3, question: "¿Cuál es un problema común asociado con el uso excesivo de callbacks anidados?", options: ["Callback Hell (Pirámide de la Muerte)", "Stack Overflow", "Memory Leak"], correctAnswer: "Callback Hell (Pirámide de la Muerte)" },
      { id: 4, question: "¿Qué es una Promesa (Promise) en JavaScript?", options: ["Un valor que estará disponible ahora o en el futuro, o nunca", "Una función que siempre devuelve un valor inmediatamente", "Un objeto que solo maneja errores"], correctAnswer: "Un valor que estará disponible ahora o en el futuro, o nunca" },
      { id: 5, question: "¿Cuáles son los tres estados de una Promesa?", options: ["Pendiente, Cumplida, Fallida", "Inicio, Proceso, Fin", "Activa, Inactiva, Error"], correctAnswer: "Pendiente, Cumplida, Fallida" },
      { id: 6, question: "¿Qué método se usa para manejar el resultado exitoso de una Promesa?", options: [".then()", ".catch()", ".finally()"], correctAnswer: ".then()" },
      { id: 7, question: "¿Qué método se usa para manejar un error o rechazo en una Promesa?", options: [".then()", ".catch()", ".finally()"], correctAnswer: ".catch()" },
      { id: 8, question: "¿Qué hace la palabra clave `async` antes de una función?", options: ["Hace que la función se ejecute sincrónicamente", "Permite el uso de `await` dentro de la función y la hace retornar una Promesa", "Declara una función anónima"], correctAnswer: "Permite el uso de `await` dentro de la función y la hace retornar una Promesa" },
      { id: 9, question: "¿Qué hace la palabra clave `await` dentro de una función `async`?", options: ["Pausa la ejecución de la función `async` hasta que una Promesa se resuelva o rechace", "Ejecuta la Promesa inmediatamente sin esperar", "Ignora el resultado de la Promesa"], correctAnswer: "Pausa la ejecución de la función `async` hasta que una Promesa se resuelva o rechace" },
      { id: 10, question: "¿Para qué se utiliza `Promise.all()`?", options: ["Para ejecutar una promesa después de otra", "Para esperar a que todas las promesas en un iterable se cumplan, o una sea rechazada", "Para crear una nueva promesa"], correctAnswer: "Para esperar a que todas las promesas en un iterable se cumplan, o una sea rechazada" }
    ]
  },
   {
    level: 7,
    title: 'Manejo de Errores y Depuración',
    description: 'Aprende a identificar, manejar y depurar errores comunes en JavaScript.',
    questions: [
      { id: 1, question: "¿Qué bloque de código se utiliza para manejar excepciones en JavaScript?", options: ["try...catch...finally", "if...else...error", "do...while...error"], correctAnswer: "try...catch...finally" },
      { id: 2, question: "¿Qué hace el bloque `finally` en una estructura `try...catch...finally`?", options: ["Se ejecuta siempre, haya o no haya habido una excepción", "Solo se ejecuta si ocurre una excepción", "Solo se ejecuta si no ocurre una excepción"], correctAnswer: "Se ejecuta siempre, haya o no haya habido una excepción" },
      { id: 3, question: "¿Qué objeto se pasa al bloque `catch` cuando ocurre un error?", options: ["Un objeto Error (o una subclase de él)", "Un string con el mensaje de error", "Un booleano indicando el error"], correctAnswer: "Un objeto Error (o una subclase de él)" },
      { id: 4, question: "¿Cómo se lanza (throw) una excepción personalizada en JavaScript?", options: ["throw new Error('Mensaje de error');", "error('Mensaje de error');", "exception('Mensaje de error');"], correctAnswer: "throw new Error('Mensaje de error');" },
      { id: 5, question: "¿Cuál es una herramienta común del navegador para depurar JavaScript?", options: ["Las Herramientas de Desarrollador (Developer Tools)", "Un editor de texto", "La consola del sistema operativo"], correctAnswer: "Las Herramientas de Desarrollador (Developer Tools)" },
      { id: 6, question: "¿Qué hace `console.log()`?", options: ["Muestra mensajes o valores en la consola del navegador", "Detiene la ejecución del script", "Lanza un error"], correctAnswer: "Muestra mensajes o valores en la consola del navegador" },
      { id: 7, question: "¿Para qué sirve un 'breakpoint' (punto de interrupción) en la depuración?", options: ["Para pausar la ejecución del código en un punto específico y examinar el estado", "Para marcar código obsoleto", "Para comentar una sección de código"], correctAnswer: "Para pausar la ejecución del código en un punto específico y examinar el estado" },
      { id: 8, question: "Un `TypeError` generalmente ocurre cuando...", options: ["Una operación se realiza sobre un valor de un tipo incorrecto", "Hay un error de sintaxis", "Se llama a una variable no definida"], correctAnswer: "Una operación se realiza sobre un valor de un tipo incorrecto" },
      { id: 9, question: "Un `ReferenceError` generalmente ocurre cuando...", options: ["Se intenta usar una variable que no ha sido declarada", "Se divide por cero", "Se accede a una propiedad de `undefined`"], correctAnswer: "Se intenta usar una variable que no ha sido declarada" },
      { id: 10, question: "¿Qué es el 'linting' en el desarrollo de JavaScript?", options: ["Analizar el código estáticamente para encontrar errores de programación, bugs y problemas estilísticos", "Probar el código en diferentes navegadores", "Optimizar el código para que sea más rápido"], correctAnswer: "Analizar el código estáticamente para encontrar errores de programación, bugs y problemas estilísticos" }
    ]
  },
];
