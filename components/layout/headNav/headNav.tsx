import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu"


const Navbar = () => {
  return (
    <div className="flex justify-between items-center w-full p-2 border-b">
      <div >
        <h1 className="text-2xl lg:text-3xl font-bold">Jordan Sivils</h1>
      </div>
      <div className="pr-4">
        <NavigationMenu className="m-5">
          <NavigationMenuList className="flex gap-1 lg:gap-4">
            <NavigationMenuItem>
              <NavigationMenuLink className="text-lg lg:text-xl cursor-pointer hover:underline">About</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className="text-lg lg:text-xl cursor-pointer hover:underline">Blog</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className="text-lg lg:text-xl cursor-pointer hover:underline">Projects</NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  )
}

export default Navbar