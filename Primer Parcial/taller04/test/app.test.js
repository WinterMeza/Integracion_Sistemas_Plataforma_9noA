const env_variables = require("dotenv").config();
env_variables;

const request = require("supertest");
const mongoose = require("mongoose");

const { app, server } = require("../app");
const commecialOrderModel = require("../src/models/commercial_order.model");

describe("TESTING APP", () => {
  beforeAll(async () => {
    jest.setTimeout(600);
    await mongoose.connect(process.env.MONGO_URI);
  });

  afterAll(async () => {
    // Close the Express server to resolve the open handle issue
    server.close(async () => {
      await mongoose.disconnect(); // Close the database connection
    });
  });

  describe("/GET testing", () => {
    test("Responde con estado 200 ok", async () => {
      const response = await request(app).get("/api/v1/commercial-order");
      expect(response.status).toBe(200);
    });

    test("Responde con data ok", async () => {
      const response = await request(app).get("/api/v1/commercial-order");
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
      // Add other fields from your data object
    };

    test("Responde con estado 201 ok", async () => {
      const response = await request(app)
        .post("/api/v1/commercial-order")
        .send(data);
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
