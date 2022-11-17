import React, { useState } from "react";
import { AddPokemonFormModalProps, FormInputs } from "./definitions";
import { Types as PokemonTypes } from "@components/PokemonType/definitions";
import {
  ModalWrapper,
  ModalBody,
  SubmitBtn,
  Title,
  Fieldset,
  Form,
  CloseBtn,
  SuccessTitle,
} from "./style";
import { useForm } from "react-hook-form";
import { uid } from "uid";
import { set, ref } from "firebase/database";
import { db } from "../../firebase";
import useUploadImageToFirebase from "@hooks/useUploadImageToFirebase";
import Loader from "@assets/images/three-dots.svg";

const AddPokemonFormModal: React.FC<AddPokemonFormModalProps> = ({
  isOpen,
  closeModal,
}) => {
  const { register, handleSubmit, reset } = useForm();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isAddPokefriendSuccess, setIsAddPokefriendSuccess] =
    useState<boolean>(false);

  const handleUpload = useUploadImageToFirebase();

  const addPokemon = async (data: any) => {
    setIsLoading(true);
    const uuid = uid();
    const id = `com-${uuid}`;

    const imageURL = await handleUpload({ file: data?.image?.item(0) });

    await set(ref(db, `/${id}`), {
      pokemon: {
        id,
        name: data?.name,
        pokemon_species_id: id,
        height: data?.height,
        weight: data?.weight,
        pokemon_sprites: [
          {
            sprites: JSON.stringify({
              front_default: imageURL,
            }),
          },
        ],
        pokemon_type: [
          {
            pokemon_v2_type: {
              name: data?.type,
            },
          },
        ],
      },
    });

    setIsAddPokefriendSuccess(true);
  };

  const handleCloseModal = () => {
    setIsAddPokefriendSuccess(false);
    reset();
    closeModal();
  };

  return (
    <ModalWrapper isOpen={isOpen}>
      <ModalBody>
        <CloseBtn onClick={handleCloseModal}>&#x2715;</CloseBtn>
        {isAddPokefriendSuccess ? (
          <SuccessTitle>
            <img
              src={
                "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/512px-Pok%C3%A9_Ball_icon.svg.png"
              }
              alt="pokeball"
            />
            PokéFriend
            <br />
            successfully added!
          </SuccessTitle>
        ) : (
          <>
            <Title>
              <img
                src={
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/512px-Pok%C3%A9_Ball_icon.svg.png"
                }
                alt="pokeball"
              />
              Add a PokéFriend
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
              <Fieldset>
                <label>Type</label>
                <select {...register(FormInputs.TYPE)}>
                  {Object.keys(PokemonTypes)?.map((type: any, i: number) => (
                    <option key={i} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </Fieldset>
              <SubmitBtn type="submit" title="Submit">
                {isLoading ? <img src={Loader} alt="spinner" /> : "Submit"}
              </SubmitBtn>
            </Form>
          </>
        )}
      </ModalBody>
    </ModalWrapper>
  );
};

export default AddPokemonFormModal;
