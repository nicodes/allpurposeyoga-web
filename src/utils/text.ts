export function markdownResponse(body: string) {
  return new Response(body.trimStart(), {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}

export function textResponse(body: string, type: string) {
  return new Response(body.trimStart(), {
    headers: {
      'Content-Type': `${type}; charset=utf-8`,
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
