import React, { useState } from "react";
import styles from "./GenrePage.module.css";
import actionbg from "../../assets/Action.png";
import dramabg from "../../assets/Drama.png";
import romancebg from "../../assets/Romance.png";
import thrillerbg from "../../assets/Thriller.png";
import westernbg from "../../assets/Western.png";
import horrorbg from "../../assets/Horror.png";
import fantasybg from "../../assets/Fantasy.png";
import musicbg from "../../assets/Music.png";
import fictionbg from "../../assets/Fiction.png";

function GenrePage() {
  const [genres, setGenres] = useState([
    {
      title: "Action",
      bgImage: actionbg,
    },
    {
      title: "Drama",
      bgImage: dramabg,
    },
    {
      title: "Romance",
      bgImage: romancebg,
    },
    {
      title: "Thriller",
      bgImage: thrillerbg,
    },
    {
      title: "Western",
      bgImage: westernbg,
    },
    {
      title: "Horror",
      bgImage: horrorbg,
    },
    {
      title: "Fantasy",
      bgImage: fantasybg,
    },
    {
      title: "Music",
      bgImage: musicbg,
    },
    {
      title: "Fiction",
      bgImage: fictionbg,
    },
  ]);
  const [selectedGenres, setSelectedGenres] = useState([1, 3, 5]);

  const removeGenre = (index) => {
    const newGenres = selectedGenres.filter((item) => item != index);
    setSelectedGenres(newGenres);
  };

  return (
    <div className={styles.page}>
      <div className={styles.left}>
        <h2>Super app</h2>
        <h1>Choose your entertainment category</h1>
        <div className={styles.selected}>
          {selectedGenres.map((item) => (
            <div key={item} className={styles.selectedGenre}>
              {genres[item].title}
              <img src={genres[item].bgImage} alt="background Image" />
              <button onClick={() => removeGenre(item)}>X</button>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.right}></div>
    </div>
  );
}

export default GenrePage;
