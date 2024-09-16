import React, { useState } from "react";
import Header from "../components/HeaderComponent";
import Footer from "../components/Footer";
import "../assets/css/pricing.css";

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);
  return (
    <>
      <Header />
      <main className="container home-main">
        <h2 className="pricing-title">Pricing</h2>
        <p className="pricing-subtitle">Checkout our flexible pricing plan</p>
        <div className="pricing-btn-div">
          <button
            onClick={() => setIsMonthly(true)}
            className={`${isMonthly ? "pricing-active-btn" : ""}`}
          >
            Monthly
          </button>
          <button
            onClick={() => setIsMonthly(false)}
            className={`${!isMonthly ? "pricing-active-btn" : ""}`}
          >
            Yearly
          </button>
        </div>
        <div className="pricing-container">
          <div className="pricing-div">
            <div className="div">
              <div className="pricing-div-title">Starter</div>
              <div className="pricing-div-subtitle">When billed monthly</div>
              <div className="pricing-div-fee">Free</div>
              <div className="pricing-div-qulity">
                <ul>
                  <li className="pricing-div-li">
                    <i className="fa-solid fa-check"></i> 3 Locations
                    <span></span>
                  </li>
                  <li className="pricing-div-li">
                    <i className="fa-solid fa-check"></i> Cross Device Syncing
                    <span></span>
                  </li>
                </ul>
              </div>
            </div>
            <button className="pricing-div-btn">Select</button>
          </div>
          <div className="pricing-div">
            <div className="div">
              <div className="pricing-div-title">Standard</div>
              <div className="pricing-div-subtitle">For lifetime</div>
              <div className="pricing-div-fee">
                {isMonthly ? (
                  <>
                    $3/<span className="sp-sp-sp">Month</span>
                  </>
                ) : (
                  <>
                    $35/<span className="sp-sp-sp">Month</span>
                  </>
                )}
              </div>
              <div className="pricing-div-qulity">
                <ul>
                  <li className="pricing-div-li">
                    <i className="fa-solid fa-check"></i>
                    <span> Unlimited Locations</span>
                  </li>
                  <li className="pricing-div-li">
                    <i className="fa-solid fa-check"></i>{" "}
                    <span>Cross Device Syncing</span>
                  </li>
                  <li className="pricing-div-li">
                    <i className="fa-solid fa-check"></i>{" "}
                    <span>Unlimited Time Zones</span>
                  </li>
                  <li className="pricing-div-li">
                    <i className="fa-solid fa-check"></i>{" "}
                    <span>Advance Features</span>
                  </li>
                </ul>
              </div>
            </div>
            <button className="pricing-div-btn my-btn-pricing">Select</button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Pricing;
