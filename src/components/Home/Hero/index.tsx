import Image from "next/image";
import bmw from "../../../../public/image/bmw.jpg"; 

const Hero = () => {
  return (
    <section className={"relative h-[500px]"}>
      <Image
        className={"absolute top-0 left-0 w-full h-full object-cover z-[-1]"}
        src={bmw}
        alt={"Фоновое изображение"}
      />
      <div className={"container py-10"}>
        <h1 className={"text-5xl"}>Тут секция Hero</h1>
      </div>
    </section>
  );
}

export default Hero;