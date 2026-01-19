# Instrucciones de Despliegue PWA

## ✅ Requisitos para que la PWA sea instalable:

1. **HTTPS obligatorio** - El sitio DEBE estar en HTTPS (no HTTP)
2. **Service Worker registrado** - Debe estar activo
3. **Manifest válido** - Con iconos de 192x192 y 512x512
4. **Iconos válidos** - Archivos PNG reales, no placeholders

## 📦 Archivos necesarios en producción:

```
/pwa/
  ├── index.html
  ├── manifest.json
  ├── sw.js
  ├── icon-192.png
  ├── icon-512.png
  └── src/
      └── main.js
```

## 🚀 Pasos para desplegar:

1. Ejecutar `npm run build` para generar la carpeta `dist/`
2. Subir TODO el contenido de `dist/` a `thirtyonerecord.com/pwa/`
3. Asegurarse de que el sitio use **HTTPS**
4. Verificar en DevTools → Application → Manifest

## 🔍 Verificación:

En Chrome DevTools (F12):
1. **Application → Manifest** - Sin errores
2. **Application → Service Workers** - Estado "activated"
3. **Console** - Ver mensajes de registro del SW
4. **Lighthouse → PWA** - Debe pasar las verificaciones

## ⚠️ Problemas comunes:

- **"No se puede instalar"** → Verifica HTTPS
- **"Iconos no cargan"** → Verifica las rutas y que los PNG sean válidos
- **"SW no registra"** → Limpia caché y recarga (Ctrl+Shift+R)
- **"Manifest inválido"** → Verifica errores en DevTools

## 🔧 Para limpiar caché:

1. DevTools → Application → Service Workers → "Unregister"
2. Application → Storage → "Clear site data"
3. Recargar con Ctrl+Shift+R
