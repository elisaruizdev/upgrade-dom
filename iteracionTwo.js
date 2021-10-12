/* 2.1 Inserta dinamicamente en un html un div vacio con javascript. */
     
    function addElement() { //creo una función
	   const newElement = document.createElement("div"); // con esto creo un nuevo div dentro del body usando el createElement
	   document.body.appendChild(newElement); // con esto creo lo introduzco en el body del HTML 
}


/* 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript. */

    function addPDiv() { //creo una función
		const otherDiv = document.createElement("div"); // con esto creo un nuevo div dentro del body usando el createElement 
		document.body.appendChild(otherDiv); // con esto creo lo introduzco en el body del HTML 
		
		const addP = document.createElement("p"); // otra variable porque quiero crear otro elemento, en este caso P que vaya dentro de div
		otherDiv.appendChild(addP) // aquí meto el nuevo elemento P dentro del div que he creado anteriormente y que por lo tanto sería hijo suyo y no del body (el div creado en 12 y 13 es hijo de body y ya lo he metido a document, por eso p de forma implícita se está incluyendo en el body)
}

/* 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript. */
 
    function addPDivTwo() { //creo una función
	    const divTwo = document.createElement("div"); // con esto creo un nuevo div dentro del body usando el createElement 
	    document.body.appendChild(diwTwo); // con esto creo lo introduzco en el body del HTML 
		for (const index = 1; index < 7; index++) { //me tengo que crear un buble porque hay que añadir 6 p. 
			const addSixP = document.createElement("p"); // con la variable creo los elementos p, que serán 6 porque el bucle dará 6 vueltas, si no hubiera buble solo crearía una p.
			divTwo.appendChild(addSixP) // con esto añado los p al div que he creado anteriormente y que es hijo de body.
}		

/* 2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'. */

     function addText() { //creo una función
		 const addP = document.createElement("p"); // con esto creo una p dentro del body usando el createElement
		 document.body.appendChild(addP); // con esto creo lo introduzco en el body del HTML

		 const textP = document.createTextNode("Soy dinámico!");
		 addP.body.appendChild(textP); 
}

/* 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'. */

      function insertHTwo() { //creo una función
		  const hTwo = document.getElementsByClassName(".fn-insert-here"); //creo la variable para insertar en una clase ya definida llamada ".fn-insert-here".
		  hTwo[0].innerHTML += "Wubba Lubba dub dub"; // con el innerHTML devuelvo a html un h2 con el texto "Wubba Lubba dub dub" con una clase ya estaba definida.
} 

/* 2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array. */
    
      function listArray() {
        const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

        const newUl = document.createElement("ul");
		document.body.appendChild(newUl);

		for (const index = app; index < apps; index++) {
			const newLi = document.createElement("li");
			newUl.appendChild(newLi)
		}
}
        
/* 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me */

       function removeNodes() {
    	const nodes = document.removeAttribute(".fn-remove-me");
     	nodes.innerHTML                                               //este no sé cómo pintar en html una vez quitado el atributo .fn-remove-me
}

/* 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
	Recuerda que no solo puedes insertar elementos con .appendChild. */

	    function insertText() {
			const addTextAgain = document.createElement("p");
			document.body.appendChild(addTextAgain);

			const textP = document.createTextNode ("Voy en medio!");
			addTextAgain.innerHTML += textP;
}
    
/* 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here */

         function insertTextTwo() {
           	const addTextAgainTwo = document.createElement("p");
        	document.body.appendChild(addTextAgainTwo);

        	const textPTwo = document.createTextNode ("Voy en medio!");
        	addTextAgainTwo.innerHTML += textPTwo;

		    addTextAgainTwo = document.insertBefore(textPTwo,".fn-insert-here");
}