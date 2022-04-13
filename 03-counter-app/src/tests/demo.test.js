describe('Pruebas en el archivo demo.test.js', () => {
    
    test ( 'deben de ser iguales los strings', () =>{
    
        // 1. Inicialización (Arrange)
        const mensaje ='hola mundo';
    
        // 2. Estímulo (Act)
        const mensaje2 = `hola mundo`;
    
        // 3. Observar comportamiento (Asert)
        expect(mensaje).toBe(mensaje2); //===
    
    })

});
