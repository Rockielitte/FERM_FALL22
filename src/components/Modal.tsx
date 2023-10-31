import { Button, Modal } from "flowbite-react";
import { CiWarning } from "react-icons/ci";
import { useState } from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import axios from "axios";
import { toast } from "react-toastify";
type Props = {
  id: string;
  refetch?: () => void;
};
export default function PopUpModal({ id, refetch }: Props) {
  const [openModal, setOpenModal] = useState<string | undefined>();
  const props = { openModal, setOpenModal };

  return (
    <>
      <Button onClick={() => props.setOpenModal("pop-up")} color="failure">
        <AiFillDelete className="text-2xl" /> Delete
      </Button>
      <Modal
        show={props.openModal === "pop-up"}
        size="md"
        popup
        onClose={() => props.setOpenModal(undefined)}
      >
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <CiWarning className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Are you sure you want to delete this item?
            </h3>
            <div className="flex justify-center gap-4">
              <Button
                color="failure"
                onClick={() => {
                  axios({
                    url: `https://6540b93b45bedb25bfc26e5f.mockapi.io/films/${id}`,
                    method: "DELETE",
                    headers: { "content-type": "application/json" },
                  })
                    .then((res) => {
                      toast.success("Delete successfully !");
                      props.setOpenModal(undefined);
                      refetch && refetch();
                    })
                    .catch((err) => {
                      if (axios.isAxiosError(err)) {
                        toast.error("Delete error !");
                      }
                    });
                }}
              >
                Yes, I'm sure
              </Button>
              <Button
                color="gray"
                onClick={() => props.setOpenModal(undefined)}
              >
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
