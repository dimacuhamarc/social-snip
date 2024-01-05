export default function Hero() {
  return (
    <>
      <div className="">
        <h1 className="text-8xl font-bold text-violet-950 mb-4">
          Elevate Your <span className="bg-gradient-to-br to-violet-900/50 from-sky-600/50 text-white px-4 py-2 rounded-3xl shadow-lg hover:brightness-125">Digital Presence</span>, 
        </h1>
        <h1 className="text-8xl font-bold text-violet-950">
          Redefine Your Links
        </h1>
        <p className="text-lg font-medium text-violet-950">
          SocialSnip is more than just
          link management; it's your gateway to a sleek, organized, and
          effortlessly curated online world.
        </p>
        <div className="flex flex-row justify-center">
          <button className="px-4 py-2 mt-4 font-bold text-white bg-violet-950 rounded-md hover:bg-purple-850">
            Get Started
          </button>
          <button className="px-4 py-2 mt-4 ml-4 font-bold text-violet-950 bg-white border-2 border-violet-950 rounded-md hover:bg-violet-950 hover:text-white">
            Learn More
          </button>
        </div>
      </div>
    </>
  );
}
