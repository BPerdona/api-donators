import { EntityRepository, Repository } from "typeorm"
import { Log } from "../entities/Log";

@EntityRepository(Log)
class LogRepositorie extends Repository<Log> {}

export { LogRepositorie };