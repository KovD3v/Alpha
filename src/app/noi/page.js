import Image from "next/image";

export default function Proposte() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-evenly lg:p-24">
			<h1 className="text-center text-2xl font-bold">Noi</h1>
			<p className="flex p-4 justify-center w-full text-center place-items-center">
				Siamo Alpha e siamo studenti come voi. Passiamo come voi 32 ore
				a scuola noi ormai da 4 anni e conosciamo la nostra scuola.
				Abbiamo vissuto quello che state vivendo voi, vi capiamo e
				vogliamo offrirvi ciò che a noi è mancato ed insieme ai nostri
				compagni di quarto ed ai maturandi continueremo a lottare per
				terminare tutti al meglio questi 5 anni. Votandoci darete a noi
				una voce per dire i vostri pensieri siamo tanti e possiamo farci
				sentire.
			</p>
			<div className="flex flex-row justify-center w-full text-center place-items-center">
				<div className="flex p-4 justify-start w-full text-left place-items-center">
					Tommaso Coviello <br />
					Mattia Rotelli <br />
					David Novelli <br />
					Thomas Proietti
				</div>
				<Image
					src="/logo.svg"
					alt="Icon"
					className="dark:invert"
					width={100}
					height={24}
					priority
				/>
			</div>
		</main>
	);
}
