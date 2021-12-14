import { EntityRepository, Repository } from "typeorm"
import { Donation } from "../entities/Donation";

@EntityRepository(Donation)
class DonationRespositories extends Repository<Donation> {}

export { DonationRespositories };