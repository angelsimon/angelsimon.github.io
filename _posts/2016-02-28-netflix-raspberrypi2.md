---
layout: post
title: Netflix en Raspberry Pi 2
---
<img align='center' src="{site.baseurl}/images/netflix-rpi2/header.png" />

Así es, después de tanto configurar, probar, instalar, debuggear, etc. Se ha conseguido. Se puede ver Netflix en una Raspberry Pi 2. Para ello hay que seguir una serie de pasos no tan complejos y tener una versión de Raspbian actualizada. Sólo lo probé en la Raspberry Pi 2. Pero tal vez funcione en las versiones anteriores. Es probable que se note cierto lag en las anteriores por falta de memoria y procesador.

La versión de Debian necesaria es 8.

Los pasos a seguir son los siguientes:

1 - Descargar la siguiente Imagen de Google Chrome OS : https://dl.google.com/dl/edgedl/chromeos/recovery/chromeos_7077.134.0_daisy-skate_recovery_stable-channel_skate-mp.bin.zip

2 - Montar la imagen de Google Chrome OS en Ubuntu usando kpartx

<pre><code>sudo kpartx -av /media/some-directory/chromeos_7077.134.0_daisy-skate_recovery_stable-channel_skate-mp.bin</code></pre>

3 - Crear una carpeta para montar los archivos

<pre><code>sudo mkdir /media/ChromeOS</code></pre>

<pre><code>sudo mount -r /dev/mapper/loop0p3 /media/ChromeOS</code></pre>

4 - Visualizar el directorio montado

<pre><code>ls /media/ChromeOS/opt/google/chrome/</code></pre>

5 - Copiar archivos necesarios

Todavía en Ubuntu

<pre><code>sudo cp /media/ChromeOS/opt/google/libwide* /your-directory </code></pre>

6 - Instalar Google Chrome

Descargar y ejecutar los siguientes comandos en tu Raspberry Pi

<pre><code>wget http://ftp.us.debian.org/debian/pool/main/libg/libgcrypt11/libgcrypt11_1.5.0-5+deb7u3_armhf.deb
wget http://launchpadlibrarian.net/218525709/chromium-browser_45.0.2454.85-0ubuntu0.14.04.1.1097_armhf.deb
wget http://launchpadlibrarian.net/218525711/chromium-codecs-ffmpeg-extra_45.0.2454.85-0ubuntu0.14.04.1.1097_armhf.deb
sudo dpkg -i libgcrypt11_1.5.0-5+deb7u3_armhf.deb
sudo dpkg -i chromium-codecs-ffmpeg-extra_45.0.2454.85-0ubuntu0.14.04.1.1097_armhf.deb
sudo dpkg -i chromium-browser_45.0.2454.85-0ubuntu0.14.04.1.1097_armhf.deb</code></pre>

7 - Copiar archivos necesarios a tu Raspberry Pi 2

De Ubuntu a tu Raspberry Pi

<pre><code>sudo cp /your-directory/libwide* /usr/lib/chromium-browser</code></pre>


7 - Inicia LXDE y Chromium

Si no te aparece Google Chrome en el menú Internet, podés ejecutarlo desde consola con el comando chromium-browser

- Luego instalá el plugin User-Agent Switcher for Chrome

- Inicia la configuración de User-Agent Switcher

- Agregá una nueva entrada llamada Netflix

<pre>New User-Agent name   : Netflix
New User-Agent string : Mozilla/5.0 (X11; CrOS armv7l 6946.63.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2357.130 Safari/537.36
Group                 : Chrome
Indicator Flag        : IE</pre>

8 - Seleccioná el perfil creado. Hacé click en el botón de User-Agent Switcher y seleccioná el perfil Netflix. Debería quedar el ícono con la palabra IE en rojo.

9 - Ingresá a Netflix y mirá lo que quieras.


Fuente: http://www.instructables.com/id/How-to-Nativly-Run-Netflix-on-a-Raspbery-PI2/

