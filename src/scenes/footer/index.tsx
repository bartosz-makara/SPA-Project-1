import Logo from "@/assets/footerLogo.png";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="bg-primary-500 py-16 text-white">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img src={Logo} alt="logo" />

          <p>Sentionautics 2023 © All rights reserved</p>
        </div>
        <div className="mx-auto mt-16 basis-1/3 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">Kemp House 152-160, City Road, London EC1V-2NX</p>
          <p className="my-5">sentioltd@protonmail.com</p>
          <p>WhatsApp: 07587 958 742</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
