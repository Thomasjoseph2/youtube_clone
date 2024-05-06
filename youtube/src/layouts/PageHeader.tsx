import { ArrowLeft, Bell, Menu, Mic, Search, Upload, User } from "lucide-react";
import Logo from "../assets/me-tube.svg";
import Button from "../components/Button";
import { useState } from "react";

const PageHeader = () => {
  const [showFullwidthSearch, setShowFullWidthSearch] = useState(false);
  return (
    <div className="flex gap-10 lg:gap-20 justify-between p-2 mb-6 mx-4">
      <div
        className={`flex items-center gap-4 flex-shrink-0 ${
          showFullwidthSearch ? "hidden" : "flex"
        }`}
      >
        <Button variant="ghost" size="icon" className="">
          <Menu />
        </Button>
        <a href="/">
          <img className="h-7" src={Logo} alt="logo image" />
        </a>
      </div>
      <form
        className={` gap-4 flex-grow justify-center ${
          showFullwidthSearch ? "flex" : "hidden md:flex"
        }`}
      >
        {showFullwidthSearch && (
          <Button
            onClick={() => setShowFullWidthSearch(false)}
            className=""
            variant="ghost"
            size="icon"
          >
            <ArrowLeft />
          </Button>
        )}
        <div className="flex flex-grow max-w-[600px]">
          <input
            type="search"
            placeholder="search"
            className="rounded-l-full border border-secondary-border shadow-inner shadow-secondary py-1 px-4 text-lg w-full focus-within:border-blue-500  outline-none"
          />
          <Button className=" py-2 px-4 rounded-r-full border border-secondary-border border-l-0 flex-shrink-0">
            <Search />
          </Button>
        </div>
        <Button size="icon" className="flex-shrink-0" type="button">
          <Mic />
        </Button>
      </form>
      <div
        className={` flex-shrink-0 md:gap-3 ${
          showFullwidthSearch ? "hidden" : "flex"
        }`}
      >
        <Button
          onClick={() => setShowFullWidthSearch(true)}
          size="icon"
          variant="ghost"
          className="md:hidden"
        >
          <Search />
        </Button>
        <Button size="icon" variant="ghost" className="md:hidden">
          <Mic />
        </Button>
        <Button size="icon" variant="ghost">
          <Upload />
        </Button>
        <Button size="icon" variant="ghost">
          <Bell />
        </Button>
        <Button size="icon" variant="ghost">
          <User />
        </Button>
      </div>
    </div>
  );
};

export default PageHeader;
