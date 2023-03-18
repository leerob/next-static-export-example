import Link from 'next/link';

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

async function getPosts(): Promise<Post[]> {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  return res.json();
}

export default async function Home() {
  const post = await getPosts();
  return (
    <main className="flex min-h-screen flex-col p-24 space-y-4">
      {post.map((post) => (
        <Link
          href={`/post/${post.id}`}
          key={post.id}
          className="flex flex-col space-y-2"
        >
          <h1 className="text-2xl font-bold">{post.title}</h1>
          <p className="text-gray-500">{post.body}</p>
        </Link>
      ))}
    </main>
  );
}
