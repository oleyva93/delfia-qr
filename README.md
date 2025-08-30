# Generador QR DELFIA

Una aplicación web moderna construida con React y Vite que permite generar códigos QR personalizados con el sello "DELFIA" en el centro.

## Características

- ✨ **Interfaz moderna y responsiva** - Diseño atractivo con gradientes y animaciones
- 🔗 **Generación de códigos QR** - Soporta URLs, texto y cualquier contenido
- 🏷️ **Sello personalizado** - Incluye "DELFIA" en el centro del código QR
- 📱 **Diseño responsivo** - Funciona perfectamente en dispositivos móviles y desktop
- 💾 **Descarga directa** - Descarga el código QR generado en formato PNG
- ⚡ **Rápido y eficiente** - Construido con Vite para máxima velocidad

## Tecnologías utilizadas

- **React 18** - Biblioteca de interfaz de usuario
- **Vite** - Herramienta de construcción rápida
- **qrcode** - Biblioteca para generación de códigos QR
- **Canvas API** - Para agregar el texto "DELFIA" en el centro

## Instalación y uso

1. **Clona el repositorio:**
   ```bash
   git clone <tu-repositorio>
   cd qr-landing
   ```

2. **Instala las dependencias:**
   ```bash
   npm install
   ```

3. **Ejecuta el servidor de desarrollo:**
   ```bash
   npm run dev
   ```

4. **Abre tu navegador:**
   Navega a `http://localhost:5173`

## Cómo usar

1. Ingresa cualquier texto, URL o contenido en el área de texto
2. Haz clic en "Generar QR"
3. El código QR aparecerá con "DELFIA" en el centro
4. Descarga el código QR haciendo clic en "Descargar QR"

## Scripts disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Vista previa de la construcción de producción

## Estructura del proyecto

```
src/
├── App.jsx          # Componente principal
├── App.css          # Estilos del componente
├── main.jsx         # Punto de entrada
└── index.css        # Estilos globales
```

## Licencia

MIT License - Libre para uso personal y comercial.
