import type { PageLoad } from './$types';
import postListings from '../../post_listings.json';
import Singapore from '../singapore/singapore.svelte';

export const load = (() => {
	const singaporeListing = postListings.listings.find((listing) => {
		listing.title === 'Singapore';
	});
	return {
		...singaporeListing,
		page: Singapore
	};
}) satisfies PageLoad;
