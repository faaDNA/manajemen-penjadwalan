import { useJadwal } from "../context/JadwalContext";
import { useState } from "react";

const KomponenJadwal = ({ jdwl }) => {
  const { hapusJadwal, editJadwal } = useJadwal();
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(jdwl.title);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    if (newTitle.trim() !== "") {
      editJadwal(jdwl.id, newTitle);
      setIsEditing(false);
    }
  };

  return (
    <li>
      {isEditing ? (
        <>
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <button onClick={handleSave}>Simpan</button>
        </>
      ) : (
        <>
          {jdwl.title}
          <button onClick={handleEdit}>Edit</button>
          <button onClick={() => hapusJadwal(jdwl.id)}>Hapus</button>
        </>
      )}
    </li>
  );
};

export default KomponenJadwal;
