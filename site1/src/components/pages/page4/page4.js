import React from 'react';
import Poslug from "../../../services/poslug";
import ErrorBoundry from "../../error/error-boundry";

const Page4 = () => {
    const poslug = new Poslug();
    return (
        <ErrorBoundry>
            <section id="poslug" className="poslug">
                <h2 className="d-flex">Мої послуги</h2>
                <div className="container row">
                {
                    poslug.poslug.map(({img,id,deals})=> {
                            return (
                                <div key={id} className="col-lg-4 col-12">
                                <img src={img} alt="img1"/>
                                <div className="ramka">
                                    <h6>{id}</h6>
                                    {
                                        deals.map((deals) =>{
                                            return (
                                                <p key={deals}>{deals}</p>
                                            );
                                    })
                                    }
                                </div>
                                    <div className="btn"><a href="#popup">Оставить заявку</a></div>
                            </div>);
                        })
                }
                </div>
            </section>
        </ErrorBoundry>
    );
}
export default Page4;