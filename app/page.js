import NavBar from './components/NavBar'; // Import the NavBar component
import styles from './Home.module.css'; // Adjust the path as necessary


export default async function Home() {
  return (
    <main>
      <NavBar /> {/* Include the NavBar component here */}
      <div>
        <span className={styles.growAndFadeText}>勇気を叫ぶの！</span>
        <br/>
        <span className={styles.growAndFadeText}>がおー！ってね！</span>
        <br/>
        <span className={styles.growAndFadeText}>Shadowverse 《力》・ソフィーナ</span>
      </div>
    </main>
  );
}