const mulherImagem = document.getElementById("mulher");
const dialog = document.querySelector("dialog");
mulherImagem.addEventListener("click", () => {
  dialog.style.display = "block";
});

setTimeout(() => {
  dialog.style.display = "none";
}, 10000);

const cores = {
  black: "#272935",
  rosa: "#FF57B6",
  blackMaIsEscuro: "121212",
  white: "#fff",
  azulClaro: "#F0F6FF",
  roxoClaro: "#414558",
  azulbebe: "#394E6A",
  azulForte: "#0069E0",
  rgba: "rgba(0, 0, 0, 0.8)",
  azulMaisForte: "#057AFF",
};


const produtos = document.getElementById(`produtos`);
produtos.addEventListener("click", () => {
  const produtosRecebeClasssesblack = () => {
    produtos.style.border = "none";
    produtos.style.padding = "7px";
    produtos.style.borderRadius = "3px";
    produtos.style.color = "white";
    produtos.style.backgroundColor = "var(--cor-roxa-clara)";
    produtos.style.fontWeight = "bold";
  };
  produtosRecebeClasssesblack();
});

const about = document.getElementById("about");
about.addEventListener("click", () => {
  const aboutRecebeClasseBlack = () => {
    about.style.border = "none";
    about.style.padding = "7px";
    about.style.borderRadius = "3px";
    about.style.color = "white";
    about.style.backgroundColor = "var(--cor-roxa-clara)";
    about.style.fontWeight = "bold";
  };

  aboutRecebeClasseBlack();
});

const darkMode = () => {
  const bodyBlack = () => {
    document.body.style.backgroundColor = cores.black;
  };

  const i = document.querySelector("i");
  const iBlack = () => {
    i.style.color = cores.roxoClaro;
  };

  const select = document.querySelector("select");
  const black = document.querySelectorAll("option")[0];
  const white = document.querySelectorAll("option")[1];

  const bodyWhite = () => {
    document.body.style.backgroundColor = cores.white;
  };

  const menuPrincipal = document.getElementById("menu-principal");

  const menuPrincipalBlack = () => {
    menuPrincipal.style.backgroundColor = cores.blackMaIsEscuro;
  };

  const menuPrincipalWhite = () => {
    menuPrincipal.style.backgroundColor = cores.azulClaro;
  };

  const aboutEblackWhite = () => {
    about.style.backgroundColor = cores.azulClaro;
    produtos.style.backgroundColor = cores.azulClaro;
    about.style.color = cores.black;
    produtos.style.color = cores.black;
  };

  const h1 = document.querySelector("h1");
  const h1Black = () => {
    h1.style.color = cores.azulClaro;
  };

  const dialogBlack = () => {
    dialog.style.backgroundColor = cores.rgba;
  };

  const dialogWhite = () => {
    dialog.style.backgroundColor = cores.azulbebe;
  };

  const explore = document.getElementById("explore");
  const exploreBlack = () => {
    explore.style.backgroundColor = cores.rosa;
  };

  const exploreWhite = () => {
    explore.style.backgroundColor = cores.azulForte;
  };
  const h1White = () => {
    h1.style.color = cores.azulbebe;
  };

  const textoConteudo = document.getElementById("texto-conteudo");
  const textoBlack = () => {
    textoConteudo.style.color = cores.white;
  };

  const textoWhite = () => {
    textoConteudo.style.color = cores.azulbebe;
  };

  const textoProdutos = document.getElementById("texto-produtos");
  const produtosBlack = () => {
    textoProdutos.style.color = cores.white;
  };

  const textoWhiteProdutos = () => {
    textoProdutos.style.color = cores.azulbebe;
  };

  const imagens = document.querySelectorAll(".imagens");
  const imagensColorBlack = () => {
    imagens.forEach((element) => {
      element.style.backgroundColor = cores.black;
    });
  };

  const imagensColorWhite = () => {
    imagens.forEach((element) => {
      element.style.backgroundColor = cores.white;
    });
  };

  const textos = document.querySelectorAll(".textos");
  const textoolBlack = () => {
    textos.forEach((element) => {
      element.style.color = cores.white;
    });
  };

  const textoWhiteol = () => {
    textos.forEach((element) => {
      element.style.color = cores.azulbebe;
    });
  };

  const textoAbout = document.getElementById("texto-about")
  console.log(textoAbout);
  const textoAboutBlack = () => {
    textoAbout.style.color = cores.white
  }

  const textoAboutWhite = () => {
    textoAbout.style.color = cores.azulbebe
  }

  const botaoBoasVindas = document.querySelector(".botao-boas-vindas")
  const botaoBoasVindasWhite = () => {
    botaoBoasVindas.style.backgroundColor = cores.azulMaisForte
  }

  const botaoBoasVindasBlack = () => {
    botaoBoasVindas.style.backgroundColor = cores.rosa
  }

  const textoInformacoes = document.getElementById("texto-informacoes")
  const textoInformacoesBlack = () => {
    textoInformacoes.style.color = cores.black
  }

  const textoInformacoesWhite = () => {
    textoInformacoes.style.color = cores.white
  }

  select.addEventListener("change", () => {
    if (black.selected) {
      bodyBlack();
      menuPrincipalBlack();
      h1Black();
      textoBlack();
      exploreBlack();
      dialogBlack();
      produtosBlack();
      imagensColorBlack();
      textoolBlack();
      textoAboutBlack()
      botaoBoasVindasBlack()
      textoInformacoesWhite()
      localStorage.setItem("darkmode", cores.black);
      localStorage.setItem("selelcionar", black.selected);
    } else if (white.selected) {
      bodyWhite();
      menuPrincipalWhite();
      iBlack();
      aboutEblackWhite();
      h1White();
      textoWhite();
      exploreWhite();
      dialogWhite();
      textoWhiteProdutos();
      imagensColorWhite();
      textoWhiteol();
      textoAboutWhite()
      botaoBoasVindasWhite()
      textoInformacoesBlack()
      localStorage.setItem("darkmode", cores.white);
      localStorage.setItem("selelcionar", white.selected);
    }
  });

  const salvarDarkMode = () => {
    const salvarValor = localStorage.getItem("darkmode");
    const valorSelecionado = localStorage.getItem("selelcionar");
    const blackRecebeValorSelecionado = () => {
      black.selected = valorSelecionado;
    };

    const whiteRecebeValorSelecionado = () => {
      white.selected = valorSelecionado;
    };

    if (salvarValor === cores.black) {
      bodyBlack();
      menuPrincipalBlack();
      blackRecebeValorSelecionado();
      h1Black();
      textoBlack();
      exploreBlack();
      dialogBlack();
      produtosBlack();
      imagensColorBlack();
      textoolBlack();
      textoAboutBlack();
      botaoBoasVindasBlack()
      textoInformacoesWhite()
    } else if (salvarValor === cores.white) {
      bodyWhite();
      menuPrincipalWhite();
      iBlack();
      whiteRecebeValorSelecionado();
      aboutEblackWhite();
      h1White();
      textoWhite();
      exploreWhite();
      dialogWhite();
      textoWhiteProdutos();
      imagensColorWhite();
      textoWhiteol();
      textoAboutWhite()
      botaoBoasVindasWhite()
      textoInformacoesBlack()

    }
  };
  salvarDarkMode();
};
darkMode();


const loader = document.getElementById("loader")

const loaderBlock = () => {
  loader.style.display = `block`
}

const loaderNone = () => {
  loader.style.display = `none`
}

const esconderDivs =  () => {
  const conteudoDivPrincipal = document.querySelector(".conteudo").style.display = `none`
  const setcion = document.querySelector(".section").style.display = `none`
  const divImg = document.querySelector(".imagem").style.display = `none`
 
}

const mostrarDivSobre = () => {
  const divSobre = document.querySelector(".minha").style.display = `block`
}


about.addEventListener("click", () => {
  esconderDivs()
  loaderBlock()
  setInterval(() => {
    loaderNone()
    mostrarDivSobre()
  }, 1500);
})