import Link from 'next/link';

export default function Tours() {
  const tours = [
    { name: 'Thailand', slug: 'thailand' },
    { name: 'Japan', slug: 'japan' },
    { name: 'Egypt', slug: 'egypt' }
  ];

  return (
    <main className="p-4">
      <h1 className="text-3xl font-bold mb-4">Available Tours</h1>
      <ul className="space-y-2">
        {tours.map((tour) => (
          <li key={tour.slug}>
            <Link href={`/tours/${tour.slug}`} className="text-blue-600 hover:underline">
              {tour.name} Tour
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
