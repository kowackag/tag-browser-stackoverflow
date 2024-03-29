import { getTags } from "@/api/tagAPI";

export default async function Home() {
  const data = await getTags({});
  console.log(data);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        Main
      </div>
    </main>
  );
}
