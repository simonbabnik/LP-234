import { Ocena } from "./ocena";
import { Pes } from "./pes";

export class Uporabnik {
  _id: string = "";
  ime: string = "";
  priimek: string = "";
  email: string = "";
  datumRojstva: Date = new Date();
  zgoscenaVrednost: string = "";
  nakljucnaVrednost: string = "";
  slikaProfila: string = "";
  slikaDokumenta: string = "";
  tipRacuna: string = "";
  ocene: Ocena = new Ocena()
  povprecnaOcena: number = 0;
  opis: string = "";
  psi: string[] = []
  potrjen: string = "";
}
