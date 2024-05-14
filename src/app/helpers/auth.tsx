import { NextRequest } from 'next/server';
import jwt from 'jsonwebtoken';

export const isUserLoggedIn = (request: NextRequest) => {
  try {
    const token = request.cookies.get('token')?.value || '';
    if (!token) {
      return false; 
    }

    const decodedToken: any = jwt.verify(token, process.env.TOKEN_SECRET!);
    
    const userId = decodedToken.id; 
    return userId;
  } catch (error: any) {
    console.error('Error decoding token:', error.message);
    return false; 
  }
};
