import { createServerSupabaseClient } from "@/lib/supabase-server";
import { NextResponse } from "next/server";
import { readFile } from "fs/promises";
import { join } from "path";

const ALLOWED_FILES: Record<string, string> = {
  "grafo": "grafo-interactivo-v8.html",
  "agentes": "ecosistema-agentes-animacion.html",
  "simulador": "simulador-interactivo.html",
  "marco-teorico": "marco-teorico.html",
  "dictamen-experto": "dictamen-experto.html",
};

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ file: string }> }
) {
  // Verify authentication
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
    const filePath = join(process.cwd(), "fuente-definitiva", filename);
    const content = await readFile(filePath, "utf-8");

    return new NextResponse(content, {
      headers: {
        "Content-Type": "text/html; charset=utf-8",
        "X-Frame-Options": "SAMEORIGIN",
        "Cache-Control": "private, no-cache, no-store, must-revalidate",
        "X-Content-Type-Options": "nosniff",
      },
    });
  } catch {
    return NextResponse.json({ error: "Error al leer archivo" }, { status: 500 });
  }
}
