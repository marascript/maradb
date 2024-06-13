import { supabase } from '$lib/supabaseClient';

export async function load() {
	const { data } = await supabase.from('items').select(`
		id,
		name,
		categories(id, name)
	`);

	return {
		items: data ?? []
	};
}
