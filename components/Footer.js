// Компонент подвала сайта
const Footer = () => {
    return (
        <footer className="bg-dark text-light py-4 mt-5">
            <div className="container">
                <div className="row">
                    {/* Левая колонка */}
                    <div className="col-md-6">
                        <h5 className="mb-3">HotCookies</h5>
                        <p className="mb-2">
                            <i className="bi bi-geo-alt me-2"></i>
                            Москва, ул. Пироговая, 13
                        </p>
                        <p className="mb-2">
                            <i className="bi bi-clock me-2"></i>
                            Пн-Вс: 09:00-23:00
                        </p>
                        <p>&copy; 2025 HotCookies. Все права защищены.</p>
                    </div>
                    
                    {/* Правая колонка */}
                    <div className="col-md-6 text-md-end">
                        <h5 className="mb-3">Контакты</h5>
                        <p className="mb-2">
                            <i className="bi bi-telephone me-2"></i>
                            <a href="tel:+74951234567" className="text-light text-decoration-none">
                                +7 (495) 123-45-67
                            </a>
                        </p>
                        <p className="mb-3">
                            <i className="bi bi-envelope me-2"></i>
                            <a href="mailto:hello@hotcookies.ru" className="text-light text-decoration-none">
                                hello@hotcookies.ru
                            </a>
                        </p>
                        
                        {/* Социальные сети */}
                        <div className="social-links">
                            <a href="#" className="text-light me-3">
                                <i className="bi bi-instagram fs-5"></i>
                            </a>
                            <a href="#" className="text-light me-3">
                                <i className="bi bi-telegram fs-5"></i>
                            </a>
                            <a href="#" className="text-light">
                                <i className="bi bi-whatsapp fs-5"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};