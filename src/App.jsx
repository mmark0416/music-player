import PlayerController from "./components/PlayerController";
import TrackList from "./components/TrackList";
import MusicPlayerProvider from "./context/MusicPlayerContext";

const App = () => {

  return (
    <MusicPlayerProvider>
      <div className="bg w-[800px] h-[500px] mx-auto mt-32 p-5 rounded flex flex-col justify-between gap-2">
        <TrackList />
        <PlayerController />
      </div>
    </MusicPlayerProvider>
  );
};

export default App;
