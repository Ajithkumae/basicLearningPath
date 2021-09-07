// var name = "PeterParker";
// var age = 21;
// var isMarried = false;
// var array = ["ajith", "anil"];

// console.log("string type", name, "arraytype", array[0]);

const test = () => {
  //parent block
  {
    //child block
    let ajith = 123; // can be manuplated can't use in other blocks
    var ajithVar = 1234; // can be manuplated can use in parents blocks
    const ajithConst = 12; // can't be manuplated can't use in other blocks
    console.log(ajithConst);
  }
  console.log(ajithVar);
};

test();
