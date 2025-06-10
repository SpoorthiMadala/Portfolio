const Hero = () => {
  return (
    <div className="hero">
      <img style={{
    width: '200px',
    height: '200px',
    border: '2px solid #00ffcc',
    borderRadius: '50%',
    objectFit: 'cover',
    display: 'block',
    margin: '0 auto 20px'
  }} src="src/components/meme.jpg" alt="profile" />

      <h1>Madala Spoorthi</h1>
      
      <p>Machine Learning Engineer & MERN Developer</p>

    </div>
  );
};
export default Hero;
