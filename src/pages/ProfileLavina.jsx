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
      desc="Halo aku Lavina Mavega, mahasiswa Teknologi Informasi angkatan 2025. Aku sangat tertarik dengan dunia teknologi dan selalu bersemangat untuk belajar hal-hal baru di bidang ini. Selain itu, aku juga aktif dalam berbagai kegiatan kampus dan komunitas teknologi. Aku berharap dapat terus berkembang dan memberikan kontribusi positif di dunia teknologi."
    />
  );
}