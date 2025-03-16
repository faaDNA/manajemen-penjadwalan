import { useState } from "react";
import { useJadwal } from "../context/JadwalContext";

const TambahJadwal = () => {
  const [tugas, setTugas] = useState("");
  const { tambahJadwal } = useJadwal();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (tugas.trim() !== "") {
      tambahJadwal(tugas);
      setTugas("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={tugas}
        onChange={(e) => setTugas(e.target.value)}
        placeholder="Tambah Jadwal..."
      />
      <button type="submit">Tambah</button>
    </form>
  );
};

export default TambahJadwal;
