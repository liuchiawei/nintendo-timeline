import * as React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";
export function LocaleSwitcher() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="cursor-pointer">
            言語 / Language
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="w-[120px] flex flex-col gap-2 p-2 cursor-pointer *:cursor-pointer *:w-full *:text-left">
              <Link href="/" locale="en">
                <Button variant="ghost" className="cursor-pointer w-full">
                  EN
                </Button>
              </Link>
              <Link href="/" locale="ja">
                <Button variant="ghost" className="cursor-pointer w-full">
                  日本語
                </Button>
              </Link>
              <Link href="/" locale="zh">
                <Button variant="ghost" className="cursor-pointer w-full">
                  中文
                </Button>
              </Link>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
