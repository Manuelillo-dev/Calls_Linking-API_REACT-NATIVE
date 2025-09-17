# 📞 **Calls – Linking API (React Native + Expo)**

[![Made with React Native](https://img.shields.io/badge/React%20Native-0%2B-61dafb?logo=react)](https://reactnative.dev/)
[![Expo](https://img.shields.io/badge/Expo-managed-000?logo=expo)](https://expo.dev/)
[![Platform](https://img.shields.io/badge/Platforms-Android%20%7C%20iOS-informational)](#)
[![License](https://img.shields.io/badge/License-MIT-green)](#-licencia)

**Calls** es una app móvil para **gestionar trabajadores** y **llamar** en un toque. Permite ver fichas, abrir detalles y **editar la foto de perfil** con **cámara** o **galería**. Ideal como base para apps de RR.HH., cuadrillas o servicios en campo.

---

## ✨ **Funcionalidades**

- 🧑‍🔧 **Listado dinámico** de trabajadores (tarjetas interactivas).
- ☎️ **Llamadas directas** desde la tarjeta y desde el detalle.
- 🔀 **Navegación** entre Home y Detalle.
- 🖼️ **Edición de perfil**:
  - 📷 Tomar foto con la **cámara**.
  - 🖼️ Elegir desde **galería**.
  - ♻️ Remover foto y volver a **avatar** por defecto.
- 🧩 Arquitectura **modular** y fácil de escalar.

---

## 🧭 **Demo rápido (flujo)**

1) **Home** → lista de trabajadores con foto, nombre y acciones.  
2) **Detalle** → datos ampliados + botón de llamada.  
3) **Editar foto** → cámara / galería / remover.

---

## 🗂️ **Estructura del proyecto**
<details> <summary><b>📂 Estructura del proyecto (click para expandir)</b></summary>
Calls_Linking-API_REACT-NATIVE/
├─ App.js                     # Navegación y bootstrap de la app
├─ assets/                    # Imágenes y recursos estáticos
├─ src/
│  ├─ screens/                # Pantallas de la app
│  │  ├─ HomeScreen.js        # Listado
│  │  └─ DetailScreen.js      # Detalle de trabajador
│  └─ data/
│     └─ workers.js           # Datos de ejemplo
├─ package.json               # Dependencias y scripts
└─ README.md                  # Documentación

</details>
---

## 🚀 **Instalación y ejecución**

> Requisitos: **Node LTS**, **Yarn** o **npm**, **Expo Go** en tu dispositivo o un emulador Android/iOS.

```bash
# 1) Clonar el repo
git clone https://github.com/Manuelillo-dev/Calls_Linking-API_REACT-NATIVE.git
cd Calls_Linking-API_REACT-NATIVE

# 2) Instalar dependencias
yarn install
# o
npm install

# 3) Asegurar dependencias de medios (si no vinieran)
yarn add expo-camera expo-image-picker
# o
npm i expo-camera expo-image-picker

# 4) Levantar el proyecto
yarn start
# o
npx expo start
```

📱 Abre la app Expo Go y escanea el QR, o ejecútalo en un emulador.

---

## 🔒 **Permisos (Expo)**

Para usar cámara/galería necesitarás permisos en tiempo de ejecución.
Si personalizas app.json, recuerda considerar:
```bash
{
  "expo": {
    "plugins": [
      [
        "expo-camera",
        { "cameraPermission": "Permitir que la app use la cámara" }
      ],
      [
        "expo-image-picker",
        { "photosPermission": "Permitir que la app acceda a tus fotos" }
      ]
    ],
    "ios": { "infoPlist": { "NSCameraUsageDescription": "Para tomar foto de perfil", "NSPhotoLibraryUsageDescription": "Para elegir foto de perfil" } },
    "android": { "permissions": ["CAMERA", "READ_MEDIA_IMAGES"] }
  }
}
```

Los textos pueden variar según tus necesidades y la versión de Expo/SDK.

---

## .🧰 **Stack técnico**

React Native (Expo – flujo managed)

React Navigation (stack)

APIs de dispositivo: expo-camera, expo-image-picker

(Opcional) Utilidades para llamadas con Linking o librerías equivalentes

---

##🧪 **Scripts útiles**
```bash
{
  "scripts": {
    "start": "expo start",
    "android": "expo run:android",
    "ios": "expo run:ios",
    "web": "expo start --web"
  }
}

```

---

##🐛 **Troubleshooting**

La cámara no abre → verifica permisos aceptados en el dispositivo y que expo-camera esté instalado.

La galería no devuelve imagen → en Android 13+ requiere READ_MEDIA_IMAGES; en iOS revisa Info.plist.

No se inicia en emulador → abre el emulador primero o usa adb devices para verificar conexión.

Llamadas no se completan → revisa que el número tenga formato válido y que Linking.openURL('tel:...') se dispare en un dispositivo real.

##🧭 **Roadmap (ideas de expansión)**

👤 CRUD de trabajadores con persistencia (por ejemplo Firebase).

🔎 Búsqueda y filtros por rol/ubicación.

👥 Roles y permisos (Gerente, Técnico, Operador…).

📌 Asignación a proyectos/tareas.

🔔 Notificaciones y recordatorios (cumpleaños, asignaciones, etc.).

##🤝 **Contribuir**

Haz un fork y crea una rama: feat/tu-feature.

Commit con convención clara.

Pull Request con descripción breve y capturas si aplica.

##👤 **Créditos**

Proyecto desarrollado por Tu Nombre como práctica de desarrollo móvil.
Repositorio: https://github.com/Manuelillo-dev/Calls_Linking-API_REACT-NATIVE
