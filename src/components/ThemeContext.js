import React from 'react';
import ReactDOM from 'react-dom';
import '../styles.css'; // Seu arquivo CSS com os estilos dos temas
import Header from './Header';
import { ThemeProvider } from './ThemeContext';

const App = () => {
    return (
        <ThemeProvider>
            <div className="App">
                <Header />
                {/* Outros componentes da sua aplicação */}
            </div>
        </ThemeProvider>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
