import ProfileCard from "../components/ProfileCard";
import foto from "../assets/lavina.jpeg";

export default function ProfileLavina() {
  return (
    <ProfileCard
      name="Lavina Mavega"
      kelas="Teknologi Informasi 2025"
      prodi="Teknologi Informasi"
      domisili="Kota Malang"
      img={foto}
      desc="Hi, aku Zee, salah satu anggota tim Lavina. Aku suka banget sama teknologi, terutama yang berhubungan dengan pengembangan web. Selain itu, aku juga suka banget sama musik dan traveling. Aku berharap bisa belajar banyak hal baru di tim ini dan bisa berkontribusi untuk proyek-proyek yang akan datang!"
    />
  );
}