// =============================================================================
// INTERACTIVAMENTE: Lógica Compartida y Accesibilidad
// =============================================================================

// Conversión de números a palabras en español para microcopy accesible
function toWords(num) {
  const numberWords = {
    0: 'cero', 1: 'una', 2: 'dos', 3: 'tres', 4: 'cuatro', 5: 'cinco',
    6: 'seis', 7: 'siete', 8: 'ocho', 9: 'nueve', 10: 'diez',
    11: 'once', 12: 'doce', 13: 'trece', 14: 'catorce', 15: 'quince',
    16: 'dieciséis', 17: 'diecisiete', 18: 'dieciocho', 19: 'diecinueve',
    20: 'veinte', 21: 'veintiuna', 22: 'veintidós', 23: 'veintitrés',
    24: 'veinticuatro', 25: 'veinticinco'
  };
  return numberWords[num] || String(num);
}

// Sistema de Notificaciones Toast
function showToast(message, type = 'success') {
  let toastContainer = document.getElementById('toast-container');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.id = 'toast-container';
    toastContainer.className = 'fixed bottom-6 right-6 z-[9999] flex flex-col gap-2 pointer-events-none';
    document.body.appendChild(toastContainer);
  }

  const toast = document.createElement('div');
  const bg = type === 'success' ? 'bg-[#00355f] text-white border-slate-700' : 'bg-slate-800 text-white border-slate-700';
  const icon = type === 'success' ? 'check_circle' : 'info';

  toast.className = `flex items-center gap-3 px-4 py-3 rounded-xl shadow-xl border text-[14px] font-medium pointer-events-auto transition-all duration-300 transform translate-y-4 opacity-0 ${bg}`;
  toast.innerHTML = `
    <span class="material-symbols-outlined text-[20px] text-amber-400">${icon}</span>
    <span>${message}</span>
  `;

  toastContainer.appendChild(toast);

  // Animación de entrada
  setTimeout(() => {
    toast.classList.remove('translate-y-4', 'opacity-0');
  }, 10);

  // Animación de salida
  setTimeout(() => {
    toast.classList.add('opacity-0', 'translate-y-2');
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// Modal de Búsqueda Global (⌘K / Ctrl+K)
function initGlobalSearch() {
  const modalHTML = `
    <div id="global-search-modal" class="fixed inset-0 z-[100] hidden bg-slate-900/60 backdrop-blur-sm flex items-start justify-center pt-20 px-4">
      <div class="bg-white w-full max-w-2xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[80vh] animate-in fade-in zoom-in-95 duration-150">
        <div class="p-4 border-b border-slate-200 flex items-center gap-3">
          <span class="material-symbols-outlined text-slate-400 text-[24px]">search</span>
          <input id="global-search-input" type="text" placeholder="Buscar por título, autor, género o alumno..." 
                 class="w-full bg-transparent text-[16px] text-slate-800 placeholder:text-slate-400 focus:outline-none" autofocus />
          <kbd class="px-2 py-0.5 text-[11px] font-semibold text-slate-500 bg-slate-100 border border-slate-200 rounded">ESC</kbd>
        </div>
        <div id="global-search-results" class="p-3 overflow-y-auto divide-y divide-slate-100 max-h-[60vh]">
          <div class="p-4 text-center text-slate-400 text-[14px]">Escribe algo para buscar en toda la red escolar...</div>
        </div>
        <div class="px-4 py-2.5 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-[12px] text-slate-500">
          <span>Consejo: Usa las flechas o haz clic en cualquier libro</span>
          <span>Colegio Ave María Albolote</span>
        </div>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', modalHTML);

  const modal = document.getElementById('global-search-modal');
  const input = document.getElementById('global-search-input');
  const results = document.getElementById('global-search-results');

  function openSearch() {
    modal.classList.remove('hidden');
    input.value = '';
    renderSearchResults('');
    setTimeout(() => input.focus(), 50);
  }

  function closeSearch() {
    modal.classList.add('hidden');
  }

  // Atajos de teclado
  document.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      modal.classList.contains('hidden') ? openSearch() : closeSearch();
    }
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeSearch();
    }
  });

  // Cierre por clic en fondo
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeSearch();
  });

  // Conectar a botones de búsqueda existentes en la página
  document.querySelectorAll('input[placeholder*="Buscar"], [data-trigger="search"]').forEach(el => {
    el.addEventListener('focus', (e) => {
      // Si no es el input dentro de la página de filtros
      if (el.id !== 'search-input') {
        e.preventDefault();
        el.blur();
        openSearch();
      }
    });
    el.addEventListener('click', (e) => {
      if (el.id !== 'search-input') {
        e.preventDefault();
        openSearch();
      }
    });
  });

  // Filtrado reactivo en modal
  input.addEventListener('input', (e) => {
    renderSearchResults(e.target.value);
  });

  function renderSearchResults(query) {
    const q = query.trim().toLowerCase();
    const books = window.appStore ? window.appStore.getBooks() : [];
    const reviews = window.appStore ? window.appStore.getReviews() : [];

    if (!q) {
      results.innerHTML = `
        <div class="p-2 text-slate-400 text-[13px] font-semibold uppercase tracking-wider">Lecturas populares</div>
        ${books.slice(0, 4).map(b => `
          <a href="detalle.html?id=${getReviewIdForBook(b.id, reviews)}" class="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors group">
            <div class="w-10 h-14 rounded bg-[#00355f] text-white flex items-center justify-center font-bold text-[16px] shrink-0 overflow-hidden">
              ${b.coverUrl ? `<img src="${b.coverUrl}" class="w-full h-full object-cover">` : b.title.charAt(0)}
            </div>
            <div class="flex-1 min-w-0">
              <h4 class="text-[14px] font-semibold text-slate-800 group-hover:text-[#00355f] truncate">${b.title}</h4>
              <p class="text-[12px] text-slate-500">${b.author} · ${b.genreLabel}</p>
            </div>
            <span class="text-[12px] text-slate-400 group-hover:text-slate-600">Ver reseña →</span>
          </a>
        `).join('')}
      `;
      return;
    }

    const matches = books.filter(b => 
      b.title.toLowerCase().includes(q) || 
      b.author.toLowerCase().includes(q) || 
      b.genreLabel.toLowerCase().includes(q)
    );

    const matchingReviews = reviews.filter(r => 
      r.studentName.toLowerCase().includes(q) || 
      r.reviewText.toLowerCase().includes(q)
    );

    if (matches.length === 0 && matchingReviews.length === 0) {
      results.innerHTML = `
        <div class="p-8 text-center text-slate-500">
          <span class="material-symbols-outlined text-[36px] text-slate-300 mb-2">menu_book</span>
          <p class="font-semibold text-slate-700">No encontramos coincidencias para "${query}"</p>
          <p class="text-[13px] text-slate-400 mt-1">¿No encuentras tu libro? <a href="escribir.html" class="text-[#00355f] underline font-medium">Escribe una nueva reseña</a></p>
        </div>
      `;
      return;
    }

    let html = '';
    if (matches.length > 0) {
      html += `<div class="p-2 text-slate-400 text-[12px] font-semibold uppercase tracking-wider">Libros en catálogo (${matches.length})</div>`;
      html += matches.map(b => `
        <a href="detalle.html?id=${getReviewIdForBook(b.id, reviews)}" class="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors group">
          <div class="w-10 h-14 rounded bg-[#00355f] text-white flex items-center justify-center font-bold text-[16px] shrink-0 overflow-hidden">
            ${b.coverUrl ? `<img src="${b.coverUrl}" class="w-full h-full object-cover">` : b.title.charAt(0)}
          </div>
          <div class="flex-1 min-w-0">
            <h4 class="text-[14px] font-semibold text-slate-800 group-hover:text-[#00355f] truncate">${b.title}</h4>
            <p class="text-[12px] text-slate-500">${b.author} · <span class="text-slate-700 font-medium">${b.ageLabel}</span></p>
          </div>
          <span class="px-2.5 py-1 rounded-full bg-slate-100 text-[11px] font-semibold text-slate-600">${b.genreLabel}</span>
        </a>
      `).join('');
    }

    results.innerHTML = html;
  }

  function getReviewIdForBook(bookId, reviews) {
    const rev = reviews.find(r => r.bookId === bookId);
    return rev ? rev.id : 'rev-asesinato-1';
  }
}

// Configuración de Accesibilidad (Agrandar letra y Alto contraste)
function initAccessibility() {
  const isLarge = localStorage.getItem('interactivamente_large_font') === 'true';
  const isContrast = localStorage.getItem('interactivamente_contrast') === 'true';

  if (isLarge) document.documentElement.classList.add('font-large');
  if (isContrast) document.documentElement.classList.add('high-contrast');

  window.toggleFuenteGrande = function() {
    const active = document.documentElement.classList.toggle('font-large');
    localStorage.setItem('interactivamente_large_font', active);
    showToast(active ? 'Tamaño de letra aumentado para lectura cómoda' : 'Tamaño de letra predeterminado');
  };

  window.toggleAltoContraste = function() {
    const active = document.documentElement.classList.toggle('high-contrast');
    localStorage.setItem('interactivamente_contrast', active);
    showToast(active ? 'Modo de alto contraste activado' : 'Modo de alto contraste desactivado');
  };
}

// Iniciar al cargar el DOM
document.addEventListener('DOMContentLoaded', () => {
  initAccessibility();
  initGlobalSearch();
});
