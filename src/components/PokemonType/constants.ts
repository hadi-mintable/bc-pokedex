import { Types, Sizes } from "./definitions";

export const sizeStyle: { [key in Sizes]: string } = {
  sm: `
    font-size: 0.75rem;
    line-height: 18px;
  `,
  md: `
  font-size: 1rem;
  padding: 0.5rem;
  min-width: 105px;
  `,
};

export const typeStyle: { [key in Types]: string } = {
  fire: `
    background-color: #fd7d24;
    color: #fff;`,
  flying: `
    background: linear-gradient(180deg, #3dc7ef 50%, #bdb9b8 50%);
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
    background: linear-gradient(180deg, #eed535 50%, #eed535 50%);
    background-color: #eed535;
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
  ghost: `
    background-color: #7b62a3;
    color: #fff;
  `,
  dragon: `
    background: linear-gradient(180deg, #53a4cf 50%, #f16e57 50%);
    background-color: #53a4cf;
    color: #fff;
  `,
  ice: `
    background: linear-gradient(180deg, #51c4e7 50%, #51c4e7 50%);
    background-color: #51c4e7;
    color: #212121;
  `,
  fairy: `
    background: linear-gradient(180deg, #fdb9e9 50%, #fdb9e9 50%);
    background-color: #fdb9e9;
    color: #212121;
  `,
  dark: `
    background: linear-gradient(180deg, #707070 50%, #707070 50%);
    background-color: #707070;
    color: #fff;
  `,
};
