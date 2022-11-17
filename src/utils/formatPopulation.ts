const POPULATION = new Intl.NumberFormat(undefined)

export const formatPopulation = (population: number): string => {
    return POPULATION.format(population)
}