import React from "react";

function CV() {
  return (
    <div className=" text-center "  data-aos="fade-down-left">
        <div>
        <h1 className="text-[25px] font-bold">Curriculum Vitae</h1>   
         <br />
         <div className='flex bg-purple-100 mx-32 gap-4 p-4'>
         <img className='w-72' src='https://www.kibrispdr.org/data/399/gambar-kartun-wanita-hijab-cantik-13.jpg' />
        <div className="text-left mt-14">
          <h2 className="text-[20px] text-purple-500"><i class="fas fa-book"></i> Data Pribadi</h2>
          <hr />
          <p>Nama : Melyana Hasya D</p>
          <p>lahir : 5 Desember 2006</p>
          <p>Alamat : Kab. Kendal</p>
          <p>Agama : Islam</p>
          <p>No Hp : 09954167829084</p>
          <p>Email : @gmailMeyanaha</p>
        </div>
        <br />
        <div  className="text-left mt-14">
          <h2 className="text-[20px] text-purple-500"><i class="fas fa-graduation-cap"></i> Pendidikan</h2>
          <hr />      
          <p>SDN 1 Weleri (2018)</p>
          <p>MTs 1 Semarang (2020)</p>
          <p>SMK Bina Nusantara (2023)</p>
        </div>
        <br />
    
        <div  className="text-left mt-14">
        <h2 className="text-[20px] text-purple-500"><i class="fas fa-building"></i> Pengalaman</h2>
        <hr />
          <p>Osis minat bakat</p>
          <p>Humas Kesenian Borcele</p>
          <p>Pemeran utama drama </p>
          <p>Mengatur budget kelas</p>
        </div>
        <br/>
        <div  className="text-left mt-14">
        <h2 className="text-[20px] text-purple-500"><i class="fas fa-hashtag"></i> Sosmed</h2>
        <hr />
        <p><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"> <i class="fab fa-instagram"></i> @asyamd</a></p>  
        <p><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"> <i class="fab fa-facebook"></i> asyamdrp</a></p> 
        <p><a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">   <i class="fab fa-twitter"></i> asyamdrplil</a></p>
        </div>
          </div>
          </div>
    </div>
     
    
  );
}

export default CV;
