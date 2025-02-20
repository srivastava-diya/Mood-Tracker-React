import { useState } from 'react' //named export use {} example  { useState }
import reactLogo from './assets/react.svg' //When importing a default export, we don’t use {}
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let[mood , setMood] = useState("");
  const [bgImage, setBgImage] = useState("");

  const moods = {
    happy: "https://mrwallpaper.com/images/high/aesthetic-macbook-sunflower-field-69wcjbc2ihj5jkla.webp",
    sad: "https://wallpaper.dog/large/20546663.jpg",
    excited: "https://wallpapers.com/images/hd/aesthetic-astronaut-flower-field-laptop-4ndqwiauwee5jpze.jpg",
    tired: "https://64.media.tumblr.com/5c2c96924aab2f773640271838cf32c8/tumblr_owl96uA5F01vhmslwo1_1280.png",
    angry: "https://www.pixel4k.com/wp-content/uploads/2024/03/anger-art-4k_1710785543-2048x1152.jpg"
  }
  function handleMoodChange(newMood) {
    setMood(newMood);
    setBgImage(moods[newMood]); 
  }


  return(
    <div className="container" style={{ backgroundImage: `url(${bgImage})` ,backgroundSize: "cover", backgroundPosition: "center", height: "100vh", transition: "0.8s ease-in-out" }}>
      <h1>MOOD TRACKER</h1>
      <h2>How are you feeling right now?</h2>
      <h2>{mood}</h2>
      <div className="moods">
        <button onClick={() => handleMoodChange("happy")}>HAPPY 😊</button>
        <button onClick={() => handleMoodChange("sad")}>SAD 😢</button>
        <button onClick={() => handleMoodChange("excited")}>EXCITED 🤩</button>
        <button onClick={() => handleMoodChange("tired")}>TIRED 😴</button>
        <button onClick={() => handleMoodChange("angry")}>ANGRY 😠</button>
      </div>
      <div className="reset">
        <button onClick={() => { setMood(""); setBgImage(""); }}>RESET</button>
      </div>
    </div>
  );
}

export default App
