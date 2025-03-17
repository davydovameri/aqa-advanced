/* eslint-disable require-await */
import RestClient from './RestClient';

export default class ObjectAPI extends RestClient {
  constructor(baseUrl, configOverrides) {
    super(baseUrl, configOverrides);
    this.headers = {};
    this.url = `${baseUrl}/objects`;
  }

  async getObjects(headers = this.headers) {
    return this.sendGet({ url: this.url, headers });
  }

  async getObjectById(userId, headers = this.headers) {
    return this.sendGet({ url: `${this.url}/${userId}`, headers });
  }

  async getObjectsByIds(ids, headers = this.headers) {
    const queryString = ids.map((id) => `id=${id}`).join('&');
    return this.sendGet({ url: `${this.url}?${queryString}`, headers });
  }

  async addObject(payload, headers = this.headers) {
    return this.sendPost({ url: this.url, data: payload, headers });
  }

  async updateObject(userId, payload, headers = this.headers) {
    return this.sendPut({ url: `${this.url}/${userId}`, data: payload, headers });
  }

  async patchObject(userId, payload, headers = this.headers) {
    return this.sendPatch({ url: `${this.url}/${userId}`, data: payload, headers });
  }

  async deleteObject(userId, headers = this.headers) {
    return this.sendDelete({ url: `${this.url}/${userId}`, headers });
  }
}
