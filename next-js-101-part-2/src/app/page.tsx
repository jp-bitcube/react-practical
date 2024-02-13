import Image from "next/image";
import styles from "./page.module.css";
import { Alert } from "@/components/bootstrap";

export default function Home() {
  return (
    <div className="Home">
      <h1 className="mb-2">Hello, There!!</h1>
      <Alert>
        <p>This is a simple project to showcase and learn the new <strong>NextJs 13.4</strong></p>
        <ul>
          <li>Static - Server side rendering</li>
          <li>Dynamic - Server side rendering</li>
          <li>ISR - Incremental static regeneration server side rendering</li>
          <li>Topics - Dynamic param server side rendering, meta data title changes</li>
          <li>Search - Client side rendering, using route handlers</li>
        </ul>
        <p className="mb-0">Every Page uses a different approach to <strong>Fetching and Caching Data</strong></p>
      </Alert>
      <Alert variant="secondary">
        <p>Note: In order to load the data on this site, you need to get a <a href="https://unsplash.com" target='_blank'>API Key</a></p>
        <p className="mb-0">Unsplash has a free quota of <strong>50 requests per hour</strong></p>
      </Alert>
    </div>
  );
}
