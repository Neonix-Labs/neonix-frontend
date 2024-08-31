import { FaGithub } from "react-icons/fa";
import {
  FaLinkedinIn,
  FaMedium,
  FaProductHunt,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa6";

export function SocialLinks() {
  return (
    <ul className="flex space-x-4 items-center md:ml-5">
      <li>
        <a target="_blank" rel="noreferrer" href="https://x.com/NeonixLabs">
          <span className="sr-only">Twitter</span>
          <FaXTwitter size={22} className="fill-zinc-100" />
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://medium.com/@neonixlabs"
        >
          <span className="sr-only">Medium</span>
          <FaMedium size={22} className="fill-zinc-100" />
        </a>
      </li>
      <li>
        <a target="_blank" rel="noreferrer" href="/">
          <span className="sr-only">LinkedIn</span>
          <FaLinkedinIn size={22} className="fill-zinc-100" />
        </a>
      </li>
    </ul>
  );
}
