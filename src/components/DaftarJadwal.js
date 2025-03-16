import { useJadwal } from "../context/JadwalContext";
import KomponenJadwal from "./KomponenJadwal";

const DaftarJadwal = () => {
  const { jadwal, loading } = useJadwal();

  return (
    <div>
      <h2>Daftar Jadwal (Dari API)</h2>
      {loading ? <p>Loading...</p> : (
        <ul>
          {jadwal.map((jdwl) => (
            <KomponenJadwal key={jdwl.id} jdwl={jdwl} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default DaftarJadwal;
