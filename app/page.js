import Image from "next/image";
import MyImage from "@/public/fe.png"
import styles from './module.css';


export default function Home  ()  {
  return (
    <main>
      <div>
        <h2>にょっす🐮🖐</h2>
        <div className="image">
            <Image src={MyImage} sizes="(max-width: 768px) 100vw, 50vw"
            className={styles} alt="my_img"/>
        </div>
        
      </div>
    </main>
    
  );
}


