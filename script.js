/* Chidambaram Nattukottai Nagarathar Sangam — homepage interactions */

const DEFAULT_DATA = {
  "banners": [
    {
      "image": "CNNS.jpg",
      "tone": "blue",
      "kicker": "Vanakkam — Welcome to",
      "title": "Chidambaram Nattukottai Nagarathar Sangam",
      "titleAccent": "",
      "subtitle": "A century of service, culture and community for the Nagarathar family of Chidambaram — rooted in heritage, reaching for the future.",
      "ctaPrimary": { "label": "Become a Member", "href": "#membership" },
      "ctaSecondary": { "label": "About the Sangam", "href": "#about" }
    },
    {
      "image": "temple.jpg",
      "kicker": "தொன்மம் · தொண்டு · தொடர்ச்சி",
      "title": "Preserving Our Heritage",
      "titleAccent": "& Culture",
      "subtitle": "From temple seva to scholarship, marriage to medical assistance — together we safeguard our traditions for generations to come.",
      "ctaPrimary": { "label": "Ways to Get Help", "href": "#get-help" },
      "ctaSecondary": { "label": "Our Culture", "href": "#culture" }
    },
    {
      "image": "temple2.jpg",
      "tone": "red",
      "kicker": "Seva · Service · Sangam",
      "title": "Serving Our Community",
      "titleAccent": "With Devotion",
      "subtitle": "Join hands with the Sangam — volunteer, donate, or become a member and strengthen our bond of service.",
      "ctaPrimary": { "label": "Donate Today", "href": "#donate" },
      "ctaSecondary": { "label": "Contact Us", "href": "#contact" }
    }
  ],
  "vision": "To preserve and protect the rich heritage and culture of the Nattukottai Nagarathar community while fostering their growth and enhancing the quality of life of all members.",
  "objectives": [
    "Preserve and protect Nattukottai Nagarathar heritage and culture for future generations.",
    "Create platforms for members to connect with professionals and leaders for mentorship and guidance.",
    "Foster appreciation of our culture among the younger generation and encourage participation.",
    "Support education through scholarships for deserving students of our community.",
    "Extend a helping hand for marriage, medical and humanitarian needs of our members.",
    "Support the maintenance and seva of our temples and religious institutions in Chidambaram.",
    "Promote the health, well-being and unity of the community through regular activities."
  ],
  "quickActions": [
    {
      "icon": "fa-solid fa-users",
      "title": "Become a Member",
      "text": "Join our noble mission and efforts to serve the Nattukottai Nagarathar community.",
      "link": { "label": "Click Here", "href": "https://forms.gle/dFSujozjTgd3ibks7" }
    },
    {
      "icon": "fa-solid fa-hand-holding-heart",
      "title": "Donate to the Sangam",
      "text": "Your generous contribution supports education, medical, marriage and temple seva.",
      "link": { "label": "Click Here", "href": "#donate" }
    },
    {
      "icon": "fa-solid fa-hands-praying",
      "title": "Volunteer with Us",
      "text": "Give your time and talent — join our committees and help organise events and seva.",
      "link": { "label": "Click Here", "href": "#contact" }
    },
    {
      "icon": "fa-solid fa-user-lock",
      "title": "Member Login",
      "text": "Access the members' portal for updates, directories and community resources.",
      "link": { "label": "Click Here", "href": "#" }
    }
  ],
  "president": {
    "name": "விசு பழனியப்பன்",
    "role": "தலைவர், Chidambaram Nattukottai Nagarathar Sangam",
    "message": "Dear fellow Nagarathars,\n\nIt is with deep gratitude and humility that I welcome you to the Chidambaram Nattukottai Nagarathar Sangam. For generations, our community has been bound by the twin values of devotion (தொண்டு) and tradition (தொன்மம்). In a world that changes rapidly, we remain steadfast in our promise to our forefathers — to carry forward (தொடர்ச்சி) the service, culture and unity of our beloved community.\n\nThis year, our focus is on strengthening the bonds within our Sangam family: supporting education through scholarships, lending a helping hand in times of need, and keeping our temples vibrant. I invite every family to take part — for a Sangam is only as strong as the hands that hold it together.",
    "theme": "தொன்மம்! தொண்டு! தொடர்ச்சி!"
  },
  "officeBearers": [
    { "name": "RM. செந்தாமரை", "role": "Secretary" },
    { "name": "V. கல்யாணசுந்தரம்", "role": "Treasurer" },
    { "name": "RM. சுப்பிரமணியன்", "role": "Vice-President" },
    { "name": "J. மணிகண்டன்", "role": "Deputy Secretary" }
  ],
  "executiveCommittee": [
    { "honor": "Thiru", "name": "K. Palanaiappan" },
    { "honor": "Thiru", "name": "M. Kadappan" },
    { "honor": "Thiru", "name": "Peri Annamalai" },
    { "honor": "Thiru", "name": "SP. Supramanian" },
    { "honor": "Thiru", "name": "MPL. Kannappan" },
    { "honor": "Thiru", "name": "PL. Karuthan" },
    { "honor": "Thiru", "name": "C. Maruthappan" },
    { "honor": "Thiru", "name": "C. Rajendren" },
    { "honor": "Thirumathi", "name": "Sethukkarasi Chidambaram" },
    { "honor": "Thirumathi", "name": "Rani Nachiyar" },
    { "honor": "Thirumathi", "name": "T. Vasanthal" },
    { "honor": "Thirumathi", "name": "PR. Ramalatha" },
    { "honor": "Thirumathi", "name": "N. Uma Nachiappan" },
    { "honor": "Thirumathi", "name": "Saratha Palaniappan" },
    { "honor": "Thirumathi", "name": "Sumathi Rajavel" },
    { "honor": "Thirumathi", "name": "CT. Deivanai" }
  ],
  "getHelp": [
    {
      "icon": "fa-solid fa-graduation-cap",
      "title": "Education Scholarship",
      "text": "Financial assistance for deserving students of our community pursuing higher education.",
      "link": { "label": "Apply Now", "href": "#" }
    },
    {
      "icon": "fa-solid fa-stethoscope",
      "title": "Medical Assistance",
      "text": "Support for members facing medical emergencies and treatment expenses.",
      "link": { "label": "Apply Now", "href": "#" }
    },
    {
      "icon": "fa-solid fa-rings-wedding",
      "title": "Marriage Assistance",
      "text": "Help for families in the marriage of their sons and daughters within the community.",
      "link": { "label": "Apply Now", "href": "#" }
    },
    {
      "icon": "fa-solid fa-temple",
      "title": "Temple Assistance",
      "text": "Support for temple operations, kumbabishekam and religious seva in Chidambaram.",
      "link": { "label": "Apply Now", "href": "#" }
    }
  ],
  "events": [
    {
      "date": { "day": "14", "month": "Aug", "year": "2026" },
      "tag": "Worship",
      "title": "Thiruvilakku Vazhipadu",
      "venue": "CNNS, Chidambaram",
      "excerpt": "உங்கள் குடும்பத்தினருடன் வந்து விழாவை சிறப்பிக்கவும், தயவு செய்து விளக்கு, விளக்கு தட்டு, சூடத் தட்டு கொண்டு வாருங்கள்.இரவு 8.00 மணிக்கு இரவு உணவு ஏற்பாடு செய்யப்பட்டுள்ளது",   
      "href": "#events"
    },
    // {
    //   "date": { "day": "14", "month": "Jan", "year": "2026" },
    //   "tag": "Festival",
    //   "title": "Pongal Sambandham & Community Lunch",
    //   "venue": "Sangam Grounds, Chidambaram",
    //   "excerpt": "A day of traditional Pongal cooking, kolam competition, games for children and a grand community feast.",
    //   "href": "#events"
    // },
    // {
    //   "date": { "day": "02", "month": "Nov", "year": "2026" },
    //   "tag": "Event",
    //   "title": "Nagarathar Heritage & Nanal Launch",
    //   "venue": "Sangam Library Hall",
    //   "excerpt": "Launch of the latest Nanal edition with talks on Chettiar history, art and the rich literary tradition of our community.",
    //   "href": "#events"
    // },
    // {
    //   "date": { "day": "28", "month": "Dec", "year": "2026" },
    //   "tag": "Annual",
    //   "title": "Annual General Meeting & Awards",
    //   "venue": "Sangam Auditorium, Chidambaram",
    //   "excerpt": "Annual review, election of office bearers, felicitation of achievers and cultural programme by our youth.",
    //   "href": "#events"
    // }
  ]
};

(function () {
    'use strict';

    const $ = (sel, ctx = document) => ctx.querySelector(sel);
    const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

    let data = DEFAULT_DATA;

    /* ---------------- Load content ---------------- */
    async function loadData() {
        try {
            const res = await fetch('data/home.json', { cache: 'no-store' });
            if (res.ok) {
                const json = await res.json();
                data = { ...DEFAULT_DATA, ...json };
            }
        } catch (e) {
            // fall back to embedded defaults (e.g. file:// preview)
        }
        render();
    }

    /* ---------------- Renderers ---------------- */
    function render() {
        renderHero();
        renderVision();
        renderQuickActions();
        renderPresident();
        renderOfficeBearers();
        renderExecutiveCommittee();
        renderGetHelp();
        renderEvents();
    }

    function renderHero() {
        const slider = $('#heroSlider');
        if (!slider) return;
        slider.innerHTML = '';

        data.banners.forEach((slide, i) => {
            const el = document.createElement('div');
            el.className = 'hero-slide' + (i === 0 ? ' is-active' : '') + (slide.tone ? ' tone-' + slide.tone : '');
            const accent = slide.titleAccent ? `<span>${slide.titleAccent}</span>` : '';
            el.innerHTML = `
                <div class="hero-bg" style="background-image:url('${slide.image}')"></div>
                <div class="hero-content">
                    <span class="hero-kicker">${slide.kicker}</span>
                    <h1 class="hero-title">${slide.title} ${accent}</h1>
                    <p class="hero-sub">${slide.subtitle}</p>
                    <div class="hero-actions">
                        <a href="${slide.ctaPrimary.href}" class="btn btn-gold">${slide.ctaPrimary.label}</a>
                        <a href="${slide.ctaSecondary.href}" class="btn btn-ghost">${slide.ctaSecondary.label}</a>
                    </div>
                </div>`;
            slider.appendChild(el);
        });

        initHero(slider);
    }

    function renderVision() {
        const el = $('#visionText');
        if (el) el.textContent = data.vision;
        const list = $('#objectivesList');
        if (list) {
            list.innerHTML = data.objectives.map(o => `<li>${o}</li>`).join('');
        }
    }

    function renderQuickActions() {
        const grid = $('#quickActionGrid');
        if (!grid) return;
        grid.innerHTML = data.quickActions.map(a => `
            <article class="help-card">
                <div class="help-icon"><i class="${a.icon}"></i></div>
                <h3>${a.title}</h3>
                <p>${a.text}</p>
                <a href="${a.link.href}">${a.link.label} <i class="fa-solid fa-arrow-right"></i></a>
            </article>`).join('');
    }

    function renderPresident() {
        const set = (id, val) => { const el = $(id); if (el) el.textContent = val; };
        set('#presidentName', data.president.name);
        set('#presidentRole', data.president.role);
        set('#presidentTheme', data.president.theme);
        set('#presidentMessage', data.president.message);
        set('#presidentSign', data.president.name);
    }

    function renderOfficeBearers() {
        const grid = $('#officersGrid');
        if (!grid) return;
        grid.innerHTML = data.officeBearers.map(o => `
            <article class="officer-card reveal">
                <span class="officer-medallion" aria-hidden="true">
                    <svg viewBox="0 0 64 64" fill="none">
                        <rect x="10" y="10" width="44" height="44" transform="rotate(45 32 32)" stroke="currentColor" stroke-width="1.4"/>
                        <rect x="16" y="16" width="32" height="32" transform="rotate(45 32 32)" stroke="currentColor" stroke-width="1"/>
                    </svg>
                    <b>${initials(o.name)}</b>
                </span>
                <h3>${o.name}</h3>
                <span class="officer-role">${o.role}</span>
            </article>`).join('');
    }

    function initials(name) {
        return name.split(/\s+/).map(w => w.replace(/[^a-zA-Z]/g, '').charAt(0)).join('');
    }

    function renderExecutiveCommittee() {
        const grid = $('#execGrid');
        if (!grid) return;
        grid.innerHTML = data.executiveCommittee.map(m => `
            <article class="exec-card reveal">
                <span class="exec-dot" aria-hidden="true"></span>
                <span class="exec-honor">${m.honor}</span>
                <h3 class="exec-name">${m.name}</h3>
            </article>`).join('');
    }

    function renderGetHelp() {
        const grid = $('#getHelpGrid');
        if (!grid) return;
        grid.innerHTML = data.getHelp.map(h => `
            <article class="gethelp-card">
                <div class="gethelp-icon"><i class="${h.icon}"></i></div>
                <h3>${h.title}</h3>
                <p>${h.text}</p>
                <a href="${h.link.href}">${h.link.label} <i class="fa-solid fa-arrow-right"></i></a>
            </article>`).join('');
    }

    function renderEvents() {
        const grid = $('#eventsGrid');
        if (!grid) return;
        grid.innerHTML = data.events.map(ev => `
            <article class="event-card">
                <div class="event-date">
                    <span class="event-day">${ev.date.day}</span>
                    <span class="event-month">${ev.date.month}</span>
                </div>
                <div class="event-body">
                    <span class="event-tag">${ev.tag}</span>
                    <h3 class="event-title">${ev.title}</h3>
                    <span class="event-venue"><i class="fa-solid fa-location-dot"></i> ${ev.venue}</span>
                    <p class="event-excerpt">${ev.excerpt}</p>
                    <a class="event-more" href="${ev.href}">Learn More <i class="fa-solid fa-arrow-right"></i></a>
                </div>
            </article>`).join('');
    }

    /* ---------------- Hero slider ---------------- */
    function initHero(slider) {
        const slides = $$('.hero-slide', slider);
        const dotsWrap = $('#sliderDots');
        const prev = $('#sliderPrev');
        const next = $('#sliderNext');
        if (!slides.length) return;

        let index = 0;
        let timer = null;

        dotsWrap.innerHTML = '';
        slides.forEach((_, i) => {
            const btn = document.createElement('button');
            btn.setAttribute('aria-label', `Go to slide ${i + 1}`);
            btn.addEventListener('click', () => goTo(i));
            dotsWrap.appendChild(btn);
        });
        const dots = $$('button', dotsWrap);
        sync();

        function sync() {
            slides.forEach((s, i) => s.classList.toggle('is-active', i === index));
            dots.forEach((d, i) => d.classList.toggle('active', i === index));
        }

        function goTo(i) {
            index = (i + slides.length) % slides.length;
            sync();
            restart();
        }

        function play() { timer = setInterval(() => goTo(index + 1), 6500); }
        function stop() { if (timer) clearInterval(timer); }
        function restart() { stop(); play(); }

        prev.addEventListener('click', () => goTo(index - 1));
        next.addEventListener('click', () => goTo(index + 1));

        slider.addEventListener('mouseenter', stop);
        slider.addEventListener('mouseleave', play);

        play();
    }

    /* ---------------- Header / nav ---------------- */
    const header = $('#siteHeader');
    const navToggle = $('#navToggle');
    const siteNav = $('#siteNav');

    function onScroll() {
        header.classList.toggle('scrolled', window.scrollY > 40);
        $('#backToTop').classList.toggle('visible', window.scrollY > 500);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    navToggle.addEventListener('click', () => {
        const open = siteNav.classList.toggle('open');
        navToggle.classList.toggle('active', open);
        navToggle.setAttribute('aria-expanded', open);
    });

    // Mobile dropdowns
    $$('.has-drop > a', siteNav).forEach(link => {
        link.addEventListener('click', (e) => {
            if (window.innerWidth <= 992) {
                e.preventDefault();
                link.parentElement.classList.toggle('open-drop');
            }
        });
    });

    // Close nav when a link is chosen (mobile)
    $$('.site-nav a').forEach(a => {
        a.addEventListener('click', () => {
            if (window.innerWidth <= 992) {
                siteNav.classList.remove('open');
                navToggle.classList.remove('active');
                navToggle.setAttribute('aria-expanded', 'false');
            }
        });
    });

    /* ---------------- Back to top ---------------- */
    $('#backToTop').addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    /* ---------------- Scroll reveal ---------------- */
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    $$('.reveal').forEach(el => revealObserver.observe(el));

    // Re-observe dynamically created content after render
    function observeReveals() {
        $$('.reveal').forEach(el => {
            if (!el.classList.contains('in-view')) revealObserver.observe(el);
        });
    }

    /* ---------------- Contact form ---------------- */
    const form = $('#contactForm');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let ok = true;

        const fields = [
            ['cName', 'Please enter your name'],
            ['cEmail', 'Please enter a valid email address'],
            ['cSubject', 'Please choose a subject'],
            ['cMessage', 'Please enter your message']
        ];

        fields.forEach(([id, msg]) => {
            const input = $(`#${id}`);
            const err = $(`#${id}Error`);
            let valid = input.value.trim() !== '';
            if (id === 'cEmail') valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value.trim());
            if (!valid) {
                err.textContent = msg;
                input.classList.add('error-field');
                ok = false;
            }
        });

        if (ok) {
            const btn = form.querySelector('button[type="submit"]');
            const original = btn.innerHTML;
            const success = $('#formSuccess');
            const error = $('#formError');

            btn.disabled = true;
            btn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> Sending...';

            fetch('https://formsubmit.co/ajax/cnkns26@gmail.com', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
                body: JSON.stringify({
                    _subject: `[CNNS Website] ${$('#cSubject').value} - ${$('#cName').value}`,
                    name: $('#cName').value,
                    email: $('#cEmail').value,
                    message: $('#cMessage').value
                })
            })
            .then(res => {
                if (!res.ok) throw new Error('Request failed');
                return res.json();
            })
            .then(() => {
                form.reset();
                success.classList.add('show');
                setTimeout(() => success.classList.remove('show'), 6000);
            })
            .catch(() => {
                error.classList.add('show');
                setTimeout(() => error.classList.remove('show'), 6000);
            })
            .finally(() => {
                btn.disabled = false;
                btn.innerHTML = original;
            });
        }
    });

    $$('.form-group input, .form-group select, .form-group textarea').forEach(input => {
        input.addEventListener('input', () => {
            const err = $(`#${input.id}Error`);
            if (err) { err.textContent = ''; }
            input.classList.remove('error-field');
        });
    });

    /* ---------------- Footer year ---------------- */
    $('#year').textContent = new Date().getFullYear();

    /* ---------------- Boot ---------------- */
    loadData().then(observeReveals);
})();

