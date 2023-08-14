import Image from "next/image";
import backImage from '@/imgs/back.jpg';

export default function Home() {
  return (
    <main className="min-h-screen flex">
      <Image src={backImage} alt={""} width={750} height={750} />
      <header className="w-screen h-14 left-0 top-0 absolute bg-pink-600 bg-opacity-30 rounded-bl rounded-br shadow backdrop-blur-xl"></header>
      <main className="w-11/12 h-4/5 left-[50px] top-[108px] absolute bg-purple-900 bg-opacity-25 rounded-2xl shadow border border-purple-900 border-opacity-0"></main>
    </main>
  );
}