const grid = [
  [1, 0, 1, 0, 1, 0, 0, 1],
  [0, 1, 0, 1, 0, 1, 1, 0],
  [1, 1, 0, 0, 1, 0, 1, 1],
  [0, 0, 1, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 1, 1],
  [0, 1, 1, 0, 0, 0, 0, 1],
  [1, 0, 1, 1, 0, 1, 1, 0],
  [0, 1, 0, 0, 1, 0, 1, 1]
]

//definition de la position intial du robot
const robot = { x: 0, y: 0 };

const directions = [
    { x: -1, y: 0, direction: 'up' },    // Haut
    { x: 1, y: 0, direction: 'down' },   // Bas
    { x: 0, y: -1, direction: 'left' },  // Gauche
    { x: 0, y: 1, direction: 'right' }   // Droite
  ];

//defenir la limite de la grille
const grille = {
    estDansLesLimites: (x, y) => x >= 0 && y >= 0 && x < grid.length && y < grid[0].length
  };

const drawGrid = () => {

  for (let i = 0; i < grid.length; i++) {
    const line = grid[i];
    let drawLine = ""
    for (let j = 0; j < line.length; j++) {
      const cell = line[j]
      if (i === robot.x && j == robot.y){
        drawLine += "R"
      } else {
        drawLine += cell === 1 ? " " : "X"
      }
    }
    console.log(drawLine)
  }

}


const findDirrection = () => {
    const mouvementsPossibles = [];
  
    directions.forEach(({ x, y, direction }) => {
      const newX = robot.x + x;
      const newY = robot.y + y;
  
      switch (grille.estDansLesLimites(newX, newY)) {
        case true:
          mouvementsPossibles.push({ x: newX, y: newY, direction });
          break;
        case false:
          break;
      }
    });
  
    if (mouvementsPossibles.length > 0) {
      // Sélectionner un mouvement possible au hasard
      const randomIndex = Math.floor(Math.random() * mouvementsPossibles.length);
      return mouvementsPossibles[randomIndex];
    } else {
      console.log("Aucun mouvement possible !");
      return { x: robot.x, y: robot.y };
    }
  };


  const whatToDo = () => {
    if (grid[robot.x][robot.y] === 1) {
      grid[robot.x][robot.y] = 0;
      
    } else {
      const { x, y } = findDirrection();
      robot.x = x;
      robot.y = y;
    }
  
    drawGrid();
  };

let steps = 20
; // Nombre d'actions à effectuer par le robot
while (steps > 0) {
  console.log("\nNettoyage en cours...");
  whatToDo();
  steps--;
}