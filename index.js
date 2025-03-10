const farmAnimals = 'cow horse sheep pig chicken';
const [moo, neigh, baa, oink, cluck] = farmAnimals.split(' ');

console.log(moo);     // "cow"
console.log(neigh);   // "horse"
console.log(baa);     // "sheep"
console.log(oink);    // "pig"
console.log(cluck);   // "chicken"


const [bessie, dolly, babe, little] = ['cow', 'sheep', 'pig', 'chicken'];

console.log(bessie);  // "cow"
console.log(dolly);   // "sheep"
console.log(babe);    // "pig"
console.log(little);  // "chicken"


const [blackAndWhite, black, pink] = ['cow', 'sheep', 'pig'];

console.log(blackAndWhite); // "cow"
console.log(black);         // "sheep"
console.log(pink);          // "pig"


const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
const [red, orange, yellow, green, blue, indigo, violet] = colors;

console.log(red);    // "red"
console.log(orange); // "orange"
console.log(yellow); // "yellow"
console.log(green);  // "green"
console.log(blue);   // "blue"
console.log(indigo); // "indigo"
console.log(violet); // "violet"


const [r, o, y, g, b, i, v] = colors;

console.log(r); // "red"
console.log(o); // "orange"
console.log(y); // "yellow"
console.log(g); // "green"
console.log(b); // "blue"
console.log(i); // "indigo"
console.log(v); // "violet"

const [, , , , , indg] = colors;

console.log(indg); // "indigo"


const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};

const { muppetName, color, song, job, partner } = muppet;

console.log(muppetName); // "Miss Piggy"
console.log(color);      // "pink"
console.log(song);       // "Never Before, Never Again"
console.log(job);        // "Cast member of The Muppet Show"
console.log(partner);    // "Kermit"


const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};

const {
  album: {
    theMuppetMovie: { song2, song4 }
  },
  nestedJob,
  nestedPartner
} = nestedMuppet;

console.log(song2);    // "Moving Right Along"
console.log(song4);    // "I Hope That Something Better Comes Along"
console.log(nestedJob); // "Host of The Muppet Show"
console.log(nestedPartner); // "Miss Piggy"
