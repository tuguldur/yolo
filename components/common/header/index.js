import { Menu, Search, Cart, User } from "../svg";
import Link from "next/link";
import data from "@data/header";
const Header = () => (
  <header className="h-14 bg-transparent fixed top-0 right-0 left-0">
    <div className="max-w-header mx-auto flex justify-between">
      <div className="flex-header">
        <button
          className="bg-yolo-black h-14 w-14 flex justify-center items-center hover:bg-white hover:border-yolo-black border border-transparent group"
          aria-label="Menu Button"
        >
          <Menu className="fill-white group-hover:fill-yolo-black" />
        </button>
      </div>
      <nav className="flex-row items-center flex-1 justify-between max-w-menu font-bold hidden sm:flex">
        {data.map((item, index) => (
          <div key={index}>
            <Link href={item.handle}>
              <a className="text-menu uppercase">{item.label}</a>
            </Link>
          </div>
        ))}
      </nav>
      <ul className="flex items-center space-x-6">
        <li>
          <button
            aria-label="Search Button"
            className="p-2 hover:bg-yolo-black/10 rounded-full"
          >
            <Search className="fill-yolo-black w-full h-full max-w-icon" />
          </button>
        </li>
        <li>
          <button
            aria-label="Search Button"
            className="p-2 hover:bg-yolo-black/10 rounded-full"
          >
            <Cart className="fill-yolo-black w-full h-full max-w-icon" />
          </button>
        </li>
        <li>
          <button
            aria-label="Search Button"
            className="p-2 hover:bg-yolo-black/10 rounded-full"
          >
            <User className="fill-yolo-black w-full h-full max-w-icon" />
          </button>
        </li>
      </ul>
    </div>
  </header>
);
export default Header;
