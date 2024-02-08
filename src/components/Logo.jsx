import React from 'react';

export default function Logo() {
  return <img src={require('../assets/logo.png')} style={styles.image} alt="Logo" />;
}

const styles = {
  image: {
    width: 110,
    height: 110,
    marginBottom: 8,
  },
};
