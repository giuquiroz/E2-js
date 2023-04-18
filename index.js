const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];


// Las pizzas que tengan un id impar
const a = pizzas.filter((e) =>  {
      return e.id % 2 != 0
  });
  function revisar(pizza) {
  pizza.id % 2 === 0 ? null : console.log(pizza);
  }
  
  pizzas.forEach((e) => {
      if(e.id % 2 !== 0) {
          console.log(`la pizza ${pizzas.nombre} tiene un id impar`);
      }
      e.id % 2 !== 0 ? console.log(`la pizza ${e.nombre} tiene un id impar`)
      : null;
  });
  
  const pizzasImpar = pizzas.reduce( (acumulador, pizza) => {
      pizza.id % 2 !== 0 ? acumulador.push(pizza) : null;
      return acumulador
  }, []);
  console.log(pizzasImpar)


// hay pizzas menores a 600?
  const pizzaConValorMenosA600 = pizzas.some( function(e){
        return e.precio <= 600
    });
    console.log(pizzaConValorMenosA600 ? 'hay pizzas menores a 600' : 'no hay pizzas con ese valor')

// El nombre de cada pizza con su respectivo precio
  const nombrePrecioPizzas = pizzas.map ((pizzas) => {
          return {
              nombre: pizzas.nombre,
              precio: pizzas.precio
      }
})
      console.log(nombrePrecioPizzas);
      
      pizzas.forEach((e) => console.log(`La ${e.nombre} tiene un valor de ${e.precio}`))


// Todos los ingredientes de cada pizza 

 const ingredientesDePizzas = pizzas.map ( (pizzas) => {
        return {
            nombre: pizzas.nombre,
            ingrediente: pizzas.ingredientes}
    } )
         
    console.log(ingredientesDePizzas);

    pizzas.forEach ((pizzas) => {
        console.log ('las ' + pizzas.nombre + ' :')
  //otro recorrido
        LosIngredientesDeLasPizzas();
    })
    pizzas.ingredientes.forEach( (ingrediente) => {
        console.log( `- ${ingrediente}` )
    })
    
    function a(parametros){
    
    }
    const a =(parametros) => {
    }