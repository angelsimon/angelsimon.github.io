---
layout: post
title: Factorial en CLIPS
category: Programación
visible: true
---
Clips es un lenguaje de programación orientado a la elaboración de sistemas expertos. 
Es el acrónimo de C Language Integrated Production System y soporto tres paradigmas de programación: 
Programación lógica, programación imperativa y la programación orientada a objetos. Su sintaxis es muy similar a LIPS 
aunque fue escrito en C, de manera que puede ser utilizar en Windows, MacOS y Linux. Así que si estás interesado en 
desarrollar un sistema experto o bien estás cursando alguna ingeniería en sistemas y lo tenés que estudiar, éstos dos 
ejemplos de cómo calcular un factorial te puede ser útiles:

<pre>
<code>
;;Factorial calculado de forma recursiva.
(deffacts Numero-a-calcular
  (valor 5)
)
(deffacts Resultado-factorial
  (resultado 1) ;Para no multiplicar por cero
) 

(defrule calcular-factorial 

  ?h1  ?x 1))
=>
  (retract ?h1 ?h2)
  (assert (resultado (* ?x ?r)))
  (assert (valor (- ?x 1)))
  (refresh calcular-factorial)
) 

(defrule mostrar-factorial
  (resultado ?r)
  =>
  (printout t "El resultado del factorial es: " ?r)
)

;;Factorial calculado de forma iterativa
(deffacts Numero-a-calcular
  (valor 3)
)
(deffacts Resultado-factorial
  (resultado 1) ;Para no multiplicar por cero
) 

(defrule calcular-factorial
  ?h1 
  (loop-for-count ?x
    (retract ?h1 ?h2)
    (assert (resultado (* ?x ?r)))
    (assert (valor (- ?x 1)))
  )
) 

(defrule mostrar-factorial
  (resultado ?r)
  =>
  (printout t "El resultado del factorial es: " ?r)
)
</code>
</pre>
