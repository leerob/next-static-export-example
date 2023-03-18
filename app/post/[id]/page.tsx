import Image from 'next/image';

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export async function generateStaticParams() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();

  return posts.map((post: Post) => ({
    id: post.id.toString(),
  }));
}

async function getPost(id: string): Promise<Post> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return res.json();
}

export default async function PostPage({ params }: { params: { id: string } }) {
  const post = await getPost(params.id);
  return (
    <main className="flex min-h-screen flex-col p-24 space-y-2">
      <h1 className="text-2xl font-bold">{post.title}</h1>
      <p className="text-gray-500">{post.body}</p>
      {/* <Image alt="turtles" src="/turtles.jpg" width={300} height={300} /> */}
    </main>
  );
}
