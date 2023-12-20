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
    <div className=" flex w-full bg-slate-950 h-14 ">
      <NavigationMenu >
        <NavigationMenuList>

          {/* home */}
          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Home
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          {/* my projects */}
          <NavigationMenuItem >
            <NavigationMenuTrigger>My Projects</NavigationMenuTrigger>
            <NavigationMenuContent className=" bg-slate-600">
                <Link href="/todo" className="" legacyBehavior passHref>
              <NavigationMenuLink className={`hover:text-green-500 ${navigationMenuTriggerStyle()}`}>Todo App</NavigationMenuLink>
              </Link>
                <Link href="/timer" legacyBehavior passHref>
              <NavigationMenuLink  className={`hover:text-green-500 ${navigationMenuTriggerStyle()}`}>Timer</NavigationMenuLink>
              </Link>
                <Link href="/counter" legacyBehavior passHref>
              <NavigationMenuLink  className={`hover:text-green-500 ${navigationMenuTriggerStyle()}`}>Counter</NavigationMenuLink>
              </Link>
                <Link href="/counter" legacyBehavior passHref>
              <NavigationMenuLink  className={`hover:text-green-500 ${navigationMenuTriggerStyle()}`}>Background Changer</NavigationMenuLink>
              </Link>
                <Link href="/counter" legacyBehavior passHref>
              <NavigationMenuLink  className={`hover:text-green-500 ${navigationMenuTriggerStyle()}`}>Password Generator</NavigationMenuLink>
              </Link>
            </NavigationMenuContent>
          </NavigationMenuItem>


        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

export default TopNavigation;
