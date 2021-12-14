import { EntityRepository, Repository } from "typeorm"
import { Profissao } from "../entities/Profissao";

@EntityRepository(Profissao)
class ProfissaoRepositorie extends Repository<Profissao> {}

export { ProfissaoRepositorie };