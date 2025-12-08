---
title: "¿Por qué terminé creando mi propio tema para Jekyll?"
date: 2025-12-08T15:31:44-03:00
author: Angel Simón
layout: post
permalink: /por-que-hice-un-tema-para-jekyll/
categories: [Desarrollo]
tags: [Desarrollo, Jekyll, CSS, Diseño, AI, Gemini]
---

Mi intención inicial era simple: encontrar un tema de Jekyll que fuera minimalista, rápido y fácil de implementar. La ironía es que, en lugar de eso, terminé desarrollando uno propio desde cero.

Este proyecto se convirtió en una oportunidad valiosa para profundizar en el diseño web, centrándome especialmente en CSS. Además, busqué poner en práctica una técnica de desarrollo iterativo junto a Inteligencias Artificiales (IA), partiendo de ideas generales hasta obtener un producto funcional.


## La Arquitectura Esencial de Jekyll

El punto de partida fue comprender la **estructura** de un sitio Jekyll. Rápidamente asimilé el sistema de plantillas y la importancia de `_config.yml` y los directorios clave (`_includes`, `_layouts`, `assets`, etc.). Aunque la arquitectura es flexible, analicé varios temas existentes para replicar un patrón general que resultara eficiente.

En este proceso, utilicé una IA como asistente, lo que me permitió confirmar la estructura básica. Aprendí a manejar el **Front Matter**, las **variables Liquid** para la inclusión dinámica de datos, y los **Tags Liquid** para implementar lógica de programación como bucles y condicionales.


## Del Prototipo al Diseño Final Asistido por IA

El diseño se basó en la estética minimalista de otros blogs que navegué como fuente de inspiración.

El primer prototipado lo realicé con Lovable, una herramienta ideal para el "vibe coding", que me permitió generar un prototipo visual funcional con gran rapidez.

Con esa base, comencé a trabajar con Gemini. Le proporcioné la visión de crear un template para Jekyll y le pedí que generara el maquetado inicial y el diseño del post. Le dí como base de conocimiento los archivos fuentes de Lovable y algunas capturas de pantalla de ejemplos. En pocas horas, y varios ajustes manuales a la respuesta de Gemini, tenía un diseño sólido que pude poner a prueba utilizando una imagen de Docker de Jekyll.

Ajusté el CSS y el HTML hasta lograr la apariencia final que buscaba. Un objetivo clave fue la posibilidad de manejar **múltiples temas de colores**. Opté por un modo oscuro y uno claro, configurados de manera escalable gracias al uso de variables de CSS.

De hecho, Gemini demostró una rápida comprensión del archivo `styles.css`, sugiriendo mejoras para la adaptabilidad móvil del diseño (responsiveness) y paletas de colores adicionales.


### Ejemplo: Implementación de Temas con Variables CSS

Para ilustrar la facilidad con la que se puede cambiar la paleta, así es como se definió la estructura de temas en `styles.css`:

{% highlight css %}
[data-theme="light"] {
    --body-background-color: #FFFFFF;
    --font-color: #333333;
    --primary-color: #111111;
}

[data-theme="dark"] {
    --body-background-color: #282A36; /* Un tono oscuro */
    --font-color: #F8F8F2; /* Texto claro */
    --primary-color: #BD93F9; /* Un color de acento púrpura */
}
{% endhighlight %}


## Balance Final: Esfuerzo Medido con Pomodoro

Para mantener la concentración, utilicé la técnica **Pomodoro** y registré el tiempo dedicado a cada fase:

| Tarea | Tomates (Bloques de 15 min) |
|-------|---------|
| Aprender estructura básica de Jekyll | 4 tomates |
| Analizar diseños de Jekyll para inspiración | 4 tomates|
| Generar el diseño prototipo con Lovable | 2 tomates |
| Mejorar el prototipo con Gemini | 3 tomates |
| Adaptar el diseño a un template de Jekyll | 8 tomates |
| Montar el diseño a un imagen de Docker | 8 tomates |
| Escribir posts de ejemplo y adaptar diseño | 6 tomates |
| Configurar Disqus y variables en `_config.yml` | 6 tomates |
| Lanzar primera versión en GitHub | 2 tomates |


En total, la tarea sumó más de **30 tomates**, lo que equivale a aproximadamente **7 horas y media** de trabajo concentrado. En ese lapso, pasé de una carpeta vacía a un diseño adaptable, configurable y que cumple con mis expectativas de minimalismo y rendimiento.