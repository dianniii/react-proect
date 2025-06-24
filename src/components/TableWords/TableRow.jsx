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

  const isAnyFieldEmpty = !value.english.trim() ||
                          !value.transcription.trim() ||
                          !value.translation.trim();
  // если хотя бы одно поле пустое то кнопка заблокирована

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

  const isEmpty = val => !val.trim();
  // проверка отдельных полей на заполненность для применения стилей

   return isEditing ? (
    <tr className={styles.row}>
      <td className={styles.headerCell}>
        <input type="text"
                value={value.english}
                name={"english"}
                onChange={handleChange} 
                className={isEmpty(value.english)
                                  ? styles.invalid : ''}/>
      </td>
      <td className={styles.headerCell}>
        <input type="text"
                value={value.transcription}
                name={"transcription"}
                onChange={handleChange}
                className={isEmpty(value.transcription)
                                  ? styles.invalid : ''} />
      </td>
      <td className={styles.headerCell}>
        <input type="text"
                value={value.translation}
                name={"translation"}
                onChange={handleChange}
                className={isEmpty(value.translation)
                                  ? styles.invalid : ''}/>
      </td>
      <td className={styles.headerCell}>
        <button className={styles.buttonSave}
                onClick={handleSave}
                disabled={isAnyFieldEmpty}>Save</button>
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
