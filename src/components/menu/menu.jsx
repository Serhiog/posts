import Characteristics from "../characteristics/characteristics"
import Reviews from "../reviews/reviews"
import Contacts from "../contacts/contacts"
import { useState } from "react"

function Menu() {

    const [selectedTab, setSelectedTab] = useState("char")

    const handleTabBtn = (evt) => {
        evt.preventDefault()
        let tab = evt.target.dataset.name
        tab === "char" ? setSelectedTab("char") : tab === "reviews" ? setSelectedTab("reviews") : setSelectedTab("contacts")
    }

    return (
        <section className="menu">
            <div className="menu__inner">
                <ul className="menu__list">
                    <li className={selectedTab === "char" ? "menu__list-item menu__list-item--active" : "menu__list-item"}><a className="menu__list-link" href="/" data-name="char" onClick={handleTabBtn}>Характеристики</a></li>
                    <li className={selectedTab === "reviews" ? "menu__list-item menu__list-item--active" : "menu__list-item"}><a className="menu__list-link" href="/" data-name="reviews" onClick={handleTabBtn}>Отзывы</a></li>
                    <li className={selectedTab === "contacts" ? "menu__list-item menu__list-item--active" : "menu__list-item"}><a className="menu__list-link" href="/" data-name="contacts" onClick={handleTabBtn}>Контакты</a></li>
                </ul>
                {selectedTab === "char" && < Characteristics />}
                {selectedTab === "reviews" && <Reviews />}
                {selectedTab === "contacts" && <Contacts />}
            </div >
        </section >

    )
}

export default Menu