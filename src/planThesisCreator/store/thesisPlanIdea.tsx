import { atom } from "jotai";
import { produce } from "immer";
import { StringKeys } from "@/shared/utils/interfaces";

interface IPlanThesisIdea {
  newKnowledge: string;
  title: string;
  ideaDescription: string;
  geographicLocation: string;
}

const atomPlanThesisIdea = atom<IPlanThesisIdea>({
  newKnowledge: "",
  title: "",
  ideaDescription: "",
  geographicLocation: "",
});

type TThesisPlanIdeaFieldsString = StringKeys<IPlanThesisIdea>;

export const atomGetPlanThesisIdea = atom((get) => get(atomPlanThesisIdea));

export const atomSetPlanThesisIdeaFieldString = atom(
  null,
  (
    _get,
    set,
    { field, value }: { field: TThesisPlanIdeaFieldsString; value: string },
  ) => {
    set(
      atomPlanThesisIdea,
      produce((draft) => {
        draft[field] = value;
      }),
    );
  },
);
