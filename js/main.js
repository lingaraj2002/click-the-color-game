const colors = [
  { name: "Red", hex: "#FF0000" },
  { name: "Green", hex: "#008000" },
  { name: "Blue", hex: "#0000FF" },
  { name: "Yellow", hex: "#FFFF00" },
  { name: "Orange", hex: "#FFA500" },
  { name: "Purple", hex: "#800080" },
  { name: "Pink", hex: "#FFC0CB" },
  { name: "Brown", hex: "#A52A2A" },
  { name: "Gray", hex: "#808080" },
  { name: "Black", hex: "#000000" },
  { name: "White", hex: "#FFFFFF" },
  { name: "Cyan", hex: "#00FFFF" },
  { name: "Magenta", hex: "#FF00FF" },
  { name: "Lime", hex: "#00FF00" },
  { name: "Teal", hex: "#008080" },
  { name: "Navy", hex: "#000080" },
  { name: "Maroon", hex: "#800000" },
  { name: "Olive", hex: "#808000" },
  { name: "Gold", hex: "#FFD700" },
  { name: "Silver", hex: "#C0C0C0" },
  { name: "Beige", hex: "#F5F5DC" },
  { name: "Coral", hex: "#FF7F50" },
  { name: "Ivory", hex: "#FFFFF0" },
  { name: "Khaki", hex: "#F0E68C" },
  { name: "Lavender", hex: "#E6E6FA" },
  { name: "Turquoise", hex: "#40E0D0" },
  { name: "Crimson", hex: "#DC143C" },
  { name: "Chocolate", hex: "#D2691E" },
  { name: "Indigo", hex: "#4B0082" },
  { name: "Salmon", hex: "#FA8072" },
  { name: "Orchid", hex: "#DA70D6" },
  { name: "Plum", hex: "#DDA0DD" },
  { name: "Steel Blue", hex: "#4682B4" },
  { name: "Aquamarine", hex: "#7FFFD4" },
  { name: "Slate Gray", hex: "#708090" },
  { name: "Forest Green", hex: "#228B22" },
  { name: "Sea Green", hex: "#2E8B57" },
  { name: "Midnight Blue", hex: "#191970" },
  { name: "Tomato", hex: "#FF6347" },
  { name: "Peach Puff", hex: "#FFDAB9" },
  { name: "Mint Cream", hex: "#F5FFFA" },
  { name: "Sky Blue", hex: "#87CEEB" },
  { name: "Dodger Blue", hex: "#1E90FF" },
  { name: "Sandy Brown", hex: "#F4A460" },
  { name: "Peru", hex: "#CD853F" },
  { name: "Rosy Brown", hex: "#BC8F8F" },
  { name: "Slate Blue", hex: "#6A5ACD" },
  { name: "Thistle", hex: "#D8BFD8" },
  { name: "Pale Goldenrod", hex: "#EEE8AA" },
  { name: "Lemon Chiffon", hex: "#FFFACD" },
];
// Function for show the loader
const startTab = () => {
  document.getElementById("tabShowText").style.display = "none";
  const gameLoaders = document.getElementsByClassName("game-loader");
  for (let i = 0; i < gameLoaders.length; i++) {
    gameLoaders[i].style.display = "flex";
  }
  setTimeout(goToRules, 3500);
};

// Function for go to rules page
const goToRules = () => {
  document.getElementById("home-sec").style.display = "none";
  document.getElementById("rules-sec").style.display = "grid";
};

// Function for go to gamr board
const goToBoard = () => {};
// Generate color options
const getRandomColor = (colors) => {
  const selectedColors = [];
  const selectedColor = [];
  // Pick 6 unique colors
  while (selectedColors.length <= 6) {
    const randomIndex = Math.floor(Math.random() * colors.length);
    const color = colors[randomIndex];
    // Avoid duplicate color
    if (!selectedColors.includes(color)) {
      selectedColors.push(color);
      selectedColor.push();
    }
  }
};

// go home
const handleNavigate = (value) => {
  if (value === "home") {
    document.getElementById("home-sec").style.display = "flex";
    document.getElementById("rules-sec").style.display = "none";
    document.getElementById("board-sec").style.display = "none";
  } else if (value === "retry" || value === "start") {
    document.getElementById("home-sec").style.display = "none";
    document.getElementById("rules-sec").style.display = "none";
    document.getElementById("board-sec").style.display = "block";
  } else if (value === "quit") {
    document.getElementById("home-sec").style.display = "flex";
    document.getElementById("rules-sec").style.display = "none";
    document.getElementById("board-sec").style.display = "none";
    document.getElementById("popup-cntnr").style.display = "none";
    document.getElementById("tabShowText").style.display = "block";
    const gameLoaders = document.getElementsByClassName("game-loader");
    for (let i = 0; i < gameLoaders.length; i++) {
      gameLoaders[i].style.display = "none";
    }
  } else if (value === "resume") {
    document.getElementById("popup-cntnr").style.display = "none";
  } else if (value === "menu") {
    document.getElementById("popup-cntnr").style.display = "grid";
  }
};
