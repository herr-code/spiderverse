/*
	Requerimiento
	Crea una clase spiderman que tenga como atributos los siguientes campos: 

	nombre, edad, actor que lo interpretó, número de películas en las que apareció, 
	estudio de cine.
*/
describe("Unit Tests for Spiderman class", () => {
  test('1) Create an spiderman object', () => {
    //Aqui escribimos el código que queremos usar tal cuál 
    //Quiero poder instanciar un objeto Spiderman con esta información
    const andrewGarfield = new Spiderman("Spiderman Sony", 31, "Andrew Garfield", 2, "Sony")
    expect(andrewGarfield.name).toBe("Spiderman Sony");
    expect(andrewGarfield.age).toBe(31);
    expect(andrewGarfield.actor).toBe("Andrew Garfield");
    expect(andrewGarfield.movies).toBe(31);
    expect(andrewGarfield.studio).toBe("Sony");
  });
})