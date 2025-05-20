import ContactForm from './components/ContactForm';
import NavBar from './components/NavBar'; // Import the NavBar component
import styles from './Home.module.css'; // Adjust the path as necessary


export default async function Home() {
  return (
    <main>
      <ContactForm />
    </main>
  );
}