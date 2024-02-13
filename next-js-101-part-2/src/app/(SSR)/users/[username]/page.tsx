import React from "react";
import { Metadata } from "next";
import { UnsplashUser } from "@/models/unsplashed-user";
import { notFound } from "next/navigation";
import { Alert } from "@/components/bootstrap";

interface PageProps {
  params: { username: string };
}


async function getUser(username: string): Promise<UnsplashUser> {
    const response = await fetch(
        `https://api.unsplash.com/users/${username}?client_id=${process.env.UNSPLASH_ACCESS_KEY}`
      );
    
      if (response.status === 404) notFound();

      return await response.json();
}

export async function generateMetaData({ params: { username } }: PageProps): Promise<Metadata> {
    const user: UnsplashUser = await getUser(username);
	
    return {
		title: `${user.first_name} ${user.last_name}`,
	}
}

const User = async ({ params: { username } }: PageProps) => {
    const user: UnsplashUser = await getUser(username);

  return (
    <div>
        <Alert>
          This page uses <strong>generateMetaData</strong> to set the page title dynamically from an API response.
        </Alert>
        <h1>{user.username}</h1>
        <p>First Name: {user.first_name}</p>
        <p>Last Name: {user.last_name}</p>
        <a href={`https://unsplashed.com/${user.username}`}>Unsplash Profile</a>
    </div>
  );
};

export default User;
