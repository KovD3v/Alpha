export default function Item({ titolo, descrizione, link}) {
	return (
		<a
			className="rounded-lg border border-transparent px-4 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 min-h-[10rem] flex flex-col"
			href={link}
			rel="noopener noreferrer">
			<h2 className={`mb-3 text-2xl font-semibold`}>{titolo}{" "}</h2>
			<div className={`m-0 max-w-[30ch] text-sm opacity-50 self-center`}>
				{descrizione}
			</div>
		</a>
	);
}
