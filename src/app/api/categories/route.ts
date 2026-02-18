import { PrismaClient } from "@prisma/client/extension";
import { NextResponse } from "next/server"

const prisma = new PrismaClient()

 export const GET = async () => {
   try{
      const categories = await prisma.category.findMany()
      return new NextResponse(JSON.stringify(categories),{status:500});
   }
   catch(err){
      console.log(err)
      return new NextResponse(JSON.stringify({message:"something went wrong"}),{status:500});
   }
    
 }

 export const PQST = () => {
    return new NextResponse("Hello MF",{status:200});
 }