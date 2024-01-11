import { TbPlayerPlay } from "react-icons/tb";
import { TbPlayerSkipBack } from "react-icons/tb";
import { TbPlayerSkipForward } from "react-icons/tb";
import { TbPlayerStop } from "react-icons/tb";
import useMusicPlayer from "../context/useMusicPlayer";
import Marquee from "react-fast-marquee";

const PlayerController = () => {
  const {
    playTrack,
    isPlaying,
    currentTrackName,
    currentTrackIndex,
    playPrevTrack,
    playNextTrack,
  } = useMusicPlayer();

  return (
    <div className="flex flex-col p-4 justify-between w-full h-32 rounded-md">
      <Marquee play={isPlaying} className="select-none">
        {currentTrackName}
      </Marquee>
      <div className="flex justify-center gap-4">
        <TbPlayerSkipBack onClick={playPrevTrack} className="playerButton" />
        <button
          onClick={() => {
            if (currentTrackIndex !== 0 && !currentTrackIndex) return;
            return playTrack(currentTrackIndex);
          }}
        >
          {isPlaying ? (
            <TbPlayerStop className="playerButton" />
          ) : (
            <TbPlayerPlay className="playerButton" />
          )}
        </button>
        <TbPlayerSkipForward onClick={playNextTrack} className="playerButton" />
      </div>
    </div>
  );
};

export default PlayerController;
