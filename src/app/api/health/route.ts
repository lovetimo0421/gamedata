import {NextResponse} from "next/server";

export const GET=()=>{
  return NextResponse.json({status:"ok",message:"Next.js stack ready"});
};
