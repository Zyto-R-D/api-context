export interface RunRequest {
  prompt: string;
  inputs?: Record<string, unknown>;
}

export interface PlanStep {
  id: string;
  kind: "zapier" | "n8n" | "http" | "code";
  params: Record<string, unknown>;
}

export interface RunResponse {
  runId: string;
  status: "queued" | "running" | "completed" | "failed";
  output?: unknown;
  error?: string;
}
