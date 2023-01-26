/**
 * Loop through the keys of an object and return the values of the keys
 * as an array.
 */
export function getValuesFromObject(obj: any): any[] {
	return Object.keys(obj).map((key: any) => {
		return obj[key];
	});
}
