import { FaFacebook, FaArrowRight, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const links = [
  {
    icon: <FaFacebook className="text-violet-300 text-4xl" />,
    text: 'Facebook',
    link: 'https://facebook.com',
  },
];

export default function Profile() {
  const user = 'Kim Winter';
  return (
    <div className="flex flex-col w-screen h-4/6 gap-6">
      <div className="h-1/3 w-1/4 px-10 py-12 rounded-xl bg-neutral-800 shadow-lg hover:shadow-indigo-950 hover:scale-105 cursor-pointer">
        <h1 className="text-violet-300 font-bold text-4xl">{user}</h1>
        <p className="text-neutral-100 font-semibold text-xl">
          Frontend Developer
        </p>
        <p className="text-neutral-100 text-base hover:underline hover:underline-offset-2">@winterr_</p>
      </div>
      <div className="inline-flex flex-col h-2/3 w-1/4 px-6 py-8 rounded-xl bg-neutral-800 gap-2 overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-purple-500 scroll scrollbar-track-neutral-800 scrollbar-thumb-rounded-full">
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
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="flex flex-row w-full items-center justify-center gap-3 cursor-pointer hover:bg-neutral-700 rounded-2xl p-4"
    >
      {icon}
      <h1 className="text-violet-100 font-medium text-lg w-full">{text}</h1>
      <FaArrowRight className="text-violet-300 text-3xl" />
    </a>
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
