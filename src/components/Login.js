import React, { useRef, useState } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import { validateSignInForm } from "../utils/validate";

const Login = () => {
  const [isPolicyOpen, setIsPolicyOpen] = useState(false);
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState("")

  const email = useRef(null)
  const password = useRef(null)
  const name = useRef(null)

  const handleSubmit = () => {
    console.log(password.current.value);
    const message = validateSignInForm(email.current.value, password.current.value)
    if(message) {
      setErrorMessage(message)
    } else {
      setErrorMessage("")
    }
  }

  return (
    <div className="relative login">
      <Header />
      <form onSubmit={(e) => e.preventDefault()} className="bg-black md:w-2/6 w-[75%] absolute p-14 mt-36 mb-48 mx-auto left-0 right-0 text-white bg-opacity-90 rounded-lg">
        <h1 className="text-3xl font-semibold">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        <input
          className="w-full p-3 my-4 bg-[#333] rounded-lg"
          ref={email}
          type="text"
          name="email"
          placeholder="Email or phone number"
        />
        {!isSignInForm && (
          <input
            className="w-full p-3 my-4 bg-[#333] rounded-lg"
            ref={name}
            type="text"
            name="name"
            placeholder="Full name"
          />
        )}
        <input
          className="w-full p-3 my-4 bg-[#333] rounded-lg"
          ref={password}
          type="password"
          name="password"
          placeholder="Password"
        />
        {
          errorMessage && <p className="text-[#e50914] font-semibold">{errorMessage}</p>
        }
        <button onClick={() => handleSubmit()} className="w-full text-white p-4 my-4 bg-[#e50914] rounded-lg">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        {isSignInForm && (
          <div className="flex justify-between text-[#8c8c8c] text-sm mb-4">
            <label for="remember_me">
              <input type="checkbox" value="1" /> Remember Me
            </label>
            <a href="/">Need Help?</a>
          </div>
        )}
        <p className="mb-2 mt-16">
          <span className="text-[#737373]">
            {isSignInForm ? "New to Netflix? " : "Already registerd? "}
          </span>
          {isSignInForm ? (
            <Link onClick={() => setIsSignInForm(!isSignInForm)}>
              Sign up now.
            </Link>
          ) : (
            <Link onClick={() => setIsSignInForm(!isSignInForm)}>
              Sign In now.
            </Link>
          )}
        </p>
        <p className="my-2 text-sm font-light text-[#8c8c8c]">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.{" "}
          <a
            href="#"
            onClick={() => setIsPolicyOpen(!isPolicyOpen)}
            className="underline text-[#0071eb]"
          >
            Learn more.
          </a>
        </p>
        {isPolicyOpen && (
          <p className="my-2 text-sm font-light text-[#8c8c8c]">
            The information collected by Google reCAPTCHA is subject to the{" "}
            <a
              href="https://policies.google.com/privacy"
              className="text-[#0071eb]"
            >
              Google Privacy Policy
            </a>{" "}
            and{" "}
            <a
              href="https://policies.google.com/terms"
              className="text-[#0071eb]"
            >
              Terms of Service
            </a>
            , and is used for providing, maintaining, and improving the
            reCAPTCHA service and for general security purposes (it is not used
            for personalised advertising by Google).
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
