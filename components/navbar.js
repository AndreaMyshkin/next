import Link from "next/link";

export default function navbar() {
  return (
    <nav>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/users">
        <a>Users</a>
      </Link>
      <Link href="/posts">
        <a>Posts</a>
      </Link>
      <Link href="/posts/[id]" as={`/posts/${1}`}>
        <a>Posts 1</a>
      </Link>
      <style jsx>
     {
       `nav{
         padding-top:10px;
       }
       a{
         padding:0 10px;
       }
       
       `
     }
      </style>
    </nav>
  );
}
