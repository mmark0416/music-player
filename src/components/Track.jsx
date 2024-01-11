import { TbPlayerPlay } from "react-icons/tb";
import { TbPlayerStop } from "react-icons/tb";
import PropTypes from "prop-types";
import useMusicPlayer from "../context/useMusicPlayer";

const Track = ({ track, index }) => {
  const { playTrack, isPlaying, currentTrackName } =
    useMusicPlayer();

  return (
    <div className="track-color rounded-md p-4 flex gap-4 items-center">
      <button onClick={() => playTrack(index)}>
        {currentTrackName === track.name && isPlaying ? (
          <TbPlayerStop className="playerButton" />
        ) : (
          <TbPlayerPlay className="playerButton" />
        )}
      </button>
      <p>{track.name}</p>
    </div>
  );
};

Track.propTypes = {
  track: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    file: PropTypes.string,
  }),
  index: PropTypes.number,
};

export default Track;
