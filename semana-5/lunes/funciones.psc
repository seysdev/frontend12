Algoritmo Calculadora
	Definir operacion como Caracter
	Definir a como Entero
	Definir b como Entero
	
	Escribir "Ingresa tu operacion"
	leer operacion
	
	Mientras (operacion <> "") Hacer
		Escribir "Ingresa el primero numero" 
		leer a
		
		Escribir "Ingresa el segundo numero" 
		leer b
		
		Segun operacion Hacer
			"+":
				Escribir "El resultado de la suma es: " Suma(a,b)
			"-":
				Escribir "El resultado de la resta es: " Resta(a,b)
			"/":
				Escribir "El resultado de la division es: " Division(a,b)
			De Otro Modo:
				Escribir "No soporta esta operacion"
		Fin Segun
		
		Escribir ""
		Escribir "Ingresa tu operacion"
	    leer operacion
	Fin Mientras
	
	Escribir "se cerro calculadora"
FinAlgoritmo

// registro de la funcion suma
Funcion suma_retorno = Suma(a, b)
	suma_retorno = a + b
FinFuncion

// registro de la funcion resta
Funcion resta_retorno = Resta(a, b)
	resta_retorno = a - b
FinFuncion

// registro de la funcion division
Funcion division_retorno = Division(a, b)
	division_retorno = a / b
FinFuncion
