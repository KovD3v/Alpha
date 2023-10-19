import Item from "@/components/GridItem";

export default function Proposte() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<h1 className="text-center text-2xl font-bold">Proposte</h1>
			<div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4 justify-center w-full text-center place-items-center">
				<Item
					titolo="Comunicazioni"
					descrizione="Creare un canale per le comunicazioni più importanti in modo facile e veloce"
					link=""
				/>
				<Item
					titolo="Sito"
					descrizione="Creare un sito per ordinare la merenda dalla classe"
					link=""
				/>
				<Item
					titolo="Pagamenti"
					descrizione="Integrare la possibilità di pagare con la carte di credito"
					link=""
				/>
				<Item
					titolo="Gite"
					descrizione="Aumentare la frequenza delle gite"
					link=""
				/>
				<Item
					titolo="Temperatura"
					descrizione="Stabilizzare le temperature nelle aule"
					link=""
				/>
				<Item
					titolo="Ascolto"
					descrizione="Creare sportelli d'ascolto per gli studenti"
					link=""
				/>
				<Item
					titolo="Laboratori"
					descrizione="Aggiornare le attrezzature dei laboratori"
					link=""
				/>
				<Item
					titolo="Tu"
					descrizione="Che tu sia un maturando o una matricola, la tua opinione conta per noi!"
					link=""
				/>
			</div>
		</main>
	);
}
