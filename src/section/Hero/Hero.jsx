 import styles from './HeroStyles.module.css';
 import heriImg from '../../assets/dddd.png';
 import sun from '../../assets/sun.svg';
 import moon from '../../assets/moon.svg';
 import twitterLight from '../../assets/twitter-light.svg';
 import twitterDark from '../../assets/twitter-dark.svg';
 import githubLight from '../../assets/github-light.svg';
 import githubDark from '../../assets/github-dark.svg';
 import linkedinLight from '../../assets/linkedin-light.svg';
 import linkedinDark from '../../assets/linkedin-dark.svg';
 import CV from '../../assets/CV.pdf';
 import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme ();

  const themeIcon = theme === 'light' ? sun:moon;
  const twitterIcon = theme === 'light' ? twitterLight:twitterDark;
  const githubIcon = theme === 'light' ? githubLight:githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight:linkedinDark;

  return (
    <section id="hero" className={styles.container}>
        <div className={styles.colorModeContainer}>
         <img className={styles.hero} src={heriImg} alt="Profile picture of Hirushan Rajapaksha " />
         <img className={styles.colorMode} src={themeIcon} alt="Color mode icon" onClick={toggleTheme}/>
        </div>

    <div className={styles.info}>
        <h1>
            Hirushan
            <br />
            Rajapaksha 
        </h1>
        <h2>Software Engineer</h2>
        <span>
            <a href="https://www.threads.net/@hiru__rajapaksha" target="_blank">
                <img src={twitterIcon} alt="Twitter Icon" />
            </a>
            <a href="https://github.com/HiruRajapaksha" target="_blank">
                <img src={githubIcon} alt="Github Icon" />
            </a>
            <a href="www.linkedin.com/in/hirushan-rajapaksha-ab4374214" target="_blank">
                <img src={linkedinIcon} alt="Linkedin Icon" />
            </a>
        </span>
        <p className={styles.description}>I’m Hirushan, a final-year software engineering student at SLIIT City University, with a strong background in front-end development and growing expertise in back-end technologies. Passionate about creating efficient digital solutions, I specialize in crafting responsive, user-friendly interfaces and am now expanding into full-stack development. I’m eager to connect and collaborate on innovative projects that make a difference..</p>
        <a href={CV} download>
            <button className="hover">
                Resume
            </button>
        </a>
    </div>
  </section>);
  
}

export default Hero;