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
  referencesTitle?: string;
  references?: [
    {
      title: string;
      url: string;
    }
  ];
  supportedLangs: string[];
}

export const appArticles: IArticle[] = [
  {
    supportedLangs: ["pt", "en"],
    title: {
      pt: "Como começar bem no NoFap?",
    },
    content: {
      pt: `
        O NoFap é um desafio e isso significa que não vai ser fácil, porem existem algumas coisas que podemos fazer para deixar o desafio um pouco menos assustador.
        
        Para começar bem no NoFap você precisa primeiro assumir que tem um problema, se você não fizer isso vai continuar em uma eterna negação.
        
        Após assumir que tem um problema, tente pensar sobre ele, como ele começou, como você era antes dele, escrever sobre ele ajuda muito, se quiser tente usar o Diário do NoFap no app.
        
        Agora é hora de listar seus gatilhos, quando é que você sente vontade de se masturbar, em quais situações, isso é importante para que no futuro você tente fugir desses gatilhos, ou situações.
        
        Vamos definir uma meta agora, por quando tempo você gostaria de praticar o NoFap? Lembrando que você possivelmente você vai ter recaídas, mais não se preocupe porquê essa vai ser o nosso próximo tópico.
        
        Como lidar com as recaídas? O importante é nunca desistir, mesmo se recair não desista, recaídas são normais, NoFap é como aprender a andar, você começa engatinhando, depois dá seus primeiros passos, e mesmo que você tropece e caia, nunca desista, uma hora você vai aprender.
      `,
    },
    phrase: {
      havePhrase: true,
      pt: "Aquele que vence a si mesmo é o guerreiro mais poderoso.",
      en: "He who conquers himself is the mightiest warrior.",
      author: "Confucius",
    },
  },
];
