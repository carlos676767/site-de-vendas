const mulherImagem = document.getElementById("mulher");
const dialog = document.querySelector("dialog")
mulherImagem.addEventListener("click", () => {
    dialog.style.display = "block"
});

setTimeout(() => {
    dialog.style.display = "none"
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
}






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
    about.style.backgroundColor = cores.azulClaro
    produtos.style.backgroundColor = cores.azulClaro
    about.style.color = cores.black
    produtos.style.color = cores.black
  }

  const h1 = document.querySelector("h1")
  const h1Black = () => {
    h1.style.color = cores.azulClaro
  }

  const dialogBlack = () => {
    dialog.style.backgroundColor = cores.rgba
  }

  const dialogWhite = () => {
    dialog.style.backgroundColor = cores.azulbebe
  }

  const explore = document.getElementById("explore")
  const exploreBlack = () => {
    explore.style.backgroundColor = cores.rosa;
  };

  const exploreWhite = () => {
    explore.style.backgroundColor = cores.azulForte
  }
  const h1White = () => {
    h1.style.color = cores.azulbebe
  }

  const textoConteudo = document.getElementById("texto-conteudo")
  const textoBlack = () => {
    textoConteudo.style.color = cores.white
  }

  const textoWhite = () => {
    textoConteudo.style.color = cores.azulbebe
  }
  select.addEventListener("change", () => {
    if (black.selected) {
      bodyBlack();
      menuPrincipalBlack();
      h1Black()
      textoBlack()
      exploreBlack()
      dialogBlack()
      localStorage.setItem("darkmode", cores.black);
      localStorage.setItem("selelcionar", black.selected);
    } else if (white.selected) {
      bodyWhite();
      menuPrincipalWhite();
      iBlack();
      aboutEblackWhite();
      h1White();
      textoWhite();
      exploreWhite()
      dialogWhite()
      localStorage.setItem("darkmode", cores.white);
      localStorage.setItem("selelcionar", white.selected);
    }
  });

  const salvarDarkMode = () => {
    const salvarValor = localStorage.getItem("darkmode");
    const valorSelecionado = localStorage.getItem("selelcionar")
    const blackRecebeValorSelecionado = () => {
      black.selected = valorSelecionado
    }

    const whiteRecebeValorSelecionado = () => {
      white.selected = valorSelecionado
    }

    if (salvarValor === cores.black) {
      bodyBlack();
      menuPrincipalBlack();
      blackRecebeValorSelecionado();
      h1Black();
      textoBlack();
      exploreBlack();
      dialogBlack();
    } else if (salvarValor === cores.white) {
      bodyWhite();
      menuPrincipalWhite();
      iBlack();
      whiteRecebeValorSelecionado();
      aboutEblackWhite();
      h1White();
      textoWhite();
      exploreWhite()
      dialogWhite()
    }
  };
  salvarDarkMode();
};


darkMode();


