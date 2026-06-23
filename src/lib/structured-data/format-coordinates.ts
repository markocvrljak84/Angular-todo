/** Google VacationRental requires latitude/longitude with at least 5 decimal places. */
export function formatSchemaCoordinate(value: number): string {
  return value.toFixed(5);
}
