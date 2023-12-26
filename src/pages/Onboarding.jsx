import { Link } from "react-router-dom";
import logo from '../assets/Icon.svg';
import { FaArrowRight } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";


export default function Onboarding() {
  const [isUserSelect, setIsUserSelect] = useState(false);

  function ToggleUserSelect() {
    if (isUserSelect) {
      setIsUserSelect(false);
    } else {
      setIsUserSelect(true);
    }
  }

  const msg = [
    "Unlock the full potential of your online presence with SocialSnip. Create a stunning, all-in-one landing page to showcase your social media profiles and content in one place. Let's get started!",
    "We're delighted to have you back. Sign in now and continue exploring SocialSnip!",
  ]

  return (
    <div className="flex w-full h-full">
      <div className="flex flex-col items-center justify-center w-2/3 max-xl:w-full gap-5">
        {isUserSelect ? <SignIn ToggleUserSelect={ToggleUserSelect} /> : <SignUp ToggleUserSelect={ToggleUserSelect}/>}
      </div>
      <div className="w-1/3 bg-gradient-to-br from-violet-500 via-purple-500 to-pink-500 max-xl:hidden rounded-s-3xl">
        <div className="flex flex-col justify-center items-center gap-6 text-left px-12 h-full">
          <Link to="/profile/@default" className="absolute top-4 right-4 text-white text-2xl hover:bg-white hover:bg-opacity-50 p-1 rounded-full"><FaArrowRight></FaArrowRight></Link>
          <div className="flex flex-row justify-center items-center gap-6">
            <h1 className="text-5xl font-bold text-white">Welcome to SocialSnip!</h1>
          </div>
          <p className="text-white">{isUserSelect ? msg[1] : msg[0]}</p>
        </div>
      </div>
    </div>
  )
}

function SignIn({ToggleUserSelect}) {
  document.title = 'Sign In | SocialSnip';
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-6 text-left px-12">
        <h1 className="text-5xl font-bold text-neutral-800">Sign In</h1>
        <p className="text-neutral-800">Sign in to your SocialSnip account to continue.</p>
      </div>

      <div className="flex flex-col relative w-3/6 gap-2 font-medium">
        <label className="leading-7 text-sm text-left w-full text-gray-600">Email</label>
        <input type="email" placeholder="Email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        <label className="leading-7 text-sm text-left w-full text-gray-600">Password</label>
        <input type="Password" placeholder="Password" id="Password" name="Password" className="w-full bg-white rounded border border-gray-300 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>

      <p className="w-3/6">Forgot Password/Email?</p>
      <button className="inline-flex justify-center text-white bg-violet-500 border-0 w-3/6 py-3 px-8 focus:outline-none hover:bg-violet-800 rounded-3xl text-lg">
        Sign In
      </button>
      OR
      <button className="inline-flex justify-center text-neutral-800 font-medium bg-white border-0 w-3/6 py-3 px-8 hover:bg-slate-200 rounded-3xl text-lg">
        <div className="flex flex-row justify-center items-center gap-4">
          <FcGoogle />
          <span>Continue with Google</span>
        </div>
      </button>
      <p>Don't have an account? <Link className="text-purple-500 font-semibold hover:underline" onClick={ToggleUserSelect}>Sign Up</Link></p>
    </>
  )
}

function SignUp({ToggleUserSelect}) {
  document.title = 'Sign Up | SocialSnip';
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-6 text-left px-12">
        <h1 className="text-5xl font-bold text-neutral-800">Sign In</h1>
        <p className="text-neutral-800">Sign in to your SocialSnip account to continue.</p>
      </div>

      <div className="flex flex-col relative w-3/6 mb-4 gap-2 font-medium">
        <label className="leading-7 text-sm text-left w-full text-gray-600">Email</label>
        <input type="email" placeholder="Email" id="signup-email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        <label className="leading-7 text-sm text-left w-full text-gray-600">Password</label>
        <input type="Password" placeholder="Password" id="signup-Password" name="Password" className="w-full bg-white rounded border border-gray-300 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        <label className="leading-7 text-sm text-left w-full text-gray-600">Confirm Password</label>
        <input type="Password" placeholder="Password" id="signup-ConfirmPassword" name="Password" className="w-full bg-white rounded border border-gray-300 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <p>Forgot Password?</p>
      <button className="inline-flex justify-center text-white bg-violet-500 border-0 w-3/6 py-3 px-8 focus:outline-none hover:bg-violet-800 rounded-3xl text-lg">
        Continue
      </button>
      OR
      <button className="inline-flex justify-center text-neutral-800 font-medium bg-white border-0 w-3/6 py-3 px-8 hover:bg-slate-200 rounded-3xl text-lg">
        <div className="flex flex-row justify-center items-center gap-4">
          <FcGoogle />
          <span>Continue with Google</span>
        </div>
      </button>
      <p>Already have an account? <Link className="text-purple-500 font-semibold hover:underline" onClick={ToggleUserSelect}>Sign In</Link></p>
    </>
  )
}
