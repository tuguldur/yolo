import { Facebook, Instagram, Twitter } from "../svg";
const Footer = () => (
  <footer className="flex w-full">
    <div className="max-w-footer mx-auto">
      <div className="flex flex-row space-x-8 justify-center mb-6 items-center">
        <div className="h-0.5 bg-yolo-black w-[50px]" />
        <Facebook /> <Instagram /> <Twitter />
        <div className="h-0.5 bg-yolo-black w-[50px]" />
      </div>
      <span className="font-bold text-footer uppercase">
        Yolo © 2020. All rights reserved
      </span>
    </div>
  </footer>
);
export default Footer;
