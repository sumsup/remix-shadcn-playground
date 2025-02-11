"use client";

import { Link } from "@remix-run/react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "~/components/ui/navigation-menu";

export default function NavBar() {
  return (
    <NavigationMenu className="p-4 border-b flex justify-between items-center">
      <div className="text-lg font-bold">My App</div>
      <NavigationMenuList className="flex space-x-4">
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link to="/">홈</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link to="/about">소개</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>메뉴</NavigationMenuTrigger>
          <NavigationMenuContent className="p-2 border rounded-md bg-white">
            <ul className="flex flex-col space-y-2">
              <li>
                <NavigationMenuLink asChild>
                  <Link to="/services">서비스</Link>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <Link to="/contact">문의</Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
