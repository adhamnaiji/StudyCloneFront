import { SUser } from "../SUser";
import { CategorieCourse } from "./CategorieCourse";

export class Course {
    id_c: number;
    title: string;
    description: string;
    price: string;
    courseUrl: string;
    categorie: CategorieCourse;
    user: SUser; // Assuming SUser class is also defined
  
    constructor(
      id_c: number,
      title: string,
      description: string,
      price: string,
      courseUrl: string,categorie: CategorieCourse,
      user: SUser
    ) {
      this.id_c = id_c;
      this.title = title;
      this.description = description;
      this.price = price;
      this.courseUrl = courseUrl;
      this.categorie=categorie;
      this.user = user;
    }
  }

  