import { supabase } from '$lib/supabaseClient';

export async function load({ params }) {
	const { data } = await supabase
		.from('sale_view')
		.select(
			`
		id,
		name,
		qty,
		min_price,
		max_price,
		avg_price

	    `
		)
		.eq('category_id', params.slug);

	return {
		items: data ?? [],
		category: params.slug
	};
}
