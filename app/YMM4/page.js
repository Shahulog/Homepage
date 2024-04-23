import Link from "next/link";
import NavBar from "../components/NavBar";
import { formatPublishedAt, getLogs } from "../util/ymm4";
export default async function Page  ()  {
 const logs = await getLogs();
 
  return (
    <main>
      <NavBar></NavBar>
      <div>
      <ul className="list-disc pl-5">
      {logs.map(log => (
        <li className="mb-2" key={log.id}>
          <Link className="text-blue-500 hover:text-blue-700 hover:underline" href={`/YMM4/${log.id}`}>
            
              {`${formatPublishedAt(log.publishedAt)} - ${log.title}`}
           
          </Link>
        </li>
      ))}
    </ul>
      </div>
    </main>
    
  );
}
