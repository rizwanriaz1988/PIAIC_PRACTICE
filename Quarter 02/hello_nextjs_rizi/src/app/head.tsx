import Link from 'next/link';

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link href="/head">
        <a>About Page</a>
      </Link>
    </div>
  );
}

export default Home;
