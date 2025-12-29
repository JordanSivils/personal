import Image from "next/image"
import Link from "next/link"

const AboutSection = () => {
    return (
        <div className="flex justify-center items-center p-3">
            <Link href={`/about`}>
                <div className="flex flex-col md:flex-row-reverse items-center g-0 p-4 border rounded-md bg-ring gap-4">
                    <Image className="block rounded-lg" src="/assets/teton.jpg" width={350} height={350} alt="Teton-Mountains" />
                    <div className="flex flex-col max-w-80 md:pl-5">
                        <h3 className="font-semibold">About</h3>
                        <p>
                            When I'm not coding, my wife and I are usually road-tripping or hiking —
                            no corner of the U.S. is truly safe. Most days, though, you'll find me
                            programming for work or for fun, with a few weekend hours reserved for
                            Michigan and Titans football.
                        </p>
                    </div>
                </div>
            </Link>
    </div>
    )
    
}

export default AboutSection