import { createClient } from '@sanity/client'
import { useState, useEffect } from 'react'

const PROJECT_ID = import.meta.env.VITE_SANITY_PROJECT_ID || ''
const DATASET   = import.meta.env.VITE_SANITY_DATASET   || 'production'

export const SANITY_CONFIGURED = Boolean(PROJECT_ID)

// createClient throws on an empty projectId, which would blank the whole site
// when env vars are missing at build time — only create it when configured.
export const client = SANITY_CONFIGURED
  ? createClient({
      projectId: PROJECT_ID,
      dataset:   DATASET,
      useCdn:    true,
      apiVersion: '2024-06-01',
      // Default is 5 retries with backoff — on an origin missing from the Sanity
      // CORS allowlist that turns into a multi-second failed-request storm that
      // blocks page quiescence. One retry, then fall back to local content.
      maxRetries: 1,
    })
  : null

/**
 * Append Sanity CDN resize params to a Sanity image URL.
 * Local/relative paths are returned unchanged so fallback images still work.
 */
export function imgUrl(url, w, h) {
  if (!url || !url.startsWith('https://cdn.sanity.io')) return url
  const parts = [`w=${w}`, 'auto=format']
  if (h) parts.push(`h=${h}`, 'fit=crop')
  return `${url}?${parts.join('&')}`
}

/**
 * Fetches a GROQ query from Sanity once. Falls back to `fallback` when
 * Sanity is not yet configured or the result is empty.
 */
export function useSanity(query, fallback = null) {
  const [data, setData]       = useState(fallback)
  const [loading, setLoading] = useState(SANITY_CONFIGURED)

  useEffect(() => {
    if (!SANITY_CONFIGURED) return
    let cancelled = false
    client.fetch(query)
      .then((result) => {
        if (cancelled) return
        if (Array.isArray(result) && result.length > 0) setData(result)
        setLoading(false)
      })
      .catch(() => { if (!cancelled) setLoading(false) })
    return () => { cancelled = true }
  }, [query])

  return { data, loading }
}
