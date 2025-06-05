import fs from 'fs';
import path from 'path';

const dataPath = path.join(process.cwd(), '1.json');

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { data } = req.body;
      fs.writeFileSync(dataPath, JSON.stringify(data));
      res.status(200).json({ success: true });
    } catch (error) {
      res.status(500).json({ error: 'Failed to save data' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}