function youCreateThisFunctionName(tempurature) {
 if (tempurature < 0) {
     return "winter jacket ok";
 } else if (tempurature <= 12) {
     return "a hat and shorts are ok with a normal jacket";
 } else if (tempurature <= 17) {
     return "shorts and a sommer hat and a t-shirt ok";
 } else if (tempurature <= 26) {
     return "t-shirt and underpants are ok";
 } else if (tempurature <= 37) {
     return "its really hot maybe swimming shorts and a t-shirt ok";
 } else {
     return "nothing?? you die lol";
 }
};
var clothesToWear = youCreateThisFunctionName(18);
console.log(clothesToWear); // Logs out: t-shirt and underpants are ok"
