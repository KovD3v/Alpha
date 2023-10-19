import Link from "next/link";

export default function Proposte() {
	return (
		<main className="flex min-h-screen flex-col items-center gap-24 p-24">
			<h1 className="text-center text-2xl font-bold">Noi</h1>
			<div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4 justify-center w-full text-center place-items-center">
				<div className="rounded-lg border border-transparent px-4 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 min-h-[10rem] flex flex-col">
					<h2 className={`mb-3 text-2xl font-semibold`}>
						Tommaso Coviello
					</h2>
					<div
						className={`m-0 max-w-[30ch] text-sm opacity-50 self-center`}>
						Instagram:{" "}
						<a href="https://www.instagram.com/tommaso_cvl/">
							@tommaso_cvl
						</a>
					</div>
					<div
						className={`m-0 max-w-[30ch] text-sm opacity-50 self-center`}>
						GitHub:{" "}
						<a href="http://www.github.com/KovD3v">KovD3v</a>
					</div>
				</div>
				<div className="rounded-lg border border-transparent px-4 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 min-h-[10rem] flex flex-col">
					<h2 className={`mb-3 text-2xl font-semibold`}>
						Mattia Rotelli
					</h2>
					<div
						className={`m-0 max-w-[30ch] text-sm opacity-50 self-center`}></div>
				</div>
				<div className="rounded-lg border border-transparent px-4 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 min-h-[10rem] flex flex-col">
					<h2 className={`mb-3 text-2xl font-semibold`}>
						David Novelli
					</h2>
					<div
						className={`m-0 max-w-[30ch] text-sm opacity-50 self-center`}></div>
				</div>
				<div className="rounded-lg border border-transparent px-4 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 min-h-[10rem] flex flex-col">
					<h2 className={`mb-3 text-2xl font-semibold`}>
						Thomas Proietti
					</h2>
					<div
						className={`m-0 max-w-[30ch] text-sm opacity-50 self-center`}></div>
				</div>
			</div>
		</main>
	);
}
