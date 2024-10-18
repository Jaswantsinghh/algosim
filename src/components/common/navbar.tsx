import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { algorithmCategories } from "@/data/algorithmCategories"; // Import from the new file

// Reusable NavigationMenuLinks component
const NavigationLinks = ({
  items,
}: {
  items: { name: string; href: string }[];
}) => {
  return (
    <div className="flex flex-col">
      {items.map((item) => (
        <NavigationMenuLink
          key={item.name}
          href={item.href}
          className="px-4 py-2 text-gray-700 hover:bg-gray-200 rounded"
        >
          {item.name}
        </NavigationMenuLink>
      ))}
    </div>
  );
};

export const Navbar: React.FC = () => {
  return (
    <div className="flex items-center justify-between px-4 py-2">
      {/* Left side: AlgoSim logo */}
      <div className="flex items-center space-x-4">
        <span className="font-bold text-lg">AlgoSim</span>
      </div>

      {/* Right side: Navigation and Dropdown Menus */}
      <div className="flex items-center space-x-6 z-[10]">
        <NavigationMenu>
          <NavigationMenuList>
            {/* Iterate through each algorithm category */}
            {algorithmCategories.map((category) => (
              <NavigationMenuItem key={category.title}>
                <NavigationMenuTrigger>{category.title}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationLinks items={category.items} />
                </NavigationMenuContent>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
};
