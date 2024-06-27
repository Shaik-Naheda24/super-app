import React, { useEffect, useState } from "react";
import styles from "./GenrePage.module.css";
import { genres } from "../../assets/data/genre";
import { colors } from "../../assets/data/colors";
import { IoIosWarning } from "react-icons/io";

function GenrePage() {
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [lengthWarning, setLengthWarning] = useState(false);

  useEffect(() => {
    if (selectedGenres.length >= 3) {
      setLengthWarning(false);
    }
    localStorage.setItem("selectedGenres", JSON.stringify(selectedGenres));
    console.log(localStorage.getItem("selectedGenres"));
  }, [selectedGenres]);

  const bgColors = [
    "#FF5209",
    "#D7A4FF",
    "#148A08",
    "#84C2FF",
    "#902500",
    "#7358FF",
    "#FF4ADE",
    "#E61E32",
    "#6CD061",
  ];

  const removeGenre = (index) => {
    const newGenres = selectedGenres.filter((item) => item !== index);
    setSelectedGenres(newGenres);
  };

  const selectGenre = (index) => {
    if (selectedGenres.includes(index)) return;
    setSelectedGenres((prev) => [...prev, index]);
  };

  const handleNext = () => {
    if (selectedGenres.length < 3) {
      setLengthWarning(true);
    } else {
      setLengthWarning(false);
    }
  };

  return (
    <div className={styles.page}>
      <div className={styles.left}>
        <div className={styles.headers}>
          <h1 className={styles.leftHeader}>Super app</h1>
          <h2 className={styles.leftSubHeader}>
            Choose your <br />
            entertainment <br />
            category
          </h2>
        </div>
        <div className={styles.selected}>
          {selectedGenres.map((item, index) => (
            <div key={item} className={styles.selectedGenre}>
              {genres[item].title}
              <button onClick={() => removeGenre(item)}>X</button>
            </div>
          ))}
        </div>
        {lengthWarning && (
          <div className={styles.warning}>
            <IoIosWarning />
            <div> &nbsp;Minimum 3 categories required</div>
          </div>
        )}
      </div>
      <div className={styles.right}>
        <div className={styles.genreGrid}>
          {genres.map((genre, index) => (
            <div
              key={index}
              className={styles.genreCard}
              onClick={() => selectGenre(index)}
              style={{
                backgroundColor: bgColors[index],
                outline: selectedGenres.includes(index) ? "4pxsolid green" : "",
              }}
            >
              <div className={styles.title}>{genre.title}</div>
              <img src={genre.bgImage} alt="backgroung Image" />
            </div>
          ))}
        </div>
        <button className={styles.button} onClick={handleNext}>
          Next Page
        </button>
      </div>
    </div>
  );
}

export default GenrePage;
