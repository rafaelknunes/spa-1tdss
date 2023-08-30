import Cabecalho from "./Components/Cabecalho";

export default function App() {
  return (
    <div className="app-container">
      {/* Cabeçalho */}
      <Cabecalho />

      {/* Seção */}
      <section>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu ante eget nisl 
            convallis tempus. Phasellus ante lectus, tincidunt sit amet dui vel, luctus convallis metus.
          </p>
          <p>
            Aliquam lacinia, sapien vitae sodales dapibus, metus nulla lacinia sapien, 
            nec bibendum ligula erat ac augue. Suspendisse feugiat luctus ultrices.
          </p>
          <p>
            Proin auctor libero at libero consectetur, vel cursus enim mollis. Vivamus 
            sed fermentum nunc, sit amet convallis lorem.
          </p>
        </div>
      </section>

      {/* Rodapé */}
      <footer>
        <p>&copy; Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
