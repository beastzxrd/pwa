# 🚀 INSTRUCCIONES PARA DESPLEGAR EN THIRTYONERECORD.COM

## ⚠️ PROBLEMA IDENTIFICADO:
El sitio **DEBE tener HTTPS** para que la PWA sea instalable. Sin HTTPS, Chrome no permitirá la instalación.

## 📦 Archivos listos para desplegar:

La carpeta `dist/` contiene todos los archivos necesarios:
```
dist/
  ├── index.html         ✓ Con rutas relativas
  ├── manifest.json      ✓ Configurado correctamente
  ├── sw.js             ✓ Service Worker
  ├── icon-192.png      ✓ Icono 192x192
  └── icon-512.png      ✓ Icono 512x512
```

## 🔧 PASOS PARA DESPLEGAR:

### 1. Sube los archivos a tu servidor
Copia **TODO** el contenido de la carpeta `dist/` a:
```
thirtyonerecord.com/pwa/
```

### 2. Verifica HTTPS
**CRÍTICO:** Asegúrate de que tu sitio use HTTPS:
- ✅ `https://thirtyonerecord.com/pwa/`
- ❌ `http://thirtyonerecord.com/pwa/` (NO funcionará)

### 3. Verifica los archivos
Accede a estas URLs y asegúrate de que carguen:
- https://thirtyonerecord.com/pwa/
- https://thirtyonerecord.com/pwa/manifest.json
- https://thirtyonerecord.com/pwa/sw.js
- https://thirtyonerecord.com/pwa/icon-192.png
- https://thirtyonerecord.com/pwa/icon-512.png

### 4. Limpia el caché del navegador
En Chrome:
1. F12 (DevTools)
2. Application → Service Workers → "Unregister" todos
3. Application → Storage → "Clear site data"
4. Ctrl + Shift + R (hard refresh)

### 5. Verifica en DevTools
1. F12 → Application → Manifest
   - Debe mostrar "My PWA Application"
   - Debe mostrar los 4 iconos sin errores
   
2. F12 → Application → Service Workers
   - Debe estar "activated and running"

3. F12 → Console
   - Debe ver: "[PWA] SW registered:"

### 6. Instala la app
- Busca el icono ⊕ o ⬇ en la barra de direcciones
- O usa el botón "Install App" en la página

## 🔍 SI NO FUNCIONA:

### Problema: "No se puede instalar"
**Solución:** Verifica que estés usando HTTPS, no HTTP

### Problema: "Instalación no disponible"
**Causas posibles:**
1. No estás en HTTPS
2. El manifest.json tiene errores (verifica en DevTools)
3. Los iconos no cargan (verifica las URLs)
4. El Service Worker no está registrado

### Problema: Icons no cargan
Verifica en DevTools → Network que los archivos icon-192.png y icon-512.png respondan con código 200

### Problema: Service Worker no registra
1. Verifica que sw.js cargue correctamente
2. Revisa la consola por errores
3. Limpia el caché completamente

## 📱 Requisitos mínimos PWA:

✅ HTTPS obligatorio
✅ Manifest válido con name, icons, start_url
✅ Service Worker registrado
✅ Iconos 192x192 y 512x512 (PNG)
✅ Display: standalone

## 🎯 ARCHIVO .htaccess (Si usas Apache)

Si tu servidor usa Apache, crea un archivo `.htaccess` en `/pwa/`:

```apache
# Force HTTPS
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# Cache headers for PWA files
<FilesMatch "\.(js|json|png|svg)$">
    Header set Cache-Control "max-age=604800, public"
</FilesMatch>

# Proper MIME types
AddType application/manifest+json .json
AddType image/png .png
