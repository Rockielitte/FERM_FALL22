import React from "react";
import useFetch from "../hooks/useFetch";
import { Film } from "../types";
import LoadingScreen from "../components/Loading";
import Error from "../components/Error";
import { useState } from "react";
import FormElements from "../components/FormModal";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMemo } from "react";
import FilmRow from "../components/FilmRow";
import { DebouncedInput } from "../components/DeBoucneInput";
import { useUserStore1 } from "../store";
import { Navigate } from "react-router-dom";
type Props = {};
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
const FilmManagement = (props: Props) => {
  const user = useUserStore1((s) => s.user);
  const [searchTerm, setSearchTerm] = useState("");
  const filmFetch = useFetch<Film[]>({
    url: "https://6540b93b45bedb25bfc26e5f.mockapi.io/films",
  });
  //   const DataForm = useMemo(() => {
  //     if (filmFetch.data) {
  //       const data = filmFetch.data as Film
  //       const animal: FormSchemaType = {
  //         name: data.name,
  //         speciesId: data.species.id,
  //         cageId: data.cage.id,
  //         gender: data.gender,
  //         status: data.status,
  //         dob: new Date(data.dob),
  //         nation: data.nation,
  //         description: data.description,
  //         note: data.note,
  //         imageList: data.imageList
  //       }
  //       return animal
  //     }
  //   }, [filmFetch.data])
  //   useEffect(() => {
  //     console.log(animalDataForm)

  //     form.reset(animalDataForm)
  //   }, [animalDataForm])
  const form = useForm<formSchemaType>({ resolver: zodResolver(formSchema) });

  return (
    <div className="w-full h-full">
      {user.email == "truongquang2121@gmail.com" ? (
        <div className="w-full h-full flex flex-col gap-4 overflow-visible">
          <div className="w-full flex items-center gap-4 py-2 border-b-2 shadow-2xl px-2 rounded-lg border-slate-800 border-dotted sticky top-2 bg-white">
            <label className="text-3xl uppercase font-bold" htmlFor="search">
              {" "}
              Search
            </label>
            <DebouncedInput
              className="w-8"
              placeholder="Search all here . . ."
              id="search"
              value={searchTerm}
              onChange={(value) => {
                setSearchTerm(String(value));
                filmFetch.refecth(`search=${String(value)}`);
              }}
            />

            <FormElements
              refetch={filmFetch.refecth}
              method="POST"
              url="https://6540b93b45bedb25bfc26e5f.mockapi.io/films"
              trigger="create"
              form={form}
              items={[
                "title",
                "year",
                "cast",
                "extract",
                "genres",
                "thumbnail",
              ]}
            />
          </div>
          <div className="relative flex-1">
            {filmFetch.error ? (
              <div className="w-ful h-full">
                <Error />
              </div>
            ) : !filmFetch.isLoading ? (
              <div className="w-full h-full">
                <div className="w-full h-full  ">
                  <div className=" w-full overflow-x-auto">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 overflow-x-auto">
                      <thead className="w-full overflow-x-auto text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                          <th scope="col" className="px-2 py-3">
                            Id
                          </th>
                          <th scope="col" className="px-2 py-3">
                            Title
                          </th>
                          <th scope="col" className="px-2 py-3">
                            Year
                          </th>
                          <th
                            scope="col"
                            className="px-2 py-3 hidden md:table-cell"
                          >
                            Cast
                          </th>
                          <th
                            scope="col"
                            className="px-2 py-3 hidden md:table-cell"
                          >
                            Genres
                          </th>
                          <th scope="col" className="px-2 py-3">
                            Update
                          </th>
                          <th scope="col" className="px-2 py-3">
                            Delete
                          </th>
                        </tr>
                      </thead>
                      <tbody className="w-full overflow-auto">
                        {filmFetch?.data && filmFetch?.data?.length ? (
                          filmFetch.data.map((item) => {
                            return (
                              <FilmRow
                                item={item}
                                refetch={filmFetch.refecth}
                                key={item.id}
                              />
                            );
                          })
                        ) : (
                          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            No Films found
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            ) : (
              <LoadingScreen />
            )}
          </div>
        </div>
      ) : (
        <Navigate to={"/"} replace />
      )}
    </div>
  );
};

export default FilmManagement;
