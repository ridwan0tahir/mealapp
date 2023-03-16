import axios from "axios";
import request from "@/utils/request";

class ApiService {
  constructor() {
    this._api = axios.create({
      baseURL: "https://themealdb.com/api/json/v1/1",
    });
  }

  getByCategory(category) {
    // www.themealdb.com/api/json/v1/1/filter.php?c=Seafood

    return request(
      this._api.get("/filter.php", {
        params: {
          c: category,
        },
      })
    );
  }

  getByID(id) {
    // www.themealdb.com/api/json/v1/1/lookup.php?i=52772

    return request(
      this._api.get("/lookup.php", {
        params: {
          i: id,
        },
      })
    );
  }
}

export default ApiService;
