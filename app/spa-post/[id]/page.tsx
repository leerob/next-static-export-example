'use client';

import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((r) => r.json());

// Currently getting
// TypeError: Cannot read properties of undefined (reading 'cssModules')
// When running next export
export default function SPAPostPage({ params }: { params: { id: string } }) {
  const { data, error } = useSWR(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`,
    fetcher
  );
  if (error) return <h1 className="text-2xl font-bold">Failed to load</h1>;
  if (!data) return <h1 className="text-2xl font-bold">Loading...</h1>;

  return (
    <>
      <h1 className="text-2xl font-bold">{data.title}</h1>
      <p className="text-gray-500">{data.body}</p>
    </>
  );
}
