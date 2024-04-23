"use client"
import NavBar from '@/app/components/NavBar';
import React, { useEffect, useState } from 'react';
import ReactMarkDown from "react-markdown"
import remarkGfm from 'remark-gfm';

 const   Page = ({ params }) => {
  const [dataList, setDataList] = useState("");
  useEffect(() => {
    getData(params.id);
  }, []);

  async function getData(id) {
    const response = await fetch(`/api/ymm4?id=` + id);
    let  result = await response.json();
    setDataList(result.markdown)
  }
  return (
    <div>
      <NavBar></NavBar>
      <div className={""}>
        <ReactMarkDown remarkPlugins={[remarkGfm]}>{dataList}</ReactMarkDown>
      </div>
    </div>
  );
};

export default Page;