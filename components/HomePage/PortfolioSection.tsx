import Image from "next/image"

const PortfolioSection = () => {
    return (
        <>
            <div className="flex justify-center items-center p-3">
                <div className="flex flex-col md:flex-row items-center g-0 p-4 border rounded-md bg-ring gap-4">
                    <Image className="block rounded-lg" src="/assets/me_image.png" width={350} height={350} alt="Website-Photo" />
                    <div className="flex flex-col max-w-80 md:pl-5">
                        <h3 className="font-semibold">Portfolio</h3>
                        <p className="italic text-sm">The good, the bad, and the learning moments.</p>
                        <p>
                            A mix of projects ranging from small freight cost calculators to full-stack
                            applications, APIs, and TypeScript-based ETL pipelines built with Node.js.
                        </p>
                    </div>
                </div>
            </div>
            
        </>
        
    )
}

export default PortfolioSection