"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const reports_controller_1 = require("../controller/reports.controller");
const auth_1 = require("../middlewares/auth");
const router = express_1.default.Router();
/* GET home page. */
router.post('/create', auth_1.auth, reports_controller_1.createPatient);
router.get('/getAllPatient', auth_1.auth, reports_controller_1.getAllPatient);
router.get('/getMyPatient/:id', auth_1.auth, reports_controller_1.getMyPatient);
router.get('/editPage/:id', auth_1.auth, reports_controller_1.editPatientPage);
router.get('/deletePatient/:id', auth_1.auth, reports_controller_1.deletePatient);
router.get("/getPatient/:id", auth_1.auth, reports_controller_1.getPatient);
router.post("/updatePatient/:id", auth_1.auth, reports_controller_1.updatePatient);
exports.default = router;
