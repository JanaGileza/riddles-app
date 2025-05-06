import heroStyles from "./hero.module.css";

function Hero() {
  return (
    <div>
      <h1 className={heroStyles.heroTitle}>
        Welcome to Next.js with React.js and TypeScript!
      </h1>
      <h2>Subtitle</h2>
    </div>
  );
}

export default Hero;
