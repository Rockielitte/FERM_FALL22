import React from "react";

const Contact = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(e.target["email"].value);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col s12 m6 offset-m3">
          <div className="card">
            <div className="card-content">
              <span className="card-title uppercase font-luck">Contact me</span>
              <form onSubmit={handleSubmit}>
                <div className="input-field">
                  <input id="name" type="text" className="validate" />
                  <label htmlFor="name">Name</label>
                </div>
                <div className="input-field">
                  <input
                    id="email"
                    type="email"
                    className="validate"
                    required
                  />
                  <label htmlFor="email">Email</label>
                </div>
                <div className="input-field">
                  <textarea
                    id="message"
                    className="materialize-textarea"
                    required
                  ></textarea>
                  <label htmlFor="message">Message</label>
                </div>
                <button
                  className="btn waves-effect waves-light"
                  type="submit"
                  name="action"
                >
                  Submit
                  <i className="material-icons right">send</i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
