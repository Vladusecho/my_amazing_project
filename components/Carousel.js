// Компонент карусели для портфолио
const PortfolioCarousel = () => {
    // Данные для слайдов карусели
    const slides = [
        {
            id: 1,
            image: "https://lovepirogova.ru/storage/media/0/3/63/responsive-images/news_2-min___list-webp_890_405.webp",
            title: "Черничное озеро",
            description: "Свежеиспеченное печенье с ароматной черникой"
        },
        {
            id: 2,
            image: "https://lovepirogova.ru/storage/media/7/f/61/responsive-images/news1-min___list-webp_890_405.webp",
            title: "Лаймовый чизкейк",
            description: "С изюминкой и творогом"
        },
        {
            id: 3,
            image: "https://lovepirogova.ru/storage/media/6/6/58/responsive-images/kBwgomfADRM___list-webp_396_480.webp",
            title: "Королевские тарталетки",
            description: "Ароматные с пряностями"
        }
    ];
    
    return (
        <div id="portfolioCarousel" className="carousel slide" data-bs-ride="carousel">
            {/* Индикаторы слайдов */}
            <div className="carousel-indicators">
                {slides.map((slide, index) => (
                    <button key={slide.id}
                            type="button" 
                            data-bs-target="#portfolioCarousel"
                            data-bs-slide-to={index}
                            className={index === 0 ? "active" : ""}
                            aria-current={index === 0 ? "true" : "false"}
                            aria-label={`Slide ${index + 1}`}>
                    </button>
                ))}
            </div>
            
            {/* Слайды */}
            <div className="carousel-inner rounded-3">
                {slides.map((slide, index) => (
                    <div key={slide.id} 
                         className={`carousel-item ${index === 0 ? "active" : ""}`}>
                        <img src={slide.image} 
                             className="d-block w-100" 
                             alt={slide.title}
                             style={{ height: '400px', objectFit: 'cover' }} />
                        <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-3">
                            <h5>{slide.title}</h5>
                            <p>{slide.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            
            {/* Кнопки управления */}
            <button className="carousel-control-prev" 
                    type="button" 
                    data-bs-target="#portfolioCarousel" 
                    data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Предыдущий</span>
            </button>
            <button className="carousel-control-next" 
                    type="button" 
                    data-bs-target="#portfolioCarousel" 
                    data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Следующий</span>
            </button>
        </div>
    );
};