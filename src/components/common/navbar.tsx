import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

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
              <NavigationMenuContent>
                <div className="flex flex-col space-y-2">
                  <NavigationMenuLink
                    className=""
                    href="/search-algos/linear-search"
                  >
                    Linear Search
                  </NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
};
