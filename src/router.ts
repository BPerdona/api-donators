import { Router } from "express";
import { DonationController } from "./controllers/donation/DonationController";
import { DonatorController } from "./controllers/donator/DonatorController";
import { CheckAdminController } from "./controllers/admin/CheckAdminController";
import { CollectorController } from "./controllers/collector/CollectorController";
import { GetCepController } from "./controllers/cep/GetCepController";
import { ProfissaoController } from "./controllers/profession/ProfissaoController";
import { admin } from "./middlewares/admin";

const router = Router();

const donatorController = new DonatorController();
const donationController = new DonationController();
const collectorController = new CollectorController();
const getCepController = new GetCepController();
const profissaoController = new ProfissaoController();
const checkAdminController = new CheckAdminController();


//Admin Checker
router.get("/v1/admin/:username&:password",checkAdminController.execute);

//Donator Routes
router.use(admin);
router.post("/v1/donator",donatorController.create);
router.get("/v1/donator",donatorController.getAll);
router.get("/v1/donator/:RG",donatorController.getByRg);
router.delete("/v1/donator/:RG",donatorController.delete);
router.put("/v1/donator/:RG",donatorController.update);

//Donation Routes
router.post("/v1/donation", donationController.create);
router.get("/v1/donation",donationController.getAll);
router.get("/v1/donation/:ID",donationController.getById);
router.delete("/v1/donation/:ID",donationController.delete);
router.put("/v1/donation/:ID",donationController.update);

//Partner Routes
router.post("/v1/collector",collectorController.create);
router.get("/v1/collector",collectorController.getAll);
router.get("/v1/collector/:ID",collectorController.getById);
router.delete("/v1/collector/:ID",collectorController.delete);
router.put("/v1/collector/:ID",collectorController.update);

//CEP Route
router.get("/v1/cep/:CEP",getCepController.execute);

//Profissao Routes
router.post("/v1/profissao",profissaoController.create);
router.get("/v1/profissao",profissaoController.getAll);

export { router }