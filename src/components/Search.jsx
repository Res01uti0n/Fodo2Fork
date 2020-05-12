import React from "react";

export const Search = ({ handleChange, handleSubmit, search }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-10 mx-auto col-md-8 mt-5 text-center">
          <h1 className="text-slanted text-capitalize">
            Search recipes with stong{" "}
            <strong className="text-orange">Food2Fork</strong>
          </h1>

          <form className="mt-4">
            <label htmlFor="search" className="text-capitalize">
              Types separated by comma
            </label>

            <div className="input-group">
              <input
                type="text"
                name="search"
                className="form-control"
                value={search}
                onChange={handleChange}
                placeholder="Chicken, onion, carrots"
              />

              <div className="input-group-append">
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="input-group-text bg-primary text-white"
                >
                  <i className="fas fa-search"></i>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
