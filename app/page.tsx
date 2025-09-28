import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <div className="bg-black">
        <div className="w-full top-0 fixed py-8 mx-auto flex justify-center">
          <div className="py-6 px-16 rounded-full bg-green-600 flex justify-start space-x-12">
            <Link href={"/"} className="text-white hover:text-green-800">
              Beranda
            </Link>
            <Link href={"/"} className="text-white hover:text-green-800">
              Program
            </Link>
            <Link href={"/"} className="text-white hover:text-green-800">
              Blog
            </Link>
            <Link href={"/"} className="text-white hover:text-green-800">
              Tentang Kami
            </Link>
            <Link href={"/"} className="text-white hover:text-green-800">
              Kontak
            </Link>
          </div>
        </div>
        <div className="space-y-8 grid grid-cols-1 place-items-center text-center pt-48">
          <div>
            <h1 className="text-white text-6xl font-bold">
              Journey to Discover Your Path
            </h1>
          </div>
          <div className="w-2xl">
            <p className="text-white text-lg font-light">
              Belajar tak lagi terbatas di ruang kelas. Kini, dunia adalah
              sekolah Anda. Bersama CozyJourney, mari jelajahi dunia dan temukan
              arah Anda
            </p>
          </div>
        </div>
        <div className="py-28 flex justify-center">
          <div className="bg-white py-8 px-8 w-8/12 rounded-3xl">
            <div className="space-y-1">
              <h3 className="text-xl">Cari Program</h3>
              <p className="text-sm font-light text-gray-500">
                Temukan program yang sesuai dengan kebutuhan pendidikan Anda
              </p>
            </div>
            <form className="grid grid-cols-4 gap-4 py-10">
              <div className="w-full space-y-2">
                <h3 className="text-lg text-gray-500">Tujuan</h3>
                <div className="px-4 py-2 border border-gray-200 rounded-sm">
                  <select className="w-full">
                    <option>Pilih Tujuan</option>
                    <option>New Mexico</option>
                    <option>Missouri</option>
                    <option>Texas</option>
                  </select>
                </div>
              </div>
              <div className="w-full space-y-2">
                <h3 className="text-lg text-gray-500">Durasi Program</h3>
                <div className="px-4 py-2 border border-gray-200 rounded-sm">
                  <select className="w-full">
                    <option>Pilih Durasi</option>
                    <option>2 Minggu</option>
                    <option>1 Bulan</option>
                  </select>
                </div>
              </div>
              <div className="w-full space-y-2">
                <h3 className="text-lg text-gray-500">Tanggal Mulai</h3>
                <div className="px-4 py-2 border border-gray-200 rounded-sm">
                  <input type="date" className="w-full"></input>
                </div>
              </div>
              <div className="w-full space-y-2">
                <h3 className="text-lg text-gray-500">Peserta</h3>
                <div className="px-4 py-2 border border-gray-200 rounded-sm">
                  <select className="w-full">
                    <option>Jumlah Peserta</option>
                    <option>5-10 Orang</option>
                    <option>20 Orang</option>
                    <option>30 Orang</option>
                  </select>
                </div>
              </div>
            </form>
            <div className="w-full flex justify-center gap-4">
              <button
                className="bg-green-600 focus:shadow-outline focus:outline-none text-white font-bold py-4 px-8 rounded"
                type="button"
              >
                Cari Program
              </button>
              <button
                className="focus:shadow-outline focus:outline-none text-black font-bold py-4 px-8 rounded"
                type="button"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center py-20 space-y-8">
        <h2 className="font-bold text-5xl">
          Membangun Jembatan
          <span className="font-bold text-5xl text-green-700">
            Pendidikan Global
          </span>
        </h2>
        <p className="font-light text-sm text-gray-400 mx-80">
          Kami adalah lembaga pendidikan terpercaya yang telah memfasilitasi
          ribuan siswa untuk menempuh pendidikan di negara Internasional Arab
          Saudi, Jepang, Korea Selatan Dan Australi .
        </p>
      </div>
      <div className="grid grid-cols-2 gap-6 px-8 py-10">
        <div className="w-full py-52 bg-[url(/background-about.jpg)] bg-cover rounded-xl"></div>
        <div className="w-full py-10 space-y-10 px-8">
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 bg-green-700 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <span className="text-white font-bold text-sm">1</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Pengalaman 5+ Tahun
              </h3>
              <p className="text-muted-foreground">
                Lebih dari 15 tahun pengalaman dalam memfasilitasi program
                pertukaran pelajar ke negara-negara Muslim dengan tingkat
                kepuasan 98%.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 bg-green-700 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <span className="text-white font-bold text-sm">2</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Program Komprehensif
              </h3>
              <p className="text-muted-foreground">
                Mulai dari persiapan bahasa, bimbingan akademik, hingga
                akomodasi selama di negara tujuan.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 bg-green-700 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <span className="text-white font-bold text-sm">3</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Pendamping Profesional dan Berpengalaman
              </h3>
              <p className="text-muted-foreground">
                Selama program anda akan di dampingi team kami yang
                berpengalaman dan profesional
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 bg-green-700 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <span className="text-white font-bold text-sm">4</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Dukungan Berkelanjutan
              </h3>
              <p className="text-muted-foreground">
                Jaringan alumni yang kuat dan dukungan karir setelah
                menyelesaikan program untuk memastikan kesuksesan jangka
                panjang.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-start gap-6 px-8 py-10">
        <div className="bg-black py-55 px-55"></div>
        <div className="bg-black py-55 px-55"></div>
        <div className="bg-black py-55 px-55"></div>
      </div>
      <div className="text-center py-20 space-y-8">
        <h2 className="font-bold text-5xl">
          Pilih Program Pertukaran
          <br />
          <span className="font-bold text-5xl text-green-700">
            Terbaik Untuk Anda
          </span>
        </h2>
        <p className="font-light text-sm text-gray-400 mx-96">
          Pilih program yang sesuai dengan tujuan pendidikan dan spiritual Anda.
          Setiap program dirancang untuk memberikan pengalaman transformatif.
        </p>
      </div>
      <div className="flex justify-start gap-6 px-8 py-10">
        <div className="w-full rounded-xl border border-gray-200">
          <div className="w-full h-48 bg-green-600 rounded-t-xl"></div>
          <div className="py-4 px-6">
            <h3 className="font-bold text-xl">Program Intensif Mekkah</h3>
          </div>
          <div className="flex gap-6 px-6">
            <div>
              <p className="text-xs">Mekkah, Saudi Arabia</p>
            </div>
            <div>
              <p className="text-xs">2 Minggu</p>
            </div>
            <div>
              <p className="text-xs">15-20 Peserta</p>
            </div>
          </div>
          <div className="px-6 py-6">
            <p className="text-base font-light text-gray-500">
              Program intensif 2 minggu di Makkah dengan fokus pada studi Islam,
              bahasa Arab, dan pengalaman spiritual di Masjidil Haram.
            </p>
          </div>
          <div className="px-6 py-4">
            <h3>Highlight Program:</h3>
            <div className="flex flex-wrap gap-2 py-5">
              <span className="text-xs rounded-full border border-gray-400 px-2 py-1">
                Kelas Bahasa Arab
              </span>
              <span className="text-xs rounded-full border border-gray-400 px-2 py-1">
                Studi Quran
              </span>
              <span className="text-xs rounded-full border border-gray-400 px-2 py-1">
                Ziarah
              </span>
              <span className="text-xs rounded-full border border-gray-400 px-2 py-1">
                Sertifikat
              </span>
            </div>
          </div>
          <div className="flex gap-3 px-4 py-2">
            <Link
              className="bg-green-600 py-3 px-22 rounded-md text-white"
              href={""}
            >
              Daftar Sekarang
            </Link>
            <Link
              className="px-6 py-3 rounded-md border border-gray-300"
              href={""}
            >
              Detail
            </Link>
          </div>
        </div>
        <div className="w-full rounded-xl border border-gray-200">
          <div className="w-full h-48 bg-green-600 rounded-t-xl"></div>
          <div className="py-4 px-6">
            <h3 className="font-bold text-xl">Program Intensif Mekkah</h3>
          </div>
          <div className="flex gap-6 px-6">
            <div>
              <p className="text-xs">Mekkah, Saudi Arabia</p>
            </div>
            <div>
              <p className="text-xs">2 Minggu</p>
            </div>
            <div>
              <p className="text-xs">15-20 Peserta</p>
            </div>
          </div>
          <div className="px-6 py-6">
            <p className="text-base font-light text-gray-500">
              Program intensif 2 minggu di Makkah dengan fokus pada studi Islam,
              bahasa Arab, dan pengalaman spiritual di Masjidil Haram.
            </p>
          </div>
          <div className="px-6 py-4">
            <h3>Highlight Program:</h3>
            <div className="flex flex-wrap gap-2 py-5">
              <span className="text-xs rounded-full border border-gray-400 px-2 py-1">
                Kelas Bahasa Arab
              </span>
              <span className="text-xs rounded-full border border-gray-400 px-2 py-1">
                Studi Quran
              </span>
              <span className="text-xs rounded-full border border-gray-400 px-2 py-1">
                Ziarah
              </span>
              <span className="text-xs rounded-full border border-gray-400 px-2 py-1">
                Sertifikat
              </span>
            </div>
          </div>
          <div className="flex gap-3 px-4 py-2">
            <Link
              className="bg-green-600 py-3 px-22 rounded-md text-white"
              href={""}
            >
              Daftar Sekarang
            </Link>
            <Link
              className="px-6 py-3 rounded-md border border-gray-300"
              href={""}
            >
              Detail
            </Link>
          </div>
        </div>
        <div className="w-full rounded-xl border border-gray-200">
          <div className="w-full h-48 bg-green-600 rounded-t-xl"></div>
          <div className="py-4 px-6">
            <h3 className="font-bold text-xl">Program Intensif Mekkah</h3>
          </div>
          <div className="flex gap-6 px-6">
            <div>
              <p className="text-xs">Mekkah, Saudi Arabia</p>
            </div>
            <div>
              <p className="text-xs">2 Minggu</p>
            </div>
            <div>
              <p className="text-xs">15-20 Peserta</p>
            </div>
          </div>
          <div className="px-6 py-6">
            <p className="text-base font-light text-gray-500">
              Program intensif 2 minggu di Makkah dengan fokus pada studi Islam,
              bahasa Arab, dan pengalaman spiritual di Masjidil Haram.
            </p>
          </div>
          <div className="px-6 py-4">
            <h3>Highlight Program:</h3>
            <div className="flex flex-wrap gap-2 py-5">
              <span className="text-xs rounded-full border border-gray-400 px-2 py-1">
                Kelas Bahasa Arab
              </span>
              <span className="text-xs rounded-full border border-gray-400 px-2 py-1">
                Studi Quran
              </span>
              <span className="text-xs rounded-full border border-gray-400 px-2 py-1">
                Ziarah
              </span>
              <span className="text-xs rounded-full border border-gray-400 px-2 py-1">
                Sertifikat
              </span>
            </div>
          </div>
          <div className="flex gap-3 px-4 py-2">
            <Link
              className="bg-green-600 py-3 px-22 rounded-md text-white"
              href={""}
            >
              Daftar Sekarang
            </Link>
            <Link
              className="px-6 py-3 rounded-md border border-gray-300"
              href={""}
            >
              Detail
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center mt-10">
        <Link
          className="border border-green-600 focus:shadow-outline focus:outline-none text-green-600 font-bold py-4 px-8 rounded hover:bg-green-600 hover:text-white"
          type="button"
          href={""}
        >
          Lihat Semua Program
        </Link>
      </div>
      <div className="text-center py-20 space-y-8 mt-30">
        <h2 className="font-bold text-5xl">
          Kisah Inspiratif
          <br />
          <span className="font-bold text-5xl text-green-700">Para Alumni</span>
        </h2>
        <p className="font-light text-sm text-gray-400 mx-96">
          Dengarkan pengalaman nyata dari para mahasiswa yang telah merasakan
          transformasi spiritual dan akademik melalui program pertukaran kami
        </p>
      </div>
      <div className="grid grid-cols-2 gap-6 px-8 py-10">
        <div className="bg-black py-55 px-55"></div>
        <div className="bg-black py-55 px-55"></div>
        <div className="bg-black py-55 px-55"></div>
        <div className="bg-black py-55 px-55"></div>
      </div>
      <div className="text-center py-20 space-y-8">
        <h2 className="font-bold text-5xl">Info Dan Berita</h2>
        <p className="font-light text-sm text-gray-400 mx-96">
          Temukan tips, pengalaman, dan panduan terkini seputar pendidikan dan
          program exchange internasional
        </p>
      </div>
      <div className="flex justify-start gap-6 px-8 py-10">
        <div className="bg-black py-55 px-55"></div>
        <div className="bg-black py-55 px-55"></div>
        <div className="bg-black py-55 px-55"></div>
      </div>
      <div className="text-center py-20 space-y-8">
        <h2 className="font-bold text-5xl">
          Ingin Menjadi Bagian dari Kisah Sukses Selanjutnya?
        </h2>
        <p className="font-light text-sm text-gray-400 mx-96">
          Bergabunglah dengan ribuan mahasiswa lainnya yang telah merasakan
          transformasi hidup melalui program pertukaran pelajar kami
        </p>
        <div className="w-full flex justify-center gap-4">
          <button
            className="bg-green-600 focus:shadow-outline focus:outline-none text-white font-bold py-4 px-8 rounded"
            type="button"
          >
            Konsultasi Gratis
          </button>
        </div>
      </div>

      <div className="bg-green-700 w-full py-52"></div>
    </div>
  );
}
