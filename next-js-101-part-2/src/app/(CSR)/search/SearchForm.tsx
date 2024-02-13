'use client'
import { UnsplashImage } from '@/models/unsplashed-image';
import Link from 'next/link';
import React, { FormEvent, useState } from 'react'
import { Alert, Button, Container, Form, Spinner } from 'react-bootstrap'
import Image from "next/image";
import styles from './SearchForm.module.css'

const SearchForm = () => {
  const [ results, setResults ] = useState<UnsplashImage[] | null>(null);
  const [ isLoading, setLoading ] = useState(false);
  const [ isLoadingError, setLoadingError ] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement);

    const query = formData.get("query")?.toString().trim();

    if (query) {
      try {
        setResults(null);
        setLoadingError(false);
        setLoading(true);
        const response = await fetch("/api/search?query=" + query);
        const images: UnsplashImage[] = await response.json();
        setResults(images);
      } catch (error) {
        console.error(error);
        setLoadingError(true);
      } finally {
        setLoading(false);
      }
    }
  }


  return (
    <>
      <Alert>
        This page fetches data <strong>Client Side</strong>. In order to not leak API credentials,
        the request is sent to NextJS <strong>route handler</strong> that runs on the server. This
        route handler fetches the data from the Unsplash API and returns it to the client.
      </Alert>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId='search-input'>
          <Form.Label>Search Images</Form.Label>
          <Form.Control name="query" placeholder='Insert word(s) e.g. cat, dogs, horse...'></Form.Control>
        </Form.Group>
        <Button type="submit" className="mb-3" disabled={isLoading}>Search</Button>
      </Form>
      <div className='d-flex flex-column align-items-center'>
        { 
          isLoading && <Spinner animation="border"></Spinner>
        }
        { 
          isLoadingError && <p>Something went wrong... Please try again</p>
        }
        {
          results?.length === 0 && <p>No results found... Please try a different query</p> 
        }
      </div>
      {
        results && 
        <div className='d-flex flex-row align-items-center flex-wrap'>
          {
            results.map((image) => (
              <Container key={image.urls.raw} className='d-flex flex-column align-items-center flex-wrap'>
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
              </Container>
            ))
          }
        </div>
      }
    </>
  )
}

export default SearchForm