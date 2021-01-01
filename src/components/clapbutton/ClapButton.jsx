import React, { useState, useEffect } from 'react';
import firebase from 'gatsby-plugin-firebase';

const ClapButton = ({ slug }) => {
  const [clapsCounter, setClapsCounter] = useState(0);
  const [newClaps, setNewClaps] = useState(0);

  const incrementClapsCounter = () => {
    setClapsCounter(prevState => prevState + 1);
    setNewClaps(prevState => prevState + 1);

    // if the document doesn't exist yet, it will create it
    firebase
      .firestore()
      .collection('claps')
      .doc(slug)
      .set({ claps: clapsCounter + 1 }) // Be careful state is updated once outside the function
      .catch(err => console.log(err));
  };

  const fetchClaps = () => {
    firebase
      .firestore()
      .collection('claps')
      .doc(slug)
      .get()
      .then(res => {
        if (!res.data()) {
          console.log('document dne');
        } else if (!res.data().claps) {
          setClapsCounter(0);
        } else {
          setClapsCounter(res.data().claps);
        }
      })
      .catch(err => console.log(err));
  };

  useEffect(fetchClaps, []);

  return (
    <div
      className="clap-button"
      onClick={incrementClapsCounter}
      onKeyDown={incrementClapsCounter}
      role="button"
      tabIndex="0"
    >
      <span className="hvr-bounce-in" role="img" aria-label="clap icon">
        {newClaps ? '🤟' : '👏'} {clapsCounter}{' '}
        {clapsCounter === 1 ? 'clap' : 'claps'}
      </span>
    </div>
  );
};

export default ClapButton;
