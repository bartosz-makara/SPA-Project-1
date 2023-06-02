import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage, Props } from "./types";

const ActionButton = ({ children, setSelectedPage }: Props) => {
  return (
    <AnchorLink
      className="border-1 rounded-lg border-primary-500 bg-primary-500 px-10 py-2 text-white transition duration-500 hover:border hover:bg-primary-100 hover:text-black"
      onClick={() => setSelectedPage(SelectedPage.ContactUs)}
      href={`#${SelectedPage.ContactUs}`}
    >
      {children}
    </AnchorLink>
  );
};

export default ActionButton;
