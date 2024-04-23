import fs from 'fs'
import path from 'path'
const dir = path.join(process.cwd(), 'public', 'ymm4','logs');

export const    getData =  async (id) => {
    
    try {
        // ファイルを同期的に読み込む
        const data = fs.readFileSync(path.join(dir,id+".md"),'utf8');
        // 読み込んだデータをJSONパースして返す
       
        return data;
    } catch (error) {
        // エラーが発生した場合はエラーメッセージを出力してnullを返す
        console.error('Error reading JSON file synchronously:', error);
        return [];
    }
}
export const  getLogs = async ()=> {
    const filepath = path.join(process.cwd(), 'public', 'ymm4','log_info.json');
    try{
        const data = fs.readFileSync(filepath);
        const jsonData = JSON.parse(data);
        return jsonData;
    }catch (error) {
        // エラーが発生した場合はエラーメッセージを出力してnullを返す
        console.error('Error reading JSON file synchronously:', error);
        return [];
    }
}
export function formatPublishedAt(publishedAt) {
    const year = publishedAt.substring(0, 4);
    const month = publishedAt.substring(4, 6);
    const day = publishedAt.substring(6, 8);
    const hour = publishedAt.substring(8, 10);
    const minute = publishedAt.substring(10, 12);
    const second = publishedAt.substring(12, 14);
  
    return `${year}年 ${month}月 ${day}日 ${hour}:${minute}:${second}`;
  }