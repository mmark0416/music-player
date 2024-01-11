import { useContext } from "react";
import { MusicPlayerContext } from "./MusicPlayerContext";

const useMusicPlayer = () => {
  const [state, setState] = useContext(MusicPlayerContext);

  const playTrack = (index) => {
    if (index === state.currentTrackIndex) {
      togglePlayer();
    } else {
      state.currentPlayer = index;
      state.audioPlayer.pause();
      state.audioPlayer = new Audio(state.tracks[index].file);
      state.audioPlayer.play();
      setState((prev) => ({
        ...prev,
        currentTrackIndex: index,
        isPlaying: true,
      }));
    }
  };

  const togglePlayer = () => {
    if (state.isPlaying) {
      state.audioPlayer.pause();
    } else {
      state.audioPlayer.play();
    }
    setState((prev) => ({ ...prev, isPlaying: !state.isPlaying }));
  };

  const playPrevTrack = () => {
    const prevIndex = state.currentTrackIndex - 1;
    const newIndex = prevIndex < 0 ? state.tracks.length - 1 : prevIndex;
    playTrack(newIndex);
  };

  const playNextTrack = () => {
    const nextIndex = state.currentTrackIndex + 1;
    const newIndex = nextIndex > state.tracks.length - 1 ? 0 : nextIndex;
    playTrack(newIndex);
  };

  return {
    playTrack,
    playPrevTrack,
    playNextTrack,
    currentTrackName:
      state.currentTrackIndex !== null &&
      state.tracks[state.currentTrackIndex].name,
    isPlaying: state.isPlaying,
    currentTrackIndex: state.currentTrackIndex,
  };
};

export default useMusicPlayer;
