class Robot {
  constructor(nom) {
    this.nom = nom;
    this.x = 0;
    this.y = 0;
    this.positionNettoyees = [];
    this.historiqueDeplacement = [];
  }

  seDeplacer(direction) {
    this.historiqueDeplacement.push({ x: this.x, y: this.y });

    switch (direction) {
      case "haut":
        this.y++;
        break;
      case "bas":
        this.y--;
        break;
      case "gauche":
        this.x++;
        break;
      case "droite":
        this.x--;
        break;
      default:
        console.log("Mauvaise direction");
        break;
    }
  }

  nettoyer() {
    this.positionNettoyees.push({ x: this.x, y: this.y });
    console.log(`Position {${this.x}, ${this.y}} netoyé`);
  }

  afficherPosition() {
    console.log(`Position : {x : ${this.x}, y : ${this.y}}`);
  }

  reinitialiserPosition() {
    this.x = 0;
    this.y = 0;

    console.log("Position réinitialisé");
  }

  historiqueNettoyage() {
    console.log(this.positionNettoyees);
  }

  reculer() {
    const lastPos = this.historiqueDeplacement.pop();

    if (lastPos === undefined) {
      console.log("Pas de retour arriere possible !");
      return;
    }

    this.x = lastPos.x;
    this.y = lastPos.y;

    console.log(`Nouvelle position {x : ${this.x}, y : ${this.y}}`);
  }
}

class Grille {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  afficherGrille() {
    console.log(`Grille de ${this.width} x ${this.height}`);
  }
}

let width = 100;
let height = 200;
const robot = new Robot("R2D2"); // Création d'un robot
const grille = new Grille(width, height); // Création d'une grille

grille.afficherGrille();

function dessinerGrille(width, height, pourcentage) {
  let colonne = [];

  for (let i = 0; i < height; i++) {
    let ligne = [];
    for (let j = 0; j < width; j++) {
      //if (j % 2 === 0) {
      if (Math.random() < pourcentage) {
        ligne.push("X");
      } else {
        ligne.push("  ");
      }
      //console.log(ligne[1], colonne[2]);
    }
    colonne.push(ligne.join("")); // Combine chaque ligne en une chaîne
  }

  return colonne.join("\n"); // Combine les lignes pour former un carré
}

console.log(dessinerGrille(5, 5, 0.9));
