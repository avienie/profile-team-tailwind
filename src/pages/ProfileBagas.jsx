import ProfileCard from "../components/ProfileCard";
import foto from "../assets/bagas.jpeg";

export default function ProfileBagas() {
  const profileData = {
    name: "Bagas Endra Dwitama",
    kelas: "Teknologi Informasi 2025",
    prodi: "Teknologi Informasi",
    domisili: "Kota Malang",
    img: foto,
    desc: `Halo! 👋 Aku Bagas Endra Dwitama, mahasiswa Teknologi Informasi angkatan 2025.
Aku punya passion besar di dunia teknologi 🚀 dan selalu tertantang untuk belajar hal-hal baru.
Selain itu, aku aktif di berbagai kegiatan kampus dan komunitas 💻.
Tujuanku adalah terus berkembang dan memberikan dampak positif di dunia teknologi 🌟.`,
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 p-6">
      <div className="backdrop-blur-lg bg-white/10 rounded-2xl shadow-xl p-6 w-full max-w-md transition-transform duration-300 hover:scale-105">
        
        {/* Header */}
        <div className="text-center mb-4">
          <h1 className="text-2xl font-bold text-white">
            👨‍💻 My Profile
          </h1>
          <p className="text-sm text-white/80">
            Future Tech Enthusiast
          </p>
        </div>

        {/* Profile Card */}
        <ProfileCard {...profileData} />

        {/* Footer / Quote */}
        <div className="mt-4 text-center text-white/70 text-sm italic">
          "Stay curious, keep learning."
        </div>
      </div>
    </div>
  );
}