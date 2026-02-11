import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

// // email String @unique
//   first_name String
//   last_name String
//   password String 
//   songs Song[]

export async function POST (req: NextRequest, res: NextResponse) {
    const { first_name, last_name, password, songs } = await req.json();
    if(!first_name || !last_name || !password || !songs){
        return NextResponse.json({
            msg : "Enter all the details !"
        }, { status : 401})
    }
}