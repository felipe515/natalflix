import chapeu from '../../assets/chapeu.png';
import perfil from '../../assets/perfil.png';
import setinha from '../../assets/setinha.png';
import inicio from '../../assets/inicio.png';
import lupa from '../../assets/Lupa.png';
import filme from '../../assets/filmes.png';
import serie from '../../assets/series.png';
import lista from '../../assets/estrela.png';
import configuracao from '../../assets/configuracoes.png';
import natalFlix from '../../assets/natalFlix.png';
import s from './header.module.scss';

export default function Header() {
    return (
        <header>
            <section className={s.sectionPerfil}>
            <div className={s.profileContainer}>
                <img src={chapeu} alt="" className={s.hat} />
                <img src={perfil} alt="" className={s.profile} />
                </div>
                <img src={setinha} alt="" />
            </section>

            <section className={s.sectionMenu}>

                <img src={lupa} alt="" />
                <div>
                    <img src={inicio} alt="" />
                    <p>inicio</p>
                </div>
                <div>
                    <img src={filme} alt="" />
                    <p>Filmes</p>
                </div>
                <div>
                    <img src={serie} alt="" />
                    <p>Series</p>
                </div>
                <div>
                    <img src={lista} alt="" />
                    <p>Minha Lista</p>
                </div>
                <div>
                    <img src={configuracao} alt="" />
                    <p>Configurações</p>
                </div>
                <img src={natalFlix} alt="" />
            </section>

        </header>
    );
}