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

  select.addEventListener("change", () => {
    if (black.selected) {
      bodyBlack();
      menuPrincipalBlack();
      localStorage.setItem("darkmode", cores.black);
      localStorage.setItem("selelcionar", black.selected);
    } else if (white.selected) {
      bodyWhite();
      menuPrincipalWhite();
      iBlack();
      aboutEblackWhite()
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
    } else if (salvarValor === cores.white) {
      bodyWhite();
      menuPrincipalWhite();
      iBlack();
      whiteRecebeValorSelecionado();
      aboutEblackWhite()
    }
  };
  salvarDarkMode();
};


darkMode();
const des = document.getElementById(`des`).addEventListener(`click`, function() {
  localStorage.clear()
})

