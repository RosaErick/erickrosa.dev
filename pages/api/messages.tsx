import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth/next";
import { supabase } from "../../db";
import { authOptions } from "./auth/[...nextauth]";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const { data, error } = await supabase
      .from("messages")
      .select(
        `
        content,
        created_at,
        user_email,
        profiles (username, image_url)
      `
      )
      .order("created_at", { ascending: false });

    if (error) return res.status(500).json({ error: error.message });
    return res.status(200).json(data);
  }

  if (req.method === "POST") {
    const session = await getServerSession(req, res, authOptions);
    if (!session?.user?.email) {
      return res.status(401).json({ error: "You must be signed in to post." });
    }

    const content = typeof req.body?.content === "string" ? req.body.content.trim() : "";
    if (!content) {
      return res.status(400).json({ error: "Message content is required." });
    }

    const { user } = session;

    // Keep the profile in sync with the authenticated identity (never trust the client).
    const { error: profileError } = await supabase.from("profiles").upsert(
      { email: user.email, username: user.name, image_url: user.image },
      { onConflict: "email" }
    );
    if (profileError) return res.status(500).json({ error: profileError.message });

    const { error } = await supabase
      .from("messages")
      .insert({ content, user_email: user.email });
    if (error) return res.status(500).json({ error: error.message });

    return res.status(201).json({ ok: true });
  }

  res.setHeader("Allow", ["GET", "POST"]);
  return res.status(405).json({ error: `Method ${req.method} not allowed` });
}
