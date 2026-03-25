// About section

export default function About(){
    return(
        <section id="about" className="flex flex-row items-center gap-12 px-24 py-20 pt-32 bg-[#E4E4E4] overflow-hidden">
            <div className="flex-1">
                <h1 className="text-4xl md:text-5xl mb-12 text-center text-gray-900">About Me</h1>
                <p className="text-lg leading-relaxed">
                    I'm a computer science major at the University of Florida. Through my studies, I’ve developed a strong foundation in full-stack development, networking, and machine learning. I’m especially passionate about the intersection of math and programming, and I enjoy exploring problems that bring the two together. I’ve always loved math, and being able to incorporate or explore mathematical concepts in my work never fails to put a smile on my face.<br></br><br></br>
                    My hobbies outside of coding are anything and everything music. I can play three instruments, and have been lucky enough to see over 20 concerts so far! My favorite bands at the moment are Geese, Wednesday, and Pavement- but I really do enjoy all music.
                </p>
            </div>
            <div className="flex-1 flex justify-center">
                <img src="/IMG_5836.jpg" className="w-1/2 h-auto object-cover rounded-lg shadow-xl dark:shadow-gray-800" />
            </div>
        </section>
    )
}