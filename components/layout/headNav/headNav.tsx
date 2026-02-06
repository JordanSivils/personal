// import ToggleMode from "./ToggleMode"

import { Button } from "@/components/ui/button"
import ToggleTheme from "@/components/ui/toggle/darkToggle"
import { siGithub } from "simple-icons"

const Navbar = () => {
  return (
    <div className="flex items-center justify-between w-full py-2 px-4 border-b">
      <h1 className="text-2xl">Jordan Sivls</h1>
      <div className="flex gap-4">
        <a href="https://github.com/JordanSivils" target="_blank">
        <Button variant={"ghost"}>
          <svg
              viewBox="0 0 24 24"
              className="h-15 w-15 lg:h-20 lg:w-20"
              fill="rgb(97, 85, 245)"

            >
                <path d={siGithub.path} />
            </svg>
        </Button>
          
        </a>
        <ToggleTheme />
      </div>
      
    </div>
  )
}

export default Navbar