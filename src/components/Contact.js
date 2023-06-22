import React from "react";

export default function Contact() {
  return (
    <div className="container text-center my-3">
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label fw-bold fs-3">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        />
      </div>
      <div className="mb-3">
        <label for="exampleFormControlTextarea1" className="form-label fw-bold fs-3">
          Description
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          placeholder="Enter Your Description....."
        ></textarea>
      </div>
      <button type="button" className="btn btn-primary">Submit</button>
    </div>
  );
}
