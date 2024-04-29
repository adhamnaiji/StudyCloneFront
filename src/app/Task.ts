export class Task{
    id_t!: number;
  date!: string;
  heure_debut!: string;
  heure_fin!: string;
  status!: string;
  lieu!: string;
  patient!: {
    id: number;
    nom: string;
    prenom: string;
    telephone: string;
    email: string;
    mdp: string;
    type: string;
    age: number;
    localisation: string;
    specialite: string;
    disponibilite: string;
  };
  employe!: {
      id: number;
      nom: string;
      prenom: string;
      telephone: string;
      email: string;
      mdp: string;
      type: string;
      age: number;
      localisation: string;
      specialite: string;
      disponibilite: string;
  } ;
}