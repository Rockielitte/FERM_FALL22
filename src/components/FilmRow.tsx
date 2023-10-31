import React from "react";
import { Film } from "../types";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod/src/zod.js";
import FormElements from "./FormModal";
import PopUpModal from "./Modal";

type Props = {
  item: Film;
  refetch: () => void;
};
const formSchema = z.object({
  id: z.string().optional(),
  title: z.string().min(1),
  year: z.string().min(1),
  cast: z.string().min(1),
  genres: z.string().min(1),
  extract: z.string().min(1),
  thumbnail: z.string().min(1),
  videoUrl: z.string().optional(),
});
type formSchemaType = z.infer<typeof formSchema>;
const FilmRow = ({ item, refetch }: Props) => {
  const form = useForm<formSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: item.title,
      year: item.year,
      cast: item.cast.join(","),
      genres: item.genres.join(","),
      extract: item.extract,
      thumbnail: item.thumbnail,
      videoUrl: item.videoUrl,
    },
  });
  return (
    <tr
      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
      key={item.id}
    >
      <td className="px-2 py-4">{item.id}</td>
      <td className="px-2 py-4 font-semibold text-lg">{item.title}</td>
      <td className="px-2 py-4 ">{item.year}</td>
      <td className="px-2 py-4 hidden md:table-cell">{item.cast.toString()}</td>
      <td className="px-2 py-4 hidden md:table-cell">
        {item.genres.toString()}
      </td>
      <td className="px-2 py-4">
        <FormElements
          refetch={refetch}
          method="PUT"
          url={`https://6540b93b45bedb25bfc26e5f.mockapi.io/films/${item.id}`}
          trigger="Update"
          form={form}
          items={[
            "title",
            "year",
            "cast",
            "extract",
            "genres",
            "thumbnail",
            "videoUrl",
          ]}
        />
      </td>
      <td>
        <PopUpModal id={item.id} refetch={refetch} />
      </td>
    </tr>
  );
};

export default FilmRow;
