# 🔧 Solución: App no se instala desde Google Sites

## Problema Resuelto

La app **NO puede instalarse directamente desde Google Sites** porque:
- Google Sites no permite registrar Service Workers en iframes
- Los navegadores bloquean la instalación de PWAs dentro de iframes por seguridad
- Las PWAs requieren un contexto de navegación de nivel superior

## ✅ Cambios Realizados

1. **URLs absolutas** en manifest.json y Service Worker
2. **Detección de iframe** mejorada
3. **Banner informativo** cuando está en Google Sites
4. **Mejor manejo de errores** de instalación
5. **Texto en español** para mejor experiencia

## 📋 Cómo Funciona Ahora

### En Google Sites (iframe):
- ✅ La app se muestra correctamente
- ✅ Banner automático indica: "Abre en nueva ventana para instalar"
- ✅ El Service Worker NO se registra (normal, es por seguridad)
- ❌ Botón de instalar mostrará mensaje educativo

### Fuera de Google Sites (URL directa):
- ✅ Service Worker se registra correctamente
- ✅ Botón "Instalar App" funciona
- ✅ App es instalable como PWA
- ✅ Funciona offline después de instalar

## 🚀 Instrucciones para Usuarios

### Opción A: Usar desde Google Sites + Instalar desde ventana nueva

1. **En Google Sites**, inserta la app como iframe:
   - Inserta → Insertar URL
   - URL: `https://thirtyonerecord.com/pwa/` (o donde esté alojada)

2. **Los usuarios verán**:
   - Banner superior: "Para instalar esta app, ábrela en una nueva ventana"
   - Hacer clic en el enlace del banner
   - Se abre en nueva pestaña
   - Allí SÍ pueden instalar

### Opción B: Botón directo (RECOMENDADO)

En lugar de iframe, en Google Sites agrega un botón/enlace:

```html
🔗 URL: https://thirtyonerecord.com/pwa/
📝 Texto: "Instalar ThirtyOneRecord App"
```

**Esto es mejor porque:**
- ✅ Más simple para usuarios
- ✅ Instalación inmediata
- ✅ Sin confusión del iframe

## 🌐 Despliegue Necesario

Para que funcione, la app debe estar en:
- ✅ **HTTPS** (obligatorio para PWA)
- ✅ Dominio propio o:
  - GitHub Pages
  - Netlify
  - Vercel
  - Cloudflare Pages

### Pasos de Despliegue:

#### GitHub Pages:
```bash
# 1. Build
npm run build

# 2. Subir carpeta dist/ al repositorio
git add dist/
git commit -m "Deploy PWA"
git push

# 3. En GitHub: Settings → Pages → Source: main branch → /dist
```

#### Netlify (más fácil):
```bash
# 1. Build
npm run build

# 2. Arrastra carpeta dist/ a netlify.com
# O conecta repositorio GitHub

# 3. Netlify genera URL automáticamente
```

## 🧪 Cómo Probar

1. **Primero prueba fuera de Google Sites**:
   ```bash
   npm run dev
   # Abre http://localhost:5173
   # Verifica que Service Worker se registra
   # Prueba instalar (solo funciona en HTTPS en producción)
   ```

2. **Luego prueba en Google Sites**:
   - Sube a hosting con HTTPS
   - Inserta en Google Sites
   - Verifica banner aparece
   - Haz clic en "abrir en nueva ventana"
   - Verifica instalación funciona en nueva ventana

## 📱 Requisitos para Instalación

La PWA solo se puede instalar en:
- ✅ Chrome/Edge en Desktop
- ✅ Chrome/Edge/Samsung Internet en Android
- ✅ Safari en iOS 16.4+ (soporte limitado)
- ❌ Safari desktop (no soporta PWA)

## 🔍 Troubleshooting

### "La app no se instala"
- ¿Está en HTTPS? (obligatorio excepto localhost)
- ¿manifest.json es accesible?
- ¿Service Worker se registró? (ver Console DevTools)
- ¿Estás en iframe? (no funcionará, abre en ventana nueva)

### "Service Worker error"
- Verifica rutas en sw.js sean absolutas (`/` no `./`)
- Verifica CORS si los assets están en diferente dominio
- Limpia caché: DevTools → Application → Clear storage

### "No aparece banner en Google Sites"
- Verifica que el código de detección de iframe esté presente
- Abre DevTools Console para ver logs
- Verifica que JavaScript no esté bloqueado

## 📞 Soporte

Si después de seguir estos pasos aún no funciona:
1. Abre DevTools (F12)
2. Ve a Console y Application tabs
3. Captura pantalla de errores
4. Verifica que todos los archivos se sirvan correctamente

---

**Última actualización:** Enero 2026
**Estado:** ✅ Problema resuelto - Instrucciones listas
