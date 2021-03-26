import React from 'react';
import clock from "../../img/clock.svg";
import file from "../../img/file.svg";
import people from "../../img/people.svg";
import person from "../../img/person.svg";
import ErrorBoundry from "../../error/error-boundry";

const Page3 = () =>{
    return (
        <ErrorBoundry>
            <section id="small" className="small">
              <h2 className="d-flex">Професійний ріелтор - це</h2>
              <div className="container row d-flex">
                  <div className="col-lg-6 col-sm-12 d-flex">
                      <img src={clock} alt="clock" />
                      <div className="right">
                          <h4>Більше 16 років</h4>
                          <h5>Працюю на ринку нерухомості</h5>
                      </div>
                  </div>
                  <div className="col-lg-6 col-sm-12 d-flex">
                      <img src={file} alt="file" />
                      <div className="right">
                          <h4>Понад 1000 угод</h4>
                          <h5>В яких обидві сторони залишилися задоволеними</h5>
                      </div>
                  </div>
              </div>
              <div className="container row d-flex">
                  <div className="col-lg-6 col-sm-12 d-flex">
                      <img src={people} alt="people" />
                      <div className="right">
                          <h4>80% клієнтів</h4>
                          <h5>Котрі звернулись до мене по рекомендації задоволених клієнтів</h5>
                      </div>
                  </div>
                  <div className="col-lg-6 col-sm-12 d-flex">
                      <img src={person} alt="person" />
                      <div className="right">
                          <h4>Більше 10000 консультацій</h4>
                          <h5>Котрі я провів на протязі своєї роботи</h5>
                      </div>
                  </div>
              </div>
            </section>
      </ErrorBoundry>
    );
}
export default Page3;