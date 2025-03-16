import { createContext, useState, useEffect, useContext } from "react";

const JadwalContext = createContext();

export const JadwalGlobal = ({ children }) => {
  const [jadwal, setJadwal] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch data dari API saat pertama kali dijalankan
  useEffect(() => {
    console.log("Mengambil data dari API...");
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => {
        setJadwal(data.slice(0, 10)); // Ambil 10 data pertama
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error mengambil data:", error);
        setLoading(false);
      });
  }, []);

  // Tambah tugas baru
  const tambahJadwal = (tugas) => {
    if (!tugas || typeof tugas !== "string") return;
    const newTask = { id: Date.now(), title: tugas.trim() };
    setJadwal([...jadwal, newTask]);
  };

  // Hapus tugas berdasarkan id
  const hapusJadwal = (id) => {
    setJadwal(jadwal.filter((jdwl) => jdwl.id !== id));
  };

  // Edit tugas berdasarkan id
  const editJadwal = (id, newTitle) => {
    setJadwal(
      jadwal.map((jdwl) =>
        jdwl.id === id ? { ...jdwl, title: newTitle.trim() } : jdwl
      )
    );
  };

  return (
    <JadwalContext.Provider value={{ jadwal, tambahJadwal, hapusJadwal, editJadwal, loading }}>
      {children}
    </JadwalContext.Provider>
  );
};

export const useJadwal = () => useContext(JadwalContext);
