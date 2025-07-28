import React from 'react';
import './ArtistProfile.css';

const artists = [
  {
    name: 'Vincent van Gogh',
    artwork: 'Starry Night',
    profilePic: '/vin.jpg',
    description:
      'Vincent van Gogh was a Dutch post-impressionist painter who created about 2,100 artworks, including around 860 oil paintings. "Starry Night" reflects his emotional turmoil and fascination with the night sky.',
    bio: 'Born in 1853 in the Netherlands, van Gogh struggled with mental illness and poverty throughout his life. Despite his hardships, he became one of the most influential figures in Western art history. He died in 1890 at the age of 37.',
  },
  {
    name: 'Gustav Klimt',
    artwork: 'The Kiss',
    image: '/klimt.jpg',
    profilePic: '/gus.jpg',
    description:
      '"The Kiss" is Gustav Klimt’s most famous painting, blending gold leaf with sensual symbolism. Klimt was a leader of the Vienna Secession movement.',
    bio: 'Born in 1862 in Austria, Klimt’s work explored themes of love, eroticism, and the female form. His distinctive style merged symbolism, Art Nouveau, and Byzantine influences. He passed away in 1918.',
  },
  {
    name: 'Leonardo da Vinci',
    artwork: 'The Last Supper',
    image: '/davinci.jpg',
    profilePic: '/leo.jpg',
    description:
      'Leonardo da Vinci was a polymath of the Renaissance era. "The Last Supper" is one of his masterpieces, celebrated for its emotional intensity and perspective.',
    bio: 'Born in 1452 in Italy, da Vinci excelled as a painter, engineer, scientist, and inventor. He kept extensive notebooks that detailed visionary concepts far ahead of his time. He died in 1519.',
  },
  {
    name: 'Claude Monet',
    artwork: 'Water Lilies',
    image: '/monet.jpg',
    profilePic: '/cla.jpg',
    description:
      '"Water Lilies" is a series of approximately 250 paintings by Claude Monet, capturing his garden in Giverny and pioneering the Impressionist movement.',
    bio: 'Born in 1840 in France, Monet is known as a founder of Impressionism. His work emphasized light, movement, and natural beauty. He died in 1926, leaving behind a legacy of atmospheric masterpieces.',
  },
];

export default function ArtistProfiles() {
  return (
    <div className="artist-container">
      {artists.map((artist, index) => (
        <div className="artist-card" key={index}>
          <div className="artist-header" style={{ backgroundImage: `url(${artist.image})` }}>
            <div className="overlay" />
            <h1>{artist.name}</h1>
            <p className="artwork-title">Famous for: <strong>{artist.artwork}</strong></p>
            <p className="followers">{artist.followers} Followers</p>
          </div>
          <div className="artist-info">
            <div className="artist-details">
              <img src={artist.profilePic} alt={artist.name} className="profile-pic" />
              <div className="text-block">
                <p className="description">{artist.description}</p>
                <p className="bio">{artist.bio}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
