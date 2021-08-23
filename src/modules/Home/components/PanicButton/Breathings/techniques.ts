import i18n from "../../../../../i18n";

interface IBreathingModal {
  name: string;
  description: string;
  steps: number[];
  showBreathingModal: boolean;
  showPreBreathingModal: boolean;
}

const { t } = i18n.global;

// Steps array = Inhale, Hold, Exhale and Rest
export const techniques: IBreathingModal[] = [
  {
    name: t("DeepBreathing"),
    description: t('DeepBreathingDescription'),
    steps: [4, 4, 6, 0],
    showBreathingModal: false,
    showPreBreathingModal: false,
  },
  {
    name: t('ContinuousBreathing'),
    description: t('ContinuousBreathingDescription'),
    steps: [4, 0, 4, 2],
    showBreathingModal: false,
    showPreBreathingModal: false,
  },
  {
    name: t('BoxBreathing'),
    description: t('BoxBreathingDescription'),
    steps: [4, 4, 4, 4],
    showBreathingModal: false,
    showPreBreathingModal: false,
  },
  {
    name: t('EqualBreathing'),
    description: t('EqualBreathingDescription'),
    steps: [4, 0, 4, 0],
    showBreathingModal: false,
    showPreBreathingModal: false,
  },
  {
    name: t('4-7-8Breathing'),
    description: t('4-7-8BreathingDescription'),
    steps: [4, 7, 8, 0],
    showBreathingModal: false,
    showPreBreathingModal: false,
  },
  {
    name: t('RhythmicBreathing'),
    description: t('RhythmicBreathingDescription'),
    steps: [6, 3, 6, 3],
    showBreathingModal: false,
    showPreBreathingModal: false,
  },
];
