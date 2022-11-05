import React from "react";
import { useState } from "react";
import Footer from "../components/Footer";
import "./ContactPage.css";

const ContactPage = () => {
  const name = "Uchechukwu Anachuna";

  const [btn, setBtn] = useState("disabled");
  const [messageError, setMessageError] = useState("hidden");

  function onChecked(e) {
    if (e.target.checked === true) {
      setBtn("");
    } else {
      setBtn("disabled");
    }
  }

  const messageArea = document.querySelector("#message");
  // messageArea.addEventListener("focus", () => {
  //   if (messageArea.value.length === 0) {
  //     messageArea.style.borderColor = "#f89687";
  //     messageArea.style.boxShadow =
  //       "0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #ffd3cc";
  //   }
  // });

  function onFormSubmit(e) {
    e.preventDefault();
    if (messageArea.value.length === 0) {
      setMessageError("");
    } else {
      setMessageError("hidden");
      e.currentTarget.submit();
    }
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        paddingRight: "20px",
        paddingLeft: "20px",
      }}
    >
      <div className="pt-12 w-[800px] Tablet:w-[650px] LargePhones:w-[550px] TheRest:w-[100%]">
        <h1
          className="font-semibold text-Gray-Gray900"
          style={{ fontSize: "30px" }}
        >
          Contact Me
        </h1>
        <p className="text-Gray-Gray600 pt-2" style={{ fontSize: "18px" }}>
          Hi there, contact me to ask me about anything you have in mind.
        </p>
        <form
          action=""
          method="get"
          className="flex flex-col gap-5 w-full mt-7"
          onSubmit={onFormSubmit}
        >
          <div className="w-full grid grid-rows-1 grid-flow-col gap-7 TheRest:grid-rows-2">
            <div className="w-full flex flex-col">
              <label
                className="text-Gray-Gray700 font-semibold"
                style={{ fontSize: "14px" }}
                htmlFor="first_name"
              >
                First name
              </label>
              <input
                className="rounded-lg text-Gray-Gray900 py-[10px] px-[14px] border border-Gray-Gray300 placeholder:text-Gray-Gray500 outline-0"
                style={{ fontSize: "16px" }}
                type="text"
                id="first_name"
                placeholder="Enter your first name"
              />
            </div>
            <div className="w-full flex flex-col">
              <label
                className="text-Gray-Gray700 font-semibold"
                style={{ fontSize: "14px" }}
                htmlFor="last_name"
              >
                Last name
              </label>
              <input
                className="rounded-lg text-Gray-Gray900 border border-Gray-Gray300 py-[10px] px-[14px] placeholder:text-Gray-Gray500 outline-0"
                style={{ fontSize: "16px" }}
                type="text"
                id="last_name"
                placeholder="Enter your last name"
              />
            </div>
          </div>
          <div className="w-full flex flex-col">
            <label
              className="text-Gray-Gray700 font-semibold"
              style={{ fontSize: "14px" }}
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="rounded-lg text-Gray-Gray900 border border-Gray-Gray300 py-[10px] px-[14px] placeholder:text-Gray-Gray500 outline-0"
              style={{ fontSize: "16px" }}
              type="email"
              id="email"
              placeholder="yourname@email.com"
            />
          </div>
          <div className="w-full flex flex-col gap-1">
            <label
              className="text-Gray-Gray700 font-semibold"
              style={{ fontSize: "14px" }}
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="rounded-lg text-Gray-Gray900 border border-Gray-Gray300 py-[10px] px-[14px] h-[10rem] placeholder:text-Gray-Gray500 outline-0"
              type="text"
              id="message"
              placeholder="Send me a message and I'll reply you as soon as possible..."
            ></textarea>
            <small
              className={`${messageError} text-[#F83F23] font-medium text-sm`}
            >
              Please enter a message
            </small>
          </div>

          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              name="check"
              id="check_btn"
              className="cursor-pointer h-[18px] w-[18px] border border-Gray-Gray300 rounded-md"
              onChange={onChecked}
            />
            <label
              htmlFor="check_btn"
              className="text-Gray-Gray600 font-normal"
            >
              {/* FiXME */}
              You agree to providing your data to {name} who may contact you.
            </label>
          </div>

          <input
            className={`p-3 bg-Primary-Primary600 ${
              btn === "" ? "cursor-pointer" : "cursor-not-allowed"
            } text-white font-semibold rounded-lg`}
            type="submit"
            value="Send message"
            id="btn__submit"
            disabled={btn}
          />
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
