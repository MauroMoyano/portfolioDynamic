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
import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [merrors, setMerrors] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const changeHandler = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setMerrors(validate({ ...form, [property]: value }));
    setForm({ ...form, [property]: value });
  };

  const validate = (form) => {
    var errors = {
      name: "",
      email: "",
      subject: "",
      message: "",
    };

    form.name?.trim();
    form.email?.trim();

    form.name === ""
      ? (errors = { ...errors, name: "Debe introducir su nombre" })
      : (errors = { ...errors });

    return errors;
  };

  console.log(merrors);
  console.log(form);

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
          {/* form */}
          <motion.form
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col gap-6 w-full mx-auto"
          >
            {/* group */}
            <div className="flex gap-x-6 w-full">
              <div className="">
                <input
                  type="text"
                  placeholder="name"
                  className="input mb-4"
                  name="name"
                  value={form.name}
                  onChange={changeHandler}
                />
                <label className='text-accent'>
                  {merrors?.name}
                </label>
              </div>
              <input
                type="text"
                placeholder="email"
                className="input"
                name="email"
                value={form.email}
                onChange={changeHandler}
              />
            </div>
            <input
              type="text"
              placeholder="subject"
              className="input"
              name="subject"
              value={form.subject}
              onChange={changeHandler}
            />
            <textarea
              placeholder="message"
              className="textarea"
              name="message"
              value={form.message}
              onChange={changeHandler}
            ></textarea>
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
