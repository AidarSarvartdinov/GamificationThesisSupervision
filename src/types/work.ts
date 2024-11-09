import { Professor } from "./professor";

export interface Work {
	id: number;
	title: string;
	authors: Professor[];
	// pusblishDate: Date;
}
