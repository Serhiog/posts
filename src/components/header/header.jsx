import logo from '../../img/logo-header.svg';

function Header() {
    return (
        <header className="header">
            <div className="header__inner">
                <div className="header__logo">
                    <img className="header__img" src={logo} alt="Auto Moto Logo" />
                    <h1 className="header__title">
                        AVTO
        <span className="header__title--moto">MOTO</span>
                    </h1>
                </div>
                <ul className="header__nav">
                    <li className="header__nav-item">Автомобили</li>
                    <li className="header__nav-item">Контакты</li>
                    <li className="header__nav-item">Услуги</li>
                    <li className="header__nav-item">Вакансии</li>
                </ul>
            </div>
        </header>
    )
}

export default Header