import { createServerSupabaseClient } from "@/lib/supabase-server";
import { NextResponse } from "next/server";
import { readFile } from "fs/promises";
import { join } from "path";

const ALLOWED_FILES: Record<string, { filename: string; contentType: string }> = {
  "grafo": { filename: "grafo-interactivo-v8.html", contentType: "text/html; charset=utf-8" },
  "agentes": { filename: "ecosistema-agentes-animacion.html", contentType: "text/html; charset=utf-8" },
  "simulador": { filename: "simulador-interactivo.html", contentType: "text/html; charset=utf-8" },
  "marco-teorico": { filename: "marco-teorico.html", contentType: "text/html; charset=utf-8" },
  "dictamen-experto": { filename: "dictamen-experto.html", contentType: "text/html; charset=utf-8" },
  "paper-validacion": { filename: "Paper-Validacion-Matematica-Grafo-SENSEI.pdf", contentType: "application/pdf" },
  "addenda-paper": { filename: "addenda-paper-validacion.html", contentType: "text/html; charset=utf-8" },
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
  const entry = ALLOWED_FILES[file];

  if (!entry) {
    return NextResponse.json({ error: "Archivo no encontrado" }, { status: 404 });
  }

  try {
    const filePath = join(process.cwd(), "fuente-definitiva", entry.filename);
    const content = await readFile(filePath);

    return new NextResponse(content, {
      headers: {
        "Content-Type": entry.contentType,
        "X-Frame-Options": "SAMEORIGIN",
        "Cache-Control": "private, no-cache, no-store, must-revalidate",
        "X-Content-Type-Options": "nosniff",
      },
    });
  } catch {
    return NextResponse.json({ error: "Error al leer archivo" }, { status: 500 });
  }
}
