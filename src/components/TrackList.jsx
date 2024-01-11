import tracks from "../assets/data/tracks";
import Track from "./Track";

const TrackList = () => {
  return (
    <div className="w-full h-full rounded-md p-4 space-y-2 max-h-96 overflow-scroll">
      {tracks.map((track, i) => (
        <Track track={track} index={i} key={i} />
      ))}
    </div>
  );
};

export default TrackList;
