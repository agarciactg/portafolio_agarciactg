// i18n initialization and language switcher logic

document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize i18next
    i18next
      .use(i18nextHttpBackend)
      .use(i18nextBrowserLanguageDetector)
      .init({
        fallbackLng: 'es', // Default language
        debug: true,       // Helpful for development, remove in production
        ns: ['home'],      // Tell i18next to load home.json
        defaultNS: 'home', // Default namespace is home.json
        backend: {
          // path where resources get loaded from
          loadPath: '/locales/{{lng}}/{{ns}}.json',
        }
      }, function(err, t) {
        if (err) return console.error('Error loading i18next:', err);
        // initialized and ready to go!
        updateContent();
      });

    // 2. Function to update content based on data-i18n attributes
    function updateContent() {
      // Find all elements with the 'data-i18n' attribute
      const elements = document.querySelectorAll('[data-i18n]');
      
      elements.forEach((element) => {
        const key = element.getAttribute('data-i18n');
        
        // Support for translating attributes, e.g., data-i18n="[href]key"
        if (key.startsWith('[')) {
          const parts = key.split(']');
          const attribute = parts[0].substring(1);
          const translationKey = parts[1];
          element.setAttribute(attribute, i18next.t(translationKey));
        } else {
          element.innerHTML = i18next.t(key);
        }
      });
      
      // Update active state of language buttons
      document.querySelectorAll('.lang-btn').forEach(btn => {
          if (btn.getAttribute('data-lang') === i18next.language.split('-')[0]) {
              btn.classList.add('active');
          } else {
              btn.classList.remove('active');
          }
      });

      // Update Typed strings if it has been initialized
      if (window.heroTyped) {
          const newStrings = i18next.t('typed_strings', { returnObjects: true });
          if (Array.isArray(newStrings)) {
              window.heroTyped.strings = newStrings;
              // Reset and restart the typewriter effect
              window.heroTyped.reset();
          }
      }
    }

    // 3. Event listeners for language switcher buttons
    const langSwitchers = document.querySelectorAll('.lang-btn');
    langSwitchers.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const lang = btn.getAttribute('data-lang');
            // Change language
            i18next.changeLanguage(lang, (err, t) => {
                if (err) return console.error('Error changing language', err);
                updateContent();
            });
        });
    });
});
