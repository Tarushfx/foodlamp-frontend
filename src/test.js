var axios = require("axios");
async function test() {
  try {
    let temp = await axios.post("axios://localhost:4000/diet", {
      email: "tarushbajaj3@gmail.com",
      diet: {
        date: new Date(2020, 1, 2),
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
