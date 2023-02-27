import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

export default function Home() {
  return (
    <main
    // className="bg-cover bg-center h-screen"
    // style={{ backgroundImage: "url('/rora-bg.png')" }}
    >
      <nav className="fixed flex justify-between py-6 w-full lg:px-48 md:px-12 px-4 content-center bg-secondary z-10">
        <div className="flex items-center">
          <Image src="/Rora.svg" alt="Logo" width={123} height={59} />
        </div>

        <div className="font-montserrat hidden md:block">
          <Link href="https://ihg6ilh95l1.typeform.com/to/t4Xx5jfU">
            <button className="py-2 px-4 text-white bg-black rounded-3xl">
              Join the wait list
            </button>
          </Link>
        </div>
      </nav>
      <div className="relative h-screen">
        <Image
          className="object-cover w-full h-full"
          src="/rora-bg.png"
          alt="Rora"
          width={1280}
          height={832}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black bg-opacity-60">
          <section className="pt-24 md:mt-0 md:h-screen flex flex-col justify-center text-center md:text-left md:flex-row md:justify-between md:items-center lg:px-48 md:px-12 px-4 bg-secondary">
            <div className="md:flex-1 md:mr-10">
              <h1 className="font-pt-serif text-5xl font-bold mb-7 text-white">
                Stay
                <span className="bg-underline1 bg-left-bottom bg-no-repeat pb-2 bg-100% font-inter font-bold text-4xl leading-14 text-yellow-400">
                  Alert
                </span>
                , Stay
                <span className="bg-underline1 bg-left-bottom bg-no-repeat pb-2 bg-100% font-inter font-bold text-4xl leading-14 text-yellow-400">
                  Safe
                </span>
              </h1>
              <p className="font-pt-serif font-normal mb-7 text-white text-xl">
                Empowering people with the tools they need to protect themselves
                and their loved ones — whether they’re walking home from work or
                commuting to school.
              </p>
              <div className="font-montserrat">
                <p className="text-gray-400 text-lg pb-3">
                  Know when we are live!
                </p>
                <Link href="https://ihg6ilh95l1.typeform.com/to/t4Xx5jfU">
                  <button className="bg-red-600 px-6 py-4 rounded-lg border-2 border-red-600 border-solid text-white mr-2 mb-2">
                    Join the wait list
                  </button>
                </Link>
                <p className="text-white text-xs">
                  By sharing your email, you agree to our Subscriber Agreement &
                  Privacy Policy
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* <div classNameName="absolute inset-0 bg-gradient-to-t from-black to-transparent bg-opacity-75 z-0"></div> */}
    </main>
  );
}
