import Image from "next/image";

const Hero = () => {
  return (
    <div className="h-screen w-full relative">
      <div className="flex justify-end items-center h-full pr-6">
        <Image src="/potrait.jpg" alt="foto" width={700} height={700} />
      </div>

      <div className="flex flex-col justify-center h-full z-10 absolute top-0  left-20">
        <div className="uppercase text-8xl">A Web Developer</div>
        <div className="uppercase text-8xl pl-32">Who Loves</div>
        <div className="uppercase text-8xl pl-60">Exploring</div>
      </div>
    </div>
  );
};

export default Hero;
