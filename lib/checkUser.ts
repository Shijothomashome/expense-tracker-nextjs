import { currentUser } from "@clerk/nextjs/server";
import { db } from '@/lib/db';

export const checkUser = async () => {
    const user = await currentUser();  
    
    // Check for current logged in clerk user
    if (!user) {
        return null;
    }

    // Check if user exists in the database
    const userExists = await db.user.findUnique({
        where: {
            clerkUserId: user.id
        }
    });

    // If user is in the database, return the user
    if (userExists) {
        return userExists;
    }   

    // If user is not in the database, create a new user
    const newUser = await db.user.create({
        data: {
            clerkUserId: user.id,
            name:`${user.firstName} ${user.lastName}`,
            email: user.emailAddresses[0].emailAddress,
            imageUrl: user.imageUrl,
        }
    });

    return newUser;
}