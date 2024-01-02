import { Link } from "react-router-dom";

export default function NavigationBar() {
  return (
    <div className="w-full h-20 px-28 flex flex-row items-center justify-center bg-violet-200 max-xl:hidden">
      <div className="brand text-3xl text-left font-bold">SocialSnip</div>
      <div className="links flex flex-row gap-10 text-lg text-left font-medium">
        <Link
          to="/discover"
          className="text-black hover:text-violet-700 hover:underline underline-offset-8"
        >
          Discover
        </Link>
        <Link
          to="/pricing"
          className="text-black hover:text-violet-700 hover:underline underline-offset-8"
        >
          Pricing
        </Link>
        <Link
          to="/explore"
          className="text-black hover:text-violet-700 hover:underline underline-offset-8"
        >
          Explore
        </Link>
      </div>
      <div className="links flex flex-row gap-2 text-lg text-left font-medium">
        <Link
          to="/onboarding"
          className="inline-flex justify-center text-white font-light bg-violet-500 border-0 py-2 px-6 focus:outline-none hover:bg-violet-800 rounded-3xl text-lg8"
        >
          Get Started
        </Link>
        {/* <Link to="/onboarding" className="inline-flex justify-center text-violet-500 outline outline-1 py-2 px-6 hover:outline-none hover:hover:bg-gray-200 rounded-3xl text-lg8">Sign In</Link> */}
      </div>
    </div>
  );
}
