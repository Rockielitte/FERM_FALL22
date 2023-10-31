import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import { register } from "module";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import {
  FieldValues,
  Path,
  UseFormReturn,
  SubmitHandler,
} from "react-hook-form";
import { IoMdCreate } from "react-icons/io";
import { CiEdit } from "react-icons/ci";

type Props<T extends FieldValues> = {
  form: UseFormReturn<T>;
  items: Path<T>[];
  trigger: string;
  url: string;
  method: string;
  refetch: () => void;
};
const FormElements = <T extends FieldValues>({
  form,
  items,
  trigger,
  url,
  method,
  refetch,
}: Props<T>) => {
  const [openModal, setOpenModal] = useState<string | undefined>();
  const props = { openModal, setOpenModal };
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = form;
  const submitHandler: SubmitHandler<T> = async (data) => {
    const body = {
      ...data,
      cast: (data.cast as string).split(","),
      genres: (data.genres as string).split(","),
    };
    console.log(body, "hajsdf");

    await axios<T>({
      url: url,
      data: body,
      method: method,
      headers: { "content-type": "application/json" },
    })
      .then((res) => {
        toast.success("Successfully!");
        props.setOpenModal(undefined);
        refetch && refetch();
      })
      .catch((err) => {
        if (axios.isAxiosError(err)) {
          toast.error("UnSuccessfully");
        }
      });
  };
  return (
    <>
      <Button
        onClick={() => props.setOpenModal("form-elements")}
        color={trigger == "create" ? "success" : "warning"}
      >
        {trigger == "create" ? (
          <IoMdCreate className="text-2xl" />
        ) : (
          <CiEdit className="text-2xl" />
        )}
        {trigger}
      </Button>
      <Modal
        show={props.openModal === "form-elements"}
        size="md"
        popup
        onClose={() => props.setOpenModal(undefined)}
      >
        <Modal.Header />
        <Modal.Body>
          <div className="max-h-[400px] overflow-auto flex flex-col gap-2 ">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white uppercase text-center">
              {trigger} film
            </h3>
            <form
              className="w-full px-2 flex flex-col overflow-auto gap-2"
              onSubmit={handleSubmit(submitHandler)}
            >
              {items.map((item) => (
                <div className="flex flex-col gap-2">
                  <Label htmlFor={item} value={item} className="capitalize" />
                  <TextInput
                    {...register(item)}
                    placeholder={`Type your ${item} . . .`}
                  />
                  {errors[item as Path<T>] && (
                    <span className="p-1 px-2 text-sm border rounded-md border-red-500 text-red-500 bg-red-50 font-medium">
                      {errors[item]?.message as string}
                    </span>
                  )}
                </div>
              ))}
              <Button type="submit" disabled={isSubmitting}>
                Submit
              </Button>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};
export default FormElements;
