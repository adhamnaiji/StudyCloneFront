import { Course } from "./Models/Course";

export class SUser{
    id: number;
    nom: string;
    prenom: string;
    descriptionProfile: string;
    adresse: string;
    phone_number: string;
    date_birth: string;
    personalWebsite: string;
    Facebbok: string;
    Instagram: string;
    Linkedin: string;
    email: string;
    mdp: string;
    courses: Course[];
    owncourses: Course[];
  
    constructor(
      id: number,
      nom: string,
      prenom: string,
      email: string,
      mdp: string,
      descriptionProfile?: string,
      adresse?: string,
      phone_number?: string,
      date_birth?: string,
      personalWebsite?: string,
      Facebbok?: string,
      Instagram?: string,
      Linkedin?: string,
      courses?: Course[],
      owncourses?: Course[]
    ) {
      this.id = id;
      this.nom = nom;
      this.prenom = prenom;
      this.email = email;
      this.mdp = mdp;
      this.descriptionProfile = descriptionProfile || '';
      this.adresse = adresse || '';
      this.phone_number = phone_number || '';
      this.date_birth = date_birth || '';
      this.personalWebsite = personalWebsite || '';
      this.Facebbok = Facebbok || '';
      this.Instagram = Instagram || '';
      this.Linkedin = Linkedin || '';
      this.courses = courses || [];
      this.owncourses = owncourses || [];
    }
  }