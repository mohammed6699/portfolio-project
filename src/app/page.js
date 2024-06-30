// src/app/page.js
import { promises as fs } from 'fs';
import path from 'path';

async function Home() {
  const filePath = path.join(process.cwd(), 'public', 'index.html');
  const htmlContent = await fs.readFile(filePath, 'utf-8');

  return (
    <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
  );
}

export default Home;
