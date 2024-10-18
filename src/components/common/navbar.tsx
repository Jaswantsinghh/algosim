import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

// Dropdown items arrays
const searchAlgos = [
  { name: "Linear Search", href: "/search-algos/linear-search" },
  {
    name: "Sentinel Linear Search",
    href: "/search-algos/sentinel-linear-search",
  },
  { name: "Binary Search", href: "/search-algos/binary-search" },
  /* { name: "Meta Binary Search", href: "/search-algos/meta-binary-search" }, */
];

const sortingAlgos = [
  { name: "Selection Sort", href: "/sorting-algos/selection-sort" },
  /* Add more sorting algos here */
];

export const Navbar: React.FC = () => {
  return (
    <div className="flex items-center justify-between px-4 py-2">
      {/* Left side: AlgoSim logo */}
      <div className="flex items-center space-x-4">
        {/* <Logo /> {/* Replace with your actual logo */}
        <span className="font-bold text-lg">AlgoSim</span>
      </div>

      {/* Right side: Navigation and Dropdown Menus */}
      <div className="flex items-center space-x-6">
        {/* Navigation Menu */}
        <NavigationMenu>
          <NavigationMenuList>
            {/* Search Algos dropdown */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>Search Algos</NavigationMenuTrigger>
              <NavigationMenuContent style={{ width: "160px" }} className="">
                <div className="flex flex-col">
                  {searchAlgos.map((item) => (
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

            {/* Sorting Algos dropdown */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>Sorting Algos</NavigationMenuTrigger>
              <NavigationMenuContent style={{ width: "160px" }} className="">
                <div className="flex flex-col">
                  {sortingAlgos.map((item) => (
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
