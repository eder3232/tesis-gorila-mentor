import { atom } from "jotai";
import { produce } from "immer";
import { StringKeys } from "@/shared/utils/interfaces";

type TNumberOfStudents = 1 | 2;

interface IThesisPlanSettings {
  numberOfStudents: TNumberOfStudents;
  student1: string;
  student2: string;
}

// Nuevo tipo que contiene solo las claves cuyos valores son string
type TThesisPlanFieldsString = StringKeys<IThesisPlanSettings>;

const atomThesisPlanSettings = atom<IThesisPlanSettings>({
  numberOfStudents: 1,
  student1: "Alumno1",
  student2: "Alumno2",
});

const atomGetThesisPlanSettings = atom((get) => get(atomThesisPlanSettings));

export const atomSetThesisPlanSettingsString = atom(
  null,
  (
    _get,
    set,
    { field, newValue }: { field: TThesisPlanFieldsString; newValue: string },
  ) => {
    set(
      atomThesisPlanSettings,
      produce((draft) => {
        draft[field] = newValue;
      }),
    );
  },
);

export const atomSetThesisPlanNumberOfStudents = atom(
  null,
  (get, set, newValue: TNumberOfStudents) => {
    set(
      atomThesisPlanSettings,
      produce((draft) => {
        draft.numberOfStudents = newValue;
      }),
    );
  },
);

export const atomSetThesisPlanSettingsStudents = atom(
  null,
  (
    get,
    set,
    {
      studentName,
      studentNumber,
    }: { studentName: string; studentNumber: TNumberOfStudents },
  ) => {
    set(
      atomThesisPlanSettings,
      produce((draft) => {
        if (studentNumber === 1) {
          draft.student1 = studentName;
        } else {
          draft.student2 = studentName;
        }
      }),
    );
  },
);
