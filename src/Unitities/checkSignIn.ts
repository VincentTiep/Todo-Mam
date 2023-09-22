import datas from "../Unitities/data.json";

const checkForUser = (user: FormDataEntryValue, password: string) => {
  return datas
    .map((data) => {
      return JSON.stringify({ text: data.username, password: data.password });
    })
    .includes(JSON.stringify({ text: user, password: password }));
};
const checkForEmail = (user: FormDataEntryValue, password: string) => {
  return datas
    .map((data) => {
      return JSON.stringify({ text: data.email, password: data.password });
    })
    .includes(JSON.stringify({ text: user, password: password }));
};

const checkForPhoneNumber = (user: FormDataEntryValue, password: string) => {
  return datas
    .map((data) => {
      return JSON.stringify({
        text: data.phonenumber,
        password: data.password,
      });
    })
    .includes(JSON.stringify({ text: user, password: password }));
};

export const checkSignIn = (user: FormDataEntryValue, password: string) =>
  checkForUser(user, password) ||
  checkForEmail(user, password) ||
  checkForPhoneNumber(user, password);
