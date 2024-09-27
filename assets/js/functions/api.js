export async function fetchJSON(url, options = {}) {
  //  modifier le header en creant
  const headers = { Accept: 'application/json', ...options.headers };
  const r = await fetch(url, { ...options, headers });
  if (r.ok) {
    return r.json();
  }
  throw new Error('Erreur serveur', { cause: r });
}
