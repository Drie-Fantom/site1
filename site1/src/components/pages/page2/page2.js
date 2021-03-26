import React from 'react';
import fatherFoto from "../../img/father-foto.jpg";
import ErrorBoundry from "../../error/error-boundry";

const Page2 = () =>{
    return(
        <ErrorBoundry>
            <section id="me" className="me">
                <div className="container row d-flex">
                    <div className="col-lg-6 col-12">
                        <h2>Професійний ріелтор</h2>
                        <div className="info">
                            Маю великий досвід роботи з нерухомістю, опанував усіма тонкощами майстерності, знаю всі нюанси угод та постійно навчаюсь чомусь новому.  З цієї причини знаю всі питання що повязані від передпродажної підготовки до підписання угоди у нотаріуса.
                        </div>
                        <br />
                        <div className="info">
                            Ріелтор повинний працювати на совість. Інакше такий фахівець може не тільки втратити даного клієнта, а й усіх наступних. Сарафанне радіо працює дуже швидко.
                        </div>
                        <br />
                        <div className="info">
                            Надаю допомогу у прийнятті спадщини. Роблю експертну-грошову оцінку нерухомого майна та земельних ділянок. Надаю юредичні консультації та допомагаю у вирішенні будьяких проблем повязаних з житловою комерційною нерухомістю та земельними ділянками. Допомога в узаконенні самочинного будівництва, приватизації та зміни цільового призначення земельних ділянок...
                        </div>
                        <br />
                            <h2 className="info">
                                Мені довіряють, я вирішую...
                            </h2>
                    </div>
                    <div className="col-lg-5  col-12"><img src={fatherFoto} alt="father-foto" /></div>
                </div>
            </section>
        </ErrorBoundry>
    );
}
export default Page2;