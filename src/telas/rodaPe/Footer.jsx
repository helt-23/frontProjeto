import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles.css';

const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h4>Sistema de Reservas</h4>
                    <p>UNIFESSPA - Campus 2</p>
                    <p>CNPJ: XX.XXX.XXX/0001-XX</p>
                </div>

                <div className="footer-section">
                    <h4>Links Úteis</h4>
                    <ul>
                        <li><Link to="/sobre">Sobre o Sistema</Link></li>
                        <li><Link to="/politica">Política de Privacidade</Link></li>
                        <li><Link to="/termos">Termos de Uso</Link></li>
                    </ul>
                </div>
                {/*como não temos informações ou autorização da unifesspa, dei infromações geréricas e links geréricos tbm, 
                que podem ser preechidos no futuro.*/}

                <div className="footer-section">
                    <h4>Contato</h4>
                    <p>Email: reservas@unifesspa.edu.br</p>
                    <p>Telefone: (94) 2101-XXXX</p>
                    <div className="social-icons">
                        <a href="#"><i className="fab fa-facebook"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                        <a href="#"><i className="fab fa-linkedin"></i></a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} UNIFESSPA. Todos os direitos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;