
import Image from "next/image";
import MyImage from "@/public/fe.png";
import YouTube from "./YouTube";
import { getData } from "../util/youtube";
import styles from "./module.css"

export default async function Page  ()  {
    const  latestVideo = await getData()
    return (
      <main>
        <div>
        <div className="image">
          <Image src={MyImage} sizes="(max-width: 768px) 100vw, 50vw"
          className={styles} alt="my_img"/>
        </div>
        <YouTube latestVideo={latestVideo}/>
        </div>
      </main>
      
    );
  }
  
  
  