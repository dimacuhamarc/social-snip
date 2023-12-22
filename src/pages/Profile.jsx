import { FaFacebook, FaArrowRight, FaUser, FaCopy } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const links = [
  {
    icon: <FaFacebook className="text-violet-300 text-4xl" />,
    text: 'Facebook',
    link: 'https://facebook.com',
  },
];

const user_details = [
  {
    username: 'Kim Winter',
    bio: 'Frontend Developer',
    at: 'winterr_',
  }
]

function copyToClipboard(href) {
  navigator.clipboard.writeText(href);
  AlertBox (`${<span className='font-bold'>{user_details[0].at}</span>} to clipboard!`, 'Snipped!');
}

function AlertBox({item, msg, type}) {
  return (
    <>
      <div class="absolute bottom-6 left-4 w-max p-2 bg-violet-800 items-center text-indigo-100 leading-none rounded-full flex lg:inline-flex outline outline-offset-4 outline-violet-500" role="alert">
        <span class="flex gap-1 items-center rounded-full bg-violet-500 uppercase px-2 py-1 text-xs font-bold mr-3"><span><FaCopy/></span>{type}</span>
        <span class="font-semibold mr-2  text-left flex-auto"><span className='font-bold'>{item}</span>{msg}</span>
        <Link>
          <svg class="fill-current opacity-75 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/></svg>
        </Link>
      </div>
    </>
  )
}

export default function Profile() {
  document.title = `@${user_details[0].at} | SocialSnip`;

  return (
    
    <div className="flex flex-col w-screen h-4/6 gap-6">
      {/* <alertbox msg={`${user_details[0].at} to clipboard!`} type={'Snapped!'}/>
      <alertbox msg={`${user_details[0].at} to clipboard!`} type={'Snapped!'}/> */}
      <AlertBox item={`${user_details[0].at}`} msg=' to clipboard!' type={'Snipped!'}/>
      <div className="h-1/3 w-1/4 px-10 py-12 rounded-xl bg-neutral-800 shadow-lg hover:shadow-indigo-950 hover:scale-105 cursor-pointer outline outline-offset-4 outline-violet-700 hover:-outline-offset-8">
        <h1 className="text-violet-300 font-bold text-4xl">{user_details[0].username}</h1>
        <p className="text-neutral-100 font-semibold text-xl">
          {user_details[0].bio}
        </p>
        <Link to={`@${user_details[0].at}`} onClick={() => copyToClipboard(user_details[0].at)} className="text-neutral-100 text-base hover:underline hover:underline-offset-2">@{user_details[0].at}</Link>
      </div>
      <div className="inline-flex flex-col h-2/3 w-1/4 px-6 py-8 rounded-xl bg-neutral-800 gap-2 overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-purple-500 scroll scrollbar-track-neutral-800 scrollbar-thumb-rounded-full outline outline-offset-4 outline-violet-700">
        {links.length === 0 ? (
          <EmptyLink />
        ) : (
          links && links.map((link) => <ProfileLink {...link} />)
        )}
      </div>
    </div>
  );
}

function ProfileLink({ icon, text, link }) {
  return (
    <Link 
      // to={link}
      // target="_blank"
      rel="noreferrer"
      className="flex flex-row w-full items-center justify-center gap-3 cursor-pointer hover:bg-neutral-700 rounded-2xl p-4"
    >
      {icon}
      <h1 className="text-violet-100 font-medium text-lg w-full">{text}</h1>
      <FaArrowRight onClick={() => copyToClipboard(link)} className="text-violet-300 text-3xl" />
    </Link>
  );
}

function EmptyLink() {
  return (
    <div className="flex items-center justify-center h-full w-full">
      <h1 className="text-violet-100 font-medium text-lg">
        No Links to Display
      </h1>
    </div>
  );
}
