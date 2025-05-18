import { Link } from "react-router-dom";

export default function Button({ to, title }) {
  return (
    <Link to={to}>
      <button className="mt-20 text-xl leading-normal text-black bg-zinc-300 h-[53px] w-[206px] flex items-center justify-center">
        {title}
      </button>
    </Link>
  );
}
