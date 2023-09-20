const env_variables = require("dotenv").config();
env_variables;

const request = require("supertest");
const mongoose = require("mongoose");

const app = require("../app");
//const productModel = require("../models/product.model");
const clienteModel = require("../models/cliente.model");

describe("TESTING APP", () => {
  beforeAll(async () => {
    await mongoose.connect(process.env.MONGO_URI);
  });

  afterAll(async () => await mongoose.disconnect());

  describe("/GET testing", () => {
    test("Responde con stado 200 ok", async () => {
      const response = await request(app).get("/api/v1/client").send();
      expect(response.status).toBe(200);
    });

    test("Responde con data ok", async () => {
      const response = await request(app).get("/api/v1/client").send();
      expect(response.body).toBeInstanceOf(Object);
    });
  });

  describe("/POST testing", () => {
    afterAll(async () => {
      await clienteModel.deleteMany({ ci_client: "6f8a1e2b9dc35b001c6c1e35" });
    });

    const data = {
      name_client: "Caroline Lucas",
      direction: "A. Azul EFT Pradera 2",
      phone: 994137994,
      id_city: "Manta",
      id_client_type: "5f8a1e2b9df35b001c6c2e29",
      ci_client: "6f8a1e2b9dc35b001c6c1e35",
    };

    test("Responde con stado 201 ok", async () => {
      const response = await request(app).post("/api/v1/client").send();
      expect(response.status).toBe(201);
    });

    test("Responde con datos insertados", async () => {
      const response = await request(app).post("/api/v1/client").send(data);
      expect(response.body.client._id).toBeDefined();
    });
  });
});
