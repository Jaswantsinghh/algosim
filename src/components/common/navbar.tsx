import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

// Dropdown items array
const dropdownItems = [
  { name: "Linear Search", href: "/search-algos/linear-search" },
  {
    name: "Sentinel Linear Search",
    href: "/search-algos/sentinel-linear-search",
  },
  { name: "Binary Search", href: "/search-algos/binary-search" },
];

export const Navbar: React.FC = () => {
  return (
    <div className="flex items-center justify-between px-4 py-2">
      {/* Left side: AlgoSim logo */}
      <div className="flex items-center space-x-4">
        {/* <Logo /> {/* Replace with your actual logo */}
        <span className="font-bold text-lg">AlgoSim</span>
      </div>

      {/* Right side: Navigation and Search Algos Dropdown */}
      <div className="flex items-center space-x-6">
        {/* Navigation Menu */}
        <NavigationMenu>
          <NavigationMenuList>
            {/* Search Algos dropdown */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>Search Algos</NavigationMenuTrigger>
              <NavigationMenuContent style={{ width: "120px" }} className="">
                {" "}
                {/* Adjusted width */}
                <div className="flex flex-col">
                  {dropdownItems.map((item) => (
                    <NavigationMenuLink
                      key={item.name}
                      href={item.href}
                      style={{ padding: "4px" }}
                    >
                      {item.name}
                    </NavigationMenuLink>
                  ))}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
};
