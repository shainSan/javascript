/*
condicionales se utilizan para tomar decisiones dentro de nuestro 
programa

*/
/* if(condicion) 
//se ejecuta solo si es verdadera
 {
    codigo 
    codigo
    codigo 
    codigo
} 
*/
let edad = parseInt(prompt("¿cual es tu edad?")); //sale la encuesta de datos//

if (edad >= 18 && edad < 30)  
{document.write("Eres un joven.");
} else if(edad >= 30 && edad < 60)
{document.write("Eres un adulto.");
} else if(edad >= 60)
{document.write ("eres un adulto mayor");
} else 
{document.write("Eres un niñe");
}
