const env_variables = require('dotenv').config()
env_variables

const request = require('supertest')
const mongoose = require('mongoose')

const app = require('../app')
const clienteModel = require('../models/cliente.model')

describe('TESTING APP', () => {
    beforeAll(async () => {
        await mongoose.connect(process.env.MONGO_URI)
    })

    afterAll(async () => await mongoose.disconnect())

    describe('/GET testing', () => {
        test('Debería responder con estado 200 ok', async () => {
            // Arrange: Configurar el estado inicial si es necesario

            // Act: Realizar la acción que se está probando
            const response = await request(app)
                .get('/api/v1/commercial-order-detail')
                .send()

            // Assert: Comprobar los resultados y expectativas
            expect(response.status).toBe(200)
            expect(response.body).toBeInstanceOf(Object)
        })
    })

    describe('/POST testing', () => {
        afterEach(async () => {
            await clienteModel.deleteMany({
                ci_client: '6f8a1e2b9dc35b001c6c1e35',
            })
        })

        test('Debería responder con estado 201 ok', async () => {
            // Arrange: Configurar el estado inicial si es necesario
            const data = {
                proforma: '182-2023',
                id_product: '6f8a1e2b9dc35b001c6c1e35',
                id_tag: '5f8a1e2b9df35b001c6c2e29',
                container_number: 2402,
                box_number: 24,
                box_amount: 50,
                id_container_size: '8f8a1e2b9df35b001c6c2e29',
                id_lid_type: '7f8a1e2b9df35b001c6c2e29',
                net_weight: 5,
                drained_weight: 10,
                oil: 10,
                water: 20,
                loins: 50,
                crumbs: 100,
            }

            // Act: Realizar la acción que se está probando
            const response = await request(app)
                .post('/api/v1/commercial-order-detail')
                .send(data)

            // Assert: Comprobar los resultados y expectativas
            expect(response.status).toBe(201)
            expect(response.body.commercialOrderDetail._id).toBeDefined()
        })
    })
})