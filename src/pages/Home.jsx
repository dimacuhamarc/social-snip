import NavigationBar from "../components/NavigationBar";


export default function Home() {
  document.title = 'Welcome to SocialSnip!';
  return (
    <div className="h-full w-full bg-gradient-to-b from-violet-500 to-violet-200">
      <NavigationBar />
    </div>
  )
};
