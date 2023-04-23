import React, { useState } from "react";
// import "./styles.css";

const CityCode = () => {
  const [recommendedCities, setRecommendedCities] = useState([]);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Get the user's responses from the form
    const userResponses = {
      outdoorActivities: event.target["user-recommend"].value,
      nightlife: event.target["user-recommend1"].value,
      localFood: event.target["user-recommend2"].value,
      historicalSignificance: event.target["user-recommend3"].value,
      moderateBudget: event.target["user-recommend4"].value,
    };

    // Based on the user's responses, determine the recommended cities
    const recommendedCities = [];
    if (userResponses.outdoorActivities === "definitely") {
      recommendedCities.push("City A");
      recommendedCities.push("City B");
    }
    if (userResponses.nightlife === "definitely") {
      recommendedCities.push("City C");
    }
    if (userResponses.localFood === "definitely") {
      recommendedCities.push("City D");
    }
    if (userResponses.historicalSignificance === "definitely") {
      recommendedCities.push("City E");
    }
    if (userResponses.moderateBudget === "definitely") {
      recommendedCities.push("City F");
      recommendedCities.push("City G");
    }

    setRecommendedCities(recommendedCities);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h1 id="title">Questionnaire</h1>
          <p id="description">Fill the questionnaire to get city recommendations</p>

          <form
            id="survey-form"
            className="survey-form"
            method="post"
            autoComplete="on"
            onSubmit={handleFormSubmit}
          >
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
            {/* Render form fields here */}
            {/* ... */}
            {/* ... */}
            {/* ... */}
            {/* ... */}
            {/* ... */}
            <div className="text-center">
              <button type="submit" className="btn btn-outline-primary">
                Submit
              </button>
            </div>
          </form>

          {/* Render recommended cities */}
          <div className="mt-4">
            {recommendedCities.length > 0 && (
              <div>
                <h3>Recommended Cities:</h3>
                <ul>
                  {recommendedCities.map((city, index) => (
                    <li key={index}>{city}
                    <p>Awesome city</p></li>
                    
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CityCode;
