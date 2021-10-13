setTimeout(() => {
  console.log("2 Seconds");
}, 2000);

const names = ["Andrew", "Jen", "Jess"];
const shortNames = names.filter((name) => {
  return name.length <= 4;
});

const geocode = (address, callback) => {
  setTimeout((address) => {
    const data = {
      latitude: 0,
      longitude: 0,
    };
    callback(data);
  }, 1500);
};
geocode("Phili", (data) => {
  console.log(data);
});
const add = (x, y, callback) => {
  setTimeout(() => {
    callback(x + y);
  }, 2000);
};
add(1, 4, (sum) => {
  console.log(sum);
});
