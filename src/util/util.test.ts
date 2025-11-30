import { capitalize, formatDateTime, formatPercentage } from "./util";

describe("capitalize", () => {
    it("capitalizes first letter", () => {
        expect(capitalize("hello")).toBe("Hello");
    });

    it("returns empty string for empty input", () => {
        expect(capitalize("")).toBe("");
    });
});

describe("formatDateTime", () => {
    it("formats date correctly", () => {
        const date = new Date("2024-01-01T05:07:00");
        expect(formatDateTime(date)).toBe("Mon Jan 01 2024 05:07");
    });

    it("returns empty string when no date", () => {
        expect(formatDateTime(undefined as unknown as Date)).toBe("");
    });
});

describe("formatPercentage", () => {
    it("returns raw special values", () => {
        expect(formatPercentage("Loading...")).toBe("Loading...");
        expect(formatPercentage("No data yet")).toBe("No data yet");
    });

    it("formats integer percentages", () => {
        expect(formatPercentage("10")).toBe("10%");
        expect(formatPercentage("10.0")).toBe("10%");
    });

    it("formats decimal percentages rounded to 1 decimal", () => {
        expect(formatPercentage("12.34")).toBe("12.3%");
        expect(formatPercentage("7.89")).toBe("7.9%");
    });

    it("returns empty string when value is not a number", () => {
        expect(formatPercentage("a")).toBe("NaN%");
    });
});
