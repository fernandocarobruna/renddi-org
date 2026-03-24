import { createServerSupabaseClient } from "@/lib/supabase-server";
import { NextRequest, NextResponse } from "next/server";
import { readFileSync } from "fs";
import { join } from "path";

const ALLOWED_FILES: Record<string, string> = {
  "grafo-v8.html": "grafo-v8.html",
  "simulador-v8.html": "simulador-v8.html",
  "ecosistema-animacion.html": "ecosistema-animacion.html",
};

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ file: string }> }
) {
  // Auth check
  const supabase = await createServerSupabaseClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "No autorizado" }, { status: 401 });
  }

  const { file } = await params;
  const filename = ALLOWED_FILES[file];

  if (!filename) {
    return NextResponse.json({ error: "Archivo no encontrado" }, { status: 404 });
  }

  try {
    const filePath = join(process.cwd(), "private-assets", filename);
    const content = readFileSync(filePath, "utf-8");

    return new NextResponse(content, {
      headers: {
        "Content-Type": "text/html; charset=utf-8",
        "X-Frame-Options": "SAMEORIGIN",
        "Cache-Control": "private, no-cache",
      },
    });
  } catch {
    return NextResponse.json({ error: "Error interno" }, { status: 500 });
  }
}
