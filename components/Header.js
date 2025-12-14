// Компонент шапки сайта
const Header = () => {
    // Состояние для текущей темы (светлая/темная)
    const [theme, setTheme] = React.useState('light');
    
    // Функция для переключения темы
    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        // Устанавливаем атрибут data-theme для применения CSS
        document.documentElement.setAttribute('data-theme', newTheme);
        // Сохраняем выбор в localStorage
        localStorage.setItem('theme', newTheme);
    };
    
    // При загрузке компонента проверяем сохраненную тему
    React.useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'light';
        setTheme(savedTheme);
        document.documentElement.setAttribute('data-theme', savedTheme);
    }, []);
    
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    {/* Логотип и название */}
                    <a className="navbar-brand" href="#">
                        <img src="https://i.pinimg.com/originals/21/51/b8/2151b8dbdd5aba485f09dd5b74d679c9.png" 
                             alt="Cookie" width="42" height="42" 
                             className="d-inline-block align-text-center" />
                        HotCookies
                    </a>
                    
                    {/* Кнопка меню для мобильных */}
                    <button className="navbar-toggler" type="button" 
                            data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    
                    {/* Меню навигации */}
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            
                            {/* Кнопка переключения темы */}
                            <li className="nav-item ms-3">
                                <button className={`btn btn-sm ${theme === 'dark' ? 'btn-warning' : 'btn-outline-secondary'}`}
                                        onClick={toggleTheme}
                                        title={theme === 'dark' ? 'Светлая тема' : 'Темная тема'}>
                                    <i className={`bi ${theme === 'dark' ? 'bi-sun-fill' : 'bi-moon-fill'}`}></i>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};