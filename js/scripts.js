/*!
* Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    //  Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarNavDropdown .nav-link')
    );
    
    responsiveNavItems.forEach(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', function(event) {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                if (!event.target.closest('.dropdown')) {
                    navbarToggler.click();
                }
            }
        });
    });
    
    // Close dropdown when dropdown link is clicked
    const dropdownLinks = [].slice.call(
        document.querySelectorAll('#navbarNavDropdown .dropdown-item')
    );
    
    dropdownLinks.forEach(function (dropdownLink) {
        dropdownLink.addEventListener('click', function() {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});


document.addEventListener("DOMContentLoaded", function () {
    const perguntas = [
        "Com que frequência você acha que passa mais tempo na internet do que pretendia?",
        "Com que frequência você abandona as tarefas domésticas para passar mais tempo na internet?",
        "Com que frequência você prefere a emoção da internet ao convívio com seu/sua namorado(a)/esposo(a)/...?",
        "Com que frequência você cria relacionamentos com novo(a)s amigo(a)s da internet?",
        "Com que frequência outras pessoas em sua vida se queixam sobre a quantidade de tempo que você passa na internet?",
        "Com que frequência suas notas ou tarefas da escola pioram por causa da quantidade de tempo que você fica na internet?",
        "Com que frequência você acessa a internet antes de qualquer outra coisa que precise fazer?",
        "Com que frequência piora o seu desempenho ou produtividade no trabalho/escola por causa da internet?",
        "Com que frequência você fica na defensiva ou guarda segredo quando alguém lhe pergunta o que você faz na internet? ",
        "Com que frequência você bloqueia pensamentos perturbadores sobre sua vida pensando em se conectar para acalmar-se? ",
        "Com que frequência você se pega pensando em quando vai entrar na internet novamente?",
        "Com que frequência você teme que a vida sem a internet seria chata, vazia e sem graça?",
        "Com que frequência você explode, grita ou se irrita se alguém o(a) incomoda enquanto está na internet?",
        "Com que frequência você dorme pouco por ficar conectado(a) até tarde da noite?",
        "Com que frequência você se sente preocupado(a) com a internet quando está desconectado(a) imaginando que poderia estar conectado(a)?",
        "Com que frequência você se pega dizendo “só mais alguns minutos” quando está conectado(a)?",
        "Com que frequência você tenta diminuir o tempo que fica na internet e não consegue?",
        "Com que frequência você tenta esconder a quantidade de tempo em que está na internet? ",
        "Com que frequência você opta por passar mais tempo na internet em vez de sair com outras pessoas?",
        "Com que frequência você se sente deprimido(a), mal-humorado(a) ou nervoso(a) quando desconectado(a) e esse sentimento vai embora assim que volta a se conectar à internet?",
    ];

    const perguntas2 = [
        "Com que frequência seu filho(a) passa mais tempo na internet do que pretendia?",
        "Com que frequência seu filho(a) abandona as tarefas domésticas para passar mais tempo na internet?",
        "Com que frequência seu filho(a) prefere a emoção da internet ao convívio com  a família? ",
        "Com que frequência seu filho(a) faz novo(a)s amigo(a)s da internet?",
        "Com que frequência os familiares de seu(ua) filho(a) se queixam sobre a quantidade de tempo que ele(a) passa na internet?",
        "Com que frequência as notas de seu filho(a) pioram por causa da quantidade de tempo que ele(a) fica na internet?",
        "Com que frequência seu filho(a) acessa a internet antes de qualquer outra coisa que precise fazer?",
        "Com que frequência piora o desempenho escolar do(a) seu(ua) filho(a)por causa da internet?",
        "Com que frequência seu filho(a) fica na defensiva ou guarda segredo quando alguém pergunta o que ele(a) faz na internet? ",
        "Com que frequência seu filho(a) diz bloquear pensamentos perturbadores sobre a vida dele(a) pensando em se conectar para acalmar-se? ",
        "Com que frequência seu filho(a) diz pensar em quando vai entrar na internet novamente?",
        "Com que frequência seu filho(a) diz temer que a vida sem a internet seria chata, vazia e sem graça?",
        "Com que frequência seu filho(a) explode, grita ou se irrita se alguém o(a) incomoda enquanto está na internet?",
        "Com que frequência seu filho(a) dorme pouco por ficar conectado(a) até tarde da noite?",
        "Com que frequência seu filho(a) diz se sentir preocupado(a) com a internet quando está desconectado(a) imaginando que poderia estar conectado(a)?",
        "Com que frequência seu filho(a) diz “só mais alguns minutos” quando está conectado(a)?",
        "Com que frequência seu filho(a) tenta diminuir o tempo que fica na internet e não consegue?",
        "Com que frequência seu filho(a) tenta esconder a quantidade de tempo em que ele(a) está na internet? ",
        "Com que frequência seu filho(a) opta por passar mais tempo na internet em vez de sair com outras pessoas?",
        "Com que frequência seu filho(a) se sente deprimido(a), mal-humorado(a) ou nervoso(a) quando desconectado(a) e esse sentimento vai embora assim que ele(a) volta a se conectar à internet?",
    ];

    const opcoesResposta = [
        { resposta: "1 - Raramente", valor: 1 },
        { resposta: "2 - Ocasionalmente", valor: 2 },
        { resposta: "3 - Frequentemente", valor: 3 },
        { resposta: "4 - Quase Sempre", valor: 4 },
        { resposta: "5 - Sempre", valor: 5 },
    ];

    const opcoesResposta2 = [
        { resposta: "1 - Raramente", valor: 1 },
        { resposta: "2 - Ocasionalmente", valor: 2 },
        { resposta: "3 - Frequentemente", valor: 3 },
        { resposta: "4 - Quase Sempre", valor: 4 },
        { resposta: "5 - Sempre", valor: 5 },
    ];

    const formPerguntas = document.getElementById("formPerguntas");
    const formPerguntas2 = document.getElementById("formPerguntas2");
    const perguntasContainer = document.getElementById("perguntasContainer");
    const perguntasContainer2 = document.getElementById("perguntasContainer2");
    const formMessages = document.getElementById("contactForm")

    perguntas.forEach((pergunta, index) => {
        const perguntaDiv = document.createElement("div");
        perguntaDiv.classList.add("form-group", "mb-4"); // Adiciona a classe mb-4 para espaçamento inferior
        perguntaDiv.innerHTML = `
            <label for="pergunta${index + 1}"><strong>${pergunta}</strong></label>
            <div class="opcoes-resposta">
                ${opcoesResposta.map((opcao, opcaoIndex) => `
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="pergunta${index + 1}" id="resposta${index + 1}${opcaoIndex + 1}" value="${opcao.valor}" required aria-required="true">
                        <label class="form-check-label" for="resposta${index + 1}${opcaoIndex + 1}">${opcao.resposta}</label>
                    </div>
                `).join("")}
            </div>
        `;
        perguntasContainer.appendChild(perguntaDiv);
    });

    perguntas2.forEach((pergunta, index) => {
        const perguntaDiv = document.createElement("div");
        perguntaDiv.classList.add("form-group", "mb-4"); // Adiciona a classe mb-4 para espaçamento inferior
        perguntaDiv.innerHTML = `
            <label for="pergunta${index + 1}"><strong>${pergunta}</strong></label>
            <div class="opcoes-resposta2">
                ${opcoesResposta2.map((opcao, opcaoIndex) => `
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="pergunta2${index + 1}" id="resposta2${index + 1}${opcaoIndex + 1}" value="${opcao.valor}" required aria-required="true">
                        <label class="form-check-label" for="resposta2${index + 1}${opcaoIndex + 1}">${opcao.resposta}</label>
                    </div>
                `).join("")}
            </div>
        `;
        perguntasContainer2.appendChild(perguntaDiv);
    });

    formPerguntas.addEventListener("submit", function (event) {
        event.preventDefault();
        const formData = new FormData(formPerguntas);
        let pontuacao = 0;
        let numPerguntas = 0;

        formData.forEach((value, key) => {
            if (key.includes("pergunta")) {
                pontuacao += parseInt(value, 10); // Converter o valor para inteiro antes de somar
                numPerguntas++;
            }
        });

        if (numPerguntas === perguntas.length) {
            let mensagem = "";
            if (pontuacao >= 20 && pontuacao <= 49) {
                mensagem = "Você é um usuário médio, ou seja, às vezes, fica mais do que o necessário on-line, no entanto, tem controle sobre a utilização que faz da internet.";
            } else if (pontuacao >= 50 && pontuacao <= 79) {
                mensagem = "Você é um usuário que já apresenta problemas/dificuldades ocasionais ou frequentes para ter controle sobre o tempo de utilização que faz da internet. Você deve analisar os impactos de estar on-line em excesso na internet podem estar causando na sua vida. ";
            } else if (pontuacao >= 80 && pontuacao <= 100) {
                mensagem = "Você é um usuário com problemas significativos na sua vida devido ao uso dependente da internet. Você deve analisar os danos causados pela dependência tecnológica no seu dia a dia. Considere procurar orientação/atendimento especializado no assunto.";
            } else {
                mensagem = "Algo inesperado aconteceu. Tente Novamente";
            }

            const endpointUrl = "https://script.google.com/macros/s/AKfycbzP0lrN0qdp_mN9UMoGJOSOQajokj2-uuuqey-QZSZrVFqvv14sFsqvVVl9qdAe9cfs/exec";
            const data = {
                nome: formData.get("nome"),
                email: formData.get("email"),
                pontuacao: pontuacao,
                action: "form"
            };

            const pontuacaoResultado = document.getElementById("pontuacaoResultado");
            const mensagemResultado = document.getElementById("mensagemResultado");
            pontuacaoResultado.textContent = pontuacao;
            mensagemResultado.textContent = mensagem;
            $("#resultadoModal").modal("show");

            fetch(endpointUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data),
                mode: 'no-cors'
            })
            .then(() => {
                // Limpar o formulário
                formPerguntas.reset();
            })
            .catch(error => {
                console.error("Erro ao enviar os dados:", error);
            });
        } else {
            console.log("Responda todas as perguntas antes de submeter o formulário.");
        }
    });

    formPerguntas2.addEventListener("submit", function (event) {
        event.preventDefault();
        const formData = new FormData(formPerguntas2);
        let pontuacao = 0;
        let numPerguntas = 0;

        formData.forEach((value, key) => {
            if (key.includes("pergunta")) {
                pontuacao += parseInt(value, 10); // Converter o valor para inteiro antes de somar
                numPerguntas++;
            }
        });

        if (numPerguntas === perguntas.length) {
            let mensagem = "";
            if (pontuacao >= 20 && pontuacao <= 49) {
                mensagem = "Seu(ua) filho(a) é um(a) usuário(a) médio(a), ou seja, às vezes, fica mais do que o necessário on-line, no entanto, ainda faz uso equilibrado da internet. ";
            } else if (pontuacao >= 50 && pontuacao <= 79) {
                mensagem = "Seu(ua) filho(a) é um(a) usuário(a) que já apresenta problemas/dificuldades ocasionais ou frequentes quanto ao tempo de utilização da internet. Você precisa orientá-lo(a) sobre estar on-line na internet em excesso e os danos causados por essa prática. ";
            } else if (pontuacao >= 80 && pontuacao <= 100) {
                mensagem = "Seu(ua) é um(a) usuário(a) com problemas significativos devido ao uso dependente da internet.  Você precisa conversar com ele(a) a respeito do que é a dependência tecnológica e seus impactos negativos. Procure orientação/atendimento especializado no assunto, caso necessário. ";
            } else {
                mensagem = "Algo inesperado aconteceu. Tente Novamente";
            }

            const endpointUrl = "https://script.google.com/macros/s/AKfycbzP0lrN0qdp_mN9UMoGJOSOQajokj2-uuuqey-QZSZrVFqvv14sFsqvVVl9qdAe9cfs/exec";
            const data = {
                nome: formData.get("nome2"),
                email: formData.get("email2"),
                pontuacao: pontuacao,
                action: "form"
            };

            const pontuacaoResultado = document.getElementById("pontuacaoResultado");
            const mensagemResultado = document.getElementById("mensagemResultado");
            pontuacaoResultado.textContent = pontuacao;
            mensagemResultado.textContent = mensagem;
            $("#resultadoModal").modal("show");

            fetch(endpointUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data),
                mode: 'no-cors'
            })
            .then(() => {
                // Limpar o formulário
                formPerguntas2.reset();
            })
            .catch(error => {
                console.error("Erro ao enviar os dados:", error);
            });
        } else {
            console.log("Responda todas as perguntas antes de submeter o formulário.");
        }
    });

    formMessages.addEventListener("submit", function (event) {
        event.preventDefault();
        const formData = new FormData(formMessages);
        
        const endpointUrl = "https://script.google.com/macros/s/AKfycbzP0lrN0qdp_mN9UMoGJOSOQajokj2-uuuqey-QZSZrVFqvv14sFsqvVVl9qdAe9cfs/exec";
        const data = {
            nome: formData.get("name"),
            email: formData.get("email"),
            phone: formData.get("phone"),
            message: formData.get("message"),
            action: "message"
        };

        fetch(endpointUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data),
            mode: 'no-cors'
        })
        .then(() => {
            // Limpar o formulário
            formMessages.reset();
            const successMessageDiv = document.getElementById("submitSuccessMessage");
            successMessageDiv.classList.remove("d-none");

        })
        .catch(error => {
            console.error("Erro ao enviar os dados:", error);
        });
        
    });

});
