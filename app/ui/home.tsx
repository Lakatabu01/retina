import Link from "next/link";

export default function Home() {
  return (
    <div className="text-white text-2xl bg-black/50 p-6 rounded-sm	">
      <h1 className="pb-6">Retina Movie house </h1>
      <div className="flex justify-center">
        <Link href="/categories">
          <button className="p-2 hover:bg-white hover:text-purple-900 text-sm text-white border-solid border-2 border-purple-900 rounded-sm bg-purple-900">
            Let's Go
          </button>
        </Link>
      </div>
    </div>
  );
}
