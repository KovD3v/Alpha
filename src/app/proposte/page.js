import Proposta from "@/components/proposta";

export default function Proposte() {
	return (
		<div>
			<h1 className="text-center text-2xl font-bold">Proposte</h1>
			<div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4 justify-center w-full text-center place-items-center">
            <Proposta
					titolo="Comunicazioni"
					descrizione="Creare un canale per le comunicazioni più importanti in modo facile e veloce"
					link=""
				/>
				<Proposta
					titolo="Sito"
					descrizione="Creare un sito per ordinare la merenda dalla classe"
					link=""
				/>
				<Proposta
					titolo="Pagamenti"
					descrizione="Integrare la possibilità di pagare con la carte di credito"
					link=""
				/>
				<Proposta
					titolo="Gite"
					descrizione="Aumentare la frequenza delle gite"
					link=""
				/>
				<Proposta
					titolo="Temperatura"
					descrizione="Stabilizzare le temperature nelle aule"
					link=""
				/>
				<Proposta
					titolo="Ascolto"
					descrizione="Creare sportelli d'ascolto per gli studenti"
					link=""
				/>
				<Proposta
					titolo="Laboratori"
					descrizione="Aggiornare le attrezzature dei laboratori"
					link=""
				/>
			</div>
		</div>
	);
}
