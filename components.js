// Система общих компонентов
class Components {
    static renderFooter() {
        return `
        <footer class="footer">
            <div class="container">
                <div class="footer-container">
                    <div class="footer-about">
                        <a href="index.html" class="footer-logo">Полиглот<span>Тревел</span></a>
                        <p>Турагентство ярких путешествий с персональным подходом к каждому клиенту. Отдых начинается с выбора, а незабываемые впечатления — с нас!</p>
                        <div class="footer-social">
                            <a href="https://www.instagram.com/nadezhda_polyglot/" class="social-icon"><i class="fab fa-instagram"></i></a>
                            <a href="#" class="social-icon"><i class="fab fa-telegram"></i></a>
                            <a href="#" class="social-icon"><i class="fab fa-whatsapp"></i></a>
                            <a href="#" class="social-icon"><i class="fab fa-vk"></i></a>
                        </div>
                    </div>

                    <div class="footer-links">
                        <h3 class="footer-heading">Направления</h3>
                        <ul class="footer-links">
                            <li><a href="/maldives/">Мальдивы</a></li>
                            <li><a href="/turkey/">Турция</a></li>
                            <li><a href="/thailand/">Таиланд</a></li>
                            <li><a href="/vietnam/">Вьетнам</a></li>
                            <li><a href="/uae/">ОАЭ</a></li>
                            <li><a href="/china/">Китай</a></li>
                            <li><a href="/seychelles/">Сейшелы</a></li>
                            <li><a href="/mauritius/">Маврикий</a></li>
                        </ul>
                    </div>

                    <div class="footer-links">
                        <h3 class="footer-heading">Полезные ссылки</h3>
                        <ul class="footer-links">
                            <li><a href="index.html#about">О нас</a></li>
                            <li><a href="index.html#tours">Туры</a></li>
                            <li><a href="index.html#advantages">Преимущества</a></li>
                            <li><a href="index.html#testimonials">Отзывы</a></li>
                            <li><a href="index.html#contact">Контакты</a></li>
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

                <div class="copyright">
                    © 2025 Полиглот Тревел. Все права защищены.
                </div>
            </div>
        </footer>
        `;
    }

    static renderWhatsAppButton() {
        return `
        <a href="https://wa.me/79952817399" class="whatsapp-button" target="_blank">
            <i class="fab fa-whatsapp"></i>
        </a>
        `;
    }

    static renderNavigation(currentPage = '') {
        const isActive = (page) => currentPage === page ? 'active' : '';

        return `
        <nav class="nav" id="navigation">
            <div class="container">
                <div class="nav-container">
                    <a href="/" class="nav-logo">Полиглот<span>Тревел</span></a>
                    <ul class="nav-links">
                        <li><a href="/" class="${isActive('home')}">Главная</a></li>
                        <li class="nav-dropdown">
                            <a href="#" class="nav-dropdown-toggle">Направления <i class="fas fa-chevron-down"></i></a>
                            <ul class="nav-dropdown-menu">
                                <li><a href="/maldives/" class="${isActive('maldives')}">Мальдивы</a></li>
                                <li><a href="/turkey/" class="${isActive('turkey')}">Турция</a></li>
                                <li><a href="/thailand/" class="${isActive('thailand')}">Таиланд</a></li>
                                <li><a href="/vietnam/" class="${isActive('vietnam')}">Вьетнам</a></li>
                                <li><a href="/uae/" class="${isActive('uae')}">ОАЭ</a></li>
                                <li><a href="/china/" class="${isActive('china')}">Китай</a></li>
                                <li><a href="/seychelles/" class="${isActive('seychelles')}">Сейшелы</a></li>
                                <li><a href="/mauritius/" class="${isActive('mauritius')}">Маврикий</a></li>
                            </ul>
                        </li>
                        <li><a href="/#about">О нас</a></li>
                        <li><a href="/#contact">Контакты</a></li>
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
            title = 'Полиглот Тревел | Надежда Малашенкова',
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
    ${this.renderWhatsAppButton()}

    <script src="script.js"></script>
    <script src="components.js"></script>
</body>
</html>`;
    }

    // Инициализация компонентов после загрузки страницы
    static init() {
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
