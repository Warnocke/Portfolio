// Greeting section
import * as SS from "./ui/shooting-stars";
import * as SB from "./ui/stars-background";

export default function Greeting(){
    return (
        <div id="greeting" className="relative w-full h-screen bg-black overflow-hidden">
            <SB.StarsBackground className="absolute inset-0 w-full h-full" />
            <SS.ShootingStars className="absolute inset-0 w-full h-full" />
            <div className="absolute inset-0 flex items-center justify-center">
                <h1 className="text-white text-7xl font-bold">Hi, I'm Evan</h1>
            </div>
        </div>
    )
} 