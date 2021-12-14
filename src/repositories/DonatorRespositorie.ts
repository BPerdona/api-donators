import { EntityRepository, Repository } from "typeorm"
import { Donator } from "../entities/Donator";

@EntityRepository(Donator)
class DonatorRespositorie extends Repository<Donator> {}

export { DonatorRespositorie };