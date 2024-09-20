import React from "react";
import HeroImage from "../assets/amico.png";
import TentangImage from "../assets/image-2.png";
import LogoWithTitle from '../assets/logowithtitle.png'
const LandingPage = () => {
  return (
    <div className="bg-secondary">
      <header className="pt-[10vh] lg:pt-[20vh] container text-center  text-primary space-y-4 flex flex-col items-center justify-center">
        <h1 className="font-semibold md:text-4xl text-3xl lg:text-6xl text-balance">
          Temukan Minat dan Kembangkan Keterampilan Anda di Dunia Teknologi!
        </h1>
        <p className="md:text-xl text-sm w-4/5 text-balance ">
          Kami percaya bahwa setiap mahasiswa berhak untuk menemukan dan
          mengeksplorasi potensi mereka. Kami hadir untuk membantu Anda
          mengidentifikasi minat dan keterampilan di bidang ilmu komputer.
        </p>
        <button className="text-secondary bg-primary px-4 py-2 rounded-3xl">
          Mulai Sekarang
        </button>
      </header>
      <section className="container pb-24">
        <img src={HeroImage} draggable alt="image" className="mx-auto lg:w-2/5" />
      </section>
      <section className="container space-y-4">
        <div className="flex items-center gap-[5vw]">
          <div className="w-1/6 aspect-square bg-black"></div>
          <h2 className="font-semibold text-primary text-2xl  md:text-5xl">
            Selamat datang di MinaTech!
          </h2>
        </div>
        <div className="flex items-center gap-10 ">
          <div className="w-3/5 font-medium text-xl space-y-5 text-balance text-tertiary">
            <p>
              Platform interaktif yang akan membantu kamu, mahasiswa baru,
              menemukan passion dan mengasah keterampilan di dunia ilmu
              komputer!
            </p>
            <p>
              Siap-siap untuk eksplorasi seru dengan berbagai proyek asyik dari
              backend development hingga cybersecurity.
            </p>
            <p>
              Bukan cuma belajar, kamu juga bisa tahu prospek kerja terkini dan
              mengembangkan skill sesuai kebutuhan industri.
            </p>
            <p>
              Bareng MinaTech, kamu nggak cuma siap menghadapi dunia kerja, tapi
              kamu akan memimpin perubahan!
            </p>
          </div>
          <div className="w-2/5 p-5">
            <img draggable='false' className=" size-full" src={TentangImage} />
          </div>
        </div>
      </section>
      landing page
    </div>
  );
};

export default LandingPage;
