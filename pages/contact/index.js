/* eslint-disable react/no-unescaped-entities */
// components
import { Cicles } from "../../components/Circles";

// icons
import { BsArrowRight } from "react-icons/bs";

// framer motion
import { motion } from "framer-motion";

// variants
import { fadeIn } from "../../variants";

// react
import { useState, useRef } from "react";

// mail sender
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formState, setformState] = useState({});
  const [merrors, setMerrors] = useState({});

  const changeHandler = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    console.log(property);
    setMerrors(validate({ ...formState, [property]: value }));
    formState.name?.trim();
    formState.email?.trim();
    formState.subject?.trim();
    formState.message?.trim();
    setformState({ ...formState, [property]: value });
  };

  const validate = (formState) => {
    var errors = {};

    formState.user_name === ""
      ? (errors = { ...errors, user_name: "Required field" })
      : (errors = { ...errors });

    formState.user_email === ""
      ? (errors = { ...errors, user_email: "Required field" })
      : (errors = { ...errors });

    formState.user_message === ""
      ? (errors = { ...errors, user_message: "Required field" })
      : (errors = { ...errors });

    return errors;
  };

  console.log(merrors);
  console.log(formState);

  const form = useRef();

  const sendEmail = (event) => {
    event.preventDefault();
    if (!!formState.user_name && !!formState.user_email && !!formState.user_message) {
      console.log("entro", form);
      emailjs
        .sendForm(
          "service_twqjsp4",
          "template_ghipplg",
          form.current,
          "fnifyh6nVADRzx2Nn"
        )
        .then((result) => {
          console.log(result.text);
          window.alert("Message sent");
        })
        .catch((error) => {
          console.error("Error sending email:", error.text);
          window.alert("Error sending email");
        });
    }
  };

  return (
    <div className="h-full bg-primary/30">
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        {/* text & form */}
        <div className="flex flex-col w-full max-w-[700px]">
          {/* text */}
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-12"
          >
            Let's <span className="text-accent">connect.</span>
          </motion.h2>
          {/* formState */}
          <motion.form
            ref={form}
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            onSubmit={sendEmail}
            className="flex-1 flex flex-col gap-6 w-full mx-auto"
          >
            {/* group */}
            <div className="flex gap-x-6">
              <div className="flex flex-col">
                <div className="">
                  <input
                    type="text"
                    placeholder="name"
                    className="input"
                    name="user_name"
                    value={formState.user_name}
                    onChange={changeHandler}
                  />
                </div>
                <label className="text-accent">{merrors?.user_name}</label>
              </div>
              <div className="flex flex-col w-full">
                <input
                  type="text"
                  placeholder="email"
                  className="input"
                  name="user_email"
                  value={formState.user_email}
                  onChange={changeHandler}
                />
                <label className="text-accent">{merrors?.user_email}</label>
              </div>
            </div>
            <input
              type="text"
              placeholder="subject"
              className="input"
              name="user_subject"
              value={formState.user_subject}
              onChange={changeHandler}
            />
            <textarea
              placeholder="message"
              className="textarea"
              name="user_message"
              value={formState.user_message}
              onChange={changeHandler}
            ></textarea>
            <label className="text-accent">{merrors?.user_message}</label>
            <button className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group">
              <span className="group-hover:-translate-y-[120px] group-hover:opacity-0 transition-all duration-1000">
                Let's talk
              </span>
              <BsArrowRight className="-translate-x-[120px] opacity-0 group-hover:flex group-hover:-translate-x-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
