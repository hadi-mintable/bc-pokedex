import React from "react";
import { AddPokemonFormModalProps, FormInputs } from "./definitions";
import {
  ModalWrapper,
  ModalBody,
  SubmitBtn,
  Title,
  Fieldset,
  Form,
  CloseBtn,
} from "./style";
import { useForm } from "react-hook-form";
import { uid } from "uid";
import { set, ref } from "firebase/database";
import { db } from "../../firebase";

const AddPokemonFormModal: React.FC<AddPokemonFormModalProps> = ({
  isOpen,
  closeModal,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    // formState: { errors },
  } = useForm();

  const addPokemon = (data: any) => {
    console.log(data);
    const uuid = uid();
    const id = `com-${uuid}`;
    set(ref(db, `/${id}`), {
      pokemon: {
        id,
        name: data?.name,
        pokemon_species_id: id,
        height: data?.height,
        weight: data?.weight,
        pokemon_sprites: [
          {
            sprites:
              "{front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png'}",
          },
        ],
        pokemon_type: [
          {
            pokemon_v2_type: {
              name: "grass",
            },
          },
        ],
      },
    });
  };

  const handleCloseModal = () => {
    reset();
    closeModal();
  };

  return (
    <ModalWrapper isOpen={isOpen}>
      <ModalBody>
        <CloseBtn onClick={handleCloseModal}>&#x2715;</CloseBtn>
        <Title>
          <img
            src={
              "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/512px-Pok%C3%A9_Ball_icon.svg.png"
            }
            alt="pokeball"
          />
          Add a Community Pokemon
        </Title>
        <Form onSubmit={handleSubmit(addPokemon)}>
          <Fieldset>
            <label>Name</label>
            <input
              type="text"
              placeholder="e.g. Bulbasaur"
              {...register(FormInputs.NAME, {
                required: true,
              })}
            />
          </Fieldset>
          <Fieldset>
            <label>Height</label>
            <input type="number" {...register(FormInputs.HEIGHT)} />
          </Fieldset>
          <Fieldset>
            <label>Weight</label>
            <input type="number" {...register(FormInputs.WEIGHT)} />
          </Fieldset>
          <Fieldset>
            <label>Image</label>
            <input type="file" {...register(FormInputs.IMAGE)} />
          </Fieldset>
          <SubmitBtn type="submit" title="Submit" />
        </Form>
      </ModalBody>
    </ModalWrapper>
  );
};

export default AddPokemonFormModal;
