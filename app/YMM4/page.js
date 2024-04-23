import { formatPublishedAt, getLogs } from "../util/ymm4";
import NavBar from '@/app/components/NavBar';
import Link from "next/link";
 export default async function   Page () {
  const logs = undefined
 
  return (
    <main>
      <NavBar></NavBar>
      <div>
      <ul className="list-disc pl-5">
      {logs && logs.map(log => (
        <li className="mb-2" key={log.id}>
          <Link className="text-blue-500 hover:text-blue-700 hover:underline" href={`./YMM4/${log.id}`}>
            
              {`${formatPublishedAt(log.publishedAt)} - ${log.title}`}
           
          </Link>
        </li>
      ))}
    </ul>
      </div>
    </main> 
    
  );
}