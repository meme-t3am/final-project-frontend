// const wrapper = document.getElementById("tiles");

// const columns = 0;
// const rows = 0;
// const toggled = false;

// const toggle = () => {
//   if (toggled) {
//     wrapper.classList.remove('toggled');
//   }

//   document.body.classList.toggle('toggled');
// };

// const handleOnClick = (index) => {
//   toggle();

//   anime({
//     targets: '.tile',
//     opacicty: toggled ? 0 : 1,
//     delay: Anime.staggered(50, {
//       grid: [columns, rows],
//       from: index,
//     }),
//   });
// }

// const createTile = (index) => {
//   const tile = document.createElement('div');

//   tile.classList.add('tile');

//   return tile;
// };

// const createTiles = (quantity) => {
//   Array.from(Array(quantity)).map((title, index) => {
//     wrapper.appendChild(createTile(index));
//   });
// };

// createTiles(columns * rows);
