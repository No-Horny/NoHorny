interface IBreathingModal {
  name: string;
  description: string;
  steps: number[];
  showBreathingModal: boolean;
  showPreBreathingModal: boolean;
}

// Steps array = Inhale, Hold, Exhale and Rest
export const techniques: IBreathingModal[] = [
  {
    name: "Deep Breathing",
    description:
      "Deep breathing is an easy way to relax and let your worries go. You can do it pretty much anywhere, and it only takes a few minutes. Also called belly breathing, diaphragmatic breathing, and abdominal breathing, it helps ease stress. It can also lower your blood pressure and relax tense muscles.",
    steps: [4, 4, 6, 0],
    showBreathingModal: false,
    showPreBreathingModal: false,
  },
  {
    name: "Continuous Breathing",
    description:
      "Continuous breathing is a technique used by singers and wind instrumentalists to help create a continuous and uninterrupted tone. The technique, which requires inhaling through the nose, allows you to maintain sound for long periods of time.",
    steps: [4, 0, 4, 2],
    showBreathingModal: false,
    showPreBreathingModal: false,
  },
  {
    name: "Box Breathing",
    description:
      "This technique can be beneficial to anyone, especially those who want to meditate or reduce stress. It's used by everyone from athletes to U.S. Navy SEALs, police officers, and nurses.",
    steps: [4, 4, 4, 4],
    showBreathingModal: false,
    showPreBreathingModal: false,
  },
  {
    name: "Equal Breathing",
    description:
      "This breathing technique focuses on making your inhales and exhales the same length. Making your breath smooth and steady can help bring about balance and equanimity.",
    steps: [4, 0, 4, 0],
    showBreathingModal: false,
    showPreBreathingModal: false,
  },
  {
    name: "4-7-8 Breathing",
    description:
      "The 4-7-8 breathing technique, also known as “relaxing breath”, this breathing pattern aims to reduce anxiety or help people get to sleep.",
    steps: [4, 7, 8, 0],
    showBreathingModal: false,
    showPreBreathingModal: false,
  },
  {
    name: "Rhythmic Breathing",
    description:
      "Rhythmic breathing is calming, and awareness of breathing draws your focus toward calm. It allows you to remain as relaxed as possible, quieting any stress in the body that could inhibit performance.",
    steps: [6, 3, 6, 3],
    showBreathingModal: false,
    showPreBreathingModal: false,
  },
];
