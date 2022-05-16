const names = require("./json/names.json");

exports.getEmployeesJSON = (req, res) => {
  let _res = [];
  let name = req.params.name.toLowerCase();
  if (name) {
    _res = names["message"].filter(
      (item) =>
        item.firstName.toLowerCase().startsWith(name) ||
        item.lastName.toLowerCase().startsWith(name)
    );
  } else {
    res.json([]);
    return;
  }
  res.json(_res);
};

exports.getEmployeeByIdJSON = (req, res) => {};

exports.updateEmployeePreferencesJSON = (req, res) => {};
