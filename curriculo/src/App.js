import React from 'react';
import { ReactTyped } from 'react-typed';
import { FaReact, FaNodeJs, FaPhp, FaHtml5, FaCss3Alt, FaJs, FaGithub, FaDatabase, FaInstagram, FaLinkedin} from 'react-icons/fa'; // Adicionando ícones de redes sociais
import { SiMongodb, SiPython } from 'react-icons/si';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import profileImage from './images/pfp.jfif'; 

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-mono">
      <div className="container mx-auto py-10 px-4">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          
          {/* Grid com duas colunas: 80% para o título e 20% para a imagem */}
          <div className="grid grid-cols-[80%,20%] gap-6 items-center">
            
            {/* Coluna para o título e animação */}
            <div className="space-y-4">
              <h1 className="text-5xl font-bold text-green-400">
                <ReactTyped
                  strings={["Olá, sou Victor Alonso de Andrade Heringer"]}
                  typeSpeed={50}
                  backSpeed={30}
                  showCursor={false}
                  cursorChar={"|"}
                  loop={false}
                />
              </h1>
              <p className="text-xl">
                <ReactTyped
                  strings={[
                    "Email - victor_heringer@outlook.com &nbsp;&nbsp;&nbsp;&nbsp;Telefone - (27)99972-6799",
                  ]}
                  typeSpeed={40}
                  backSpeed={20}
                  showCursor={false}
                  cursorChar={"|"}
                  loop={false}
                />
              </p>
              <p className="text-xl">
                <ReactTyped
                  strings={[
                    "Desenvolvedor Fullstack",
                    "Apaixonado por tecnologia",
                    "Desenvolvedor em React, Node.js, PhP, HTML, CSS, Javascript, Jquery, SQL Server e MongoDB"
                  ]}
                  typeSpeed={40}
                  backSpeed={20}
                  showCursor={true}
                  cursorChar={"|"}
                  loop
                />
              </p>
            </div>

            {/* Coluna para a imagem (20%) */}
            <div className="flex justify-center items-center">
              <img 
                src={profileImage} 
                alt="Minha foto profissional"
                className="w-48 h-48 md:w-60 md:h-60 rounded-full border-4 border-green-400 shadow-lg"
              />
            </div>
          </div>

          {/* Seção de ícones das linguagens */}
          <div className="mt-10">
            <p className="text-lg font-bold text-green-400 text-center">// Tecnologias que utilizo:</p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mt-6 justify-items-center text-center">
              <div>
                <FaReact className="text-blue-400 text-6xl mx-auto" />
                <p className="mt-2 text-white">React</p>
              </div>
              <div>
                <FaNodeJs className="text-green-500 text-6xl mx-auto" />
                <p className="mt-2 text-white">Node.js</p>
              </div>
              <div>
                <FaPhp className="text-indigo-600 text-6xl mx-auto" />
                <p className="mt-2 text-white">PHP</p>
              </div>
              <div>
                <FaHtml5 className="text-orange-500 text-6xl mx-auto" />
                <p className="mt-2 text-white">HTML5</p>
              </div>
              <div>
                <FaCss3Alt className="text-blue-600 text-6xl mx-auto" />
                <p className="mt-2 text-white">CSS3</p>
              </div>
              <div>
                <FaJs className="text-yellow-400 text-6xl mx-auto" />
                <p className="mt-2 text-white">JavaScript</p>
              </div>
              <div>
                <FaGithub className="text-white text-6xl mx-auto" />
                <p className="mt-2 text-white">GitHub</p>
              </div>
              <div>
                <FaDatabase className="text-gray-500 text-6xl mx-auto" />
                <p className="mt-2 text-white">SQL Server</p>
              </div>
              <div>
                <SiMongodb className="text-green-500 text-6xl mx-auto" />
                <p className="mt-2 text-white">MongoDB</p>
              </div>
              <div>
                <SiPython className="text-yellow-400 text-6xl mx-auto" />
                <p className="mt-2 text-white">Python</p>
              </div>
            </div>
          </div>

          {/* Texto abaixo das colunas */}
          <div className="mt-8 bg-gray-700 p-4 rounded-md">
            <p className="text-lg font-bold text-green-400">// Sobre Mim:</p>
            <p className="mt-2">
              Sou um desenvolvedor apaixonado por criar soluções tecnológicas que impactem positivamente os negócios e as pessoas. Minha jornada no desenvolvimento de software começou com o interesse em entender como as tecnologias se conectam para resolver problemas do mundo real. Com experiência em diversas tecnologias, me especializo em desenvolvimento Fullstack utilizando ferramentas como React, Node.js, e PhP.
            </p>
            <p className="mt-2">
              Tenho uma sólida experiência em trabalhar com bases de dados tanto SQL (SQL Server) quanto NoSQL (MongoDB), além de uma forte proficiência em frontend com HTML, CSS, JavaScript, e frameworks como jQuery e React. Além disso, desenvolvo soluções complexas no backend com Node.js e PhP, integrando diferentes APIs e garantindo uma arquitetura escalável e robusta.
            </p>
            <p className="mt-2">
              Ao longo da minha carreira, participei de projetos desafiadores, sempre focando em criar interfaces de usuário intuitivas e eficientes, bem como backend otimizados para desempenho e segurança.
            </p>
          </div>

          <div className="mt-10 bg-gray-700 p-6 rounded-md">
            {/* Seção de Experiências Profissionais */}
            <p className="text-lg font-bold text-green-400">// Experiências Profissionais:</p>
            <p className="mt-2 text-lg font-bold">[Abril 2023 ► Atual - Estagiário]</p>
            <p className="mt-2">
              Desde abril de 2023, venho atuando como Estagiário em Desenvolvimento na Ilumimais Gestão Inteligente. Nesta função, tenho trabalhado ativamente no desenvolvimento e manutenção do sistema Ilumimais utilizando <strong>PHP</strong>, <strong>GitHub</strong>, <strong>SQL Server</strong>, <strong>HTML</strong>, <strong>CSS</strong>, e <strong>JavaScript</strong>. Minha experiência inclui a manutenção de sistemas existentes, o desenvolvimento de novas funcionalidades e o trabalho em equipe utilizando práticas de controle de versão no GitHub. 
            </p>
          </div>


            {/* Seção de Formaçãos */}
          <div className="mt-10 bg-gray-700 p-6 rounded-md">
            <p className="text-lg font-bold text-green-400">// Formações:</p>
            <p className="mt-2 text-lg font-bold">Curso de Data Science pela Pearson, Londres</p>
            <p className="mt-2">
              Em janeiro de 2023, concluí um curso intensivo de 1 mês em Data Science oferecido pela Pearson, em Londres. O curso focou em técnicas de análise de dados, aprendizado de máquina, e uso de ferramentas como PowerBI, Python e bibliotecas populares de data science, como Pandas e Scikit-learn.
            </p>
            <p className="mt-2 text-lg font-bold">Bacharelado em Sistemas de Informação, UVV</p>
            <p className="mt-2">
              Atualmente, estou cursando o bacharelado em Sistemas de Informação na Universidade Vila Velha (UVV).
            </p>
            <p className="mt-2 text-lg font-bold">Curso de Inglês Nível B2, UFES</p>
            <p className="mt-2">
              Concluí o curso de Inglês no núcleo de linguas estrangeiras da Universidade Federal do Espírito Santo.
            </p>

          </div>

          {/* Seção de Produto no Mercado */}
          <div className="mt-10 bg-gray-700 p-6 rounded-md">
            <p className="text-lg font-bold text-green-400">// Produtos no Mercado:</p>
            <p className="mt-2 text-white">
              O site <a href="https://agah.arq.br" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">agah.arq.br</a> foi desenvolvido para a empresa Agah Arquitetura, sendo construido uma landing-page para clientes que procuram serviços arquitetônicos.
            </p>
            <p className="mt-2 text-white">
              A plataforma foi construída utilizando <strong>React</strong> e <strong>Tailwind CSS</strong>, priorizando a experiência do usuário com uma interface moderna e funcional. O design responsivo garante que o site funcione perfeitamente em todos os dispositivos. Contém integração com a <strong>Amazon SES</strong> para disparo de emails.
            </p>
          </div>

          <div className="mt-10 bg-gray-700 p-6 rounded-md">
            <p className="text-lg font-bold text-green-400 text-center">// Redes Sociais:</p>
            <div className="flex justify-center space-x-6 mt-4">
              <a href="https://twitter.com/victorheringer" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faXTwitter} className="text-black text-4xl hover:text-gray-800" />
              </a>
              <a href="https://instagram.com/victoralonso.heringer" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-pink-500 text-4xl hover:text-pink-600" />
              </a>
              <a href="https://github.com/victoralonsoheringer" target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-white text-4xl hover:text-gray-400" />
              </a>
              <a href="https://linkedin.com/in/victor-alonso-de-andrade-heringer/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-blue-600 text-4xl hover:text-blue-700" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
