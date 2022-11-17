export type AddPokemonFormModalProps = {
  isOpen: boolean;
  closeModal: () => void;
};

export type ModalWrapperProps = {
  isOpen: boolean;
};

export enum FormInputs {
  NAME = "name",
  HEIGHT = "height",
  WEIGHT = "weight",
  IMAGE = "image",
  TYPE = "type",
}

export type FormData = {
  name: string;
  height?: number;
  weight?: number;
  image?: FileList;
  type: string;
};
