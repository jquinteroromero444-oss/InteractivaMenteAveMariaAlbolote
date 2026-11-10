# InteractivaMente: tu guía de lectura escolar
**Colegio Ave María Albolote (Granada)**

Plataforma web comunitaria de lectura activa, crítica literaria y pensamiento crítico para el alumnado y profesorado de Secundaria y Primaria.

---

## 🚀 Servidor Local Activo

El servidor web está ejecutándose en segundo plano en:
👉 **[http://localhost:8080/](http://localhost:8080/)**

### Páginas disponibles:
1. **Inicio (`index.html`)**: [http://localhost:8080/](http://localhost:8080/)
   - Mosaico de bienvenida, estadísticas dinámicas del centro escolar (reseñas, libros y lectores activos).
   - Acceso a las tres secciones escolares: Primaria, Secundaria y Claustro Docente.
   - Últimas reseñas publicadas por la comunidad y lecturas mejor valoradas.
   - Buscador general y llamada a la acción para redactar críticas.

2. **Expositorio de Reseñas (`resenas.html`)**: [http://localhost:8080/resenas.html](http://localhost:8080/resenas.html)
   - Filtrado en tiempo real por término de búsqueda (título, autor, alumno).
   - Filtrado por calificación mínima (5 estrellas, 4+ estrellas).
   - Filtrado por género (Misterio, Historia, Fantasía, Drama social, Convivencia escolar).
   - Filtrado por edad o etapa (12-13 años / 14-16 años).
   - Agrupación por libro ("Ver opiniones de esta obra").
   - Modal de lectura rápida y enlace a la ficha completa.

3. **Detalle de Reseña (`detalle.html`)**: [http://localhost:8080/detalle.html?id=rev-asesinato-1](http://localhost:8080/detalle.html?id=rev-asesinato-1)
   - Carga dinámica del libro y reseña vía parámetro `?id=...`.
   - Sinopsis sin spoilers + opinión personal y ejes formativos.
   - Botón interactivo de **Me gusta** con contador y persistencia.
   - Botón de **Compartir en el aula** (copia de enlace al portapapeles).
   - Botón de **Guardar en mi lista de deseos** (Wishlist).
   - **Módulo de comentarios de alumnos**: permite enviar comentarios que se publican de inmediato y se guardan en el navegador.
   - Guía pedagógica del Departamento de Lengua y Ficha de lectura con ejemplares disponibles en biblioteca escolar.

4. **Escribir Reseña (`escribir.html`)**: [http://localhost:8080/escribir.html](http://localhost:8080/escribir.html)
   - Buscador con autocompletado inteligente de libros del catálogo.
   - Acordeón de carga manual de libro si no se encuentra en el catálogo.
   - Selector interactivo de estrellas (1 a 5) con textos descriptivos.
   - Conmutador de secuela/saga.
   - Campos de sinopsis y opinión personal con contador y validación.
   - **Vista previa en tiempo real** que se actualiza mientras el alumno escribe.
   - Publicación que añade la reseña inmediatamente a la base de datos local y la muestra en el expositorio y en el inicio.
   - Guardado de borrador en el navegador.

5. **Mi Perfil Lector (`perfil.html`)**: [http://localhost:8080/perfil.html](http://localhost:8080/perfil.html)
   - Perfil de la alumna `L. · 3º ESO`.
   - Pestaña de "Mis reseñas publicadas".
   - Pestaña de "Mi lista de deseos (Wishlist)".
   - Insignias escolares ("Lectora Voraz", "Crítica Aguda", "Debate Constructivo").
   - Opción para restablecer datos de muestra.

---

## ♿ Características de Accesibilidad
- **Agrandar letra (A+)**: Aumenta el tamaño tipográfico de la interfaz.
- **Alto contraste**: Optimiza la paleta para facilitar la lectura y descanso visual.
- **Buscador global (`⌘K` / `Ctrl+K`)**: Atajo rápido accesible desde cualquier página.

---

## 🛠️ Tecnologías y Arquitectura
- **HTML5 semántico** con Tailwind CSS.
- **JavaScript Moderno (ES6+)** con módulo reactivo `data.js` basado en `localStorage`.
- **Servidor Web Pure PowerShell**: `server.ps1` basado en `System.Net.HttpListener`, sin dependencias externas.
