const env_variables = require("dotenv").config();
env_variables;

const request = require("supertest");
const mongoose = require("mongoose");

const app = require("../app");
//const productModel = require("../models/product.model");
const commecialOrderModel = require("../models/commercial_order.model");

describe("TESTING APP", () => {
  beforeAll(async () => {
    jest.setTimeout(600);
    await mongoose.connect(process.env.MONGO_URI);
  });

  afterAll(async () => await mongoose.disconnect());

  describe("/GET testing", () => {
    test("Responde con stado 200 ok", async () => {
      const response = await request(app)
        .get("/api/v1/commercial-order")
        .send();
      expect(response.status).toBe(200);
    });

    test("Responde con data ok", async () => {
      const response = await request(app)
        .get("/api/v1/commercial-order")
        .send();
      expect(response.body).toBeInstanceOf(Object);
    });
  });

  describe("/POST testing", () => {
    beforeAll(() => {
      jest.setTimeout(600);
    });
    afterAll(async () => {
      await commecialOrderModel.deleteMany({
        ci_client: "6f8a1e2b9dc35b001c6c1e36",
      });
    });

    const data = {
      proforma: "6f8a1e2b9dc35b001c6c1e36",
      contract_number: "0938273425",
      id_client: "6f8a1e2b9dc35b001c6c1e35",
      id_destiny: "6f8a1e2b9dc35b001c6c1e35",
      id_brand: "6f8a1e2b9dc35b001c6c1e35",
      id_kind: "6f8a1e2b9dc35b001c6c1e35",
      id_type_container: "6f8a1e2b9dc35b001c6c1e35",
      id_lid: "6f8a1e2b9dc35b001c6c1e35",
      id_liquid_hedging: "6f8a1e2b9dc35b001c6c1e35",
      id_cardboard: "6f8a1e2b9dc35b001c6c1e35",
      container_box: 50,
      date: "12/02/2023",
      date_entry: "12/02/2023",
      observations: "ninguna",
    };

    test("Responde con stado 201 ok", async () => {
      const response = await request(app)
        .post("/api/v1/commercial-order")
        .send();
      expect(response.status).toBe(201);
    });

    test("Responde con datos insertados", async () => {
      const response = await request(app)
        .post("/api/v1/commercial-order")
        .send(data);
      expect(response.body.commercialOrder._id).toBeDefined();
    });
  });
});
