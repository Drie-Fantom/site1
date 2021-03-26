import React from 'react';
import sec from "../../img/4sec.jpg";
import ErrorBoundry from "../../error/error-boundry";

const Page5 = () => {
    return (
        <ErrorBoundry>
            <section id="coden" className="coden">
                <div className="container row d-flex">
                    <div className="col-lg-5 col-12"><img src={sec} alt="sec" /></div>
                    <div className="col-lg-6 col-12">
                        <h2>Професійний ріелтор</h2>
                        <div className="info">Агентство нерухомості - це комерційна організація,призначена для надання послуг
                            клієнтам за професійним супроводом, оформлення операцій з нерухомістю. У кожного агентства нерухомості
                            існують бази даних клієнтів і нерухомості, які містять персональні дані людей і іншу інформацію, яка
                            повинна бути конфіденційною.Тому для забезпечення безпеки ПДН.
                        </div>
                        <br />
                        <div className="info">Розробляються і впроваджуються інформаційні системи, які забезпечать захист
                            інформації, також встановлюється спеціалізоване обладнання, яке відповідає всім вимогам безпеки.
                        </div>
                    </div>
                </div>
            </section>
        </ErrorBoundry>
    );
}
export default Page5;