import type { EnergyMix } from './EnergyMix';

export interface DailyEnergyAverage {
    date: Date;
    averages: EnergyMix[];
    totalCleanPerc: string;
}