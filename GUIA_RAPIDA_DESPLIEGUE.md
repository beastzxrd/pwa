# 🎯 Guía Rápida de Despliegue - ThirtyOneRecord PWA

## ⚠️ IMPORTANTE: La app NO se puede instalar DESDE Google Sites

**Por qué:** Google Sites usa iframes, y los navegadores bloquean la instalación de PWAs en iframes por seguridad.

## ✅ Solución Implementada

### Lo que hice:
1. ✅ Cambié todas las URLs a rutas absolutas
2. ✅ Añadí detección de iframe con banner automático
3. ✅ Mejoré el manifest.json con configuración óptima
4. ✅ Actualicé Service Worker con mejor manejo
5. ✅ Traduje todo a español

### Lo que debes hacer TÚ:

## 🚀 Paso 1: Despliega la App

Elige una opción:

### Opción A: Netlify (MÁS FÁCIL)
```bash
# 1. Construye el proyecto
npm install
npm run build

# 2. Ve a netlify.com
# 3. Arrastra la carpeta dist/ 
# 4. Listo! Obtendrás URL como: https://tu-app.netlify.app
```

### Opción B: GitHub Pages
```bash
# 1. Construye
npm run build

# 2. Sube a GitHub
git add .
git commit -m "Deploy PWA"
git push

# 3. En GitHub:
# Settings → Pages → Source: main → Folder: /dist → Save
# URL será: https://tu-usuario.github.io/pwa/
```

### Opción C: Vercel
```bash
npm run build
# Instala Vercel CLI: npm i -g vercel
vercel --prod
# Sigue las instrucciones
```

## 🌐 Paso 2: Configura en Google Sites

### Método RECOMENDADO: Botón de Redirección

1. En tu página de Google Sites
2. Agrega un **Botón** o **Texto con enlace**
3. URL del enlace: `https://tu-dominio.netlify.app` (la que obtuviste)
4. Texto: "🎵 Instalar App ThirtyOneRecord"
5. Marca "Abrir en nueva pestaña"

**Ventaja:** Los usuarios van directo a instalar, sin confusión.

---

### Método Alternativo: Iframe con Banner

1. En Google Sites: **Insertar → Insertar URL**
2. Pega tu URL: `https://tu-dominio.netlify.app`
3. Los usuarios verán la app + un banner que dice:
   > "⚠️ Para instalar esta app, ábrela en una nueva ventana"

**Nota:** El usuario debe hacer clic en el banner para poder instalar.

## 📱 Paso 3: Prueba la Instalación

1. **Abre tu URL directamente** (no desde Google Sites)
2. Deberías ver el botón "📲 Instalar App"
3. Haz clic → Se abrirá diálogo de instalación
4. Instala → Aparecerá icono en escritorio/menú

### Requisitos del Navegador:
- ✅ Chrome/Edge (Desktop/Android)
- ✅ Samsung Internet (Android)
- ⚠️ Safari iOS 16.4+ (limitado)
- ❌ Safari Mac (no soporta PWA)

## 🔍 Verificación Técnica

Abre DevTools (F12) en tu URL desplegada:

### Console:
```
[PWA] Starting...
[PWA] SW registered: ServiceWorkerRegistration {...}
```

### Application Tab:
- **Manifest:** Debe cargar sin errores
- **Service Workers:** Estado "Activated"
- **Storage:** Cachés creados

## ⚡ Quick Test Local

Antes de desplegar, prueba localmente:

```bash
npm install
npm run dev
# Abre http://localhost:5173
```

**Nota:** La instalación solo funciona en HTTPS (excepto localhost).

## 📋 Checklist de Despliegue

- [ ] `npm run build` sin errores
- [ ] Archivos en carpeta `dist/`
- [ ] Desplegado en hosting con HTTPS
- [ ] URL accesible públicamente
- [ ] manifest.json se carga (sin 404)
- [ ] Service Worker se registra (ver Console)
- [ ] Iconos se cargan (192px y 512px)
- [ ] Botón instalar funciona
- [ ] Banner aparece si se abre desde iframe

## 🆘 Si algo no funciona

### "Service Worker failed to register"
- ✅ Verifica que estés en HTTPS (o localhost)
- ✅ Revisa rutas en sw.js (deben ser absolutas: `/icon.png`)
- ✅ Limpia caché: DevTools → Application → Clear storage

### "No aparece botón de instalar"
- ✅ ¿Ya instalaste la app? (desinstala y recarga)
- ✅ ¿Estás en iframe? (no funciona, abre en ventana nueva)
- ✅ ¿Browser compatible? (Chrome/Edge recommended)

### "404 en manifest.json"
- ✅ Verifica que esté en carpeta `dist/` después del build
- ✅ Verifica ruta en HTML: `/manifest.json`
- ✅ En algunos hostings necesitas configurar headers CORS

## 📞 URLs de Ejemplo

Si tu app está en `https://thirtyonerecord.netlify.app`:

- ✅ **URL directa para instalar:** https://thirtyonerecord.netlify.app
- ✅ **Para insertar en Google Sites:** https://thirtyonerecord.netlify.app
- ✅ **Manifest:** https://thirtyonerecord.netlify.app/manifest.json
- ✅ **Service Worker:** https://thirtyonerecord.netlify.app/sw.js

---

## 🎉 Resultado Final

### Lo que los usuarios verán:

**Desde Google Sites (iframe):**
- App visible con banner superior
- Clic en banner → Abre en nueva ventana
- En ventana nueva → Botón instalar funciona ✓

**Desde URL directa:**
- App normal
- Botón instalar funciona ✓
- Service Worker activo ✓
- Funciona offline ✓

---

**¿Necesitas más ayuda?**  
Revisa: [SOLUCION_INSTALACION_GOOGLE_SITES.md](SOLUCION_INSTALACION_GOOGLE_SITES.md)

**Versión:** 1.0  
**Fecha:** Enero 2026  
**Status:** ✅ Listo para desplegar
