import './styles.css';

export function Loader() {
  return (
    <div className="spinnerContainer">
      <div className="spinner"></div>
      <div className="loader">
        <p>CarCrm</p>
        <div className="words">
          <span className="word">Gestão</span>
          <span className="word">Desempenho</span>
          <span className="word">Vendas</span>
          <span className="word">Pagamentos</span>
          <span className="word">Controle</span>
        </div>
      </div>
    </div>
  );
}