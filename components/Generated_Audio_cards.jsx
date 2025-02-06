import React, { useRef, useState, useEffect } from 'react';

const CustomAudioPlayer = ({ src, title, isSelected, onSelect, onPlay }) => {
  const audioRef = useRef(null);

  const handlePlay = () => {
    if (audioRef.current) {
      onPlay(audioRef.current);
    }
  };

  return (
    <div className="flex flex-col items-center p-4 bg-[#6A3A9F] rounded-lg shadow-lg">
      <h3 className="mb-2 text-lg font-semibold text-white bg-[#6A3A9F]">{title}</h3>
      <div className="w-full max-w-md bg-white rounded-full shadow-inner">
        <audio
          ref={audioRef}
          src={src}
          className="w-full bg-[#6A3A9F]"
          controls
          onPlay={handlePlay}
        ></audio>
      </div>
      {/* <label className="inline-flex items-center mt-4 cursor-pointer bg-[#6A3A9F]">
        <input
          type="checkbox"
          className="sr-only peer"
          checked={isSelected}
          onChange={onSelect}
        />
        <div className="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600 "></div>
        <span className="ms-3 text-sm font-medium text-gray-900 dark:text-white bg-[#6A3A9F]">
          Use this audio sample
        </span>
      </label> */}
    </div>
  );
};

const Generated_Audio_cards = ({ audioData }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [currentAudio, setCurrentAudio] = useState(null);
  const [audioSamples, setAudioSamples] = useState([]);

//   useEffect(() => {
//     const storedAudio = JSON.parse(localStorage.getItem('generated_audio_for_video')) || [];
//     const formattedSamples = storedAudio.map((src, index) => ({
//       src,
//       title: `Sample ${index + 1}`,
//     }));
//     setAudioSamples(formattedSamples);
//     console.log("formattedSamples",formattedSamples)
//   }, []);



useEffect(() => {
    // Stop current audio when component unmounts or new data arrives
    return () => {
      if (currentAudio) {
        currentAudio.pause();
        setCurrentAudio(null);
      }
    };
  }, [audioData]);

  useEffect(() => {
    // Reset states when new audio data arrives
    setSelectedIndex(null);
    setCurrentAudio(null);

    // Get audio data either from props or localStorage
    const audioSource = audioData || JSON.parse(localStorage.getItem('generated_audio_for_video')) || [];
    
    // Format the audio samples
    const formattedSamples = Array.isArray(audioSource) 
      ? audioSource.map((src, index) => ({
          src,
          title: `Sample ${index + 1}`,
        }))
      : [];
    
    setAudioSamples(formattedSamples);
    console.log("formattedSamples", formattedSamples);
  }, [audioData]); // Only run when audioData prop changes

  const handleSelect = (index) => {
    setSelectedIndex(index);
    console.log(index)
  };

  const handlePlay = (audio) => {
    if (currentAudio && currentAudio !== audio) {
      currentAudio.pause();
    }
    setCurrentAudio(audio);

  };

  return (
    <div className="container mx-auto my-8 bg-[#D9D9D9]">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 bg-[#D9D9D9]">
        {audioSamples.map((sample, index) => (
          <CustomAudioPlayer
            key={index}
            src={sample.src}
            title={sample.title}
            isSelected={selectedIndex === index}
            onSelect={() => handleSelect(index)}
            onPlay={handlePlay}
          />
        ))}
      </div>
    </div>
  );
};

export default Generated_Audio_cards;






