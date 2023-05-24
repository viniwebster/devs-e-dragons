import { Personagem } from "./modules/personagem.js"
import { PersonagemView } from "./components/personagem-view.js";
import { Mago } from "./modules/mago.js";
import { Arqueiro } from "./modules/arqueiro.js";
import { ArqueiroMago } from "./modules/arqueiro-mago.js";
import { Guerreiro } from "./modules/guerreiro.js";

const magoAntonio = new Mago('Antonio', 4, 'Fogo', 4, 3);
const magoJulia = new Mago('Julia', 8, 'Gelo', 7, 10);
const arqueiroBruno = new Arqueiro('Bruno', 6, 7)
const arqueiroMagoRoger = new ArqueiroMago('Chico', 7, 10, 'ar', 4, 8)
const guerreiroClaudio = new Guerreiro('Claudio', 10)

const personagens = [magoAntonio, magoJulia, arqueiroBruno, arqueiroMagoRoger, guerreiroClaudio]

new PersonagemView(personagens).render()
/* console.log(Personagem.verificarVencedor(arqueiroBruno, magoAntonio));
 */