export default function ProfileCard({ name, kelas, prodi, domisili, img, desc }) {
  return (
    <div className="max-w-xl mx-auto bg-white shadow-lg rounded-2xl p-6 mt-10">
      <img src={img} className="w-32 h-32 rounded-full mx-auto object-cover" />

      <h1 className="text-2xl font-bold text-center mt-4">{name}</h1>
      <p className="text-center text-gray-500">{kelas}</p>

      <div className="mt-4">
        <p><b>Prodi:</b> {prodi}</p>
        <p><b>Domisili:</b> {domisili}</p>
      </div>

      <p className="mt-4 text-gray-700 text-justify">{desc}</p>
    </div>
  );
}