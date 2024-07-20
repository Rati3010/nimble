import express from "express";
import sqlConnection from "../config/db.js";

const router = express.Router();

router.post("/", (req, res) => {
  try {
    const {
      currency,
      basicAmt,
      taxAmt,
      totalAmt,
      advancePaid,
      tcsApplicable,
      netPayableAmt,
      alternatePayee1,
      alternatePayee2,
      city,
      street,
      country,
      bankKey,
      bankAccount,
    } = req.body;


    const sql = `INSERT INTO invoices (currency, basicAmt, taxAmt, totalAmt, advancePaid, tcsApplicable, netPayableAmt, alternatePayee1, alternatePayee2, city, street, country, bankKey, bankAccount) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    sqlConnection.query(
      sql,
      [
        currency,
        basicAmt,
        taxAmt,
        totalAmt,
        advancePaid,
        tcsApplicable,
        netPayableAmt,
        alternatePayee1,
        alternatePayee2,
        city,
        street,
        country,
        bankKey,
        bankAccount,
      ],
      (err, result) => {
        if (err) {
          console.error("Database error: ", err);
          return res.status(500).json({ error: "Database error", details: err });
        }
        res.json({ message: "Draft saved successfully", result });
      }
    );
  } catch (err) {
    console.error("Server error: ", err);
    res.status(400).json({ error: "Server error", details: err });
  }
});

export default router;
