
import { useState } from "react"
import { connect } from "react-redux"
import { ActionCreator } from "../../store/action"

function Slider({ picPreviews, bigPics, activePic, getNextPic, getPreviouslyPic }) {

    const [navigateSliderBtnRight, setNavigateSliderBtnRight] = useState(false)
    const [navigateSliderBtnLeft, setNavigateSliderBtnLeft] = useState(false)
    const [disabledBtn, setDisabledBtn] = useState(true)

    const handleBtnSlider = (evt) => {
        evt.preventDefault()
        let dirrection = evt.target.dataset.name
        if (dirrection === "right") {
            setDisabledBtn(false)
            setNavigateSliderBtnLeft(false)
            if (activePic.id < bigPics.length) {
                getNextPic(activePic.id + 1)
                if (activePic.id === bigPics.length - 1) {
                    setNavigateSliderBtnRight(true)
                }
            }
        }

        if (dirrection === "left") {
            setNavigateSliderBtnRight(false)
            if (activePic.id > 1) {
                getPreviouslyPic(activePic.id - 1)
                if (activePic.id === 2) {
                    setNavigateSliderBtnLeft(true)
                }
            }
        }
    }


    return (
        <div className="slider">
            <div className="slider__wrapper">
                <div className="slider__inner">
                    <section className="slider__photo-block">
                        <div className="slider__photos">
                            <img className="slider__photos-main" src={activePic.pic} alt="Slider1" />
                        </div>
                        <div className="slider__nav">
                            <button data-name="left" className={navigateSliderBtnLeft || disabledBtn ? "slider__btn slider__btn--left slider__btn--no-active" : "slider__btn slider__btn--left"} onClick={handleBtnSlider} />
                            <ul className="slider__list">
                                {picPreviews.map(pic => { return <li key={pic.id} className="slider__item"><img className="slider__item-pic" src={pic.pic} alt="slider" /></li> })}
                            </ul>
                            <button data-name="right" className={navigateSliderBtnRight ? "slider__btn slider__btn--right slider__btn--no-active" : "slider__btn slider__btn--right"} onClick={handleBtnSlider} />
                        </div>
                    </section>
                    <section className="offer">
                        <div className="offer__inner">
                            <h2 className="offer__title">Марпех 11</h2>
                            <ul className="offer__list">
                                <li className="offer__item offer__item--gasoline">бензин</li>
                                <li className="offer__item offer__item--transmisson">механика</li>
                                <li className="offer__item offer__item--hp">100 л.с.</li>
                                <li className="offer__item offer__item--value">1.4 л</li>
                            </ul>
                            <div className="offer__price" >
                                <p className="offer__price-new">
                                    2 300 000 ₽
      </p>
                                <p className="offer__price-old">
                                    2 400 000 ₽
      </p>
                            </div>
                            <button className="offer__send btn">оставить заявку</button>
                            <button className="offer__credit btn">В КРЕДИТ ОТ 11 000 ₽</button>
                        </div>

                    </section>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    picPreviews: state.picPreviews,
    bigPics: state.bigPics,
    activePic: state.activePic
})

const mapDispatchToProps = (dispatch) => ({
    getNextPic(id) {
        dispatch(ActionCreator.selectNextPic(id))
    },
    getPreviouslyPic(id) {
        dispatch(ActionCreator.selectPreviouslyPic(id))
    }
})


export default connect(mapStateToProps, mapDispatchToProps)(Slider)