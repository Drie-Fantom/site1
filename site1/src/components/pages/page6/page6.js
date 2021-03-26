import React from 'react';
import ErrorBoundry from "../../error/error-boundry";

const Page6 = () => {
    return(
        <ErrorBoundry>
            <section id="contact" className="contact">
                <div className="container d-flex">
                    <div className="cont">
                        <div className="he">Контактна інформація</div>
                        <div>E-mail: korvick@ukr.net</div>
                        <div>Телефон: +380985131382</div>
                        <div>Я: Корнійчук Віктор Петрович</div>
                        <div>Фейсбук: <a href="https://www.facebook.com/people/%D0%92%D0%B8%D0%BA%D1%82%D0%BE%D1%80-%D0%9A%D0%BE%D1%80%D0%BD%D0%B8%D0%B9%D1%87%D1%83%D0%BA/100005524329103" target="_blank">Корнійчук Віктор Петрович</a></div>
                        <div className="fot">Мої обєкти: <a href="https://www.olx.ua/list/user/Vm1p/" target="_blank">OLX</a></div>
                    </div>
                </div>
            </section>
        </ErrorBoundry>
    );
}
export default Page6;