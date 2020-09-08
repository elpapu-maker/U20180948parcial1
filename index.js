var operacion = require('./operacion');
var empleado1= ("Jonathan Herrera");
var empleado2= ("Jose Armando");
var empleado3= ("Laura Hernan");
var hora=12;
console.log("Este es un caso hipotetico de un trabajo de duracion de 7 horas de programacion con sueldo de 10 dolares hora y tomando encuentra otros gastos como comida y agua. ");
console.log("");

function resolverOperacion(y) {
  console.log("1. Desarrollar una aplicación que en base a un precio por hora, cantidad de horas trabajadas determine el precio de una persona en el proyecto.");


    operacion(y, (error,operacion) => {
        if (error) {
          console.log("");
	        console.log("ERROR:", error.message);
	    }
        else {
            console.log("el salario pagado por hora es 10. ")
            console.log("")
            console.log("el salario por "+ y + " horas pagado a "+ empleado1+" es de $ " + operacion.salarioHora());
            }});};
function resolverOperacion2(y) {
    operacion(y, (error,operacion) => {
        if (error) {
          console.log("Algo salio mal");
	        console.log("ERROR:", error.message);
	    }
        else {
            console.log("");
            console.log("el salario por "+ y + " horas pagado a "+ empleado2+" es de $ " + operacion.salarioHora());
            }
    });
  };
    function resolverOperacion3(y) {
        operacion(y, (error,operacion) => {
            if (error) {
              console.log("");
    	        console.log("ERROR:", error.message);
    	    }
            else {
                console.log("");
                console.log("el salario por "+ y + " horas pagado a "+ empleado3+" es de $ " + operacion.salarioHora());
                console.log("");
                }});
              };

              function holgura(y) {
                  operacion(y, (error,operacion) => {
                      if (error) {
                        console.log("Algo salio mal");
              	        console.log("ERROR:", error.message);
              	    }
                      else {
                        console.log("2.Presentar también una holgura del 8% (costo extra que se guarda por cualquier incidente).");
                          console.log("");
                          console.log("--La olgura del 8% del total de "+ operacion.total()+" es de $ " + operacion.holgura());
                          console.log("");
                          }
                  });
                };



        function pagos(y) {
            console.log("");
            operacion(y, (error,operacion) => {
                if (error) {
                  console.log("")
        	        console.log("ERROR:", error.message);
        	    }
                else {
              console.log("");
              console.log("3.Asignar también cantidad de personas en el proyecto y presentar el costo de todos los empleados usando las horas de cada uno como las de el punto 1.");
                    console.log("");
                    console.log("-1-. "+ empleado1 +" 7 horas trabajo el pago es de $ " + operacion.salarioHora1()),
                    console.log("");
                    console.log("-2-. "+ empleado2 +" 6 horas trabajo el pago es de $ " + operacion.salarioHora2()),
                    console.log("");
                    console.log("-3-. "+ empleado3 +" 5 horas trabajo el pago es de $ " + operacion.salarioHora3());
                    }});};

          var salato=180;
          function costos(y) {
              console.log("");
              operacion(y,(error,operacion) => {
                  if (error) {
                    console.log("")
                    console.log("ERROR:", error.message);
                }
                  else {
                console.log("");
                      console.log("4.Asignar costo de materiales y mostrar el costo total del proyecto (materiales + horas de empleados)");
                      console.log("");
                      console.log("los costos de bebida y comida son = " + operacion.viaticos()+" el pago de salarios es $ "+salato +" un total de $ "+ operacion.total());
                      }});};

console.log("");
resolverOperacion(7);
resolverOperacion2(6);
resolverOperacion3(5);
holgura();
pagos();
costos();
