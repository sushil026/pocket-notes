import React from "react";
import splash from "./SplashScreen.module.css";
import splashImg from "../../../../assets/splash.svg";

const SplashScreen=()=> {
  return (
    <div className={splash.app}>
      <img src={splashImg} className={splash.splImg} alt="spalsh-image"/>
      <div className={splash.text}>
        <h1>Pocket Notes</h1>
        <h3>
          Send and receive messages without keeping your phone online. Use Pocket Notes on up to 4 linked devices and 1 mobile phone
        </h3>
      </div>
      <div className={splash.footer}>
        <span className="material-symbols-outlined">lock</span>
        <h3>end-to-end encrypted</h3>
      </div>
    </div>
  );
}
export default SplashScreen;