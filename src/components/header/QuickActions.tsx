import './QuickActions.css';

export type QuickActionButtonProps = {
  title: string;
  count?: number;
  onClick?: ()=> void
};

type QuickActionsProps = {
  buttonsData: QuickActionButtonProps[]
};

function QuickActions({ buttonsData }:QuickActionsProps) {
  const contentLength = buttonsData.length;
  return (
    <div className="container">
      <h1>Ações Rápidas</h1>
      <div
        className="QuickActions"
        style={ { gridTemplateColumns: '1fr '.repeat(contentLength) } }
      >
        { buttonsData.map((btn) => (
          <div className="CardItem" key={ btn.title }>
            <button onClick={ btn.onClick }>
              { btn.count !== null && <h3>{btn.count}</h3>}
              { btn.count === undefined && <h3>{btn.title}</h3>}
              { btn.count !== undefined && <h4>{btn.title}</h4>}
            </button>
          </div>
        )) }
      </div>
    </div>
  );
}

export default QuickActions;
