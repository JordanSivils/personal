import Image from "next/image"
import Link from "next/link"

const PortfolioSection = () => {
    return (
        <>
            <div className="flex flex-col justify-center items-center gap-4 p-3">
                <h2 className="underline">Notable Projects</h2>
                <div className="flex flex-col gap-1 p-4 border rounded-md ">
                    <div className="flex flex-col md:flex-row items-center gap-3 ">
                        <div className="flex flex-col gap-2">
                            <Image className="block rounded-lg" src="/assets/new_me_img.png" width={350} height={350} alt="Interal Website Home" />
                            <Image className="md:block rounded-lg hidden" src="/assets/SO_form.png" width={350} height={350} alt="Interal Website Form" />
                        </div>
                        
                        <div className="flex flex-col max-w-88 gap-2">
                            <h3 className="font-semibold">Work App</h3>
                            <p className="italic text-sm">Next.js With small Fastify Server (TS)</p>
                            <p className="pb-2">
                                A rebuild of an earlier Vite + React + Express application. Migrating to Next.js reduced friction 
                                between separate frontend and backend projects, streamlined development, and improved type 
                                safety through shared Zod schemas and reduced API overhead.
                            </p>
                            <p>
                                Fastify's multipart support made streaming large CSV uploads straightforward and reliable. 
                                The UI maintains a clean, professional appearance using Shadcn and Tailwind.
                            </p>
                            <p>
                                This internal tool addresses real operational friction at the company. Employees can 
                                generate inventory PDFs, move special orders from paper to digital workflows, and assign 
                                target margins to product categories to enforce more consistent pricing.
                            </p>
                            <h5 className="font-bold">Tools</h5>
                            <p>Next.js, Fastify, Zod, Shadcn, Tailwind</p>
                        </div>
                    </div>
                    <div>
                        <p>View Repository on <a className="text-blue-400" target="_blank" href="https://github.com/JordanSivils/work_next">Github</a></p>
                    </div>
                </div>
                <div className="flex flex-col gap-1 p-4 border rounded-md ">
                    <div className="flex flex-col md:flex-row-reverse items-center gap-3 ">
                        <div className="flex flex-col gap-2">
                            <Image className="md:block rounded-lg hidden" src="/assets/Charity_Image.png" width={350} height={350} alt="Charity API" />
                            <Image className="block rounded-lg bg-accent-foreground" src="/assets/pipe_flow.png" width={350} height={350} alt="Node Pipeline Diagram" />
                        </div>
                        
                        <div className="flex flex-col max-w-88 gap-2">
                            <h3 className="font-semibold">IRS Charity Data Pipeline and API</h3>
                            <p className="italic text-sm">Highly filterable charity data API built exclusively on U.S. government data</p>
                            <h4 className="underline">Pipeline</h4>
                            <p>
                                A TypeScript-based ingestion pipeline that streams large IRS CSV datasets using fast-csv, Node.js https, and pipeline. 
                                Node Transform streams are used to normalize and validate data as it flows, enabling efficient, low-memory processing at scale.
                            </p>
                            <h4 className="underline">API</h4>
                            <p>
                                An Express-based API designed for deep filtering and sorting across every available IRS charity field. Zod and Prisma enforce 
                                strict validation and query safety. Authentication is handled via Clerk, and Redis is used for rate limiting.
                            </p>
                            <p>
                                The initial public release excludes geospatial queries, but the system is designed to support PostGIS-backed location queries with minimal changes.
                            </p>
                            <h5 className="font-bold">Tools</h5>
                            <p>Express, Prisma, Zod, Redis, Clerk, fast-csv, pg-copy-streams</p>
                        </div>
                    </div>
                    <div className="max-w-88 md:max-w-170">
                        <p>Original version of the API is available on <a className="text-blue-400" target="_blank" href="https://github.com/JordanSivils/irs_api_server">Github</a></p>
                        <p>The ingestion pipeline is private, but im happy to share details or provide a walkthrough if there is interest.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PortfolioSection