document.addEventListener('DOMContentLoaded', function () {
    // Testimonial Slider
    const track = document.querySelector('.testimonial-track');
    const slides = document.querySelectorAll('.testimonial-slide');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    let slideIndex = 0;

    function updateSlider() {
        if (track) {
            track.style.transform = `translateX(-${slideIndex * 100}%)`;
        }
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', function () {
            slideIndex = (slideIndex > 0) ? slideIndex - 1 : slides.length - 1;
            updateSlider();
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', function () {
            slideIndex = (slideIndex < slides.length - 1) ? slideIndex + 1 : 0;
            updateSlider();
        });
    }

    // Auto slide
    if (slides.length > 0) {
        setInterval(function () {
            slideIndex = (slideIndex < slides.length - 1) ? slideIndex + 1 : 0;
            updateSlider();
        }, 5000);
    }

    // Modal functionality
    const modal = document.getElementById('tourModal');
    const modalDestinationField = document.getElementById('modalDestination');
    const closeModal = document.querySelector('.close-modal');
    const dealButtons = document.querySelectorAll('.deal-button');
    const searchTourBtn = document.getElementById('searchTourBtn');

    function openModal(destination) {
        if (modal) {
            modal.classList.add('active');
            if (modalDestinationField) {
                modalDestinationField.value = destination || '';
            }
            document.body.style.overflow = 'hidden';
        }
    }

    function closeModalFunc() {
        if (modal) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    }

    dealButtons.forEach(button => {
        button.addEventListener('click', function (e) {
            e.preventDefault();
            const destination = this.getAttribute('data-destination');
            openModal(destination);
        });
    });

    if (searchTourBtn) {
        searchTourBtn.addEventListener('click', function () {
            const destination = document.getElementById('destination').value;
            openModal(destination);
        });
    }

    if (closeModal) {
        closeModal.addEventListener('click', closeModalFunc);
    }

    if (modal) {
        modal.addEventListener('click', function (e) {
            if (e.target === modal) {
                closeModalFunc();
            }
        });
    }

    // Form submission
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            
            // Check if this is the contact form
            if (form.id === 'tour-request-form') {
                const name = document.getElementById('contactName').value;
                const phone = document.getElementById('contactPhone').value;
                const email = document.getElementById('contactEmail').value;
                const destination = document.getElementById('contactDestination').value;
                const message = document.getElementById('contactMessage').value;
                
                // Create WhatsApp message
                let whatsappMessage = `Здравствуйте! Меня зовут ${name}.\n\n`;
                whatsappMessage += `📞 Телефон: ${phone}\n`;
                whatsappMessage += `📧 Email: ${email}\n`;
                
                if (destination) {
                    const destinationText = {
                        'maldives': 'Мальдивы',
                        'turkey': 'Турция', 
                        'thailand': 'Таиланд',
                        'vietnam': 'Вьетнам',
                        'dubai': 'ОАЭ',
                        'other': 'Другое'
                    };
                    whatsappMessage += `🌍 Направление: ${destinationText[destination]}\n`;
                }
                
                if (message) {
                    whatsappMessage += `💬 Сообщение: ${message}\n`;
                }
                
                // Open WhatsApp with the message
                const whatsappURL = `https://wa.me/79952817399?text=${encodeURIComponent(whatsappMessage)}`;
                window.open(whatsappURL, '_blank');
                
                form.reset();
            } else {
                // For other forms (like modal form)
                alert('Спасибо за заявку! Надежда свяжется с вами в ближайшее время.');
                if (modal && modal.classList.contains('active')) {
                    closeModalFunc();
                }
                form.reset();
            }
        });
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            if (this.getAttribute('href') !== '#') {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Animation on scroll
    function animateOnScroll() {
        const elements = document.querySelectorAll('.deal-card, .benefit-card, .contact-info-item, .contact-form');

        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;

            if (elementPosition < screenPosition) {
                element.classList.add('fade-in');
            }
        });
    }

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once at load
});