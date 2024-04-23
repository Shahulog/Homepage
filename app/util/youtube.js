import fs from 'fs';
import path from 'path';
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
        return null; // Changed to return null in case of error
      }
    }