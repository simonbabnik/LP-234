import { Height } from "./height";

export class DogApiResult {
    weight: Height = new Height();
    height: Height = new Height();
    _id: number = 0;
    name: string = "";
    bred_for: string = "";
    breed_group: string = "";
    life_span: string = "";
    temperament: string = "";
    reference_image_id: string = ""
}
