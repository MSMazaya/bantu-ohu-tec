import React from 'react'
import Card from '../components/Card'

export default function register_1() {
  return (
    <div className='flex'>
      
      <div className='bg-white/10 backdrop-blur-lg h-[707px] w-[325px] rounded-xl mt-[105px] ml-[56px] shadow-xl'>
        <div className='pt-10'>
          <div className='ml-12 text-2xl font-semibold'>Registration</div>
          
          <div className='flex flex-row mt-16'>
            <div className='flex flex-col relative'>
              <div className='absolute w-8 h-8 -inset-0.5 blur opacity-75 rounded-full bg-[#C1D75C] text-center ml-[44px]'></div>
              <div className='w-8 h-8 rounded-full bg-[#C1D75C] ml-[44px]'></div>
              <div className='ml-[60px] w-0.5 h-32 bg-[#525926]'></div>
              <div className='w-6 h-6 rounded-full bg-[#C1D75C] ml-12'></div>


            </div>
            <div>
              <div className='ml-12'>Data Diri</div>
              <div className='mt-32 ml-12'>Pembayaran</div>
            </div>
          </div>

  
        </div>
      </div>
      
      <div className='bg-white/10 backdrop-blur-lg  h-[707px] w-[897px] rounded-xl mt-[105px] ml-[56px] shadow-xl'>
        <div className='pt-10 ml-12'>
          <div className='text-2xl font-semibold'>Lengkapi Data Dirimu</div>
          <div className='mt-2'>Lengkapi data diri untuk melakukan finalisasi akunmu.</div>
          <div className='mt-10'>Nama Lengkap</div>
          <input type="text" className='mt-2 w-[535px] h-[52px] rounded-2xl bg-white/20 backdrop-blur-none px-3'/>
          
          <div className='mt-10'>Fakultas</div>
          <div class="mb-3 xl:w-96">
              <select class="form-select appearance-none
                block
                mt-2
                w-[535px]
                h-[52px]
                px-3
                py-1.5

                text-white
                bg-white/20 backdrop-blur-none
                rounded-2xl
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
                  <option selected>Pilih Fakultas</option>
                  <option value="FITB">FITB</option>
                  <option value="FMIPA">FMIPA</option>
                  <option value="FSRD">FSRD</option>
                  <option value="FTMD">FTMD</option>
                  <option value="FTTM">FTTM</option>
                  <option value="FTSL">FTSL</option>
                  <option value="FTI">FTI</option>
                  <option value="SAPPK">SAPPK</option>
                  <option value="SBM">SBM</option>
                  <option value="SF">SF</option>
                  <option value="SITH">SITH</option>
                  <option value="STEI">STEI</option>

              </select>
            </div>

          <div className='mt-10'>Program Studi</div>
          <div className='text-xs font-extralight'>Jika sudah penjurusan</div>
          <input type="text" className='mt-2 w-[535px] h-[52px] px-3 rounded-2xl bg-white/20 backdrop-blur-none'/>
        </div>

        <div className='container px-16 mt-24 flex justify-end'>
          <a href="/register_2" class="px-16 py-4 text-xl font-semibold text-center text-red-900 rounded-lg hover:bg-gradient-to-bl focus:ring-2 focus:outline-none bg-gradient-to-b from-slate-50 to-red md:w-auto">
          LANJUT
          </a>
        </div>
      </div>
    </div>
  )
}
