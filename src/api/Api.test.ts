import { getPrognosis, getOptimalChargingTime } from "./Api";

describe("API functions", () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it("getPrognosis returns mapped data", async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      json: async () => [{ date: "2025-12-01T00:00:00Z",
        averages: [
          { fuel: "biomass", perc: "10%" },
          { fuel: "coal", perc: "20%" },
          { fuel: "gas", perc: "30%" },
          { fuel: "hydro", perc: "40%" },
          { fuel: "imports", perc: "50%" },
          { fuel: "nuclear", perc: "60%" },
          { fuel: "other", perc: "70%" },
          { fuel: "solar", perc: "80%" },
          { fuel: "wind", perc: "90%" },
        ],
        totalCleanPerc: "100"
      }],
    });

    const result = await getPrognosis();
    expect(result[0].date).toBeInstanceOf(Date);
    expect(result[0].averages).toHaveLength(9);
    expect(result[0].averages[0]).toHaveProperty("fuel", "biomass");
    expect(result[0].averages[0]).toHaveProperty("perc", "10%");
    expect(result[0].averages[1]).toHaveProperty("fuel", "coal");
    expect(result[0].averages[1]).toHaveProperty("perc", "20%");
    expect(result[0].averages[2]).toHaveProperty("fuel", "gas");
    expect(result[0].averages[2]).toHaveProperty("perc", "30%");
    expect(result[0].averages[3]).toHaveProperty("fuel", "hydro");
    expect(result[0].averages[3]).toHaveProperty("perc", "40%");
    expect(result[0].averages[4]).toHaveProperty("fuel", "imports");
    expect(result[0].averages[4]).toHaveProperty("perc", "50%");
    expect(result[0].averages[5]).toHaveProperty("fuel", "nuclear");
    expect(result[0].averages[5]).toHaveProperty("perc", "60%");
    expect(result[0].averages[6]).toHaveProperty("fuel", "other");
    expect(result[0].averages[6]).toHaveProperty("perc", "70%");
    expect(result[0].averages[7]).toHaveProperty("fuel", "solar");
    expect(result[0].averages[7]).toHaveProperty("perc", "80%");
    expect(result[0].averages[8]).toHaveProperty("fuel", "wind");
    expect(result[0].averages[8]).toHaveProperty("perc", "90%");
    expect(result[0].totalCleanPerc).toBe("100");
  });

  it("getOptimalChargingTime returns mapped data", async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      json: async () => ({ from: "2025-12-01T10:00:00Z", to: "2025-12-01T12:00:00Z", perc: "80" }),
    });

    const result = await getOptimalChargingTime(2);
    expect(result.from).toBeInstanceOf(Date);
    expect(result.to).toBeInstanceOf(Date);
    expect(result.perc).toBe("80");
  });
});
