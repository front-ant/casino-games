var faker = require('faker')

function generateUsers () {
  var users = []

  for (var id = 0; id < 10; id++) {
    var userName = faker.internet.userName()
    var userEmail = faker.internet.exampleEmail()

    users.push({
      "id": id,
      "user": userName,
      "email": userEmail,
      "auth_token": "yes"
    })
  }

  return { "users": users }
}



module.exports = generateUsers
