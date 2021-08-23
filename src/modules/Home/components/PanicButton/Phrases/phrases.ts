import i18n from "../../../../../i18n";

export interface IPhrase {
  phrase: string;
  author: string;
}

const { t } = i18n.global;

export const phrases: IPhrase[] = [
  {
    phrase: t("MahatmaGandhiPhrase1"),
    author: "Mahatma Gandhi",
  },
  {
    phrase: t("NelsonMandelaPhrase1"),
    author: "Nelson Mandela",
  },
  {
    phrase: t("BoJacksonPhrase1"),
    author: "Bo Jackson",
  },
  {
    phrase: t("JimRohnPhrase1"),
    author: "Jim Rohn",
  },
  {
    phrase: t("AlbertEinsteinPhrase1"),
    author: "Albert Einstein",
  },
  {
    phrase: t("MortimerJAdlerPhrase1"),
    author: "Mortimer J. Adler",
  },
  {
    phrase: t("LesBrownPhrase1"),
    author: "Les Brown",
  },
  {
    phrase: t("ChrisGrosserPhrase1"),
    author: "Chris Grosser",
  },
  {
    phrase: t("ColinRDavisPhrase1"),
    author: "Colin R. Davis",
  },
];
