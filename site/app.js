(() => {
  'use strict';

  /* ---------- Russian translations (Uzbek text lives in the HTML) ---------- */
  const RU = {
    kicker: 'Уролог-эндоуролог · хирург',
    lead: 'Лечу камни в почках, простату и болезни мочевыводящих путей современным методом без разрезов.',
    st1: 'операций', st2: 'консультаций', st3: 'лет опыта',
    book: 'Записаться на приём', call: 'Позвонить',
    where: 'Yunusobod Medical Center, Ташкент',
    p_eye: 'Направления', p_h: 'Что вас беспокоит?', p_sub: 'Нажмите на свою проблему и получите короткий ответ.',
    p1: 'Камни в почках и мочеточнике',
    p1t: 'Приступообразная боль в пояснице или боку, кровь в моче. Камень во многих случаях можно раздробить и удалить эндоскопом через мочевые пути, без разрезов. Какой метод подходит именно вам, скажу после осмотра.',
    p2: 'Увеличение простаты',
    p2t: 'Частые ночные походы в туалет, слабая струя, чувство неполного опорожнения. Такие состояния лечат современными эндоскопическими методами, в том числе лазерной операцией HoLEP.',
    p3: 'Воспаление мочевых путей',
    p3t: 'Жжение при мочеиспускании, частые позывы, боль внизу живота. Если это повторяется снова и снова, нужно найти причину и вылечить её.',
    p4: 'Мужское здоровье',
    p4t: 'Деликатные проблемы рассматриваются конфиденциально и с уважением. Не стесняйтесь: это обычный медицинский вопрос, и его можно решить.',
    p5: 'Детская урология', p5t: 'Осмотр, консультация и лечение урологических проблем у детей.',
    p_btn: 'Записаться с этой проблемой →',
    w_eye: 'Метод', w_h: 'Почему хирургия без разрезов?',
    w1: 'Без разрезов', w1t: 'Инструмент вводится через естественные пути организма. На коже не остаётся шрамов.',
    w2: 'Быстрое восстановление', w2t: 'По сравнению с открытой операцией меньше дней в больнице и быстрее возвращение к работе.',
    w3: 'Меньше боли', w3t: 'Ткани травмируются меньше, поэтому и боль после операции слабее.',
    h_eye: 'Приём', h_h: 'Как проходит приём',
    h1: 'Вы записываетесь', h1t: 'Через Telegram или по телефону договариваемся об удобном дне и времени.',
    h2: 'Осмотр', h2t: 'Выслушаю жалобы и проведу осмотр. Возьмите с собой прежние УЗИ, КТ и анализы.',
    h3: 'Чёткий план', h3t: 'Понятным языком объясню диагноз и путь лечения: лекарства или нужна операция.',
    c_eye: 'Доверие', c_h: 'Сертификаты и дипломы', c_sub: 'Ташкент, Москва, Стамбул: 16 документов. Нажмите, чтобы увеличить.',
    t_eye: 'Путь', t_h: 'Опыт',
    t1: 'Ташкентская медицинская академия, Ургенчский филиал',
    t2: 'Российский университет дружбы народов (Москва), урология',
    t3: 'Yunusobod Medical Center, уролог-хирург',
    t4: 'Стамбул, Medistate: курс по лазерной операции HoLEP',
    t5: 'Ташкент: международный курс лапароскопической хирургии',
    t6: 'Повышение квалификации по детской урологии',
    t7: 'XXV конгресс Российского общества урологов',
    f_eye: 'Вопросы', f_h: 'Частые вопросы',
    f1: 'Как записаться на приём?', f1t: 'Нажмите «Записаться на приём» и выберите удобный способ: Telegram, Instagram или телефон.',
    f2: 'Что взять с собой?', f2t: 'Прежние УЗИ, КТ, результаты анализов и список лекарств, которые вы принимаете. Если ничего нет, всё равно приходите: нужные обследования назначу сам.',
    f3: 'Обязательно ли будет операция?', f3t: 'Нет. Многие состояния лечатся лекарствами и наблюдением. Операцию рекомендую только тогда, когда она действительно нужна.',
    f4: 'Сколько стоит консультация?', f4t: 'Стоимость и свободное время уточните по телефону или в Telegram.',
    f5: 'Можно ли приехать из области?', f5t: 'Да. Сначала напишите в Telegram и отправьте анализы, затем вместе выберем день приезда.',
    l_eye: 'Адрес',
    addr: 'Ташкент, Юнусабад 16-квартал, ул. А. Дониша, 28а', addr2: 'Ориентир: бар «Чемпион»',
    s_eye: 'Полезные видео', s_h: 'Подписывайтесь', tgch: 'Telegram-канал',
    disc: 'Информация на сайте носит ознакомительный характер. Диагноз и лечение назначаются только после осмотра врача.',
    b_h: 'Как с вами связаться?', b_sub: 'Выберите удобный способ. Обычно отвечаем в течение нескольких часов.',
    b1: 'Через Telegram-бот', b1t: 'Отправьте вопрос, запись быстрая',
    b2: 'Написать доктору в Telegram', b3: 'Написать в Instagram', b4: 'Позвонить',
    close: 'Закрыть'
  };
  const META = {
    uz: { title: 'Azizjon Yusufjonov - urolog-endourolog, Toshkent' },
    ru: { title: 'Азизжон Юсуфжонов - уролог-эндоуролог, Ташкент' }
  };

  const nodes = [...document.querySelectorAll('[data-i18n]')];
  const UZ = {};
  nodes.forEach(n => { UZ[n.dataset.i18n] = n.textContent; });

  function setLang(lang) {
    const dict = lang === 'ru' ? RU : UZ;
    nodes.forEach(n => { const v = dict[n.dataset.i18n]; if (v) n.textContent = v; });
    document.documentElement.lang = lang;
    document.title = META[lang].title;
    document.querySelectorAll('.lang button').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.lang === lang)));
    try { localStorage.setItem('lang', lang); } catch (e) {}
  }
  document.querySelectorAll('.lang button').forEach(b => b.addEventListener('click', () => setLang(b.dataset.lang)));
  const urlLang = new URLSearchParams(location.search).get('lang');
  let saved = null; try { saved = localStorage.getItem('lang'); } catch (e) {}
  const start = urlLang || saved || ((navigator.language || '').startsWith('ru') ? 'ru' : 'uz');
  if (start === 'ru') setLang('ru');

  /* ---------- Top bar + sticky dock ---------- */
  const top = document.querySelector('.top');
  const dock = document.getElementById('dock');
  const heroCta = document.getElementById('heroCta');
  const onScroll = () => {
    top.classList.toggle('solid', scrollY > 80);
    const r = heroCta.getBoundingClientRect();
    dock.classList.toggle('show', r.bottom < 0);
  };
  addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- Booking sheet ---------- */
  const sheet = document.getElementById('book');
  let lastFocus = null;
  function openSheet() {
    lastFocus = document.activeElement;
    sheet.hidden = false;
    document.body.style.overflow = 'hidden';
    sheet.querySelector('.opt').focus();
    track('open-book');
  }
  function closeSheet() {
    sheet.hidden = true;
    document.body.style.overflow = '';
    if (lastFocus) lastFocus.focus();
  }
  document.querySelectorAll('[data-open="book"]').forEach(b => b.addEventListener('click', openSheet));
  sheet.querySelectorAll('[data-close]').forEach(b => b.addEventListener('click', closeSheet));

  /* ---------- Certificates gallery + lightbox ---------- */
  const CERTS = ['c13','c12','c10','c16','c1','c0','c6','c7','c15','c8','c9','c14','c2','c5','c3','c4'];
  const gallery = document.getElementById('gallery');
  CERTS.forEach((c, i) => {
    const b = document.createElement('button');
    b.setAttribute('aria-label', 'Sertifikat ' + (i + 1));
    b.innerHTML = '<img src="img/sert-' + c + '-k.jpg" alt="" loading="lazy" decoding="async">';
    b.addEventListener('click', () => openLb(i));
    gallery.appendChild(b);
  });
  const lb = document.getElementById('lb');
  const lbImg = lb.querySelector('img');
  const lbCount = lb.querySelector('.lb-count');
  let idx = 0;
  function showLb() {
    lbImg.src = 'img/sert-' + CERTS[idx] + '.jpg';
    lbCount.textContent = (idx + 1) + ' / ' + CERTS.length;
  }
  function openLb(i) { idx = i; showLb(); lb.hidden = false; document.body.style.overflow = 'hidden'; }
  function closeLb() { lb.hidden = true; document.body.style.overflow = ''; }
  const step = d => { idx = (idx + d + CERTS.length) % CERTS.length; showLb(); };
  lb.querySelector('.lb-prev').addEventListener('click', e => { e.stopPropagation(); step(-1); });
  lb.querySelector('.lb-next').addEventListener('click', e => { e.stopPropagation(); step(1); });
  lb.querySelector('[data-lbclose]').addEventListener('click', closeLb);
  lb.addEventListener('click', e => { if (e.target === lb) closeLb(); });
  let tx = null;
  lb.addEventListener('touchstart', e => { tx = e.touches[0].clientX; }, { passive: true });
  lb.addEventListener('touchend', e => {
    if (tx === null) return;
    const dx = e.changedTouches[0].clientX - tx;
    if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1);
    tx = null;
  });

  addEventListener('keydown', e => {
    if (e.key === 'Escape') { if (!lb.hidden) closeLb(); else if (!sheet.hidden) closeSheet(); }
    if (!lb.hidden && e.key === 'ArrowRight') step(1);
    if (!lb.hidden && e.key === 'ArrowLeft') step(-1);
  });

  /* ---------- Only one accordion item open per group ---------- */
  document.querySelectorAll('.acc').forEach(group => {
    group.querySelectorAll('details').forEach(d => d.addEventListener('toggle', () => {
      if (d.open) group.querySelectorAll('details').forEach(o => { if (o !== d) o.open = false; });
    }));
  });

  /* ---------- Reveal on scroll ---------- */
  const rv = document.querySelectorAll('.sec > *:not(.gallery), .sec .card, .sec .steps li');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(es => es.forEach(en => {
      if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
    }), { rootMargin: '0px 0px -8% 0px' });
    rv.forEach(el => { el.classList.add('rv'); io.observe(el); });
  }

  /* ---------- Click tracking hook (connect analytics later) ---------- */
  function track(name) {
    if (window.goatcounter && window.goatcounter.count) {
      window.goatcounter.count({ path: 'click-' + name, title: name, event: true });
    }
  }
  document.querySelectorAll('[data-track]').forEach(a => a.addEventListener('click', () => track(a.dataset.track)));
})();
