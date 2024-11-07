# Calls_Linking-API_REACT-NATIVE
# CallManagementApp

## Descripción

CallManagementApp es una aplicación móvil desarrollada en React Native con Expo. Permite gestionar trabajadores mostrando su información, realizando llamadas y proporcionando detalles adicionales.

## Funcionalidades
MUY BÁSICO...
- Lista dinámica de trabajadores.
- Realización de llamadas directas desde la lista.
- Navegación entre pantallas para ver detalles "completos".
- Diseño moderno y modular.

## Estructura del Proyecto
CallManagementApp/ ├── App.js # Configuración principal y navegación ├── assets/ # Imágenes y recursos estáticos ├── src/ │ ├── screens/ # Pantallas de la aplicación │ │ ├── HomeScreen.js # Pantalla principal │ │ └── DetailScreen.js # Pantalla de detalles │ └── data/ # Datos de los trabajadores │ └── workers.js ├── package.json # Dependencias del proyecto └── README.md # Documentación del proyecto


## Instalación

Sigue estos pasos para instalar y ejecutar el proyecto en tu máquina local:

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tuusuario/CallManagementApp.git
   
2. Navega a la carpeta del proyecto:
cd CallManagementApp

3. Instala las dependencias necesarias:

del sitio oficial: https://reactnative.dev/docs/set-up-your-environment 

Instalación de Librerías (preferentemente con YARN)
YARN:
yarn install
yarn add react-native-communications react-native-gesture-handler react-native-vector-icons
	yarn add @react-navigation/native
	yarn add @react-navigation/stack
	yarn add react-native-screens
	yarn add react-native-safe-area-context
	yarn add react-native-gesture-handler


5. Inicia el proyecto:
yarn start

## Uso
Inicio del proyecto:

Una vez ejecutado:
yarn start
Se abrirá el servidor de Expo.
Escanea el código QR que aparece en la terminal o navegador con la app Expo Go instalada en tu dispositivo móvil.
Alternativamente, selecciona la opción para ejecutar en un emulador de Android o iOS.
Pantallas principales:

HomeScreen:
Visualiza una lista de trabajadores.
Realiza llamadas directas desde el botón de teléfono en las tarjetas.
Navega a la pantalla de detalles al hacer clic en cualquier tarjeta o en el texto "Ver detalles".
DetailScreen:
Consulta información detallada del trabajador.
Usa el botón de llamada para contactar al trabajador directamente.
