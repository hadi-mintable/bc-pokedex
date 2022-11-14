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
  psychic: `background-color: #f366b9;
    color: #fff;`,
  electric: `
    background: linear-gradient(180deg, #9eb7b8 50%, #9eb7b8 50%);
    background-color: #9eb7b8;
    color: #212121;`,
  steel: `
  background: linear-gradient(180deg, #9eb7b8 50%, #9eb7b8 50%);
    background-color: #9eb7b8;
    color: #212121;`,
  rock: `background-color: #a38c21;
    color: #fff;`,
  ground: `
  background: linear-gradient(180deg, #f7de3f 50%, #ab9842 50%);
    background-color: #f7de3f;
    color: #212121;`,
};
