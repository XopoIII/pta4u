// Система общих компонентов
class Components {
    static renderFooter() {
        return `
        <!-- Yandex.Metrika counter -->
        <script type="text/javascript">
            (function(m,e,t,r,i,k,a){
                m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                m[i].l=1*new Date();
                for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
            })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=103953465', 'ym');

            ym(103953465, 'init', {ssr:true, webvisor:true, clickmap:true, ecommerce:"dataLayer", accurateTrackBounce:true, trackLinks:true});
        </script>
        <noscript><div><img src="https://mc.yandex.ru/watch/103953465" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
        <!-- /Yandex.Metrika counter -->
        <footer class="footer">
            <div class="container">
                <div class="footer-container">
                    <div class="footer-about">
                        <a href="/" class="footer-logo">
                            <img src="/logo2withoutBgClean_small.png" alt="Полиглот Тревел" class="footer-logo-img">
                        </a>
                        <p class="footer-slogan">Полиглот Тревел — просто наслаждайтесь путешествием.</p>
                        <div class="footer-social">
                            <a href="https://t.me/pta4u" class="social-icon" aria-label="Telegram"><i class="fab fa-telegram"></i></a>
                            <a href="https://wa.me/79952817399" class="social-icon" aria-label="WhatsApp"><i class="fab fa-whatsapp"></i></a>
                        </div>
                    </div>

                    <div class="footer-links">
                        <h3 class="footer-heading">Направления</h3>
                        <ul class="footer-links">
                            <li><a href="/maldives/">Мальдивы</a></li>
                            <li><a href="/uae/">ОАЭ</a></li>
                            <li><a href="/turkey/">Турция</a></li>
                            <li><a href="/thailand/">Таиланд</a></li>
                            <li><a href="/vietnam/">Вьетнам</a></li>
                            <li><a href="/china/">Китай</a></li>
                            <li><a href="/seychelles/">Сейшелы</a></li>
                            <li><a href="/mauritius/">Маврикий</a></li>
                            <li><a href="/cruises/">Круизы</a></li>
                        </ul>
                    </div>

                    <div class="footer-links">
                        <h3 class="footer-heading">Полезные ссылки</h3>
                        <ul class="footer-links">
                            <li><a href="/about/">О нас</a></li>
                            <li><a href="/#advantages">Преимущества</a></li>
                            <li><a href="/#testimonials">Отзывы</a></li>
                            <li><a href="/#contact">Контакты</a></li>
                            <li><a href="/search/">Онлайн‑поиск тура</a></li>
                        </ul>
                    </div>

                    <div class="footer-contact">
                        <h3 class="footer-heading">Контакты</h3>
                        <div class="footer-contact-item">
                            <i class="fas fa-map-marker-alt"></i>
                            <div class="footer-contact-info">
                                г. Владивосток, пр-т Красного знамени, 3, офис 102
                            </div>
                        </div>
                        <div class="footer-contact-item">
                            <i class="fas fa-phone-alt"></i>
                            <div class="footer-contact-info">
                                <a href="tel:+79952817399">+7 (995) 281-73-99</a>
                            </div>
                        </div>
                        <div class="footer-contact-item">
                            <i class="fas fa-envelope"></i>
                            <div class="footer-contact-info">
                                <a href="mailto:travel@pta4u.ru">travel@pta4u.ru</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="footer-disclaimer">
                    Все материалы и цены, размещенные на сайте, носят справочный характер и не являются ни публичной офертой, ни рекламой. Используя сайт, вы соглашаетесь с
                    <a href="/policy/" target="_blank" rel="noopener">политикой обработки персональных данных</a>.
                </div>

                <div class="copyright">
                    © 2025 Полиглот Тревел. Все права защищены.
                </div>
            </div>
        </footer>
        `;
    }

    static renderNavigation(currentPage = '') {
        const isActive = (page) => currentPage === page ? 'active' : '';

        return `
        <nav class="nav" id="navigation">
            <div class="container">
                <div class="nav-container">
                    <a href="/" class="nav-logo">
                        <img src="/logo2withoutBgClean_small.png" alt="Полиглот Тревел" class="nav-logo-img">
                    </a>
                    <ul class="nav-links">
                        <li><a href="/" class="${isActive('home')}">Главная</a></li>
                        <li class="nav-dropdown">
                            <a href="#" class="nav-dropdown-toggle">Направления <i class="fas fa-chevron-down"></i></a>
                            <ul class="nav-dropdown-menu">
                                <li><a href="/maldives/" class="${isActive('maldives')}">Мальдивы</a></li>
                                <li><a href="/uae/" class="${isActive('uae')}">ОАЭ</a></li>
                                <li><a href="/turkey/" class="${isActive('turkey')}">Турция</a></li>
                                <li><a href="/thailand/" class="${isActive('thailand')}">Таиланд</a></li>
                                <li><a href="/vietnam/" class="${isActive('vietnam')}">Вьетнам</a></li>
                                <li><a href="/china/" class="${isActive('china')}">Китай</a></li>
                                <li><a href="/seychelles/" class="${isActive('seychelles')}">Сейшелы</a></li>
                                <li><a href="/mauritius/" class="${isActive('mauritius')}">Маврикий</a></li>
                                <li><a href="/cruises/" class="${isActive('cruises')}">Круизы</a></li>
                            </ul>
                        </li>
                        <li><a href="/about/" class="${isActive('about')}">О нас</a></li>
                        <li><a href="/#contact">Контакты</a></li>
                        <li><a href="/search/" class="${isActive('search')}">Онлайн‑поиск тура</a></li>
                        <li><a class="nav-cta" href="https://wa.me/79952817399?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%A5%D0%BE%D1%87%D1%83%20%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B8%D1%82%D1%8C%20%D0%BF%D0%BE%D0%B4%D0%B1%D0%BE%D1%80%20%D1%82%D1%83%D1%80%D0%B0" target="_blank" rel="noopener"><i class="fab fa-whatsapp"></i> WhatsApp</a></li>
                    </ul>
                    <div class="mobile-menu-toggle">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </nav>
        `;
    }

    static renderPageTemplate(options = {}) {
        const {
            title = 'Полиглот Тревел',
            description = 'Турагентство Полиглот Тревел - персональные туры и путешествия',
            keywords = 'туры, путешествия, отдых, турагентство',
            currentPage = '',
            content = '',
            additionalHead = '',
            schemaMarkup = ''
        } = options;

        return `<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <meta name="description" content="${description}">
    <meta name="keywords" content="${keywords}">
    <link rel="icon" type="image/png" href="/favicon.png">

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:title" content="${title}">
    <meta property="og:description" content="${description}">

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:title" content="${title}">
    <meta property="twitter:description" content="${description}">

    ${schemaMarkup ? `<script type="application/ld+json">${schemaMarkup}</script>` : ''}
    ${additionalHead}

    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
</head>
<body>
    ${this.renderNavigation(currentPage)}

    ${content}

    ${this.renderFooter()}

    <script src="script.js"></script>
    <script src="components.js"></script>
</body>
</html>`;
    }

    static renderFavicon(isSubdirectory = false) {
        const faviconPath = isSubdirectory ? '/favicon.png' : '/favicon.png';
        return `<link rel="icon" type="image/png" href="${faviconPath}">`;
    }

    static initFavicon() {
        // Определяем, находимся ли мы в подпапке
        const isSubdirectory = window.location.pathname !== '/' && window.location.pathname.split('/').length > 2;

        // Проверяем, есть ли уже favicon
        const existingFavicon = document.querySelector('link[rel="icon"]');
        if (!existingFavicon) {
            document.head.insertAdjacentHTML('beforeend', this.renderFavicon(isSubdirectory));
        }
    }

    static renderWhyChooseUs() {
        return `
        <section class="why-choose" id="advantages">
            <div class="container">
                <div class="section-header">
                    <h2>Почему нас выбирают</h2>
                    <p>Премиальный сервис, внимание к деталям и полная уверенность в каждом моменте вашего путешествия</p>
                </div>
                <div class="utp-grid">
                    <div class="utp-card">
                        <div class="utp-icon">
                            <i class="fas fa-check-circle"></i>
                        </div>
                        <h3>Проверенное качество</h3>
                        <p>Мы с особой тщательностью подбираем отели и надёжных партнёров, чтобы рекомендовать вам то, в чём уверены на 100%.</p>
                    </div>

                    <div class="utp-card">
                        <div class="utp-icon">
                            <i class="fas fa-check-circle"></i>
                        </div>
                        <h3>Экспертность</h3>
                        <p>Мы постоянно повышаем квалификацию, открываем новые направления, инспектируем отели и следим за мировыми трендами, чтобы ваш отдых был безупречным.</p>
                    </div>

                    <div class="utp-card">
                        <div class="utp-icon">
                            <i class="fas fa-check-circle"></i>
                        </div>
                        <h3>Надёжность</h3>
                        <p>Прозрачные условия, проверенные партнёры и поддержка в любое время. Мы берём на себя все заботы, а вы наслаждаетесь путешествием.</p>
                    </div>

                    <div class="utp-card">
                        <div class="utp-icon">
                            <i class="fas fa-check-circle"></i>
                        </div>
                        <h3>Забота</h3>
                        <p>Дистанционное оформление или тёплая встреча в офисе за чашкой кофе — в любом формате вы получите внимание, поддержку и маршрут, созданный специально для вас.</p>
                    </div>
                </div>
                <div class="utp-cta">
                    <a href="#contact" class="btn">Начать планировать путешествие</a>
                </div>
            </div>
        </section>
        `;
    }

    static renderWhatsAppButton() {
        return `
        <div class="whatsapp-float">
            <a href="https://wa.me/79952817399?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%A5%D0%BE%D1%87%D1%83%20%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B8%D1%82%D1%8C%20%D0%BA%D0%BE%D0%BD%D1%81%D1%83%D0%BB%D1%8C%D1%82%D0%B0%D1%86%D0%B8%D1%8E%20%D0%BF%D0%BE%20%D1%82%D1%83%D1%80%D0%B0%D0%BC" target="_blank" rel="noopener" class="whatsapp-btn" aria-label="Написать в WhatsApp">
                <i class="fab fa-whatsapp"></i>
            </a>
        </div>
        `;
    }

    // Инициализация компонентов после загрузки страницы
    static init() {
        // Добавляем favicon
        this.initFavicon();

        // Инициализация мобильного меню
        const mobileToggle = document.querySelector('.mobile-menu-toggle');
        const navLinks = document.querySelector('.nav-links');

        if (mobileToggle) {
            mobileToggle.addEventListener('click', () => {
                navLinks.classList.toggle('active');
                mobileToggle.classList.toggle('active');
            });
        }

        // Инициализация выпадающего меню
        const dropdownToggles = document.querySelectorAll('.nav-dropdown-toggle');
        dropdownToggles.forEach(toggle => {
            toggle.addEventListener('click', (e) => {
                e.preventDefault();
                const dropdown = toggle.closest('.nav-dropdown');
                dropdown.classList.toggle('active');
            });
        });

        // Навигация с прозрачностью при скролле
        const nav = document.querySelector('.nav');
        if (nav) {
            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) {
                    nav.classList.add('scrolled');
                } else {
                    nav.classList.remove('scrolled');
                }
            });
        }
    }
}

// Инициализация компонентов при загрузке DOM
document.addEventListener('DOMContentLoaded', () => {
    Components.init();
});

// Экспорт для использования в других скриптах
window.Components = Components;
