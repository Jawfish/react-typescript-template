import clsx from 'clsx';

const exampleDiv = clsx(
  'bg-zinc-200',
  'p-6',
  'text-2xl',
  'font-bold',
  'hover:cursor-pointer',
  'hover:bg-zinc-300',
  'hover:text-zinc-600',
  'hover:shadow-lg',
  'transition',
  'duration-150',
  'ease-in-out',
  'rounded'
);

function App() {
  return (
    <div className="flex h-screen place-items-center bg-zinc-50">
      <div className="mx-auto grid grid-cols-3 gap-6 rounded bg-zinc-100 p-6 text-center text-zinc-500">
        {[...Array(9)].map((_, i) => (
          <div className={exampleDiv} key={i} />
        ))}
      </div>
    </div>
  );
}

export default App;
