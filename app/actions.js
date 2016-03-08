export const NAVIGATE = 'NAVIGATE'

export function navigate(destinationKey) {
	return {
		type: NAVIGATE,
		destinationKey
	}
}