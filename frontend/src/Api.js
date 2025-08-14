import axios from "axios";

const BASE_URL = "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class JoblyApi {
  // the token for interactive with the API will be stored here.
  static token;

  static async request(endpoint, data = {}, method = "get") {
    const url = `${BASE_URL}/${endpoint}`;
    const headers = JoblyApi.token ? { Authorization: `Bearer ${JoblyApi.token}` } : {};
    const params = (method === "get") ? data : {};
  
    try {
      const resp = await axios({ url, method, data, params, headers });
      return resp.data;
    } catch (err) {
      console.error("API Error:", err);
  
      // Be defensive: err.response may be undefined on network errors
      const message =
        err?.response?.data?.error?.message ||
        err?.message ||
        "Network error";
  
      // Normalize to an array as the rest of the app expects
      throw Array.isArray(message) ? message : [message];
    }
  }
  

  // Individual API routes

// Company API helpers


  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }


  static async getCompanies(nameFilter) {
    const params = nameFilter ? { name: nameFilter } : {};
    const res = await this.request(`companies`, params);
    return res.companies;  // array of companies
  }

  // Job API helpers

  
  static async getJobs(titleFilter) {
    const params = titleFilter ? { title: titleFilter } : {};
    const res = await this.request("jobs", params);
    return res.jobs;
  }
  
  // get Job Details for job/:id
  static async getJob(id) {
    const res = await this.request(`jobs/${id}`);
    return res.job;
  }


  // Auth API Helpers

// get token for login
static async login(credentials) {
  const res = await this.request("auth/token", credentials, "post");
  return res.token;
}

// get token for signup
static async signup(data) {
  const res = await this.request("auth/register", data, "post");
  return res.token;
}

// get current user
static async getCurrentUser(username) {
  const res = await this.request(`users/${username}`);
  return res.user;
}


static async saveProfile(username, data) {
  // backend usually expects: { firstName, lastName, email, password }
  const res = await this.request(`users/${username}`, data, "patch");
  return res.user; // updated user
}


}







// for now, put token ("testuser" / "password" on class)
// JoblyApi.token = "eyJh...";  // disable for now
JoblyApi.token = null;



export default JoblyApi;