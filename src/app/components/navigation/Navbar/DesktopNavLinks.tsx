import Link from "next/link";
import { LinkDescription } from "../../../schemas/common";

export function DesktopNavLinks({ links }: { links: LinkDescription[] }) {
  return (
    <ul className="justify-center flex flex-row space-x-6">
      {links.map((l) => (
        <li className="text-xl hover:text-white hover:font-semibold">
          <Link href={l.path}>{l.text}</Link>
        </li>
      ))}
    </ul>
  );
}
