# Calls_Linking-API_REACT-NATIVE

## Descripción

**Calls** es una aplicación móvil desarrollada en **React Native** con **Expo**. Esta aplicación está diseñada para gestionar trabajadores, mostrando información relevante, permitiendo realizar llamadas directas y personalizar los perfiles mediante la cámara o galería.

## Funcionalidades

- Lista dinámica de trabajadores con tarjetas interactivas.
- Realización de llamadas directas desde la lista.
- Navegación entre pantallas para ver detalles completos de los trabajadores.
- Edición del perfil del trabajador:
  - Toma de foto con la cámara.
  - Selección de foto desde la galería.
  - Remoción de la foto actual para usar un avatar predeterminado.
- Diseño moderno y modular, escalable para futuras expansiones.

## Estructura del Proyecto

## Estructura del Proyecto
Calls/
├── App.js                  # Configuración principal y navegación
├── assets/                 # Imágenes y recursos estáticos
├── src/
│   ├── screens/            # Pantallas de la aplicación
│   │   ├── HomeScreen.js   # Pantalla principal
│   │   └── DetailScreen.js # Pantalla de detalles
│   └── data/               # Datos de los trabajadores
│       └── workers.js      # Información de los trabajadores
├── package.json            # Dependencias del proyecto
└── README.md               # Documentación del proyecto


---

## Instalación

Sigue estos pasos para instalar y ejecutar el proyecto en tu máquina local:

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tuusuario/CallManagementApp.git
Navega a la carpeta del proyecto:

cd CallManagementApp
Instala las dependencias necesarias:

Primero instala las dependencias desde el repositorio clonado:

yarn install
yarn add expo-image-picker
yarn add expo-camera

Si encuentras algún problema, instala o actualiza las siguientes dependencias manualmente:

yarn add expo
yarn add react-native-communications react-native-gesture-handler react-native-vector-icons
yarn add @react-navigation/native
yarn add @react-navigation/stack
yarn add react-native-screens
yarn add react-native-safe-area-context
yarn add expo-camera expo-image-picker

Inicia el proyecto:
yarn start

## Uso
Inicio del proyecto:
Una vez ejecutado:
yarn start

Se abrirá el servidor de Expo.
Escanea el código QR que aparece en la terminal o navegador con la app Expo Go instalada en tu dispositivo móvil.
Alternativamente, selecciona la opción para ejecutar en un emulador de Android o iOS.

Pantallas Principales
1. HomeScreen
Visualiza una lista de trabajadores presentada como tarjetas dinámicas.
Cada tarjeta incluye:
Imagen de perfil: Foto del trabajador (editable).
Nombre del trabajador.
Botones de acción:
Realiza llamadas directas desde el botón de teléfono.
Navega a la pantalla de detalles al hacer clic en el texto "Ver detalles" o cualquier parte de la tarjeta.

3. DetailScreen
Muestra la información detallada del trabajador seleccionado:
Nombre, teléfono y ubicación.
Información adicional proporcionada en el archivo workers.js.

Funcionalidades avanzadas:
Edición de foto de perfil: Permite tomar una foto, seleccionar desde la galería o remover la foto actual.
Botón de llamada: Realiza una llamada directamente al trabajador desde esta pantalla.
Posible Expansión del Sistema

El proyecto está diseñado para ser escalable y modular. Estas son algunas funcionalidades que pueden añadirse en el futuro:

Gestión de Trabajadores:

Crear, editar y eliminar trabajadores desde la interfaz.
Sincronización de datos en tiempo real con bases de datos como Firebase.
Búsqueda Avanzada:

Implementar una barra de búsqueda para filtrar trabajadores por nombre, ubicación o rol.
Roles y Perfiles:

Asignar roles a los trabajadores, como "Gerente", "Técnico" o "Operador".
Filtrar trabajadores por sus roles.
Integración con Proyectos:

Asociar trabajadores a tareas o proyectos específicos y mostrar esta información en sus perfiles.
Notificaciones:

Agregar recordatorios o alertas para eventos importantes, como cumpleaños o asignaciones pendientes.
Créditos
Proyecto desarrollado por [Tu Nombre] como parte de una práctica de desarrollo móvil.
Repositorio oficial: Calls_Linking-API_REACT-NATIVE.



---

### **Cambios Realizados**

1. **Actualización de Funcionalidades:**
   - Se incluye la funcionalidad avanzada de edición de perfil con cámara, galería y remoción de fotos.

2. **Estructura del Proyecto:**
   - Detallé el contenido de la carpeta `assets` y la organización interna del proyecto.

3. **Instalación:**
   - Agregué instrucciones claras para instalar todas las dependencias necesarias, considerando posibles problemas al clonar el repositorio.

4. **Pantallas Principales:**
   - Documenté detalladamente las acciones y funciones disponibles en `HomeScreen` y `DetailScreen`.

5. **Posible Expansión:**
   - Detallé futuras mejoras posibles para el sistema.
