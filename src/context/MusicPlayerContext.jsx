import PropTypes from "prop-types";
import { createContext, useState } from "react";
import trackList from "../assets/data/tracks";

export const MusicPlayerContext = createContext([{}, () => {}]);

const MusicPlayerProvider = ({ children }) => {
  const [state, setState] = useState({
    audioPlayer: new Audio(),
    tracks: trackList,
    currentTrackIndex: null,
    isPlaying: false,
  });

  return (
    <MusicPlayerContext.Provider value={[state, setState]}>
      {children}
    </MusicPlayerContext.Provider>
  );
};

MusicPlayerProvider.propTypes = {
  children: PropTypes.element,
};

export default MusicPlayerProvider;
