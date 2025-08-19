import type { FastifyReply, FastifyRequest } from 'fastify'

/** Wraps a handler to measure execution time */
export function withTiming<T extends (...args: any[]) => Promise<any>>(fn: T): T {
  return (async (...args: any[]) => {
    const start = Date.now()
    const result = await fn(...args)
    const ms = Date.now() - start
    console.log(`[timing] ${fn.name} took ${ms}ms`)
    return result
  }) as T
}

/** Ensure reply sends JSON safely */
export async function safeJson(_req: FastifyRequest, reply: FastifyReply, payload: any) {
  try {
    return JSON.stringify(payload)
  } catch (e) {
    reply.status(500)
    return JSON.stringify({ error: 'Serialization failed' })
  }
}
