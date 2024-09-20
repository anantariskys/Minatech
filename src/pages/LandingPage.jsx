import React from 'react'
import HeroImage from '../assets/amico.png'
const LandingPage = () => {
  return (
    <div className='bg-secondary'>
        <header className='pt-[20vh] container text-center  text-primary space-y-4 flex flex-col items-center justify-center'>
            <h1 className='font-semibold text-6xl text-balance'>Temukan Minat dan Kembangkan Keterampilan Anda di Dunia Teknologi!</h1>
            <p className='text-xl w-4/5 text-balance '>Kami percaya bahwa setiap mahasiswa berhak untuk menemukan dan mengeksplorasi potensi mereka. Kami hadir untuk membantu Anda mengidentifikasi minat dan keterampilan di bidang ilmu komputer.</p>
            <button className='text-secondary bg-primary px-4 py-2 rounded-3xl'>Mulai Sekarang</button>
        </header>
        <section className='container pb-24'>
        <img src={HeroImage} draggable alt="image" className='mx-auto w-2/5' />
        </section>
        <section className='container'>
            <div className='flex items-center gap-[5vw]'>
                <div className='w-1/5 aspect-square bg-black'>

                </div>
                <h2 className='font-semibold text-primary text-5xl'>Selamat datang di MinaTech!</h2>
            </div>
            

        </section>

      landing page
    </div>
  )
}

export default LandingPage
