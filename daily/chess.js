for (i = 1; i <= 8; i++) {
  let chess = "";
  for (j = 1; j <= 8; j++) {
    if ((i % 2 !== 0 && j % 2 === 0) || (i % 2 === 0 && j % 2 !== 0)) {
      chess += "#";
    } else {
      chess += " ";
    }
  }
  console.log(chess);
}

// Output
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
