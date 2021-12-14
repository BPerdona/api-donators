import { EntityRepository, Repository } from "typeorm"
import { UnidadeColetora } from "../entities/UnidadeColetora";

@EntityRepository(UnidadeColetora)
class CollectorRepositorie extends Repository<UnidadeColetora> {}

export { CollectorRepositorie };