class UserModel {
  constructor(userId, firstName, lastName, age, email, address) {
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
  }
}
module.exports = UserModel;