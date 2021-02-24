import {useState, useEffect} from 'react';
import Player from './components/Player';


function App() {
  const [songs] = useState([
  { 
    title: "One Kiss",
    artist: "Dua Lipa & Calvin Harris",
    img_src: "./images/oneKiss.jpg",
    src: "./music/oneKiss.mp3"
    },
    {
    title: "Fine Line",
    artist: "Mabel & Not3s",
    img_src: "./images/fineline.jpg",
    src: "./music/fineline.mp3"
    },
   {
    title: "Friends",
    artist: "Justin Bieber & BloodPop",
    img_src: "./images/friends.jpg",
    src: "./music/friends.mp3"
    },
    {
    title: "Break The Glass",
    artist: "David Guetta & Sia",
    img_src: "./images/flames.jpg",
    src: "./music/flames.mp3"
    },
   {
    title: "Just The Way You Are",
    artist: "Bruno Mars",
    img_src: "./images/justTheWayYouAre.jpg",
    src: "./music/justTheWayYouAre.mp3"
   },
   {
    title: "She Will Be Loved",
    artist: "Maroon 5",
    img_src: "./images/sheWillBeLoved.jpg",
    src: "./music/sheWillBeLoved.mp3"
   },
   {
    title: "No More Tears Left To Cry",
    artist: "Ariana Grande",
    img_src: "./images/noMoreTearsLeftToCry.png",
    src: "./music/noMoreTearsLeftToCry.mp3"
   },
   { 
    title: "New Rules",
    artist: "Dua Lipa",
    img_src: "./images/newRules.png",
    src: "./music/newRules.mp3"
   },
   {
    title: "Just The Way You Are",
    artist: "Bruno Mars",
    img_src: "./images/justTheWayYouAre.jpg",
    src: "./music/justTheWayYouAre.mp3"
   },
   {
    title: "She Will Be Loved",
    artist: "Maroon 5",
    img_src: "./images/sheWillBeLoved.jpg",
    src: "./music/sheWillBeLoved.mp3"
   }
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);

  return (
    <div className="App">
      <Player 
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={songs}
      />
    </div>
  );
}

export default App;
