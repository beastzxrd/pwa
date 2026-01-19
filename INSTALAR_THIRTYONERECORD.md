# 🚀 INSTALACIÓN EN THIRTYONERECORD.COM

## 📦 Archivos listos

El archivo **`thirtyonerecord-pwa.tar.gz`** contiene todo lo necesario:
- index.html
- manifest.json  
- sw.js
- icon-192.png
- icon-512.png

## 🔧 PASOS PARA SUBIR A TU SERVIDOR:

### 1. Descomprime el archivo
```bash
tar -xzf thirtyonerecord-pwa.tar.gz
```

Esto creará los archivos sueltos.

### 2. Sube TODOS los archivos a:
```
https://thirtyonerecord.com/
```

O a una subcarpeta si prefieres:
```
https://thirtyonerecord.com/app/
```

### 3. Verifica que los archivos carguen:
Abre en tu navegador:
- https://thirtyonerecord.com/index.html (o la ruta donde los subiste)
- https://thirtyonerecord.com/manifest.json
- https://thirtyonerecord.com/sw.js
- https://thirtyonerecord.com/icon-192.png

**IMPORTANTE:** Todos deben cargar sin error 404.

### 4. Limpia el caché del navegador
En Chrome:
1. Presiona F12 (DevTools)
2. Application → Service Workers → Click "Unregister" en cualquier SW antiguo
3. Application → Storage → Click "Clear site data"
4. Presiona Ctrl + Shift + R para recargar

### 5. Verifica la instalación
1. Abre DevTools (F12)
2. Ve a **Application → Manifest**
   - Debe mostrar "My PWA Application"
   - Debe mostrar 4 iconos sin errores
3. Ve a **Application → Service Workers**
   - Debe estar "activated and running"
4. En la **barra de direcciones**, busca el icono de instalación ⊕ o ⬇

### 6. ¡Instala la app!
Click en el icono de instalación o usa el botón "Install App" en la página.

## ✅ REQUISITOS CRÍTICOS:

⚠️ **TU SITIO DEBE TENER HTTPS ACTIVO**
- ✅ `https://thirtyonerecord.com` - FUNCIONA
- ❌ `http://thirtyonerecord.com` - NO FUNCIONA

Sin HTTPS, la PWA NO se puede instalar (es una restricción de seguridad del navegador).

## 🔍 SOLUCIÓN DE PROBLEMAS:

### "No se puede instalar"
→ Verifica que uses HTTPS, no HTTP

### "Manifest error" en DevTools
→ Verifica que manifest.json cargue correctamente
→ Revisa que los iconos .png existan y carguen

### "Service Worker error"
→ Verifica que sw.js cargue sin error 404
→ Limpia el caché y recarga

### Los iconos no aparecen
→ Verifica que icon-192.png e icon-512.png carguen
→ Deben ser archivos PNG válidos (no SVG ni otros formatos)

## 📱 PARA INTEGRARLO EN GOOGLE SITES:

Una vez que funcione en thirtyonerecord.com:

1. En Google Sites → Editar → Insertar → Embed
2. URL: `https://thirtyonerecord.com/` (o donde subiste los archivos)
3. O crea un botón con link directo a esa URL

Los usuarios deberán hacer clic en "Abrir sitio" para instalarlo
(la instalación no funciona desde un iframe de Google Sites).

## 🎯 RESUMEN:

1. ✅ Descarga `thirtyonerecord-pwa.tar.gz`
2. ✅ Descomprime
3. ✅ Sube TODOS los archivos a thirtyonerecord.com
4. ✅ Verifica que tengas HTTPS activo
5. ✅ Abre el sitio, limpia caché, instala

¡Listo! Tu PWA estará funcionando en thirtyonerecord.com
