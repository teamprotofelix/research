/* 첫 렌더 전 테마·언어를 적용해 깜빡임(FOUC)을 줄인다.
 * 저장값이 없으면 시스템 테마, 언어는 한국어로 시작한다. */
(function () {
  try {
    var raw = localStorage.getItem('eqr.prefs');
    var prefs = raw ? JSON.parse(raw) : {};
    var theme = prefs.theme === 'light' || prefs.theme === 'dark' ? prefs.theme : 'system';
    var lang = prefs.lang === 'en' || prefs.lang === 'ja' ? prefs.lang : 'ko';
    var resolved =
      theme === 'system'
        ? window.matchMedia('(prefers-color-scheme: dark)').matches
          ? 'dark'
          : 'light'
        : theme;
    var root = document.documentElement;
    root.setAttribute('data-theme-pref', theme);
    root.setAttribute('data-theme', resolved);
    root.setAttribute('lang', lang);
  } catch (e) {
    document.documentElement.setAttribute('data-theme-pref', 'system');
    document.documentElement.setAttribute('data-theme', 'light');
  }
})();
