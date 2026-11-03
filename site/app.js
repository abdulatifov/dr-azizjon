(() => {
  'use strict';

  /* ---------- Russian translations (Uzbek text lives in the HTML) ---------- */
  const RU = {
    kicker: 'Уролог-эндоуролог · хирург',
    n1: 'Азизжон', n2: 'Юсуфжонов',
    lead: 'Лечу камни в почках, болезни мочевыводящих путей и простаты у мужчин, женщин и детей современными методами без разрезов.',
    st1: 'операций', st2: 'консультаций', st3: 'лет опыта',
    book: 'Записаться на приём', call: 'Позвонить',
    where: 'Yunusobod Medical Center, Ташкент',
    p_eye: 'Направления', p_h: 'Что вас беспокоит?', p_sub: 'Нажмите на свою группу.',
    g1: 'Урологические проблемы у мужчин', g1s: 'Простата, камни, воспаление, деликатные вопросы',
    g1i1: '<b>Увеличение простаты:</b> частые ночные походы в туалет, слабая струя, чувство неполного опорожнения. Лечится современными эндоскопическими методами, в том числе лазерной операцией HoLEP.',
    g1i2: '<b>Камни в почках и мочеточнике:</b> приступообразная боль в пояснице или боку, кровь в моче. Во многих случаях камень дробят и удаляют эндоскопом, без разрезов.',
    g1i3: '<b>Воспаление:</b> жжение при мочеиспускании, частые позывы, боль внизу живота.',
    g1i4: '<b>Мужское здоровье:</b> деликатные проблемы рассматриваются конфиденциально и с уважением. Не стесняйтесь, это обычный медицинский вопрос.',
    g2: 'Урологические проблемы у женщин', g2s: 'Цистит, недержание мочи, камни',
    g2i1: '<b>Рецидивирующий цистит:</b> жжение при мочеиспускании, частые позывы. Если повторяется, нужно найти причину и вылечить её.',
    g2i2: '<b>Недержание мочи:</b> подтекание мочи при кашле, смехе или напряжении.',
    g2i3: '<b>Камни в почках и мочеточнике:</b> приступообразная боль, кровь в моче. Во многих случаях удаляются без разрезов.',
    g2i4: 'Осмотр проходит бережно, с уважением и конфиденциально.',
    g3: 'Проблемы у младенцев и детей', g3s: 'Детская урология',
    g3i1: '<b>Врождённые изменения:</b> осмотр и лечение урологических пороков, выявленных в младенчестве и детстве.',
    g3i5: '<b>Камни в почках и мочевых путях:</b> у ребёнка боль в животе или пояснице, кровь в моче, частое беспокойство. У детей камень во многих случаях тоже удаляют эндоскопом, без разрезов.',
    g3i2: '<b>Инфекции мочевых путей:</b> у ребёнка температура, плач или беспокойство при мочеиспускании.',
    g3i3: '<b>Проблемы с мочеиспусканием:</b> частое или затруднённое мочеиспускание, ночное недержание.',
    g3i4: 'Прошёл специальное повышение квалификации по детской урологии.',
    p_btn: 'Записаться с этой проблемой →',
    w_eye: 'Метод', w_h: 'Почему хирургия без разрезов?',
    w1: 'Без разрезов', w1t: 'Инструмент вводится через естественные пути организма. На коже не остаётся шрамов.',
    w2: 'Быстрое восстановление', w2t: 'По сравнению с открытой операцией меньше дней в больнице и быстрее возвращение к работе.',
    w3: 'Боль почти не ощущается', w3t: 'Ткани травмируются минимально, поэтому боль после операции сведена к минимуму.',
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
    close: 'Закрыть',
    a_call: 'Позвонить', a_prev: 'Предыдущий', a_next: 'Следующий', a_dock: 'Быстрая связь'
  };
  const META = {
    uz: { title: 'Azizjon Yusufjonov - urolog-endourolog, Toshkent' },
    ru: { title: 'Азизжон Юсуфжонов - уролог-эндоуролог, Ташкент' }
  };

  const nodes = [...document.querySelectorAll('[data-i18n]')];
  const ariaNodes = [...document.querySelectorAll('[data-i18n-aria]')];
  const UZ = {}, UZA = {};
  nodes.forEach(n => { UZ[n.dataset.i18n] = n.innerHTML; });
  ariaNodes.forEach(n => { UZA[n.dataset.i18nAria] = n.getAttribute('aria-label'); });

  function setLang(lang) {
    const dict = lang === 'ru' ? RU : UZ;
    nodes.forEach(n => { const v = dict[n.dataset.i18n]; if (v) n.innerHTML = v; });
    ariaNodes.forEach(n => { const k = n.dataset.i18nAria; const v = lang === 'ru' ? RU[k] : UZA[k]; if (v) n.setAttribute('aria-label', v); });
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
  sheet.addEventListener('keydown', e => {
    if (e.key !== 'Tab') return;
    const f = [...sheet.querySelectorAll('a,button')].filter(el => el.offsetParent !== null);
    const first = f[0], last = f[f.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  });
  document.querySelectorAll('[data-open="book"]').forEach(b => b.addEventListener('click', openSheet));
  sheet.querySelectorAll('[data-close]').forEach(b => b.addEventListener('click', closeSheet));

  /* ---------- Certificates gallery + lightbox ---------- */
  // [file id, thumbnail height at 400px width] - sizes keep the strip stable before images load
  const CERT_DIMS = [['c13',274],['c12',272],['c10',504],['c16',566],['c1',232],['c0',280],['c6',282],['c7',572],['c15',284],['c8',380],['c9',284],['c14',276],['c2',268],['c5',564],['c3',542],['c4',284]];
  const CERTS = CERT_DIMS.map(d => d[0]);
  const gallery = document.getElementById('gallery');
  CERT_DIMS.forEach(([c, h], i) => {
    const b = document.createElement('button');
    b.setAttribute('aria-label', 'Sertifikat ' + (i + 1));
    b.style.aspectRatio = 400 + ' / ' + h;
    b.innerHTML = '<img src="img/sert-' + c + '-k.jpg" alt="" width="400" height="' + h + '" loading="lazy" decoding="async">';
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
