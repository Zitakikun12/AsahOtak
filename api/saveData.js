export default async (req, res) => {
  const data = req.body.data;
  // Simpan ke GitHub
  await fetch('https://api.github.com/repos/user/repo/contents/1.json', {
    method: 'PUT',
    headers: {
      'Authorization': `token ${process.env.GITHUB_TOKEN}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      message: "Update game data",
      content: Buffer.from(JSON.stringify(data)).toString('base64'),
      sha: "" // Kosongkan jika file baru
    })
  });
  res.status(200).send('OK');
};