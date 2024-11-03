import Image from "next/image";

const Hero = () => {
  return (
    <div className="h-screen w-full relative">
      <div className="flex justify-end items-center h-full pr-14">
        <Image src="/potrait.jpg" alt="foto" width={620} height={620} />
      </div>

      <div className="flex flex-col justify-center h-full z-10 absolute top-0 left-20 text-8xl font-medium">
        <div className="uppercase ">A Web Developer</div>
        <div className="uppercase pl-32">Who Loves</div>
        <div className="uppercase pl-60">Exploring</div>
      </div>
    </div>
  );
};

export default Hero;
