// API Response Types
export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// Error Types
export interface AppError {
  code: string;
  message: string;
  details?: unknown;
  timestamp: Date;
}
