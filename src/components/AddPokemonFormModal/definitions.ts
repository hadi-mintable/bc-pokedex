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
