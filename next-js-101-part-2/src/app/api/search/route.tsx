import { UnsplashImageSearch } from "@/models/unsplashed-image";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('query');

    if (!query) {
        return NextResponse.json({ error: "No query provided"}, { status: 400 });
    }

    const response = await fetch(
        `https://api.unsplash.com/search/photos?query=${query}&count=30&client_id=${process.env.UNSPLASH_ACCESS_KEY}`
      );

    const { results }: UnsplashImageSearch = await response.json();

    return NextResponse.json(results, { status: 200 });
}