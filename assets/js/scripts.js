// Selecionar a Seção About
const about = document.querySelector('#about');

// Selecionar o formulário
const formulario = document.querySelector('#formulario');

// Expressão Regular para validação de e-mail
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

// Função para buscar os dados no GitHub
async function getApiGithub() {
    try {
        const dadosPerfil = await fetch('https://api.github.com/users/nadiacaricatto');
        const perfilJson = await dadosPerfil.json();
        let conteudo = `
            <figure class="about_image">
                <img
                    src="${perfilJson.avatar_url}"
                    alt="Foto do perfil do GitHub - ${perfilJson.name}."
                >
            </figure>
            <article class="about_content">
                <h2>${document.documentElement.lang === 'pt-br' ? 'Sobre Mim' : 'About Me'}</h2>
                <p>${document.documentElement.lang === 'pt-br'
                    ? 'Sou uma ex-advogada que trocou os códigos jurídicos pelos códigos de programação! Hoje sou Desenvolvedora Full Stack — e estudante de Análise de Sistemas — que adora um bom desafio.'
                    : "I’m a former lawyer who swapped legal codes for programming ones! Now I'm a Full Stack Dev - and Systems Analysis student - who can’t resist a good challenge."}</p>
                <p>${document.documentElement.lang === 'pt-br'
                    ? 'Sou apaixonada por ficção científica, jogos de estratégia (culpa dos meus tempos de xadrez) e por mergulhar em curiosidades aleatórias. Quando não estou programando, provavelmente estou explorando novas tecnologias — ou curtindo meus cachorros e minha família!'
                    : "I’m into sci-fi, strategy games (thanks to my chess competitor days), and falling down rabbit holes of curious facts. When I’m not coding, I’m probably geeking out over new tech - or hanging with my dogs and my family!"}</p>
                <div class="about_stats">
                    <a href="${perfilJson.html_url}" target="_blank" class="botao">${document.documentElement.lang === 'pt-br' ? "Acessar GitHub" : "Dive into my Github"}</a>
                    <div class="stats-wrapper">
                        <div class="stat-item">
                            <p class="stat-number">${perfilJson.followers}</p>
                            <p class="stat-label">${document.documentElement.lang === 'pt-br' ? "Seguidores" : "Followers"}</p>
                        </div>
                        <div class="stat-item">
                            <p class="stat-number">${perfilJson.public_repos}</p>
                            <p class="stat-label">${document.documentElement.lang === 'pt-br' ? "Repositórios" : "Repositories"}</p>
                        </div>
                    </div>
                </div>
            </article>
        `;
        about.innerHTML = conteudo;
    } catch (error) {
        console.error(error);
    }
}

getApiGithub();

// MoodBoard / Cards Visuais
const moodElementsEn = [
    {
        emoji: "🌓",
        title: "Sci-fi",
        desc: "Passionate about futuristic stories & exploring distant universes."
    },
    {
        emoji: "♟️",
        title: "Chess",
        desc: "Strategic thinking from chess competitions shapes my coding!"
    },
    {
        emoji: "👩‍💻",
        title: "Tech & Programming",
        desc: "Turning coffee into code, every day."
    },
    {
        emoji: "🐶",
        title: "Dogs",
        desc: "Always loyal, always fun. My best companions!"
    },
    {
        emoji: "⚖️",
        title: "Ex-Lawyer",
        desc: "From legal code to source code – adaptive, bold & curious."
    },
    {
        emoji: "✨",
        title: "Curiosity",
        desc: "Super into strange facts & geeky discoveries."
    },
    {
        emoji: "🎮",
        title: "Games",
        desc: "Strategy, RPG & discovery. Gaming fuels logic & creativity."
    },
    {
        emoji: "📚",
        title: "Books",
        desc: "Sci-fi, fantasy and tech stories always on my shelf."
    }
];
const moodElementsPt = [
    {
        emoji: "🌓",
        title: "Ficção científica",
        desc: "Apaixonada por histórias futuristas e universos distantes."
    },
    {
        emoji: "♟️",
        title: "Xadrez",
        desc: "Pensamento estratégico que veio das competições e inspira o meu código!"
    },
    {
        emoji: "👩‍💻",
        title: "Tecnologia & Programação",
        desc: "Transformando café em código todos os dias."
    },
    {
        emoji: "🐶",
        title: "Cachorros",
        desc: "Sempre leais, sempre divertidos. Meus melhores companheiros!"
    },
    {
        emoji: "⚖️",
        title: "Ex-Advogada",
        desc: "Do código jurídico ao código fonte – adaptável, ousada e curiosa."
    },
    {
        emoji: "✨",
        title: "Curiosidade",
        desc: "Super curiosa sobre fatos estranhos e descobertas geek."
    },
    {
        emoji: "🎮",
        title: "Jogos",
        desc: "Estratégia, RPG e descoberta. Jogar estimula lógica e criatividade."
    },
    {
        emoji: "📚",
        title: "Livros",
        desc: "Ficção científica, fantasia e tecnologia sempre na minha estante."
    }
];
const moodContainer = document.querySelector('.moodboard_cards');
const pageIsPt = document.documentElement.lang === 'pt-br';
const moodElements = pageIsPt ? moodElementsPt : moodElementsEn;
if (moodContainer) {
    moodContainer.innerHTML = "";
    moodElements.forEach(card => {
        moodContainer.innerHTML += `
            <div class="mood-card" tabindex="0">
                <div class="emoji">${card.emoji}</div>
                <div class="card-title">${card.title}</div>
                <div class="card-desc">${card.desc}</div>
            </div>
        `;
    });
}

// Gerador de Slogans Geek
const slogansEn = [
    "Keep calm & code on.",
    "May the code be with you.",
    "Coffee. Code. Repeat.",
    "Curiosity kills bugs.",
    "Code today, conquer tomorrow.",
    "Eat, Sleep, Debug, Repeat.",
    "Challenge accepted. Challenge solved.",
    "Great code comes with great responsibility.",
    "Don’t panic – it’s just a merge conflict.",
    "0 bugs found. 100 added.",
    "Real devs ship first, then refactor."
];
const slogansPt = [
    "Continue a programar e o bug some!",
    "Que a força do código esteja com você.",
    "Café, código, conquista!",
    "Em caso de dúvida, console.log.",
    "A vida é melhor com curiosidade geek.",
    "Deu erro? Aprenda com ele e brilhe.",
    "Problemas são só desafios esperando soluções.",
    "Seu código, sua arte!",
    "Sonhe grande, debug pequeno.",
    "Seja curioso: é assim que a inovação começa.",
    "A cada deploy, um novo recomeço.",
    "Na guerra dos códigos, estratégia é tudo!"
];
const slogans = pageIsPt ? slogansPt : slogansEn;
const btnSlogan = document.getElementById('gerarSlogan');
const resultadoSlogan = document.getElementById('resultadoSlogan');
if(btnSlogan){
    btnSlogan.addEventListener("click", () => {
        const sort = Math.floor(Math.random() * slogans.length);
        resultadoSlogan.innerText = slogans[sort];
        resultadoSlogan.classList.remove('fade');
        void resultadoSlogan.offsetWidth; // trigger reflow
        resultadoSlogan.classList.add('fade');
    });
}

// Função de envio e validação do formulário
formulario && formulario.addEventListener('submit', function(event) {
    event.preventDefault();
    const campoNome = document.querySelector('#nome');
    const txtNome = document.querySelector('#txtNome');
    if(campoNome.value.length < 3){
        txtNome.innerHTML = pageIsPt
           ? 'O Nome deve ter no mínimo 3 caracteres.'
           : 'Name must be at least 3 characters.';
        campoNome.focus();
        return;
    }else{
        txtNome.innerHTML = '';
    }
    const campoEmail = document.querySelector('#email');
    const txtEmail = document.querySelector('#txtEmail');
    if(!campoEmail.value.match(emailRegex)){
        txtEmail.innerHTML = pageIsPt
           ? 'Digite um e-mail válido.'
           : 'Enter a valid email.';
        campoEmail.focus();
        return;
    }else{
        txtEmail.innerHTML = '';
    }
    const campoAssunto = document.querySelector('#assunto');
    const txtAssunto = document.querySelector('#txtAssunto');
    if(campoAssunto.value.length < 5){
        txtAssunto.innerHTML = pageIsPt
           ? 'O Assunto deve ter no mínimo 5 caracteres.'
           : 'Subject must be at least 5 characters.';
        campoAssunto.focus();
        return;
    }else{
        txtAssunto.innerHTML = '';
    }
    formulario.submit();
});