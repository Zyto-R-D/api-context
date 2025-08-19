/**
 * API Context Types for Zyto
 * Shared between API and Web client
 */

export type RunRequest = {
  /** Prompt provided by user */
  prompt: string
}

export type PlanStep = {
  /** Which tool to use */
  tool: 'zapier' | 'n8n'
  /** Action name, e.g. "create_task" */
  action: string
  /** Input payload (depends on tool/action) */
  input: unknown
}

export type RunResponse = {
  plan: PlanStep[]
  steps: Array<Record<string, unknown>>
}

/**
 * Example: create a "hello world" response
 */
export function exampleResponse(prompt: string): RunResponse {
  return {
    plan: [{ tool: 'zapier', action: 'hello', input: { prompt } }],
    steps: [{ result: `hello ${prompt}` }]
  }
}
