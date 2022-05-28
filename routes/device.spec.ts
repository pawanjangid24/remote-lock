const request = require('supertest')
const app = require('./../app')
const  { Device } = require('./../models/device')
var uuid = require('uuid')

const testDevice = {
    "id": uuid.v4(),
    "name": "Garage door",
    "power_source": "alkaline_battery",
    "connected_at": "2019-04-10T08:02:36Z",
    "firmware_version": "5.01.181217.1",
    "serial_number": "AC000W001335336",
    "programming_code": "2806",
    "state": "locked",
    "model_number": "BG (LS-3i)"
}

describe('test suit for device list', () => {
    test('GET /devices/:deviceId success', async () => {
         const devices = await Device.create(testDevice)

        const response = await request(app)
                .get(`/devices/${testDevice.id}`)
                .expect(200)

                expect(JSON.parse(response.text)).toStrictEqual(testDevice)
    })

    test('GET /devices/:deviceId blank', async () => {
        const response = await request(app)
               .get(`/devices/invalidId`)
        
        expect(response.text).toBe('')
   })
})

