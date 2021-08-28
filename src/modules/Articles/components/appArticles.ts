import { sendUserByPlataform } from "@/shared/utils/sendUserByPlataform";

interface IArticle {
  title: {
    pt?: string;
    en?: string;
  };
  content: {
    pt?: string;
    en?: string;
  };
  phrase: {
    havePhrase: boolean;
    pt?: string;
    en?: string;
    author?: string;
  };
  referencesTitle: {
    pt?: string;
    en?: string;
  };
  references?: {
    title: {
      pt?: string;
      en?: string;
    };
    url: string;
  }[];
  supportedLangs: string[];
}

export const appArticles: IArticle[] = [
  {
    supportedLangs: ["pt", "en"],
    title: {
      pt: "Como começar bem no NoFap?",
      en: "How to get a good start with NoFap?",
    },
    content: {
      pt: `O NoFap é um desafio e isso significa que não vai ser fácil, porem existem algumas coisas que podemos fazer para deixar o desafio um pouco menos assustador.

      Para começar bem no NoFap você precisa primeiro assumir que tem um problema, se você não fizer isso vai continuar em uma eterna negação.
      
      Após assumir que tem um problema, tente pensar sobre ele, como ele começou, como você era antes dele, escrever sobre ele ajuda muito, se quiser tente usar o Diário do NoFap no app.
      
      Agora é hora de listar seus gatilhos, quando é que você sente vontade de se masturbar, em quais situações, isso é importante para que no futuro você tente fugir desses gatilhos, ou situações.
      
      Vamos definir uma meta agora, por quando tempo você gostaria de praticar o NoFap? Lembrando que você possivelmente você vai ter recaídas, mais não se preocupe porquê esse vai ser o nosso próximo tópico.
      
      Como lidar com as recaídas? O importante é nunca desistir, mesmo se recair não desista, recaídas são normais, NoFap é como aprender a andar, você começa engatinhando, depois dá seus primeiros passos, e mesmo que você tropece e caia, nunca desista, uma hora você vai aprender. `,
      en: `NoFap is a challenge and that means it's not going to be easy, but there are some things we can do to make the challenge a little less hard.

      To get a good start on NoFap you must first assume you have a problem, if you don't you will continue in eternal denial.
      
      After assuming you have a problem, try to think about it, how it started, how you were before it, writing about it helps a lot, if you want try using the NoFap Diary in the app.
      
      Now it's time to list your triggers, when do you have desires of masturbating, in which situations, this is important so that in the future you try to run away from those triggers, or situations.
      
      Let's set a goal now, how long would you like to practice NoFap? Remembering you will possibly have relapses, but don't worry about it because this will be our next topic.
      
      How to deal with relapses? The important is never to give up, even if you relapse doesn't stop trying, relapses are normal, NoFap is like learning to walk, you start by crawling, then take your first steps, and even if you trip and fall, never give up, eventually you will learn.`,
    },
    phrase: {
      havePhrase: true,
      pt: "Aquele que vence a si mesmo é o guerreiro mais poderoso.",
      en: "He who conquers himself is the mightiest warrior.",
      author: "Confucius",
    },
    referencesTitle: {},
  },
  {
    supportedLangs: ["pt", "en"],
    title: {
      pt: "Como controlar meus desejos?",
      en: "Learn how to control your Desires",
    },
    content: {
      pt: `A vontade de sentir prazer faz parte da natureza humano. Porem as vezes isso pode atrapalhar muito no dia a dia, pode também atrapalhar no seus relacionamentos com outras pessoas. Mais não se preocupe, pois o NoHorny está aqui para te ajudar a superar esses problemas.

      Para começar a controlar os seus desejos é interessante fugir das situações onde fica difícil controlar seus desejos. Quando a vontade de se masturbar vier, você pode fugir dela indo caminhar ou praticar outras atividades físicas por exemplo. Se você não puder sair para praticar atividades físicas, você pode tomar banhos gelados, que também são capazes de liberar dopamina no cérebro dando assim o prazer que seu cérebro queria.
      
      Além de atividades físicas e banhos gelados, você pode praticar a meditação de atenção plena, que pode te ajudar a limpar a mente dos seus desejos, a prática diária da meditação ajuda muito a ter uma mente disciplinada, podendo ajudar te ajudar a controlar além dos desejos, o estresse, ansiedade, e podendo também trazer a paz de espirito. Praticar tecnicas de respiração também ajudam muito nesses momentos, a respiração profunda é capaz de reduzir a ansiedade e consequentemente seus desejos, o NoHorny tem um guia de respirações no Botão do Pânico tente usa-lo na próxima vez que seus desejos vierem. Também recomendamos o aplicativo Medito como guia de meditação, ele é 100% gratuito.
      
      Aprender ou praticar algo é uma ótima distração dos seus desejos, você pode aprender ou praticar por exemplo:
      - Tocar instrumentos musicas;
      - Novos idiomas;
      - Programação;
      - Literatura;
      - Dança;
      - Meditação;
      - Técnicas de respiração;`,
      en: `The desire to feel pleasure is part of human nature. But sometimes this can get in the way of a lot of things in your day-to-day life, it can also get in the way of your relationships with other people. But don't worry about it, NoHorny is here to help you overcome these problems.

      To start with controlling your desires, it's interesting to run away from situations where it's difficult to control your desires. When the desire to masturbate comes, you can get away from it by going for a walk or doing another exercise. If you cannot get away from practice exercises, you can try cold showers, which are also able to release dopamine in the brain giving the pleasure your brain wanted.
      
      Instead physical activities and cold baths, you can practice mindfulness meditation, which can help you clear the mind of your desires, the daily practice of meditation helps a lot to have a disciplined mind, it can help you to control beyond your desires. Desires, stress, anxiety, and can also bring peace of mind. Practicing breathing techniques also helps a lot at these times, deep breathing is able to reduce anxiety and consequently your desires, NoHorny has a breath guide on the Panic Button try to use it the next time your desires come. We also recommend the Medito app as a meditation guide, it is 100% free.
      
      Learning or practicing some thing is a great distraction from your desires, you can learn or practice for example:
      - Learn how to play musical instruments;
      - Learn new languages;
      - Learn how to programming;
      - Learn about literature;
      - Learn how to dancing;
      - Practice medidation;
      - Practice breathing techniques;`,
    },
    phrase: {
      havePhrase: true,
      author: "Dorothy West",
      pt: "Saber o quanto há para saber é o começo de aprender a viver.",
      en: "To know how much there is to know is the beginning of learning to live.",
    },
    referencesTitle: {},
    references: [
      {
        title: {
          pt: "Link para download do Medito",
          en: "Link to download the Medito.",
        },
        url: `${sendUserByPlataform(
          "https://play.google.com/store/apps/details?id=meditofoundation.medito",
          "https://apps.apple.com/us/app/medito-meditation-wellness/id1500780518",
          "https://meditofoundation.org/"
        )}`,
      },
    ],
  },
  {
    supportedLangs: ["en", "pt"],
    title: {
      pt: "Motivos do porquê começar o NoFap",
      en: "Reasons Why You Should Start NoFap",
    },
    content: {
      pt: `A pratica do NoFap tem vários benefícios, eles incluem a claridade mental, concentração, auto confiança, melhora na socialização e menos estresse e ansiedade.

      Todos os benefícios citados acima ajudam muito no aumento da sua energia corporal, já que você não perde mais tempo se masturbando ou vendo pornô e passa a praticar outras atividades, fazendo com que seu dia seja mais produtivo, você se sente mais energizado a todo momento.
      
      A auto confiança que o NoFap trás, te fornece a dopamina que antes a masturbação fornecia. Isso acontece por conta da sensação de "trabalho feito" só de praticar o NoFap.
      
      Agora vamos falar sobre o auto controle, durante a pratica do NoFap você luta constantemente contra os seus desejos, e depois de um tempo de pratica você vai perceber que tem um maior auto controle, e esse auto controle pode ser usado não somente no NoFap, mais sim em toda atividade que requer auto controle.
      
      O seu foco e concentração também são afetados positivamente, você vai começar a sentir prazer em tudo que está praticando e não mais na masturbação. Liberando assim mais dopamina no seu cérebro.
      
      Além de tudo oque foi falado anteriormente, o NoFap ajuda muito na prevenção da Depressão, um estudo de 2007 mostra que pessoas que consumem pornografia com frequência têm maior disponibilidade de se sentirem sozinhas. E isso pode aumentar a chance da pessoa desenvolver algum grau de depressão.
      
      Outro estudo, publicado em 2018, usou uma amostra de 1.639 indivíduos para investigar uma ligação entre depressão, uso de pornografia e as definições individuais de pornografia pelas pessoas. Os pesquisadores descobriram que algumas pessoas se sentem culpadas, chateadas ou angustiadas ao ver conteúdo sexual. Esses sentimentos podem afetar sua saúde emocional geral.`,
      en: `Practicing NoFap has many benefits, these include mental clarity, concentration, self-confidence, improved socialization, and less stress and anxiety.

      All of the benefits above help a lot in energy increase because you do not lose time masturbating or watching porn and start to practice other activities, making your day more productive, you feel more energized all the time.
      
      The self-confidence that NoFap brings provides you with the dopamine that masturbation previously provided. This is because of the "job done" feeling just from practicing NoFap.
      
      Now let's talk about self-control, during the NoFap practice you fight constantly with your desires, and before a time the practice you will realize that you have greater self-control, and this self-control can be used not only in NoFap, but in every activity that requires self-control.
      
      Your focus and concentration are also positively affected, you will start to feel pleasure in everything you are practicing and no longer in masturbation. This releases more dopamine into your brain.
      
      The NoFap improves a lot in preventing Depression, a 2007 study shows that people who use pornography are often more willing to feel alone. And that can increase the chance that someone will obtain some degree of depression.
      
      Another study, published in 2018, used a sample of 1,639 individuals to investigate a link between depression, pornography use, and people's individual definitions of pornography. The researchers found that some people feel guilty, upset, or distressed when viewing sexual content. These feelings can affect their overall emotional health.`,
    },
    phrase: {
      havePhrase: true,
      pt: "Nunca é tarde demais para ser o que você poderia ter sido.",
      en: "It's never too late to be what you might have been.",
      author: "George Eliot",
    },
    referencesTitle: {
      pt: "Estudos citados no artigo",
      en: "Studies cited in the article",
    },
    references: [
      {
        title: {
          en: "2007 studies cited in the article.",
          pt: "Estudo de 2007 citado no artigo.",
        },
        url: "https://www.tandfonline.com/doi/abs/10.1080/10720160590933653",
      },
      {
        title: {
          en: "2018 studies cited in the article.",
          pt: "Estudo de 2018 citado no artigo.",
        },
        url: "https://scholarsarchive.byu.edu/cgi/viewcontent.cgi?article=5555&context=facpub",
      },
    ],
  },
  {
    supportedLangs: ["en", "pt"],
    title: {
      pt: "Por que o NoFap é tão difícil?",
      en: "Why is it so hard to do NoFap?",
    },
    content: {
      pt: `O NoFap não é difícil, oque é realmente difícil é controlar o vicio em masturbação e pornografia, oque no inicio é bem complicado, porem depois de um tempo praticando fica fácil. O importante é não desistir.

      É importante que você saiba que o NoFap sozinho não é uma pílula mágica e não vai resolver magicamente todos os seus problemas, sem que você faça a sua parte, aderindo às suas regras pessoais do NoFap e sendo disciplinado quanto a isso, mesmo quando ficar difícil.
      
      Para aqueles que tem o vício em pornografia a muito tempo, saiba que os primeiros dias vão ser os piores e mais difíceis já que você sentirá a abstinência da desintoxicação, os desejos serão fortes e sua força de vontade será desafiada ao seu máximo. Então se mantenha firme.
      
      E lembre-se é normal falhar. O importante e nunca desistir.`,
      en: `The NoFap is not difficult, what is really difficult is to control the addiction to masturbation and pornography, which at first is very complicated, but after a time practicing is easy. The important thing is not to give up.

      It's important you know that NoFap alone is not a magic pill and will not magically solve all your problems without you doing your part by doing your personal NoFap rules and being disciplined about it, even when it gets hard.
      
      For those who have had porn addiction for a long time, know that the first few days will be the worst and most difficult as you will feel the abstinence from detox, your desires will be increase and your determination will be challenged to the maximum. So stick with it.
      
      And remember it is normal to fail. The important thing is never to give up.`,
    },
    referencesTitle: {},
    phrase: {
      havePhrase: true,
      pt: "Não podemos resolver problemas com o mesmo de pensamento de quando os criamos.",
      en: "We cannot solve problems with the kind of thinking we employed when we came up with them.",
      author: "Albert Einstein",
    },
  },
];
