
import Image from "next/image";
import MyImage from "@/public/fe.png";
import YouTube from "./YouTube";
import { getData } from "../util/youtube";
import NavBar from "../components/NavBar";

export default async function Page  ()  {
    const  latestVideo = await getData()
    return (
      <main>
        <NavBar></NavBar>
        <div>
        <div className="w-24 h-24 relative">
        <Image 
          src={MyImage} 
          alt="my_img" 
          layout="fill" 
          objectFit="contain" // or 'cover' depending on your needs
        />
      </div>
        <YouTube latestVideo={latestVideo}/>
        </div>
      </main>
      
    );
  }
  
  
  