import Image from "next/image"
import Link from "next/link"

const AboutSection = () => {
    return (
        <div className="flex flex-col gap-4 justify-center items-center pt-4">
            <h2 className="underline">About</h2>
            <div className="flex justify-center items-center p-3">
                <div className="flex flex-col md:flex-row items-center g-0 p-4 border rounded-md gap-4">
                    <Image className="block rounded-lg" src="/assets/apple.png" width={350} height={350} alt="Apple Logo" />
                    <div className="flex flex-col max-w-88 md:pl-5">
                        <h3 className="font-semibold">Tech</h3>
                        <p>
                            I think the iPod, subsequent apple products, and their UX is where I first became fascinated with software.
                            I used to think software was only for MIT graduates. Fortunately, I met
                            a software engineer who told me that, while software wasn't easy, anyone
                            who truly wanted to learn could.
                        </p>
                        <p>
                            I started with a Udemy MERN course and was completely lost. My turning
                            point was realizing SQL was conceptually similar to Excel — once that
                            clicked, everything began to unfold from the database outward.
                        </p>
                    </div>
                </div>
            </div>
             <div className="flex justify-center items-center p-3">
                <div className="flex flex-col md:flex-row-reverse items-center g-0 p-4 border rounded-md gap-4">
                    <Image className="block rounded-lg" src="/assets/teton.jpg" width={350} height={350} alt="Teton Mountains" />
                    <div className="flex flex-col max-w-88 md:pl-5">
                        <h3 className="font-semibold">Personal</h3>
                        <p>
                            When I'm not coding, my wife and I are usually road-tripping or hiking.
                            Our craziest trip was driving from North Carolina to New Mexico to 
                            hike five miles through snow, swim in a natural hot spring, hike 5 miles out, then drive home the next day.
                            We take any chance we get to head west toward the mountains.
                        </p>
                    </div>
                </div>
            </div>
        </div>
       
    )
    
}

export default AboutSection