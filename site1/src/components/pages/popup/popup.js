import React from 'react';
import ErrorBoundry from "../../error/error-boundry";

const Popup = () =>{
    return (
        <ErrorBoundry>
            <div id="popup" className="popup">
                <a href="##" className="popup__area"></a>
                <div className="popup__body">
                    <div className="popup__content">
                        <a href="##" className="popup__close">X</a>
                        <form>
                            <input type="hidden" name="project_name" value="Твій сайт" />
                            <input type="hidden" name="admin_email" value="kkorcixk@gmail.com" />
                            <input type="hidden" name="form_subject" value="Form Subject" />
                        <div className="popup__title">Оставить заявку</div>
                        <div className="popup__flex">
                            <div className="popup__text">Ведіть імя</div>
                            <input type="text" name="Iмя" placeholder="Наприклад: Віктор" />
                            <div className="popup__text">Ведіть номер телефону</div>
                            <input type="text" name="телефон" placeholder="Наприклад: +380985131382" />
                            <div className="popup__text">Побажання</div>
                            <input type="text" name="Побажання" placeholder="Купити(продати) квартиру" />
                            <button>Отправить</button>
                            <div className="popup__sogl">Нажимая на кнопку, Вы принимаете Положение и<br /> Согласие на обработку персональных данных.</div>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </ErrorBoundry>
    );
}
export default Popup;