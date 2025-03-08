// import { NextRequest, NextResponse } from "next/server";
// import { getDataFromToken } from "@/lib/getDataFormToken";
// import User from "@/lib/models/User";
// import { connectToDB } from "@/lib/mongoDB";

// export const PATCH = async (req: NextRequest) => {
//   try {
//     await connectToDB();
//     const userId = getDataFromToken(req);
//     const { name, profileImage } = await req.json();

//     const updatedUser = await User.findByIdAndUpdate(
//       userId,
//       { name, profileImage },
//       { new: true, select: "-password" }
//     );

//     if (!updatedUser) {
//       return NextResponse.json({ message: "User not found", success: false }, { status: 404 });
//     }

//     return NextResponse.json({ user: updatedUser, success: true }, { status: 200 });
//   } catch (err) {
//     console.log("[profile_PATCH]", err);
//     return new NextResponse("Internal Server Error", { status: 500 });
//   }
// };



import { NextRequest, NextResponse } from "next/server";
import { getDataFromToken } from "@/lib/getDataFormToken";
import User from "@/lib/models/User";
import { connectToDB } from "@/lib/mongoDB";

export const PATCH = async (req: NextRequest) => {
  try {
    await connectToDB();
    const userId = getDataFromToken(req);
    const { name, profileImage } = await req.json();

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { name, profileImage },
      { new: true, select: "-password" }
    );

    if (!updatedUser) {
      return NextResponse.json({ message: "User not found", success: false }, { status: 404 });
    }

    return NextResponse.json({ user: updatedUser, success: true }, { status: 200 });
  } catch (err) {
    console.log("[profile_PATCH]", err);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
};
