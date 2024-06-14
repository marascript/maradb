import { supabase } from '$lib/supabaseClient';

export async function load() {
	const { data } = await supabase.from('category_view').select(`
		id,
		name,
		qty
	`);

	return {
		categories: data ?? []
	};
}
