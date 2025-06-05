import fs from 'fs';
import path from 'path';

const dataPath = path.join(process.cwd(), '1.json');

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      if (fs.existsSync(dataPath)) {
        const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
        res.status(200).json(data);
      } else {
        res.status(200).json({ users: [], leaderboard: [] });
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to load data' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}