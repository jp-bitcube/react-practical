import React from "react";
import { UnsplashImage } from "@/models/unsplashed-image";
import { Metadata } from "next";
import { Alert } from "@/components/bootstrap";
import Image from "next/image";
import Link from "next/link";
import styles from "./Topics.module.css";

interface PageProps {
  params: { topic: string };
}

export function generateMetaData({ params: { topic } }: PageProps): Metadata {
	return {
		title: `Topic: ${topic}`,
	}
}

export function generateStaticParams() {
  return ["health", "fitness", "coding"].map((topic) => ({ topic }));
}

const Topics = async ({ params: { topic } }: PageProps) => {
  const response = await fetch(
    `https://api.unsplash.com/photos/random?query=${topic}&count=30&client_id=${process.env.UNSPLASH_ACCESS_KEY}`
  );
  const images: UnsplashImage[] = await response.json();

  return (
    <div>
      <Alert>
        This page <strong>generateStaticParams</strong> to render and cache static pages at build time, even 
				though the URL has a dynamic parameter. Pages that are not included in the generateStaticParams will be
				fetched & rendered on first access then <strong>cached for subsequent requests</strong> (this can be disabled).
      </Alert>

      <h1>Topical Images: {topic}</h1>
      {images.map((image) => (
        <div key={image.urls.raw}>
          <Image
            className={styles.image}
            src={image.urls.raw}
            width={250}
            height={250}
            alt={image.description}
          />
          by{" "}
          <Link href={"/users/" + image.user.username}>
            {image.user.username}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Topics;
