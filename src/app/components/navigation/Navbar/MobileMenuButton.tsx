import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export function MobileMenuButton({ onClick }: { onClick: any }) {
  return (
    <button
      title="MenuDrawerToggle"
      type="button"
      className="absolute right-2 top-2 p-2"
      onClick={onClick}
    >
      <FontAwesomeIcon className="text-4xl" icon={faBars} />
    </button>
  );
}
