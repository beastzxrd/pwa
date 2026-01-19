# 📱 Integración de PWA en Google Sites

## ⚠️ LIMITACIONES DE GOOGLE SITES:

Google Sites **NO permite**:
- ❌ Subir archivos JavaScript directamente
- ❌ Registrar Service Workers
- ❌ Agregar archivos manifest.json
- ❌ Control total del HTML

## ✅ SOLUCIÓN: Alojar externamente + Insertar

### Opción 1: Insertar como iframe (RECOMENDADO)

1. **Aloja tu PWA** en un servidor externo:
   - thirtyonerecord.com/pwa/
   - GitHub Pages
   - Netlify, Vercel, etc.

2. **En Google Sites**:
   - Edita tu página
   - Click en "Insertar" → "Insertar URL" o "Embed"
   - Pega: `https://thirtyonerecord.com/pwa/`
   - Ajusta el tamaño del iframe

3. **Los usuarios podrán**:
   - Ver la PWA dentro de Google Sites
   - Hacer clic en "Abrir sitio" para ir a la URL completa
   - **Instalar la PWA solo desde thirtyonerecord.com/pwa/** (no desde Google Sites)

### Opción 2: Botón de redirección

En Google Sites, agrega un botón que redirija a:
```
https://thirtyonerecord.com/pwa/
```

**Ventajas:**
- ✅ Simple de implementar
- ✅ Usuarios van directamente a tu PWA
- ✅ Pueden instalarla sin problemas

### Opción 3: Código de inserción (si Google Sites lo permite)

1. En Google Sites → Editar → Insertar → Embed
2. Usa este código:

```html
<div style="text-align: center; padding: 20px;">
  <h2>Instala nuestra App</h2>
  <p>Accede a nuestra aplicación web progresiva</p>
  <a href="https://thirtyonerecord.com/pwa/" 
     target="_blank" 
     style="display: inline-block; 
            background: #667eea; 
            color: white; 
            padding: 15px 30px; 
            text-decoration: none; 
            border-radius: 8px;
            font-size: 18px;">
    Abrir App e Instalar
  </a>
</div>
```

## 🎯 CONFIGURACIÓN RECOMENDADA:

### 1. Modifica el manifest para Google Sites

Como la PWA se abrirá desde un iframe o link, ajusta el scope:

```json
{
  "start_url": "https://thirtyonerecord.com/pwa/",
  "scope": "https://thirtyonerecord.com/pwa/"
}
```

### 2. Detectar si está en iframe

Agrega al HTML para detectar si está en Google Sites:

```javascript
// Detectar si está en iframe
if (window.self !== window.top) {
    // Está en iframe (Google Sites)
    document.body.innerHTML += `
        <div style="position: fixed; top: 0; left: 0; right: 0; 
                    background: #667eea; color: white; padding: 10px; 
                    text-align: center; z-index: 9999;">
            <a href="https://thirtyonerecord.com/pwa/" 
               target="_blank" 
               style="color: white; text-decoration: underline;">
                Abrir en ventana completa para instalar
            </a>
        </div>
    `;
}
```

## 📋 PASOS CONCRETOS:

### A. Subir PWA a thirtyonerecord.com
1. Sube todo el contenido de `dist/` a tu servidor
2. Verifica que funcione en: `https://thirtyonerecord.com/pwa/`
3. Verifica que se pueda instalar desde ahí

### B. Integrar en Google Sites
1. Abre tu Google Site en modo edición
2. Click en "Insertar" → "Embed" o "Insertar URL"
3. Opciones:
   - **iframe completo**: Pega `https://thirtyonerecord.com/pwa/`
   - **Botón**: Crea un botón con link a la URL
   - **HTML personalizado** (si está disponible): Usa el código de arriba

### C. Instruir a los usuarios
Agrega texto en Google Sites:
```
"Para instalar la aplicación en tu dispositivo, 
haz clic en el botón y luego en el ícono de instalación 
que aparece en la barra del navegador"
```

## ⚠️ IMPORTANTE:

- La PWA solo se puede instalar desde `thirtyonerecord.com/pwa/` directamente
- Desde Google Sites en iframe, los usuarios solo pueden VER la app
- Deben hacer clic en "Abrir sitio" o tu botón para poder instalarla
- Esto es una limitación de seguridad del navegador, no de tu código

## 🔧 ¿Qué archivo necesitas en Google Sites?

**NINGUNO** - Google Sites no permite subir los archivos de la PWA.

Solo necesitas:
1. ✅ Tu PWA funcionando en thirtyonerecord.com/pwa/
2. ✅ Un iframe o link en Google Sites que apunte a esa URL
3. ✅ Instrucciones para que los usuarios sepan que deben abrir la URL completa para instalar

## 🎨 Ejemplo visual para Google Sites:

```
┌─────────────────────────────────────┐
│      TU PÁGINA DE GOOGLE SITES      │
├─────────────────────────────────────┤
│                                     │
│   Texto explicativo de tu sitio    │
│                                     │
│   ┌───────────────────────────┐   │
│   │                           │   │
│   │   [Botón grande y vistoso] │   │
│   │   "Abrir e Instalar App"  │   │
│   │                           │   │
│   └───────────────────────────┘   │
│                                     │
│   O un iframe con tu PWA:          │
│                                     │
│   ┌───────────────────────────┐   │
│   │  ┌─────────────────────┐  │   │
│   │  │   Tu PWA aquí       │  │   │
│   │  │   (vista previa)    │  │   │
│   │  └─────────────────────┘  │   │
│   └───────────────────────────┘   │
│                                     │
└─────────────────────────────────────┘
```
