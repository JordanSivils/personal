import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu"
import { siGithub } from "simple-icons"

const Footer = () => {
  return (
    <div className="flex justify-center items-center w-full border-t gap-2">
      <div >
        <h1 className="text-sm lg:text-md">Jordan Sivils © {new Date().getFullYear()}</h1>
      </div>
      <div className="pr-4">
        <NavigationMenu className="m-2">
          <NavigationMenuList className="flex gap-1 lg:gap-4">
            <NavigationMenuItem>
              <NavigationMenuLink className="text-sm lg:text-md cursor-pointer hover:underline">About</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className="text-sm lg:text-md cursor-pointer hover:underline">Portfolio</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className="text-sm lg:text-md cursor-pointer hover:underline">Blog</NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <p>-</p>
      <div>
        <NavigationMenu className="m-2">
          <NavigationMenuList className="flex gap-1 lg:gap-4">
            <NavigationMenuItem>
              <NavigationMenuLink className="text-sm lg:text-md cursor-pointer hover:underline">
                <svg
                    viewBox="0 0 24 24"
                    className="h-15 w-15 lg:h-20 lg:w-20"
                    fill="rgb(97, 85, 245)"

                >
                    <path d={siGithub.path} />
                </svg>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  )
}

export default Footer