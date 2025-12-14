// Компонент карточки услуги
const ServiceCard = ({ image, title, description }) => {
    return (
        <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm service-card">
                {/* Изображение услуги */}
                <img src={image} 
                     className="card-img-top p-4" 
                     alt={title}
                     style={{ height: '200px', objectFit: 'contain' }} />
                
                {/* Контент карточки */}
                <div className="card-body text-center">
                    <h3 className="card-title h5 mb-3">{title}</h3>
                    <p className="card-text">{description}</p>
                </div>
                
                {/* Кнопка (опционально) */}
                <div className="card-footer bg-transparent border-0 pb-3">
                    <button className="btn btn-outline-primary w-100">
                        Подробнее
                    </button>
                </div>
            </div>
        </div>
    );
};