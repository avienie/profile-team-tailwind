import ProfileCard from "../components/ProfileCard";
import foto from "../assets/laudy.jpeg";

export default function ProfileLavina() {
  return (
    <ProfileCard
      name="Laudy Sintya Bella"
      kelas="Teknologi Informasi 2025"
      prodi="Teknologi Informasi"
      domisili="Kota Malang"
      img={foto}
      desc="Halo aku Laudy Sintya Bella, mahasiswa Teknologi Informasi angkatan 2025. Aku sangat tertarik dengan dunia teknologi dan selalu bersemangat untuk belajar hal-hal baru di bidang ini."
      
      socials={[
        { label: "Instagram", value: "@laudy.dev" },
        { label: "Email", value: "laudy@gmail.com" },
      ]}

      software={[
        "VS Code",
        "Figma",
        "Canva",
        "Microsoft Office"
      ]}

      hardSkills={["HTML", "CSS", "JavaScript", "React", "Tailwind"]}
      softSkills={["Teamwork", "Communication", "Problem Solving"]}
    />
  );
}