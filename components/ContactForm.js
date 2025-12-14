const ContactForm = () => {
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        phone: '',
        message: '',
        agree: false
    });
    
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Спасибо! Ваше сообщение отправлено.');
        setFormData({
            name: '',
            email: '',
            phone: '',
            message: '',
            agree: false
        });
    };
    
    return (
        <div className="card shadow-sm contact-form-card">
            <div className="card-body d-flex flex-column h-100">
                <h3 className="h5 mb-4">Напишите нам</h3>
                
                <form onSubmit={handleSubmit} className="flex-grow-1 d-flex flex-column">
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Ваше имя *</label>
                        <input type="text"
                               className="form-control"
                               id="name"
                               name="name"
                               value={formData.name}
                               onChange={handleChange}
                               required />
                    </div>
                    
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email *</label>
                        <input type="email"
                               className="form-control"
                               id="email"
                               name="email"
                               value={formData.email}
                               onChange={handleChange}
                               required />
                    </div>
                    
                    <div className="mb-3">
                        <label htmlFor="phone" className="form-label">Телефон</label>
                        <input type="tel"
                               className="form-control"
                               id="phone"
                               name="phone"
                               value={formData.phone}
                               onChange={handleChange}
                               placeholder="+7 (900) 000-00-00" />
                    </div>
                    
                    <div className="mb-3 flex-grow-1 d-flex flex-column">
                        <label htmlFor="message" className="form-label">Сообщение *</label>
                        <textarea className="form-control flex-grow-1"
                                  id="message"
                                  name="message"
                                  rows="4"
                                  value={formData.message}
                                  onChange={handleChange}
                                  required
                                  style={{ minHeight: '120px' }}></textarea>
                    </div>
                    
                    <div className="form-check mb-3">
                        <input className="form-check-input"
                               type="checkbox"
                               id="agree"
                               name="agree"
                               checked={formData.agree}
                               onChange={handleChange}
                               required />
                        <label className="form-check-label" htmlFor="agree">
                            Я согласен на обработку персональных данных *
                        </label>
                    </div>
                    
                    <button type="submit" 
                            className="btn btn-primary w-100 mt-auto">
                        <i className="bi bi-send me-2"></i>
                        Отправить сообщение
                    </button>
                </form>
            </div>
        </div>
    );
};