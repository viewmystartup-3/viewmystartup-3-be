const express = require("express");
const companiesRouter = require("./companies.module");
const investmentRouter = require("./investment.module");

const router = express.Router();

// TODO: /api 가 반복되는 것의 문제
// TODO: 두 라우터 모두 companies인 것 이상하다.

router.use("/api/companies", companiesRouter);
router.use("/api/companies", investmentRouter);

router.get("/health-check", (req, res) => {
  res.status(200).send("OK");
});

module.exports = router;
