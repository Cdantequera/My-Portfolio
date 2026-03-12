# 🌐 Portfolio — Daniel Antequera

> **Full Stack Developer · Freelance**  
> Tucumán, Argentina · [cdantequera@gmail.com](mailto:cdantequera@gmail.com) · [LinkedIn](https://www.linkedin.com/in/cdantequera) · [GitHub](https://github.com/cdantequera)

---

## ✨ Vista previa

Portfolio personal construido con animaciones basadas en scroll, diseño oscuro y arquitectura de componentes modular. Cada sección está pensada para comunicar no solo qué tecnologías uso, sino cómo pienso y resuelvo problemas.

---

## 🛠️ Stack

| Categoría | Tecnologías |
|---|---|
| Frontend | React 19, TypeScript, Vite 7 |
| Estilos | Tailwind CSS 4 |
| Animaciones | Framer Motion 12 |
| Iconos | React Icons 5 |
| Deploy | Vercel |

---

## 📁 Estructura del proyecto

```
src/
├── components/
│   ├── hero/           # Sección inicial con animación de letras dispersas
│   ├── navbar/         # Navegación fija con detección de scroll
│   ├── about/          # Sobre mí con letras ensamblables y skill bars
│   ├── experience/     # Colaboraciones freelance con caso de estudio expandible
│   ├── projects/       # Proyectos personales con caso de estudio interactivo
│   ├── contact/        # Links de contacto + botón de descarga de CV
│   ├── cards/
│   │   ├── ProjectCard.tsx       # Tarjeta reutilizable de proyecto
│   │   └── CVDownloadButton.tsx  # Botón de descarga con rate limit por sesión
│   └── logo/
│       └── Logo.tsx    # Logo SVG personalizado con filtros de glow
├── App.tsx
└── main.tsx

public/
└── cv-daniel-antequera.pdf   # CV descargable
```

---

## 🚀 Instalación y uso

```bash
# Clonar el repositorio
git clone https://github.com/cdantequera/portfolio-cdantequera.git
cd portfolio-cdantequera

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Build de producción
npm run build

# Preview del build
npm run preview
```

---

## 🎨 Secciones

### Hero
Presentación con nombre animado: cada letra explota al hacer scroll y se dispersa en distintas direcciones con rotaciones y opacidades calculadas de forma determinista por índice.

### Sobre Mí
Título con efecto de ensamblaje/desintegración controlado por `useScroll` + `useTransform` de Framer Motion. Las letras entran desde distintas posiciones al entrar al viewport y salen por el lado opuesto al hacer scroll.

### Proyectos & Colaboraciones
Dos secciones diferenciadas:
- **Experience:** trabajos freelance reales (APPWise, Izipay) con caso de estudio expandible en 3 tabs (Contexto / Lo que aprendí / El valor)
- **Projects:** proyectos personales con caso de estudio interactivo mostrando el proceso de pensamiento: Problema → Decisiones técnicas → Resultado

### Contacto
Grid de links con efecto glow al hover + botón de descarga de CV con feedback visual de estados (`idle → downloading → done`).

---

## 🔒 Protección del CV

La descarga del CV tiene dos capas de protección:

**Cliente:** El componente `CVDownloadButton` limita a 3 descargas por sesión de navegador para disuadir el abuso casual.

**CDN:** Configurado en `vercel.json` para cachear el PDF 24 horas en el edge de Vercel, absorbiendo cualquier intento de abuso antes de que llegue al servidor.

```json
// vercel.json
{
  "headers": [
    {
      "source": "/cv-daniel-antequera.pdf",
      "headers": [
        { "key": "Cache-Control", "value": "public, max-age=86400, stale-while-revalidate=3600" },
        { "key": "X-Content-Type-Options", "value": "nosniff" }
      ]
    }
  ]
}
```

---

## 📦 Scripts disponibles

```bash
npm run dev          # Servidor de desarrollo con HMR
npm run build        # Build de producción (TypeScript + Vite)
npm run preview      # Preview del build de producción
npm run lint         # ESLint
npm run format       # Prettier (escribe cambios)
npm run format:check # Prettier (solo verifica)
```

---

## 📄 Licencia

Este proyecto es de uso personal. El código puede usarse como referencia o inspiración, pero el contenido (nombre, foto, proyectos, datos de contacto) pertenece a Daniel Antequera.

---

<div align="center">
  <sub>Hecho con ☕ en Tucumán, Argentina</sub>
</div>
