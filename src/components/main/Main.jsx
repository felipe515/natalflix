import imgTexto from '../../assets/imgTexto.png'
import imgPrincipal from '../../assets/imgPrincipal.png'
import play from '../../assets/play.png'
import s from './main.module.scss'
import estrelaAmarela from '../../assets/estrelaAmarela.png'
import barra1 from '../../assets/barra1.png'
import barra2 from '../../assets/barra2.png'
import barra3 from '../../assets/barra3.png'
import barra4 from '../../assets/barra4.png'
import img1 from '../../assets/img1.png'
import img2 from '../../assets/img2.png'
import img3 from '../../assets/img3.png'
import img4 from '../../assets/img4.png'
import img5 from '../../assets/img5.png'

export default function Main() {
    return (
        <main>

        <section className={s.principal}>
            <section className={s.sectionTexto}>
                <section>
                    <img src={imgTexto} alt="" />
                    <p>1h 37min | Aventura, Animação, Família</p>
                </section>


                <section className={s.texto}>
                    <p>Jack Frost, um garoto que controla o inverno, se junta ao seleto time dos Guardiões Imortais para impedir Breu, o bicho-papão, de transformar todos os sonhos das crianças em pesadelo e usar seus poderes maquiavélicos para governar o mundo.</p>

                    <div className={s.botoes}>
                        <button className={s.play}><img src={play} alt="" /> Assistir</button>
                        <button className={s.adicionar}><img src={estrelaAmarela} alt="" /> Adicionar Aos Favoritos</button>
                    </div>
                </section>
            </section>
            <section>
                <img src={imgPrincipal} alt="" />
            </section>

        </section>

            <section className={s.continuarAssistindo}>
                <p>Continuar asssistindo</p>

                <section className={s.filmes}>
                    <div>
                        <img className={s.imgFilmes} src={img1} alt="" />
                        <img className={s.imgBarra} src={barra1} alt="" />
                    </div>
                    <div>
                        <img className={s.imgFilmes} src={img2} alt="" />
                        <img className={s.imgBarra} src={barra2} alt="" />
                    </div>
                    <div>
                        <img className={s.imgFilmes} src={img3} alt="" />
                        <img className={s.imgBarra} src={barra3} alt="" />
                    </div>
                    <div>
                        <img className={s.imgFilmes} src={img4} alt="" />
                        <img className={s.imgBarra} src={barra4} alt="" />
                    </div>
                </section>
            </section>
        </main>
    )
}