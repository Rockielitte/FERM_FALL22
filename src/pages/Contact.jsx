import React from "react";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target["email"].value);
  };
  return (
    <div class="container">
      <div class="row">
        <div class="col s12 m6 offset-m3">
          <div class="card">
            <div class="card-content">
              <span class="card-title uppercase font-luck">Contact me</span>
              <form onSubmit={handleSubmit}>
                <div class="input-field">
                  <input id="name" type="text" class="validate" />
                  <label for="name">Name</label>
                </div>
                <div class="input-field">
                  <input id="email" type="email" class="validate" required />
                  <label for="email">Email</label>
                </div>
                <div class="input-field">
                  <textarea
                    id="message"
                    class="materialize-textarea"
                    required
                  ></textarea>
                  <label for="message">Message</label>
                </div>
                <button
                  class="btn waves-effect waves-light"
                  type="submit"
                  name="action"
                >
                  Submit
                  <i class="material-icons right">send</i>
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
