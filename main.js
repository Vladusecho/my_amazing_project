// Главный компонент приложения
const App = () => {
    // Данные для карточек услуг
    const services = [
        {
            id: 1,
            image: "https://viplay-store.ru/wp-content/uploads/2025/01/png-klev-club-nvfm-p-dostavka-png-5.png",
            title: "Быстрая доставка",
            description: "Заказ за пару кликов и доставка от 2 минут!"
        },
        {
            id: 2,
            image: "https://static.tildacdn.com/tild3836-3066-4132-b237-333765323232/2636402.png",
            title: "Бронирование столиков",
            description: "Забронируйте столик для себя и своих близких!"
        },
        {
            id: 3,
            image: "https://cdn3.iconfinder.com/data/icons/business-vol-3/72/106-512.png",
            title: "Индивидуальный заказ",
            description: "Всегда только вкусные и свежие блюда!"
        }
    ];
    
    // Функция для прокрутки к секции
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    
    return (
        <React.Fragment>
            {/* Шапка сайта */}
            <Header />
            
            {/* Главное содержимое */}
            <main className="container my-4">
                {/* Герой-секция */}
                <section className="hero-section text-center mb-5 py-5 bg-light rounded">
                    <h1 className="display-4 mb-3">Добро пожаловать в HotCookies!</h1>
                    <p className="lead mb-4">Лучшее печенье в городе с домашним теплом в каждой крошке</p>
                    <button className="btn btn-primary btn-lg"
                            onClick={() => scrollToSection('services')}>
                        <i className="bi bi-arrow-down-circle me-2"></i>
                        Наши услуги
                    </button>
                </section>
                
                {/* Навигация по странице */}
                <nav className="quick-nav mb-5">
                    <div className="d-flex flex-wrap justify-content-center gap-2">
                        <button className="btn btn-outline-primary"
                                onClick={() => scrollToSection('services')}>
                            <i className="bi bi-truck me-1"></i>Услуги
                        </button>
                        <button className="btn btn-outline-primary"
                                onClick={() => scrollToSection('portfolio')}>
                            <i className="bi bi-images me-1"></i>Портфолио
                        </button>
                        <button className="btn btn-outline-primary"
                                onClick={() => scrollToSection('contacts')}>
                            <i className="bi bi-telephone me-1"></i>Контакты
                        </button>
                        <button className="btn btn-outline-primary"
                                onClick={() => scrollToSection('faq')}>
                            <i className="bi bi-question-circle me-1"></i>FAQ
                        </button>
                    </div>
                </nav>
                
                {/* Секция услуг */}
                <section id="services" className="mb-5">
                    <h2 className="text-center mb-4 section-title">
                        <i className="bi bi-stars me-2"></i>
                        Наши услуги
                    </h2>
                    <div className="row">
                        {services.map(service => (
                            <ServiceCard key={service.id} {...service} />
                        ))}
                    </div>
                </section>
                
                {/* Секция портфолио */}
                <section id="portfolio" className="mb-5">
                    <h2 className="text-center mb-4 section-title">
                        <i className="bi bi-camera me-2"></i>
                        Наши работы
                    </h2>
                    <div className="mb-4">
                        <PortfolioCarousel />
                    </div>
                    
                    {/* Видео */}
                    <div className="ratio ratio-16x9 mt-4">
                        <iframe src="https://rutube.ru/play/embed/0415474bae606bcde479446d795711c8/" 
                                title="Видео о HotCookies"
                                allowFullScreen></iframe>
                    </div>
                </section>
                
                {/* Секция контактов */}
                <section id="contacts" className="mb-5">
    <h2 className="text-center mb-4 section-title">
        <i className="bi bi-geo-alt me-2"></i>
        Контакты
    </h2>
    
    <div className="row align-items-stretch">
        {/* Блок с контактной информацией */}
        <div className="col-lg-6 mb-4 mb-lg-0">
            <div className="card shadow-sm h-100">
                <div className="card-body d-flex flex-column">
                    <h3 className="h5 mb-4">Наши контакты</h3>
                    
                    <div className="contact-info flex-grow-1">
                        <div className="d-flex align-items-start mb-3">
                            <i className="bi bi-geo-alt text-primary me-3 fs-5 mt-1"></i>
                            <div>
                                <h4 className="h6 mb-1">Адрес</h4>
                                <p className="mb-0">Москва, ул. Пироговая, 13</p>
                            </div>
                        </div>
                        
                        <div className="d-flex align-items-start mb-3">
                            <i className="bi bi-telephone text-primary me-3 fs-5 mt-1"></i>
                            <div>
                                <h4 className="h6 mb-1">Телефон</h4>
                                <p className="mb-0">
                                    <a href="tel:+74951234567" className="text-decoration-none">
                                        +7 (495) 123-45-67
                                    </a>
                                </p>
                            </div>
                        </div>
                        
                        <div className="d-flex align-items-start mb-3">
                            <i className="bi bi-clock text-primary me-3 fs-5 mt-1"></i>
                            <div>
                                <h4 className="h6 mb-1">Часы работы</h4>
                                <p className="mb-0">Пн-Вс: 09:00-23:00</p>
                            </div>
                        </div>
                        
                        <div className="d-flex align-items-start mb-3">
                            <i className="bi bi-envelope text-primary me-3 fs-5 mt-1"></i>
                            <div>
                                <h4 className="h6 mb-1">Email</h4>
                                <p className="mb-0">
                                    <a href="mailto:hello@hotcookies.ru" className="text-decoration-none">
                                        hello@hotcookies.ru
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    {/* Карта - занимает оставшееся пространство */}
                    <div className="mt-4" style={{ flex: '1', minHeight: '250px' }}>
                        <iframe 
                            src="https://yandex.ru/map-widget/v1/?um=constructor%3A59a32384e6e821b7746ddfafd929f27f34d8c51eaeb32bb729b3c45daa202f28&amp;source=constructor" 
                            width="100%" 
                            height="100%" 
                            frameBorder="0"
                            className="rounded"
                            title="Карта расположения HotCookies"
                            style={{ minHeight: '250px' }}>
                        </iframe>
                    </div>
                </div>
            </div>
        </div>
        
        {/* Форма обратной связи */}
        <div className="col-lg-6">
            <ContactForm />
        </div>
    </div>
</section>
                
                {/* Секция FAQ */}
                <section id="faq" className="mb-5">
                    <FAQ />
                </section>
            </main>
            
            {/* Подвал сайта */}
            <Footer />
        </React.Fragment>
    );
};

// Рендерим React приложение в корневой элемент
ReactDOM.render(<App />, document.getElementById('root'));