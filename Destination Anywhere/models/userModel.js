class UserModel {
  constructor(userId, firstName, lastName, age, email, address, user_name) {
    this.userId = userId;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.email = email;
    this.add1 = address.street;
    this.city = address.city;
    this.state = address.state;
    this.zip = address.zip;
    this.country = address.country;
    this.username = user_name;
  }
}
module.exports = UserModel;