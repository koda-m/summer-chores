function getTired() {
  return Math.random() < 0.3;
}

function mowYard(name) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`${name} mowed the yard.`);
      resolve();
    }, 2000);
  });
}

function weedEat(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (getTired()) {
        reject(`${name} fell asleep after mowing the yard.`);
      } else {
        console.log(`${name} finished using the weed eater.`);
        resolve();
      }
    }, 1500);
  });
}

function trimHedges(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (getTired()) {
        reject(`${name} fell asleep after weed eating the yard.`);
      } else {
        console.log(`${name} finished trimming the hedges.`);
        resolve();
      }
    }, 1000);
  });
}

function collectWood(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (getTired()) {
        reject(`${name} fell asleep after trimming the hedges.`);
      } else {
        console.log(`${name} finished collecting wood.`);
        resolve();
      }
    }, 2500);
  });
}

function waterGarden(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (getTired()) {
        reject(`${name} fell asleep after collecting wood.`);
      } else {
        console.log(`${name} finished watering the garden.`);
        resolve();
      }
    }, 500);
  });
}

async function doSummerChores(name) {
  try {
    await mowYard(name);
    await weedEat(name);
    await trimHedges(name);
    await collectWood(name);
    await waterGarden(name);
    console.log(`${name} finished all their chores!`);
  } catch (error) {
    console.log(error);
  }
}

doSummerChores("Bob");