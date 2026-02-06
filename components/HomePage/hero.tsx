import { siClerk, siDocker, siExpress, siNodedotjs, siPostgresql, siPrisma, siReact, siRedis, siTailwindcss, siTypescript, siZod } from "simple-icons"
import { Button } from "../ui/button"
import { SquareArrowOutUpRight } from "lucide-react"

const Hero = () => {
    const items = [
        { name: "React", icon: siReact, fill: "#61DBFB"}, 
        { name: "Express", icon: siExpress, fill: "#FFFFFF"}, 
        { name: "Prisma", icon: siPrisma, fill: "#5A67D8"}, 
        { name: "Postgres", icon: siPostgresql, fill: "#336791"},
        { name: "TypeScript", icon: siTypescript, fill: "#3178C6"},
        { name: "Docker", icon: siDocker, fill: "#1D63ED"},
        { name: "Redis", icon: siRedis, fill: "#D82C20"},
        { name: "Zod", icon: siZod, fill: "#5B21B6"},
        { name: "Clerk", icon: siClerk, fill: "rgb(108 71 255)"},
    ]
    const radius = 140
    return (
        <div className="flex flex-col gap-4 items-center">

        
        <div className="p-4 flex flex-col-reverse w-full
        md:flex-row md:justify-evenly
        items-center  gap-2 "
        >
            <div className="flex flex-col gap-2 max-w-88">
                <h2 className="text-2xl font-bold">The Full Stack</h2>

                <h3 className="font-semibold">Server & Data</h3>
                <p>
                    I work backend-first. Node.js and TypeScript form the core, with PostgreSQL and Redis
                    running locally in Docker. Prisma handles data access, Zod defines runtime-safe
                    schemas plus validation, and Clerk Authorizes. Express usually ties it all together, but im starting to experiment with fastify.
                </p>

                <h3 className="font-semibold">Client</h3>
                <p>
                    On the frontend, I use React with TypeScript, increasingly through Next.js.
                    Forms and validation are powered by React Hook Form and Zod.
                    While I'm comfortable with vanilla HTML and CSS, Tailwind and shadcn/ui
                    have become my go-to for building clean, consistent UIs.
                </p>
            </div>
            <div className="relative h-80 w-80 rounded-full bg-none">
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <svg
                        viewBox="0 0 24 24"
                        className="h-15 w-15 lg:h-20 lg:w-20"
                        fill="#68A063"
                    >
                        <path d={siNodedotjs.path} />
                    </svg>
                </div>
        {items.map((item, i) => {
            const angle = (i / items.length) * 360
            return (
            <div
                key={item.name}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                style={{ transform: `rotate(${angle}deg) translate(${radius}px) rotate(-${angle}deg)` }}
            >
                <div className="flex h-10 w-10 items-center justify-center rounded-full">
                <svg
                    viewBox="0 0 24 24"
                    className="h-8 w-8 lg:h-10 lg:w-10"
                    fill={item.fill}
                >
                    <path d={item.icon.path} />
                </svg>
                </div>
            </div>
            )
        })}
    </div>
    
    </div>
    <Button className="max-w-26 cursor-pointer">
        <a className="w-full h-full" href="https://github.com/JordanSivils" target="_blank" rel="noopener noreferrer">
            Github
        </a>
        <SquareArrowOutUpRight />
    </Button>
    </div>
        
    )
}

export default Hero