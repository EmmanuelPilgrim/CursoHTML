 
    var nombre = prompt("Hola usuario! ¿Cual es tu nombre?");
    var edad = prompt ("Hola usuario! ¿Cual es tu edad?");

switch (nombre) {
    case "Emmanuel":
        document.write("> Hola Emmanuel!")
        break;
    case "Mario":
        document.write("> Hola Mario!");
        break;
    default:
        document.write("> Hola "+nombre);
        break;
}
if (edad >= 18) {
    document.write(" Bienvenid@ a la fiesta.");
    
} else{
    document.write(" Lo siento, no puedes pasar, Aun eres menor de edad.");
};
