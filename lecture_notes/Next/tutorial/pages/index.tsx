// import styles from "@/styles/Home.module.css";

import Link from "next/link";

export default function Home() {
  return (
    <div>
 
      <h1>Homepage</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit provident voluptates aperiam. Sapiente exercitationem ad doloribus voluptatibus et aspernatur vero quae eius, aliquid atque! Reprehenderit suscipit dolores ullam fuga ex.</p>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, non asperiores! Aliquam, praesentium porro architecto autem illum magnam tenetur delectus quia laborum, ipsum et, obcaecati blanditiis accusantium quas assumenda doloremque!</p>
      <Link href="/ninjas">
      See Ninja Listing
      </Link>

    </div>
  );
}
 