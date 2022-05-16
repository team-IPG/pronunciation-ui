import axios from "axios";

export const api = axios.create({
  baseURL: "https://name-svc-mh6ib2ntwq-uc.a.run.app",
});

export const fetchNamesByNames = async (fun, {firstname, lastname}) => {
  let name = (firstname === "") ? lastname : firstname;
  let res = await api.get(`/findEmployee/${name}`)
  .then((r) => {
      return r.data
  }).catch((err) => {
      return err; 
  });
  fun((prev) => [...res]);
};

export const fetchNameById = async (fun, {firstname, lastname}) => {
    let name = firstname + "-" + lastname;
    let res = await api.get(`/employee/${name}`)
    .then((r) => {
        return r.data
    }).catch((err) => {
        console.error(err.response.data);
    });
    fun((prev) => [{...res}]);
};

export const updateNameById = async (content) => {
    let name = content.firstName + "-" + content.lastName;
    await api.post(`/employeePreferences/${name}`, {...content});
};

export const deleteNameById = async (fun, {firstname, lastname}) => {
    let name = firstname + "-" + lastname;
    let res = await api.get(`/employee/${name}`)
    .then((r) => {
        return r.data
    }).catch((err) => {
        console.error(err.response.data);
    });
    fun((prev) => [{...res}]);
};
