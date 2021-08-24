interface IBreathingModal {
  name: {
    pt: string;
    en: string;
  };
  description: {
    pt: string;
    en: string;
  };
  steps: number[];
  showBreathingModal: boolean;
  showPreBreathingModal: boolean;
}

// Steps array = Inhale, Hold, Exhale and Rest
export const techniques: IBreathingModal[] = [
  {
    name: {
      pt: "Respiração profunda",
      en: "Deep Breathing",
    },
    description: {
      pt: "A respiração profunda é uma maneira fácil de relaxar e deixar suas preocupações de lado. Você pode fazer isso em qualquer lugar e leva apenas alguns minutos. Também chamada de respiração abdominal e respiração diafragmática, essa respiração ajuda a aliviar o estresse. Também diminui a pressão arterial e alivia a tensão nos músculos.",
      en: "Deep breathing is an easy way to relax and let your worries go. You can do it pretty much anywhere, and it only takes a few minutes. Also called belly breathing, diaphragmatic breathing, and abdominal breathing, it helps ease stress. It can also lower your blood pressure and relax tense muscles.",
    },
    steps: [4, 4, 6, 0],
    showBreathingModal: false,
    showPreBreathingModal: false,
  },
  {
    name: {
      pt: "Respiração continua",
      en: "Continuous Breathing",
    },
    description: {
      pt: "A respiração continua, é uma técnica usada por cantores e instrumentistas de sopro para ajudar a criar um contínuo e ininterrupto tom. Essa técnica, que requer inspirações pelo nariz, permite que você mantenha sons por longos períodos.",
      en: "Continuous breathing is a technique used by singers and wind instrumentalists to help create a continuous and uninterrupted tone. The technique, which requires inhaling through the nose, allows you to maintain sound for long periods of time.",
    },
    steps: [4, 0, 4, 2],
    showBreathingModal: false,
    showPreBreathingModal: false,
  },
  {
    name: {
      pt: "Respiração de caixa",
      en: "Box Breathing",
    },
    description: {
      pt: "Esta técnica pode beneficiar qualquer um, especialmente aqueles que querem meditar ou reduzir o estresse. Ela é usada por todos os atletas dos Estados Unidos, marinheiros, policiais e enfermeiras.",
      en: "This technique can be beneficial to anyone, especially those who want to meditate or reduce stress. It's used by everyone from athletes to U.S. Navy SEALs, police officers, and nurses.",
    },
    steps: [4, 4, 4, 4],
    showBreathingModal: false,
    showPreBreathingModal: false,
  },
  {
    name: {
      pt: "Respiração igual",
      en: "Equal Breathing",
    },
    description: {
      pt: "Essa técnica de atenção plena envolve inspirar pelo mesmo tempo que expirar. Tornar a respiração suave e estável pode ajudar a trazer equilíbrio e equanimidade.",
      en: "This mindful technique involves inhaling for the same amount of time as exhaling. Making your breath smooth and steady can help bring about balance and equanimity.",
    },
    steps: [4, 0, 4, 0],
    showBreathingModal: false,
    showPreBreathingModal: false,
  },
  {
    name: {
      pt: "Respiração 4-7-8",
      en: "4-7-8 Breathing",
    },
    description: {
      pt: "Esse padrão de respiração visa reduzir a ansiedade ou ajudar as pessoas a dormir. Alguns praticantes afirmam que o método ajuda as pessoas a dormir em 1 minuto.",
      en: "This breathing pattern aims to reduce anxiety or help people get to sleep. Some practitioners claim that the method helps people get to sleep in 1 minute.",
    },
    steps: [4, 7, 8, 0],
    showBreathingModal: false,
    showPreBreathingModal: false,
  },
  {
    name: {
      pt: "Respiração Ritmica",
      en: "Rhythmic Breathing",
    },
    description: {
      pt: "A respiração rítmica é uma técnica de respiração simples para iniciantes. Pode ser praticado por pessoas de qualquer idade ou condição de saúde, desde que não haja dificuldade para respirar.",
      en: "Rhythmic breathing is a simple breathing technique for beginners. It can be practiced by person of any age or health condition as long as there is no difficulty in breathing.",
    },
    steps: [6, 3, 6, 3],
    showBreathingModal: false,
    showPreBreathingModal: false,
  },
];
