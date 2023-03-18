type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

async function getTodos(): Promise<Todo[]> {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  return res.json();
}

export default async function TodoPage() {
  const todos = await getTodos();
  return (
    <main className="flex min-h-screen flex-col p-24 space-y-4">
      There are {todos.length} todos.
    </main>
  );
}
