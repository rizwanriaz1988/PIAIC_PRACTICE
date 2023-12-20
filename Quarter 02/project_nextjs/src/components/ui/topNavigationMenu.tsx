"use client";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import Link from "next/link";

function TopNavigation() {
  return (
    <div className=" flex w-full bg-slate-950 h-14 px-4">
      <NavigationMenu >
        <NavigationMenuList >

          {/* home */}
          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink className={` text-white hover:text-green-500 ${navigationMenuTriggerStyle()}`}>
                Home
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <div>

          {/* my projects */}
          <NavigationMenuItem>
            <NavigationMenuTrigger >My Projects</NavigationMenuTrigger>
            <NavigationMenuContent className="bg-slate-950">
              <div className="">
                <Link href="/todo"  legacyBehavior passHref>
              <NavigationMenuLink className={` text-white bg-slate-950 hover:bg-slate-900 hover:text-green-500 ${navigationMenuTriggerStyle()}`}>Todo App</NavigationMenuLink>
              </Link>
              </div>
              <div>
                <Link href="/timer" legacyBehavior passHref>
              <NavigationMenuLink  className={`text-white bg-slate-950 hover:bg-slate-900 hover:text-green-500 ${navigationMenuTriggerStyle()}`}>Timer</NavigationMenuLink>
              </Link>
              </div>
              <div>
                <Link href="/counter" legacyBehavior passHref>
              <NavigationMenuLink  className={`text-white bg-slate-950 hover:bg-slate-900 hover:text-green-500 ${navigationMenuTriggerStyle()}`}>Counter</NavigationMenuLink>
              </Link>
              </div>
              <div>
                <Link href="/bgchanger" legacyBehavior passHref>
              <NavigationMenuLink  className={`text-white bg-slate-950 hover:bg-slate-900 hover:text-green-500 ${navigationMenuTriggerStyle()}`}>Background Changer</NavigationMenuLink>
              </Link>
              </div>
              <div>
                <Link href="/passgenerator" legacyBehavior passHref>
              <NavigationMenuLink  className={`text-white bg-slate-950 hover:bg-slate-900 hover:text-green-500 ${navigationMenuTriggerStyle()}`}>Password Generator</NavigationMenuLink>
              </Link>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          </div>

        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

export default TopNavigation;
