const nombre = 'Fernando';
const apellido = 'Alonso';

const nombreCompleto = `
${nombre} 
${apellido}
${1+1} 
${getSaludo()} 
`;

console.log(nombreCompleto);

function getSaludo(){
    return 'Hola';
}