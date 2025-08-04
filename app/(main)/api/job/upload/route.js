import { writeFile } from 'fs/promises';
import path from 'path';

export async function POST(req) {
  try {
    const formData = await req.formData();
    const file = formData.get('file');

    if (!file) {
      return new Response(JSON.stringify({ success: false, error: 'No file uploaded' }), { status: 400 });
    }

    // ✅ Check file size (e.g., max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      return new Response(JSON.stringify({ success: false, error: 'File too large (max 5MB)' }), { status: 400 });
    }

    // ✅ Check file type by MIME
    const allowedTypes = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'text/csv',
      'application/csv',
      'application/vnd.ms-excel',
      'text/plain' // some browsers send csv as plain text
    ];
    if (!allowedTypes.includes(file.type)) {
      return new Response(JSON.stringify({ success: false, error: 'Invalid file type' }), { status: 400 });
    }

    // ✅ Save file
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const fileName = `${Date.now()}-${file.name}`;
    const uploadDir = path.join(process.cwd(), 'public', 'uploads');
    const filePath = path.join(uploadDir, fileName);

    await writeFile(filePath, buffer);

    const fileUrl = `/uploads/${fileName}`;

    return new Response(JSON.stringify({ success: true, url: fileUrl }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
  }
}
