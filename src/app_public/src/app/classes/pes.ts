import { Ocena } from "./ocena";

export class Pes {
  _id: string = "";
  opis: string = "";
  slika: string = "";
  ime: string = "";
  pasma: string = "";
  ocene: Array<Ocena> = [];
  povprecnaOcena: number = 0;
}
