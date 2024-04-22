import { supabase } from "../../db";


export default async function handler(req, res) {
  if (req.method === 'POST') {
    // Handle message creation
    const { content, user_email } = req.body;
    const { data, error } = await supabase
      .from('messages')
      .insert([{ content, user_email }]);

    if (error) return res.status(500).json({ error: error.message });
    return res.status(200).json(data);
  } else if (req.method === 'GET') {
    // Handle fetching messages
    const { data, error } = await supabase
      .from('messages')
      .select(`
        content,
        created_at,
        user_email,
        profiles (username, image_url)
      `)
      .order('created_at', { ascending: false });

    if (error) return res.status(500).json({ error: error.message });
    return res.status(200).json(data);
  }
}
