
import Image from "next/image";
import MyImage from "@/public/fe.png"
import styles from './module.css';
import YouTube from "./YouTube";
import fs from 'fs'
import path from 'path'

export async function getData() {
  // JSON ファイルのパスを取得
  const filePath = path.join(process.cwd(), 'public', 'data.json');

  try {
    // JSON ファイルの読み込み
    const jsonData = fs.readFileSync(filePath, 'utf-8');
    const data = JSON.parse(jsonData);
    console.log(data);
    // ページコンポーネントにデータを渡す
    return data;
  } catch (error) {
    console.error('Error reading JSON file:', error);
    return data;
  }
}
let latestVideo = {
  title:"",
  videoId:""
}
export default async function Home  ()  {
 
    
  
  latestVideo = await getData();
  return (
    <main>
      <div>
        <h2>にょっす🐮🖐</h2>
        <div className="image">
            <Image src={MyImage} sizes="(max-width: 768px) 100vw, 50vw"
            className={styles} alt="my_img"/>
        </div>
        <YouTube latestVideo={latestVideo}/>
      </div>
    </main>
    
  );
}


