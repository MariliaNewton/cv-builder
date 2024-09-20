import { useState } from "react";

function CVPreview([personalInfo, educationInfo, skillsInfo, workInfo]) {
  return (
    <>
      <header>
        <h1 className="header-name"></h1>
        <div>
          <h2 className="header-info location"></h2>
          <h2 className="header-info phone-number"></h2>
          <h2 className="header-info email"></h2>
        </div>
      </header>
      <main>
        <div>
          <h2 className="main-title summary"></h2>
          <p className="main-text summary"></p>
        </div>
        <div>
          <h2 className="main-title skills"></h2>
          <ul className="main"></ul>
        </div>
      </main>
    </>
  );
}
