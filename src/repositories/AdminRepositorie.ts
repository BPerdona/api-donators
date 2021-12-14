import { EntityRepository, Repository } from "typeorm"
import { Admin } from "../entities/Admin";

@EntityRepository(Admin)
class AdminRepositories extends Repository<Admin> {}

export { AdminRepositories };