const { faker } = require("@faker-js/faker"); // 自动生成数据
const { nanoid } = require("@reduxjs/toolkit");

module.exports = () => {
  const usersList = [];
  const productList = [];
  for (let i = 1; i <= 5; i++) {
    usersList.push({
      id: nanoid(),
      name: faker.name.firstName(),
      email: faker.internet.email(),
      sex: faker.name.sexType(),
    });

    productList.push({
      id: nanoid(),
      name: faker.commerce.productName(),
      description: faker.commerce.productDescription(),
    });
  }
  return { users: usersList, product: productList };
};
