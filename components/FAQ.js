// Компонент часто задаваемых вопросов (FAQ)
const FAQ = () => {
    // Данные для FAQ
    const faqItems = [
        {
            id: 1,
            question: "Какие у вас есть варианты печенья?",
            answer: "Мы готовим более 20 видов печенья! От классического шоколадного чипса и овсяного с изюмом до экзотического с клюквой и белым шоколадом, а также веганские и безглютеновые варианты."
        },
        {
            id: 2,
            question: "Можно ли забронировать столик?",
            answer: "Да, конечно! Вы можете забронировать столик по телефону +7 (495) 123-45-67 или через наш Telegram-бот @hotcookies_bot."
        },
        {
            id: 3,
            question: "Есть ли у вас доставка?",
            answer: "Да, мы доставляем заказы по Москве в пределах МКАД. Минимальная сумма заказа для доставки — 500 рублей. Стоимость и время доставки зависят от вашего района."
        },
        {
            id: 4,
            question: "Готовите ли вы торты и печенье на заказ?",
            answer: "Да, мы специализируемся на приготовлении десертов на заказ! Для этого просим вас предварительно (желательно за 2-3 дня) связаться с нашим менеджером."
        }
    ];
    
    // Состояние для отслеживания открытых вопросов
    const [openItemId, setOpenItemId] = React.useState(1);
    
    // Функция для переключения состояния вопроса
    const toggleItem = (id) => {
        setOpenItemId(openItemId === id ? null : id);
    };
    
    return (
        <div className="faq-section">
            <h2 className="text-center mb-4">Часто задаваемые вопросы</h2>
            
            <div className="accordion" id="faqAccordion">
                {faqItems.map((item) => (
                    <div key={item.id} className="accordion-item">
                        <h3 className="accordion-header">
                            <button className={`accordion-button ${openItemId === item.id ? '' : 'collapsed'}`}
                                    type="button"
                                    onClick={() => toggleItem(item.id)}
                                    aria-expanded={openItemId === item.id}
                                    aria-controls={`collapse${item.id}`}>
                                {item.question}
                            </button>
                        </h3>
                        
                        <div className={`accordion-collapse collapse ${openItemId === item.id ? 'show' : ''}`}
                             id={`collapse${item.id}`}>
                            <div className="accordion-body">
                                <p>{item.answer}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};