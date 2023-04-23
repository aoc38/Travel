import React from "react";
// import "./styles.css";

const Questionnaire = () => {
  return (
    <div className="container">
      <div className='row'>
        <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
          <h1 id="title">Questionnaire</h1>
          <p id="description">Fill the questionnaire to get city recommendations</p>

          <form id="survey-form" className="survey-form" method="post" autoComplete="on">
            <fieldset className="form-group">
              <p style={{ marginTop: "1.5em", marginBottom: "4px" }}>
                <label htmlFor='cardType' className='form-label required-field'> Are you interested in staying close to outdoor activities during your trip?</label>
              </p>
              <select name="user-recommend" required className="input-dropdown">
                <option disabled selected value>Select an option</option>
                <option value="definitely">Yes</option>
                <option value="Not-sure">No</option>
              </select>
            </fieldset>

            <fieldset className="form-group">
              <p style={{ marginTop: "1.5em", marginBottom: "4px" }}>
                How important is having access to nightlife options during your stay?
              </p>
              <select name="user-recommend1" className="input-dropdown">
                <option disabled selected value>Select an option</option>
                <option value="definitely">Yes</option>
                <option value="Not-sure">No</option>
              </select>
            </fieldset>

            <fieldset className="form-group">
              <p style={{ marginTop: "1.5em", marginBottom: "4px" }}>
                Would you like recommendations for local food options in the area?
              </p>
              <select name="user-recommend2" className="input-dropdown">
                <option disabled selected value>Select an option</option>
                <option value="definitely">Yes</option>
                <option value="Not-sure">No</option>
              </select>
            </fieldset>

            <fieldset className="form-group">
              <p style={{ marginTop: "1.5em", marginBottom: "4px" }}>
                Do you value the historical significance of the destination you are visiting?
              </p>
              <select name="user-recommend3" className="input-dropdown">
                <option disabled selected value>Select an option</option>
                <option value="definitely">Yes</option>
                <option value="Not-sure">No</option>
              </select>
            </fieldset>

            <fieldset className="form-group">
              <p style={{ marginTop: "1.5em", marginBottom: "4px" }}>
                Are you looking for accommodation options that fit a moderate budget?
              </p>
              <select name="user-recommend4" className="input-dropdown">
                <option disabled selected value>Select an option</option>
                <option value="definitely">Yes</option>
                <option value="Not-sure">No</option>
              </select>
            </fieldset>

            {/* <input type="submit" id="submit" value="Submit" className="submit-button" /> */}
            <div className='text-center'>
              <button type='submit' className='btn btn-outline-primary'>Submit</button>
              {/* <Link type='cancel' className='btn btn-outline-danger mx-2' to={"/searchFlight"}>Cancel</Link> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Questionnaire;
