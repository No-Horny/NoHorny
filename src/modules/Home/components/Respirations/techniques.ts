interface IRespirationTechnique {
  name: string;
  description: string;
  steps: number[];
}

export const techniques: IRespirationTechnique[] = [
  {
    name: "Deep Breathing",
    description: "",
    // breath in, hold, breath out and rest
    steps: [4, 4, 6, 0],
  },
  {
    name: "Continuous Breathing",
    description: "",
    // breath in, hold, breath out and rest
    steps: [4, 0, 4, 2],
  },
];
