import React from 'react';
import { useState } from 'react';
import styles from './TableWords.module.css';


function TableRow({ word }) {
    const [isEditing, setIsEditing] = useState(false);
    const [value, setValue] = useState({
        english: word.english,
        transcription: word.transcription,
        translation: word.translation
    });

    const handleClose = () => {
    setIsEditing(prev => !prev);
    setValue({ ...word });
  };

  const handleSave = () => {
    setIsEditing(prev => !prev);
  };

  const handleEdit = () => {
    setIsEditing(prev => !prev);
  };

  const handleChange = event => {
    setValue(prevValue => ({
      ...prevValue,
      [event.target.name]: event.target.value,
    }));
  };

   return isEditing ? (
    <tr className={styles.row}>
      <td className={styles.headerCell}>
        <input type="text"
                value={value.english}
                name={"english"}
                onChange={handleChange} />
      </td>
      <td className={styles.headerCell}>
        <input type="text"
                value={value.transcription}
                name={"transcription"}
                onChange={handleChange} />
      </td>
      <td className={styles.headerCell}>
        <input type="text"
                value={value.translation}
                name={"translation"}
                onChange={handleChange} />
      </td>
      <td className={styles.headerCell}>
        <button className={styles.buttonSave}
                onClick={handleSave}>Save</button>
        <button className={styles.buttonClose}
                onClick={handleClose}>Close</button>
      </td>
    </tr>
  ) : (
    <tr className={styles.row}>
      <td className={styles.headerCell}>{value.english}</td>
      <td className={styles.headerCell}>{value.transcription}</td>
      <td className={styles.headerCell}>{value.translation}</td>
      <td className={styles.headerCell}>
        <button className={styles.buttonEdit}
                onClick={handleEdit}>Edit</button>
        <button className={styles.buttonDelete}>Delete</button>
      </td>
    </tr>
  );
};

export default TableRow;
