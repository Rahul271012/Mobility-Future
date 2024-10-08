import React, { useEffect } from "react";
import styles from "./Login.module.css";
import InputField from "../GeneralComponents/InputField";
import $ from "jquery";

export default function Login() {
  function showRegister() {
    $(`#LoginPage`).hide();
    $(`#RegisterPage`).show();
  }

  function showLogin() {
    $(`#LoginPage`).show();
    $(`#RegisterPage`).hide();
  }

  function showDetCont() {
    $(`#takeDetailsPage`).show();
    $(`#RegisterPage`).hide();
    $(`#LoginPage`).hide();
  }

  useEffect(() => {
    $("nav").hide();
    return () => {
      $("nav").show();
    };
  }, []);

  return (
    <>
      <div className={styles.container} id="LoginPage">
        <div className={styles.logFormDiv}>
          <form>
            <h1 className="amsterdam">Login</h1>
            <InputField name="email" title="Email" type="email" />
            <InputField name="password" title="Password" type="password" />
            <button type="submit">Submit</button>
          </form>
        </div>
        <div className={styles.oAuthDiv}>
          <h1 className="amsterdam">Use Other Methods</h1>
          <button onClick={showRegister}>Register</button>
          <button onClick={showDetCont}>Move Forward</button>
        </div>
      </div>
      <div
        className={styles.container}
        id="RegisterPage"
        style={{ display: "none" }}
      >
        <div className={styles.RegFormDiv}>
          <form>
            <h1 className="amsterdam">Register</h1>
            <InputField name="email" title="Email" type="email" />
            <InputField name="name" title="Name" />
            <InputField name="password" title="Password" type="password" />
            <button type="submit">Submit</button>
          </form>
        </div>
        <div className={styles.oAuthDiv} id={styles.oAuthDivReg}>
          <h1 className="amsterdam">Use Other Methods</h1>
          <button onClick={showLogin}>Login</button>
          <button onClick={showDetCont}>Move Forward</button>
        </div>
      </div>
      <div
        className={styles.detContainer}
        id="takeDetailsPage"
        style={{ display: "none" }}
      >
        <form>
          <h1 className="amsterdam">Add More Details</h1>
          <InputField name="name" title="Name" />
          {$("input[name='role']") === "Driver" ? (
            <InputField name="model" title="Car Model" />
          ) : (
            <InputField name="company" title="Company/Personal" />
          )}
          <div class="form-floating">
            <textarea
              class="form-control"
              placeholder="Leave a comment here"
              id="floatingTextarea2"
              style={{}}
            ></textarea>
            <label for="floatingTextarea2">Address part - 1</label>
          </div>
          <div class="form-floating">
            <textarea
              class="form-control"
              placeholder="Leave a comment here"
              id="floatingTextarea2"
              style={{}}
            ></textarea>
            <label for="floatingTextarea2">Address part - 2</label>
          </div>
          <button>Submit</button>
        </form>
      </div>
    </>
  );
}
