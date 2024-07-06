import React, { useEffect, useState } from "react";
import styles from "./DashBoard.module.css";
import UserWidget from "../../components/UserWidget";
import WeatherWidget from "../../components/WeatherWidget";
import { fetchWeatherData } from "../../apis/weather";
import NewsWidget from "../../components/NewsWidget";
import { fetchNewsData } from "../../apis/news";
import NotesWidget from "../../components/NotesWidget";
import CountDownWidget from "../../components/CountDownWidget";
import TimerWidget from "../../components/TimerWidget";
// import PromotionPage from "../promotion/PromotionPage";
import { useNavigate } from "react-router-dom";

function DashBoard() {
  const [user, setUser] = useState();
  const [selectedGenres, setSelectedGenres] = useState();
  const navigate = useNavigate();
  const [weather, setWeather] = useState();
  const [news, setNews] = useState();

  const handleBrowse = () => {
    navigate("/movies");
  };

  useEffect(() => {
    setSelectedGenres(JSON.parse(localStorage.getItem("selectedGenres")));
    setUser(JSON.parse(localStorage.getItem("currentUser")));
    fetchWeatherData().then((data) => {
      setWeather(data);
    });
    fetchNewsData().then((data) => {
      console.log(data);
      setNews(data);
    });
  }, []);

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.UserWidget}>
          {user && selectedGenres && (
            <UserWidget
              user={user}
              selectedGenres={selectedGenres}
              type={"small"}
            />
          )}
        </div>
        <div className={styles.WeatherWidget}>
          {weather && <WeatherWidget weather={weather} type={"small"} />}
        </div>
        <div className={styles.TimerWidget}>
          <CountDownWidget />
        </div>
        <div className={styles.NotesWidget}>
          <NotesWidget />
        </div>
        <div className={styles.NewsWidget}>
          {news && <NewsWidget news={news} />}
        </div>
      </div>
      <button onClick={handleBrowse} className={styles.browse}>
        Browse
      </button>
    </div>
  );
}

export default DashBoard;
