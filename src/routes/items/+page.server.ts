import { supabase } from '$lib/supabaseClient';

export async function load() {
	const { data } = await supabase.from('items').select(`
		id,
		name,
		rarity
	`);

	return {
		items: data ?? []
	};
}
