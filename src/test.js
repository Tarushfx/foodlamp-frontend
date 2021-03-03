var axios = require("axios");
async function test() {
  try {
    let temp = await axios.post("http://localhost:4000/diet", {
      email: "tarushbajaj3@gmail.com",
      diet: {
        date: new Date(2021, 9, 10),
        diet: {
          earlyMorning: {
            name: "horny",
            calories: 20,
          },
        },
      },
    });
    console.log(temp);
  } catch (ex) {
    console.log(ex.message);
  }
}
test();

let x = async () => {
  try {
    let y = await axios.get(
      "https://www.reddit.com/r/food/comments/ltpahl/homemade_chocolate_cupcakes_decorated_with/"
    );

    console.log(y);
  } catch (ex) {
    console.log(ex.message);
  }
};
// x();
