

import { getData, getLogs } from "@/app/util/ymm4";
import { NextResponse } from "next/server";




export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id")

    if(id != undefined){
        const res = await getData(id)
        return NextResponse.json({ markdown:res });
    }else{
        const res = await getLogs()
        return NextResponse.json({ res });
    }
    
}