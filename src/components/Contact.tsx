import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import classes from "./Contact.module.css";

const Contact = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const subjectRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const [invalidInputs, setInvalidInputs] = useState<string[]>([]);

  const contactHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const name = nameRef.current?.value;
    const email = emailRef.current?.value;
    const subject = subjectRef.current?.value;
    const message = messageRef.current?.value;

    const validInputs = [];

    // console.log(name);
    // console.log(email);
    // console.log(subject);
    // console.log(message);

    // name validations
    if (!name || (name && name.trim().length < 1)) {
      setInvalidInputs((prevState) =>
        !prevState.includes("name") ? prevState.concat("name") : prevState
      );
    } else {
      setInvalidInputs((prevState) =>
        prevState.filter((item) => item !== "name")
      );
      validInputs.push("name");
    }

    // email validations
    if (!email || (email && email.trim().length < 1)) {
      setInvalidInputs((prevState) =>
        !prevState.includes("email") ? prevState.concat("email") : prevState
      );
    }
    if (email && email.trim().length > 0) {
      setInvalidInputs((prevState) =>
        prevState.filter((item) => item !== "email")
      );
      const isValid = /^\S+@\S+\.\S+$/.test(email);
      if (isValid) {
        setInvalidInputs((prevState) =>
          prevState.filter((item) => item !== "invalid email")
        );
        validInputs.push("email");
      } else {
        setInvalidInputs((prevState) =>
          !prevState.includes("invalid email")
            ? prevState.concat("invalid email")
            : prevState
        );
      }
    } else {
      setInvalidInputs((prevState) =>
        prevState.filter((item) => item !== "invalid email")
      );
    }

    // message validations
    if (!message || (message && message.trim().length < 10)) {
      setInvalidInputs((prevState) =>
        !prevState.includes("message") ? prevState.concat("message") : prevState
      );
    } else {
      setInvalidInputs((prevState) =>
        prevState.filter((item) => item !== "message")
      );
      validInputs.push("message");
    }

    // console.log(validInputs);

    if (
      validInputs.includes("name") &&
      validInputs.includes("email") &&
      validInputs.includes("message")
    ) {
      const params = {
        name: name,
        email: email,
        subject: subject,
        message: message,
      };
      const serviceID = "service_ha12kqm";
      const templateID = "template_emfo2hh";

      emailjs
        .send(
          serviceID,
          templateID,
          params,
          import.meta.env.VITE_REACT_APP_EMAILJS_KEY
        )
        .then((res) => {
          // reset inputs if message is sent
          if (name) {
            nameRef.current.value = "";
          }
          if (email) {
            emailRef.current.value = "";
          }
          if (subject) {
            subjectRef.current.value = "";
          }
          if (message) {
            messageRef.current.value = "";
          }
          console.log(res);
          alert("Message Sent!");
        })
        .catch((err) => console.log(err));
    } else {
      return;
    }
  };

  return (
    <section className={classes.container} id="contact">
      <h2>Contact Me</h2>
      <form
        className={classes.form}
        onSubmit={contactHandler}
        noValidate
        spellCheck="false"
      >
        <label htmlFor="name" className="sr-only">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          ref={nameRef}
          className={invalidInputs.includes("name") ? classes.error : ""}
          onChange={() =>
            setInvalidInputs((prevState) =>
              prevState.filter((item) => item !== "name")
            )
          }
        />
        {invalidInputs.includes("name") && <span>This field is required</span>}
        <label htmlFor="email" className="sr-only">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email Address"
          ref={emailRef}
          className={
            invalidInputs.includes("email") ||
            invalidInputs.includes("invalid email")
              ? classes.error
              : ""
          }
          onChange={() =>
            setInvalidInputs((prevState) =>
              prevState.filter(
                (item) => item !== "email" && item !== "invalid email"
              )
            )
          }
        />
        {invalidInputs.includes("email") && <span>This field is required</span>}
        {invalidInputs.includes("invalid email") && (
          <span>Please use a valid email address</span>
        )}
        <label htmlFor="subject" className="sr-only">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          placeholder="Subject"
          ref={subjectRef}
        />
        <label htmlFor="message" className="sr-only">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Message"
          rows={3}
          ref={messageRef}
          className={
            invalidInputs.includes("message") ? classes.messageError : ""
          }
          onChange={() =>
            setInvalidInputs((prevState) =>
              prevState.filter((item) => item !== "message")
            )
          }
        ></textarea>
        {invalidInputs.includes("message") && <span>Min. 10 Chars Please</span>}
        <div className={classes.actions}>
          <a href="mailto:b6_10_94_furlonge@hotmail.com">
            <img src="/assets/mail.svg" alt="mail icon" />
          </a>
          <button type="submit">Send</button>
        </div>
      </form>
      <a href="#intro" className={classes.up}>
        Top <img src="/assets/arrow-up.svg" alt="up arrow" />
      </a>
    </section>
  );
};

export default Contact;
