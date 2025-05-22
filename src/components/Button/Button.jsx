import { Link } from "react-router-dom";

export default function Button({ to, title, icon }) {
  return (
    <Link to={to}>
      <button className="text-xl font-bold leading-normal text-gray-800  bg-zinc-100/80 h-14 px-26 flex place-items-center justify-center rounded-lg shadow-md hover:bg-gray-200 transition duration-300 ease-in-out">
        {icon && <img src={icon} alt={title} className="inline-block mr-2 w-10" />}
        {title}
      </button>
    </Link>
  );
}
