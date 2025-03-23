/* eslint-disable no-undef */
import ObjectAPI from "./Object";
import { faker } from "@faker-js/faker";

const objectAPI = new ObjectAPI("https://api.restful-api.dev");
let testObject = {};
let objectId;

describe("Object API Endpoints", () => {
  beforeAll(async () => {
    testObject = {
      name: faker.commerce.productName(),
      data: {
        color: faker.color.human(),
        price: faker.commerce.price(),
      },
    };

    const response = await objectAPI.addObject(testObject);
    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty("id");

    objectId = response.data.id;
  });

  test("GET: Fetch all objects", async () => {
    const resp = await objectAPI.getObjects();
    expect(resp.status).toBe(200);
    expect(Array.isArray(resp.data)).toBe(true);
  });

  test("GET: Fetch object by ID", async () => {
    const resp = await objectAPI.getObjectById(objectId);
    expect(resp.status).toBe(200);
    expect(resp.data.id).toBe(objectId);
  });

  test("GET: Fetch object by invalid ID", async () => {
    const resp = await objectAPI.getObjectById("invalid-id");
    expect(resp.status).toBe(404);
    expect(resp.data.message).toBe(undefined);
  });

  test("GET: Fetch multiple objects by IDs", async () => {
    const resp = await objectAPI.getObjectsByIds([objectId]);
    expect(resp.status).toBe(200);
    expect(resp.data.length).toBeGreaterThan(0);
    expect(resp.data[0].id).toBe(objectId);
  });

  test("GET: Fetch multiple objects with invalid IDs", async () => {
    const resp = await objectAPI.getObjectsByIds(["invalid-id"]);
    expect(resp.status).toBe(200);
    expect(resp.data.length).toBe(0);
  });

  test("POST: Add a new object", async () => {
    const newObject = {
      name: faker.commerce.productName(),
      data: { color: "red", price: "100" },
    };

    const resp = await objectAPI.addObject(newObject);
    expect(resp.status).toBe(200);
    expect(resp.data).toHaveProperty("id");
  });

  test("POST: Add array instead of object", async () => {
    const resp = await objectAPI.addObject([12345]);
    expect(resp.status).toBe(400);
    expect(resp.data.message).toBe(undefined);
  });

  test("PUT: Update an existing object", async () => {
    const updatedData = {
      name: "Updated " + testObject.name,
      data: { color: "black", price: "999" },
    };

    const resp = await objectAPI.updateObject(objectId, updatedData);
    expect(resp.status).toBe(200);
    expect(resp.data.name).toBe(updatedData.name);
  });

  test("PUT: Update a non-existing object", async () => {
    const resp = await objectAPI.updateObject("invalid-id", { name: "New Name" });
    expect(resp.status).toBe(404);
    expect(resp.data.message).toBe(undefined);
  });

  test("PATCH: Partially update an object", async () => {
    const partialUpdate = { name: "Partially Updated Object" };

    const resp = await objectAPI.patchObject(objectId, partialUpdate);
    expect(resp.status).toBe(200);
    expect(resp.data.name).toBe(partialUpdate.name);
  });

  test("PATCH: Partially update a non-existing object", async () => {
    const resp = await objectAPI.patchObject("invalid-id", { name: "New Name" });
    expect(resp.status).toBe(404);
    expect(resp.data.message).toBe(undefined);
  });

  test("DELETE: Delete an existing object", async () => {
    const resp = await objectAPI.deleteObject(objectId);
    expect(resp.status).toBe(200);

    const deletedResp = await objectAPI.getObjectById(objectId);
    expect(deletedResp.status).toBe(404);
    expect(deletedResp.data.message).toBe(undefined);
  });

  test("DELETE: Delete a non-existing object", async () => {
    const resp = await objectAPI.deleteObject("invalid-id");
    expect(resp.status).toBe(404);
    expect(resp.data.message).toBe(undefined);
  });
});