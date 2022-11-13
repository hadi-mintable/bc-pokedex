import { Types } from "./definitions";

export const typeStyle: { [key in Types]: string } = {
  fire: `
    background-color: #fd7d24;
    color: #fff;`,
  flying: `
    background-color: #3dc7ef;
    color: #212121;`,
  grass: `
    background-color: #9bcc50;
    color: #212121;`,
  bug: `background-color: #729f3f;
    color: #fff;`,
  water: `background-color: #4592c4;
    color: #fff;`,
  poison: `background-color: #b97fc9;
    color: #fff;`,
  normal: `background-color: #a4acaf;
    color: #212121;`,
};
