import { supabase } from '$lib/supabaseClient';

export async function load({ params }) {
	const { data } = await supabase
		.from('items')
		.select(
			`
		id,
		name,
        rarity,
		retired
	    `
		)
		.eq('category_id', params.slug);

	return {
		items: data ?? [],
		category: params.slug
	};
}
