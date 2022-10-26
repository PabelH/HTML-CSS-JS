window.__frameId = 'fcc-project-preview-frame';
    window.onerror = function(msg) {
      const string = msg.toLowerCase();
      if (string.includes('script error')) {
        msg = 'Build error, open your browser console to learn more.';
      }
      console.log(msg);
      return true;
    };
    document.addEventListener('click', function(e) {
      let element = e.target;
      while(element && element.nodeName !== 'A') {
        element = element.parentElement;
      }
      if (element && element.nodeName === 'A' && new URL(element.href).hash === '') {
        e.preventDefault();
        window.parent.window.alert(
          i18nContent.t('misc.iframe-alert', { externalLink: element.href })
        )
      }
      if (element) {
        const href = element.getAttribute('href');
        if (!href || href[0] !== '#' && !href.match(/^https?:\/\//)) {
          e.preventDefault();
        }
      }
    }, false);
    document.addEventListener('submit', function(e) {
      const action = e.target.getAttribute('action');
      e.preventDefault();
      if (action || action.match(/https?:\/\//)) {
        window.parent.window.alert(
          i18nContent.t('misc.iframe-form-submit-alert', { externalLink: action  })
        )
      }
    }, false);