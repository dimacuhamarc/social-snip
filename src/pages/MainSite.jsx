import Hero from "src/components/mainsite/Hero";
import SiteLayout from "../layouts/SiteLayout";



export default function MainSite() {
  document.title = 'Welcome to SocialSnip!';
  return (
    <>
      <SiteLayout> 
        <Hero />
      </SiteLayout>
    </>
  )
};
