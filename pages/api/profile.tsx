import { supabase } from "../../db";


export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, username, image_url } = req.body;
    const { data, error } = await supabase.from('profiles').upsert({
      email, username, image_url
    }, {
      onConflict: 'email'
    });

    if (error) return res.status(500).json({ error: error.message });
    return res.status(200).json(data);
  }
}
