import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full h-full flex justify-center items-center">
      <Link href="/booster">
        <Image
          src="/images/main.png"
          alt="Main Image"
          width={200}
          height={181}
          className="pixelated"
          draggable={false}
        />
      </Link>
    </main>
  );
}
